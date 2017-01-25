import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityModule } from './../City/city.module';

import { CitiesAsyncComponent } from './citiesAsync.component';

@NgModule({
  imports: [
    CommonModule,
    CityModule
  ],
  declarations: [
    CitiesAsyncComponent,
  ],
  exports: [
    CitiesAsyncComponent
  ]
})

export class CitiesAsyncModule {
}
