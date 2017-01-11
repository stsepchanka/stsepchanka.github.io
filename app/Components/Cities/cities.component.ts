import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from './../../Services/weather.service';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';

@Component({
    selector: 'cities',
    templateUrl: './app/Components/Cities/cities.component.html',
    styleUrls: ['./app/Components/Cities/cities.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CitiesComponent implements OnInit, OnDestroy {

    cities: City[];
    centerCoord: CityCoordinates;
    firstLetter: string = '';
    timeRequest:Date;
    favoriteId: number = -1;
    timerRefreshId:NodeJS.Timer;
    isContinueRefresh:boolean = true;

    constructor (
        private weatherService: WeatherService,
        private changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() { 
        this.weatherService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            this.weatherService.getCitiesWeather(this.centerCoord).subscribe((cities) => {
                this.cities = cities;
                this.timeRequest = this.weatherService.timeLastRequest;
                this.changeDetector.markForCheck();

                //4. Add real-time updates (every 5 sec) for weather via detectChanges() method
                let self = this;
                self.timerRefreshId = setTimeout(function tick() {
                    self.weatherService.getCitiesWeatherByIds(self.cities).subscribe(cities => {
                        if (self.isContinueRefresh) {
                            cities.forEach(city => {
                                let index = self.cities.findIndex(c => c.id === city.id);
                                if (index > -1) {
                                    self.cities[index] = Object.assign({}, city);
                                }
                            })
                            self.timeRequest = self.weatherService.timeLastRequestIds;
                            self.timerRefreshId = setTimeout(tick, 5000);
                            self.changeDetector.markForCheck();
                        }  
                    })
                }, 5000);
            })
        })
    }

    isNewLetter(letter: string): boolean {
        let isDifferent: boolean = this.firstLetter !== letter;
        this.firstLetter = letter;
        return isDifferent;
    }

    onFavorite(isFavorite:boolean, index:number): void {
        if (isFavorite) {
            this.favoriteId = this.cities[index].id;
        } else {
            this.favoriteId = -1;
        }
    }

    onRemove(name:string, index: number):void {
        if (this.cities[index].id === this.favoriteId) {
            this.favoriteId = -1;
        }
        this.cities.splice(index, 1);
    }

    addCity(name:string):void {
        if (name) {
            name = name.trim().toUpperCase();
            this.weatherService.getCityWeatherByName(name, '').subscribe(city => {
                let currentIndex = this.cities.findIndex(c => c.name === city.name);
                if (currentIndex < 0) {
                    currentIndex = this.cities.findIndex(c => c.name > city.name);
                    if (currentIndex < 0) {
                        this.cities.push(city);
                    } else {
                        this.cities.splice(currentIndex, 0, city);
                    }
                    this.changeDetector.markForCheck();
                }
            })            
        }
    }

    ngOnDestroy() {
        clearTimeout(this.timerRefreshId);
        this.isContinueRefresh = false;
    }
}
