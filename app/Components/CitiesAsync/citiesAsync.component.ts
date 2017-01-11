import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from './../../Services/weather.service';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';

@Component({
    selector: 'cities-async',
    templateUrl: './app/Components/CitiesAsync/citiesAsync.component.html',
    styleUrls: ['./app/Components/CitiesAsync/citiesAsync.component.css']
})

export class CitiesAsyncComponent implements OnInit {

    $cities: Observable<City[]>;
    centerCoord: CityCoordinates;
    firstLetter: string = '';
    timeRequest:Date;

    constructor (
        private weatherService: WeatherService
    ) {}

    ngOnInit() { 
        this.weatherService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            this.$cities = this.weatherService.getCitiesWeather(this.centerCoord);
            this.weatherService.getCitiesWeather(this.centerCoord).subscribe(() => {
                this.timeRequest = this.weatherService.timeLastRequest; 
            })
        })
    }

    isNewLetter(letter: string): boolean {
        let isDifferent: boolean = this.firstLetter !== letter;
        this.firstLetter = letter;
        return isDifferent;
    }
}
