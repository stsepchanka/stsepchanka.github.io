import { NgModule }      from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDatH1l956GXlJ4vu1EfVfJSGoKni2-Lxk'
    })
  ],
  declarations: [
    MapComponent,
  ],
  exports: [ 
    MapComponent 
  ]
})

export class MapModule {
}
