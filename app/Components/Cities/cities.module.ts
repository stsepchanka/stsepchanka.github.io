import { NgModule }      from '@angular/core';

import { ShareModule } from './../../share.module';

import { CitiesComponent } from './cities.component';

@NgModule({
  imports: [
    ShareModule
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
