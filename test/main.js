"use strict";
var index_1 = require('../index');
var fs = require('fs');
var chai = require("chai");
var expect = chai.expect;
var watchConf = {
    configFile: '/home/dario/watchdog.conf',
    pings: [
        '192.168.1.1',
        '192.168.1.2'
    ],
    files: [
        {
            name: '/tmp/nodeapp.change',
            change: 1000
        },
        {
            name: '/root/.forever/systarter.log',
            change: 1000
        }
    ],
    maxLoad1: 25,
    pidFile: '/root/.forever/pids/systarter.pid'
};
var Wdog;
var watchdogconf;
before(function () {
    Wdog = new index_1.default(watchConf);
    watchdogconf = fs.readFileSync(watchConf.configFile, 'utf-8');
    console.log(watchdogconf);
});
describe("verify configuration", function () {
    it("YYYYYY", function (done) {
        done();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQXFCLFVBQVUsQ0FBQyxDQUFBO0FBRWhDLElBQVksRUFBRSxXQUFNLElBQUksQ0FBQyxDQUFBO0FBR3pCLElBQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFJM0IsSUFBTSxTQUFTLEdBQUc7SUFDZCxVQUFVLEVBQUUsMkJBQTJCO0lBQ3ZDLEtBQUssRUFBRTtRQUNILGFBQWE7UUFDYixhQUFhO0tBQ2hCO0lBQ0QsS0FBSyxFQUFFO1FBQ0g7WUFDSSxJQUFJLEVBQUUscUJBQXFCO1lBQzNCLE1BQU0sRUFBRSxJQUFJO1NBQ2Y7UUFDRDtZQUNJLElBQUksRUFBRSw4QkFBOEI7WUFDcEMsTUFBTSxFQUFFLElBQUk7U0FDZjtLQUNKO0lBQ0QsUUFBUSxFQUFFLEVBQUU7SUFDWixPQUFPLEVBQUMsbUNBQW1DO0NBQzlDLENBQUE7QUFFRCxJQUFJLElBQWMsQ0FBQztBQUNuQixJQUFJLFlBQVksQ0FBQztBQUVqQixNQUFNLENBQUM7SUFFSCxJQUFJLEdBQUcsSUFBSSxlQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUIsWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzdCLENBQUMsQ0FBQyxDQUFBO0FBR0YsUUFBUSxDQUFDLHNCQUFzQixFQUFFO0lBRTdCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxJQUFJO1FBQ2QsSUFBSSxFQUFFLENBQUE7SUFDVixDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6InRlc3QvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3YXRjaERvZyBmcm9tICcuLi9pbmRleCc7XG5cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuXG5pbXBvcnQgY2hhaSA9IHJlcXVpcmUoXCJjaGFpXCIpO1xuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cblxuXG5jb25zdCB3YXRjaENvbmYgPSB7XG4gICAgY29uZmlnRmlsZTogJy9ob21lL2RhcmlvL3dhdGNoZG9nLmNvbmYnLFxuICAgIHBpbmdzOiBbXG4gICAgICAgICcxOTIuMTY4LjEuMScsXG4gICAgICAgICcxOTIuMTY4LjEuMidcbiAgICBdLFxuICAgIGZpbGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICcvdG1wL25vZGVhcHAuY2hhbmdlJyxcbiAgICAgICAgICAgIGNoYW5nZTogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnL3Jvb3QvLmZvcmV2ZXIvc3lzdGFydGVyLmxvZycsXG4gICAgICAgICAgICBjaGFuZ2U6IDEwMDBcbiAgICAgICAgfVxuICAgIF0sXG4gICAgbWF4TG9hZDE6IDI1LFxuICAgIHBpZEZpbGU6Jy9yb290Ly5mb3JldmVyL3BpZHMvc3lzdGFydGVyLnBpZCdcbn1cblxubGV0IFdkb2c6IHdhdGNoRG9nO1xubGV0IHdhdGNoZG9nY29uZjtcblxuYmVmb3JlKCgpID0+IHtcblxuICAgIFdkb2cgPSBuZXcgd2F0Y2hEb2cod2F0Y2hDb25mKVxuICAgIHdhdGNoZG9nY29uZiA9IGZzLnJlYWRGaWxlU3luYyh3YXRjaENvbmYuY29uZmlnRmlsZSwgJ3V0Zi04JylcbiAgICBjb25zb2xlLmxvZyh3YXRjaGRvZ2NvbmYpXG59KVxuXG5cbmRlc2NyaWJlKFwidmVyaWZ5IGNvbmZpZ3VyYXRpb25cIiwgKCkgPT4ge1xuXG4gICAgaXQoXCJZWVlZWVlcIiwgKGRvbmUpID0+IHtcbiAgICAgICAgZG9uZSgpXG4gICAgfSlcblxufSkiXX0=
