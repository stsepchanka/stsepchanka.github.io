import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {CityCoordinates} from './../Entity/cityCoordinates';
import {CitiesInCycle} from './../Entity/citiesInCycle';
import {City} from './../Entity/city';

@Injectable()
export class WeatherInCityService {
    private citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
    private countCities: number = 50;
    private appid: string = 'f3dbe2c418d2f197d570d0224966b043';

    constructor (private http: Http) {}

    getCitiesWeather(centerCoord: CityCoordinates): Observable<City[]> {
        let params = new URLSearchParams();
        params.set('lat', centerCoord.lat.toString());
        params.set('lon', centerCoord.lon.toString());
        params.set('cnt', this.countCities.toString());
        params.set('appid', this.appid);

        return this.http.get(this.citiesInCycleUrl, { search: params })
                    .map((result) => {
                     let citiesInCycle: CitiesInCycle = result.json();
                     let cities: City[] = citiesInCycle.list || [];
                     cities.sort((city1, city2) => {
                         return city1.name > city2.name ? 1 : (city1.name < city2.name ? -1 : 0);
                     });
                     return cities;
                });
    }
}