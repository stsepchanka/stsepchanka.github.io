import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { CityCoordinates } from './../Entities/cityCoordinates';
import { CitiesInCycle } from './../Entities/citiesInCycle';
import { CitiesIds } from './../Entities/citiesIds';
import { City } from './../Entities/city';

@Injectable()
export class WeatherService {
    private citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
    private citiesByIdsUrl = 'http://api.openweathermap.org/data/2.5/group';
    private citiyWeatherByNameUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private countCities: number = 50;
    private appid: string = 'f3dbe2c418d2f197d570d0224966b043';
    private refreshDataTime: number = 10*60*1000;

    private centerCoord: CityCoordinates;
    private cities: City[];
    private timeRequest: Date;
    private timeRequestIds: Date;

    constructor (private http: Http) {
        this.centerCoord = null;
        this.cities = null;
        this.timeRequest = null;
        this.timeRequestIds = null;
    }

    get timeLastRequest(): Date {
        return this.timeRequest;
    }

    get timeLastRequestIds(): Date {
        return this.timeRequestIds;
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
            || (new Date()).getTime() - this.timeRequest.getTime() > this.refreshDataTime
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
                            this.timeRequestIds = this.timeRequest;
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

    getCitiesWeatherByIds(cities:City[]): Observable<City[]> {
        if ((new Date()).getTime() - this.timeRequestIds.getTime() < this.refreshDataTime) {
            return new Observable<City[]>(
                observer => {
                    observer.next(cities);
                    observer.complete();
                }
            )
        } 
        
        let ids = cities.map(city => city.id);

        let idsMaxCnt = 20,
            index = 0,
            params = new URLSearchParams(),
            obsArr = [];

        params.set('appid', this.appid);

        while (ids.length > index*idsMaxCnt) {
            params.set('id', ids.slice(index*idsMaxCnt, (index + 1) * idsMaxCnt).join(','));
            obsArr.push(this.http.get(this.citiesByIdsUrl, { search: params })
                        .map((result) => {
                            let citiesIds: CitiesIds = result.json();
                            return citiesIds.list || [];
                        })
            );
            index++;
        }
        
        return Observable.onErrorResumeNext(obsArr) 
            .reduce((citiesAll, citiesNew) => {
                citiesAll = citiesAll.concat(citiesNew);
                this.timeRequestIds = new Date();
                return citiesAll;
            }, [])
    }

    getCityWeatherByName(cityName: string, units:string = 'metric'): Observable<City> {
        let params = new URLSearchParams();
            params.set('q', cityName);
            params.set('units', units);
            params.set('appid', this.appid);

        return this.http.get(this.citiyWeatherByNameUrl, { search: params })
                        .map((result) => {
                            let city: City = result.json();
                            return city;
                        });
    }
}