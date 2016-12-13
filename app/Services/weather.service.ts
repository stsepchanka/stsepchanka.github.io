import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { CityCoordinates } from './../Entities/cityCoordinates';
import { CitiesInCycle } from './../Entities/citiesInCycle';
import { City } from './../Entities/city';

@Injectable()
export class WeatherService {
    private citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
    private countCities: number = 50;
    private appid: string = 'f3dbe2c418d2f197d570d0224966b043';

    private centerCoord: CityCoordinates;
    private cities: City[];
    private timeRequest: Date;

    constructor (private http: Http) {
        this.centerCoord = null;
        this.cities = null;
        this.timeRequest = null;
    }

    getCenterCoord(): Observable<CityCoordinates> {
        return new Observable<CityCoordinates>(
            observer => {
                if (this.centerCoord == null) {
                    navigator.geolocation.getCurrentPosition(position => {
                        this.centerCoord = new CityCoordinates(position.coords.latitude, position.coords.longitude); 
                        observer.next(this.centerCoord);
                        observer.complete();
                    })
                } else {
                    observer.next(this.centerCoord);
                    observer.complete();
                }
            }
        );
    }

    getCitiesWeather(centerCoord: CityCoordinates): Observable<City[]> {
        if (this.cities == null 
            || (new Date()).getTime() - this.timeRequest.getTime() > 10*60*1000
        ) {
            let params = new URLSearchParams();
            params.set('lat', centerCoord.lat.toString());
            params.set('lon', centerCoord.lon.toString());
            params.set('cnt', this.countCities.toString());
            params.set('appid', this.appid);

            return this.http.get(this.citiesInCycleUrl, { search: params })
                        .map((result) => {
                            let citiesInCycle: CitiesInCycle = result.json();
                            this.cities = citiesInCycle.list || [];
                            this.cities.sort((city1, city2) => {
                                return city1.name > city2.name ? 1 : (city1.name < city2.name ? -1 : 0);
                            });
                            this.timeRequest = new Date();
                            return this.cities;
                        });
        } else {
            return new Observable<City[]>(
                observer => {
                    observer.next(this.cities);
                    observer.complete();
                }
            )
        }
    }

}