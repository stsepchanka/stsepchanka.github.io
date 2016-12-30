import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { CitiesComponent } from './Components/Cities/cities.component';
import { CityComponent } from './Components/City/city.component';
import { MapComponent } from './Components/Map/map.component';
import { WeatherInCityComponent } from './Components/WeatherInCity/weatherInCity.component';
import { PageNotFoundComponent } from './Components/PageNotFound/pagenotfound.component';

import {Kelvin2celsiusPipe } from './Pipes/kelvin2celsius.pipe';
import {TemperaturePipe } from './Pipes/temperature.pipe';
import {WeatherPipe } from './Pipes/weather.pipe';

const appRoutes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'map', component: MapComponent },
  { path: 'weather-in-city', component: WeatherInCityComponent },
  { path: '', component: WeatherInCityComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDatH1l956GXlJ4vu1EfVfJSGoKni2-Lxk'
    })
  ],
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    MapComponent,
    WeatherInCityComponent,
    PageNotFoundComponent,
    Kelvin2celsiusPipe,
    TemperaturePipe,
    WeatherPipe
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
