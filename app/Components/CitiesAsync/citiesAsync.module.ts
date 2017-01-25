import { NgModule }      from '@angular/core';

import { ShareModule } from './../../share.module';

import { CitiesAsyncComponent } from './citiesAsync.component';

@NgModule({
  imports: [
    ShareModule
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
