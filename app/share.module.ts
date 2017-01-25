import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityComponent } from './Components/City/city.component';
import { WindComponent } from './Components/Wind/wind.component';
import { WeatherIconComponent } from './Components/WeatherIcon/weatherIcon.component';

import {Kelvin2celsiusPipe } from './Pipes/kelvin2celsius.pipe';
import {TemperaturePipe } from './Pipes/temperature.pipe';

import { TempcolorDirective } from './Directives/tempcolor.directive';
import { RotateDirective } from './Directives/rotate.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityComponent,
    WindComponent,
    WeatherIconComponent,
    Kelvin2celsiusPipe,
    TemperaturePipe,
    TempcolorDirective,
    RotateDirective
  ],
  exports: [
    CommonModule,
    CityComponent,
    WindComponent,
    WeatherIconComponent,
    Kelvin2celsiusPipe,
    TemperaturePipe,
    TempcolorDirective,
    RotateDirective
  ]
})

export class ShareModule {
}