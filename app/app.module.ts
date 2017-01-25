import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';

import { CitiesModule } from './Components/Cities/cities.module';
import { CitiesAsyncModule } from './Components/CitiesAsync/citiesAsync.module';
import { MapModule } from './Components/Map/map.module';
import { WeatherInCityModule } from './Components/WeatherInCity/weatherInCity.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Components/PageNotFound/pagenotfound.component';
import { CitiesComponent } from './Components/Cities/cities.component';
import { CitiesAsyncComponent } from './Components/CitiesAsync/citiesAsync.component';
import { MapComponent } from './Components/Map/map.component';
import { WeatherInCityComponent } from './Components/WeatherInCity/weatherInCity.component';

import { LocationService } from './Services/location.service';
import { WeatherService } from './Services/weather.service';
import { LoggerService } from './Services/logger.service';

const appRoutes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'cities-async', component: CitiesAsyncComponent },
  { path: 'map', component: MapComponent },
  { path: 'weather-in-city', component: WeatherInCityComponent },
  { path: '', component: CitiesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CitiesModule,
    CitiesAsyncModule,
    MapModule,
    WeatherInCityModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    LocationService,
    WeatherService,
    LoggerService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}