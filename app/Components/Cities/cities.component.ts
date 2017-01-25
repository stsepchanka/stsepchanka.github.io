import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LocationService } from './../../Services/location.service';
import { WeatherService } from './../../Services/weather.service';
import { LoggerService } from './../../Services/logger.service';

import { City } from './../../Entities/city';
import { CityCoordinates } from './../../Entities/cityCoordinates';
import { StatusMessage } from './../../Enum/statusMessage';

@Component({
    selector: 'cities',
    templateUrl: './app/Components/Cities/cities.component.html',
    styleUrls: ['./app/Components/Cities/cities.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CitiesComponent implements OnInit, OnDestroy {
    private componentName: string = 'Cities component';
    private cities: City[];
    private centerCoord: CityCoordinates;
    private firstLetter: string = '';
    private timeRequest:Date;
    private favoriteId: number = -1;
    private timerRefreshId:NodeJS.Timer;
    private isContinueRefresh:boolean = true;

    constructor (
        private locationService: LocationService,
        private weatherService: WeatherService,
        private loggerService: LoggerService,
        private changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() { 
        this.locationService.getCenterCoord().subscribe(coord => {
            this.centerCoord = coord;
            this.loggerService.log(this.componentName, 'Get geo coordinates', StatusMessage.Info);
            this.weatherService.getCitiesWeather(this.centerCoord).subscribe((cities) => {
                this.cities = cities;
                this.timeRequest = this.weatherService.timeLastRequest;
                this.changeDetector.markForCheck();
                this.loggerService.log(this.componentName, 'Get cities weather', StatusMessage.Info);

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
                            self.loggerService.log(self.componentName, 'Refresh cities weather', StatusMessage.Info);
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
            this.loggerService.log(this.componentName, `Set city ${ this.cities[index].name } as favorite`, StatusMessage.Info);
        } else {
            this.favoriteId = -1;
            this.loggerService.log(this.componentName, `There is not favorite city`, StatusMessage.Info);
        }
    }

    onRemove(name:string, index: number):void {
        if (this.cities[index].id === this.favoriteId) {
            this.favoriteId = -1;
        }
        this.cities.splice(index, 1);
        this.loggerService.log(this.componentName, `Delete city ${ name }`, StatusMessage.Info);
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
                    this.loggerService.log(this.componentName, `Add city ${ city.name }`, StatusMessage.Info);
                }
            })            
        }
    }

    ngOnDestroy() {
        clearTimeout(this.timerRefreshId);
        this.isContinueRefresh = false;
        this.loggerService.log(this.componentName, `Destroy component`, StatusMessage.Info);
    }
}
