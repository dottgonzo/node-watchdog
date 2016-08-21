import watchDog from '../index';

import * as fs from 'fs';


import chai = require("chai");
const expect = chai.expect;



const watchConf = {
    configFile: '/home/dario/watchdog.conf',
    pings: [
        '192.168.1.1',
        '192.168.1.2'
    ],
    maxLoad1: 25
}

let Wdog: watchDog;
let watchdogconf;

before(() => {

    Wdog = new watchDog(watchConf)
    watchdogconf = fs.readFileSync(watchConf.configFile, 'utf-8')
    console.log(watchdogconf)
})


describe("verify configuration", () => {

    it("YYYYYY", (done) => {
        done()
    })

})