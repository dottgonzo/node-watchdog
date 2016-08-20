import * as Promise from 'bluebird';


import * as child_process from 'child_process';


import SysService from 'systemd-services';


const fork = child_process.fork;

const ns = new SysService()


interface IStatus {
    active: boolean;
    active_status: string;
}

export default class watchDog {

    constructor() {

    }

}
