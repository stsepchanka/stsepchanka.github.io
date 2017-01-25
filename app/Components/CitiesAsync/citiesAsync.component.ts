import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LocationService } from './../../Services/location.service';
import { WeatherService } from './../../Services/weather.service';
import { LoggerService } from './../../Services/logger.service';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';
import { StatusMessage } from './../../Enum/statusMessage';

@Component({
    selector: 'cities-async',
    templateUrl: './app/Components/CitiesAsync/citiesAsync.component.html',
    styleUrls: ['./app/Components/CitiesAsync/citiesAsync.component.css']
})

export class CitiesAsyncComponent implements OnInit {
    private componentName: string = 'CitiesAsync component';
    private $cities: Observable<City[]>;
    private centerCoord: CityCoordinates;
    private firstLetter: string = '';
    private timeRequest: Date;

    constructor (
        private locationService: LocationService,
        private weatherService: WeatherService,
        private loggerService: LoggerService
    ) {}

    ngOnInit() { 
        this.locationService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            this.loggerService.log(this.componentName, `Get geo coordinates`, StatusMessage.Info);
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
