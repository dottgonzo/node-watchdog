import * as Promise from 'bluebird';


import * as fs from 'fs';


import SysService from 'systemd-services';




const ns = new SysService()

interface IWatchdogConf {
    hardware?: string;
    pings?: string[];
    interfaces?: string[];
    files?: {
        name: string;
        change: number
    }[];
    maxLoad1?: number;
    maxLoad5?: number;
    maxLoad15?: number;
    minMemory?: number;
    alloctableMemory?: number;
    configFile?: string;
    pidFile?: string;
    repairBinary?:string;
}

interface IStatus {
    active: boolean;
    active_status: string;
}

export default class watchDog {
    configFile: string;
    constructor(o?: IWatchdogConf) {
        if (o) this.configure(o)
    }

    configure(o: IWatchdogConf) {

        let _this = this;

        if (!o) {
            throw Error('no configuration provided for watchdog')
        } else {

            if (!o.configFile) o.configFile = '/etc/watchdog.conf'
            _this.configFile = o.configFile;

            let conf = 'realtime = yes\n';
            conf += 'priority = 1\n';

            if (o.pings) {
                for (let i = 0; i < o.pings.length; i++) {
                    conf += 'ping = ' + o.pings[i] + '\n'
                }
            }
            if (o.files) {
                for (let i = 0; i < o.files.length; i++) {
                    if (o.files[i].name && o.files[i].change) {
                        conf += 'file = ' + o.files[i].name + '\n'
                        conf += 'change = ' + o.files[i].change + '\n'
                    } else {
                        throw Error('you must specify filename and change timer')
                    }
                }

            }



            if (o.pidFile) {
                conf += 'pidfile = ' + o.pidFile + '\n'
            }



            if (o.repairBinary) {
                conf += 'repair-binary = ' + o.repairBinary + '\n'
            }

            fs.writeFileSync(_this.configFile, conf, { encoding: 'utf-8' })


        }



    }

    start() {
        const _this = this;
        return new Promise<boolean>((resolve, reject) => {
            ns.start('watchdog').then((a) => {
                resolve(a)
            }).catch((err) => {
                reject(err)
            })

        })

    }


    stop() {
        const _this = this;
        return new Promise<boolean>((resolve, reject) => {
            ns.stop('watchdog').then((a) => {
                resolve(a)
            }).catch((err) => {
                reject(err)
            })
        })

    }

    restart() {
        const _this = this;
        return new Promise<boolean>((resolve, reject) => {
            _this.stop().then(() => {
                _this.start().then((a) => {
                    resolve(a)
                }).catch((err) => {
                    reject(err)
                })
            }).catch((err) => {
                _this.start().then((a) => {
                    resolve(a)
                }).catch((err) => {
                    reject(err)
                })
            })

        })

    }


}
