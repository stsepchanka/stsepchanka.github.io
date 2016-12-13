import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from './../../Services/weather.service';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';

@Component({
    selector: 'weather-in-city',
    templateUrl: './app/Components/WeatherInCity/weatherInCity.component.html',
    styleUrls: ['./app/Components/WeatherInCity/weatherInCity.component.css']
})

export class WeatherInCityComponent {

    constructor (
        private weatherService: WeatherService
    ) {}
}
