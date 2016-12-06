import { Component, OnInit } from '@angular/core';

import { CitiesService } from './cities.service';
import { AppService } from './../app.service';

import { City } from './../Entity/city';
import { CityCoordinates } from './../Entity/cityCoordinates';

@Component({
    selector: 'cities',
    providers: [CitiesService],
    templateUrl: './app/Cities/cities.component.html',
    styleUrls: ['./app/Cities/cities.component.css']
})

export class CitiesComponent implements OnInit {

    cities: City[];
    centerCoord: CityCoordinates;

    constructor (
        private citiesService: CitiesService,
        private appService: AppService
    ) {}

    ngOnInit() { 
        this.appService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            this.getCitiesWeather(); 
        })
    }

    getCitiesWeather() {
        this.citiesService.getCitiesWeather(this.centerCoord)
            .subscribe(cities => 
                this.cities = cities
            );
    }
}
