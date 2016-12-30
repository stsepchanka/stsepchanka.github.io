/// <reference path="../typings/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts"/>
/// <reference path="../node_modules/rxjs/rx.d.ts"/>  

import { Component } from '@angular/core';

import { WeatherService } from './Services/weather.service';

@Component({
    selector: 'my-app',
    providers: [WeatherService],
    templateUrl: './app/app.component.html',
    styleUrls:  ['./app/app.component.css']
})

export class AppComponent {

  //  timeRequest:Date;

  //  constructor(private weatherService: WeatherService){
  //      this.timeRequest = this.weatherService.timeLastRequest;
  //  }

}
