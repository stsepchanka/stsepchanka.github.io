import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityModule } from './../City/city.module';

import { CitiesComponent } from './cities.component';

@NgModule({
  imports: [
    CommonModule,
    CityModule
  ],
  declarations: [
    CitiesComponent,
  ],
  exports: [
    CitiesComponent
  ]
})

export class CitiesModule {
}
