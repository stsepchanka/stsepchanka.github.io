import {Component, OnInit} from '@angular/core';

import {CitiesService} from './cities.service';
import {City} from './../Entity/city';
import {CityCoordinates} from './../Entity/cityCoordinates';

@Component({
    selector: 'cities',
    providers: [CitiesService],
    templateUrl: './app/Cities/cities.component.html',
    styleUrls: ['./app/Cities/cities.component.css']
})

export class CitiesComponent implements OnInit {

    cities: City[];
    mogilevCoord: CityCoordinates = {
        lat: 53.913891,
        lon: 30.33639
    };

    constructor (private citiesService: CitiesService) {}

    ngOnInit() { 
        this.getCitiesWeather(); 
    }

    getCitiesWeather() {
        this.citiesService.getCitiesWeather(this.mogilevCoord)
            .subscribe(cities => 
                this.cities = cities
            );
    }
}
