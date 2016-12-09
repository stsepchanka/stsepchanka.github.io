import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

    cities: Observable<City[]>;
    centerCoord: CityCoordinates;
    firstLetter: string = '';

    constructor (
        private citiesService: CitiesService,
        private appService: AppService
    ) {}

    ngOnInit() { 
        this.appService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            //this.getCitiesWeather();
            this.cities = this.citiesService.getCitiesWeather(this.centerCoord); 
        })
    }

    isNewLetter(letter: string): boolean {
        let isDifferent: boolean = this.firstLetter !== letter;
        this.firstLetter = letter;
        return isDifferent;
    }

    // getCitiesWeather() {
    //     this.citiesService.getCitiesWeather(this.centerCoord)
    //         .subscribe(cities => {
    //             this.cities = cities;
    //             this.cities.sort((city1, city2) => {
    //                 return city1.name > city2.name ? 1 : (city1.name < city2.name ? -1 : 0);
    //             });
    //         });
    // }
}
