/// <reference path="../typings/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts"/>
/// <reference path="../node_modules/rxjs/rx.d.ts"/>  

import { Component, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';

import { WeatherService } from './Services/weather.service';

@Component({
    selector: 'my-app',
    providers: [WeatherService],
    templateUrl: './app/app.component.html',
    styleUrls:  ['./app/app.component.css']
})

export class AppComponent implements OnInit {

    timeStartTask: Date;
    timeGetStable: number = 0; 

    constructor(private zone: NgZone, private changeDetectorRef: ChangeDetectorRef) {
        this.timeStartTask = new Date();
    }

    ngOnInit () {
        this.zone.onUnstable.subscribe(() => { 
            this.timeStartTask = new Date()
        });
        this.zone.onStable.subscribe(() => {
            this.timeGetStable = (new Date()).getTime() - this.timeStartTask.getTime()
        });
    }
}
