import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';

@Component({
    selector: 'weather-in-city',
    templateUrl: './app/Components/WeatherInCity/weatherInCity.component.html',
    styleUrls: ['./app/Components/WeatherInCity/weatherInCity.component.css']
})

export class WeatherInCityComponent {

    cityName: string;

    refreshName(cityName: string):void {
        if (cityName) {
            this.cityName = cityName;
        }
    } 
}
