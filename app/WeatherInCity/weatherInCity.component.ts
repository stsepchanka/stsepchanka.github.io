import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CitiesService } from './../Cities/cities.service';

import { City } from './../Entity/city';
import { CityCoordinates } from './../Entity/cityCoordinates';

@Component({
    selector: 'weather-in-city',
    providers: [CitiesService],
    templateUrl: './app/WeatherInCity/weatherInCity.component.html',
    styleUrls: ['./app/WeatherInCity/weatherInCity.component.css']
})

export class WeatherInCityComponent {

    constructor (
        private citiesService: CitiesService
    ) {}
}
