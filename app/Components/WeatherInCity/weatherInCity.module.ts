import { NgModule }      from '@angular/core';

import { WeatherInCityComponent } from './weatherInCity.component';

import {WeatherPipe } from './../../Pipes/weather.pipe';

@NgModule({
  declarations: [
    WeatherInCityComponent,
    WeatherPipe,
  ],
  exports: [ 
    WeatherInCityComponent 
  ]
})

export class WeatherInCityModule {
}
