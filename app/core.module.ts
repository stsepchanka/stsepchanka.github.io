import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './Components/PageNotFound/pagenotfound.component';

import { LocationService } from './Services/location.service';
import { WeatherService } from './Services/weather.service';
import { LoggerService } from './Services/logger.service';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    LocationService,
    WeatherService,
    LoggerService
  ]
})

export class CoreModule {
}