import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from './../../Services/logger.service';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';
import { StatusMessage } from './../../Enum/statusMessage';

@Component({
    selector: 'weather-in-city',
    templateUrl: './app/Components/WeatherInCity/weatherInCity.component.html',
    styleUrls: ['./app/Components/WeatherInCity/weatherInCity.component.css']
})

export class WeatherInCityComponent {

    private componentName: string = 'WeatherInCity component';
    private cityName: string;

    constructor(
        private loggerService: LoggerService
    ){}

    refreshName(cityName: string):void {
        if (cityName) {
            this.cityName = cityName;
            this.loggerService.log(this.componentName, 'Click on "Get weather" button', StatusMessage.Info);
        }
    } 
}
