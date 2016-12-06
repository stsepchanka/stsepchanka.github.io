import { Component } from '@angular/core';

import { AppService } from './../app.service';
import { CityCoordinates } from './../Entity/cityCoordinates';

@Component({
    selector: 'map',
    templateUrl: './app/Map/map.component.html',
    styleUrls: ['./app/Map/map.component.css']
})

export class MapComponent {
     centerCoord: CityCoordinates = new CityCoordinates(0, 0);

     constructor(private appService: AppService) {
         appService.getCenterCoord().subscribe(coord => {
             this.centerCoord = coord;
         })
     }
}
