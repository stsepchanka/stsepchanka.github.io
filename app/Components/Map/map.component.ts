import { Component } from '@angular/core';

import { LocationService } from './../../Services/location.service';
import { WeatherService } from './../../Services/weather.service';
import { LoggerService } from './../../Services/logger.service';

import { CityCoordinates } from './../../Entities/cityCoordinates';
import { StatusMessage } from './../../Enum/statusMessage';

@Component({
    selector: 'map',
    templateUrl: './app/Components/Map/map.component.html',
    styleUrls: ['./app/Components/Map/map.component.css']
})

export class MapComponent {
    private componentName: string = 'Map component';
    private centerCoord: CityCoordinates = new CityCoordinates(0, 0);

    constructor(
        private locationService: LocationService,
        private weatherService: WeatherService,
        private loggerService: LoggerService
    ) {
        locationService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            this.loggerService.log(this.componentName, 'Get geo coordinates', StatusMessage.Info);
        })
    }
}
