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
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: CitiesComponent },
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
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
