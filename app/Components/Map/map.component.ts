import { Component } from '@angular/core';

import { WeatherService } from './../../Services/weather.service';
import { CityCoordinates } from './../../Entities/cityCoordinates';

@Component({
    selector: 'map',
    templateUrl: './app/Components/Map/map.component.html',
    styleUrls: ['./app/Components/Map/map.component.css']
})

export class MapComponent {
     centerCoord: CityCoordinates = new CityCoordinates(0, 0);

     constructor(private weatherService: WeatherService) {
         weatherService.getCenterCoord().subscribe(coord => {
             this.centerCoord = coord;
         })
     }
}
