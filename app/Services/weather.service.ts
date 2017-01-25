import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from './logger.service';

import { CityCoordinates } from './../Entities/cityCoordinates';
import { CitiesInCycle } from './../Entities/citiesInCycle';
import { CitiesIds } from './../Entities/citiesIds';
import { City } from './../Entities/city';
import { StatusMessage } from './../Enum/statusMessage';

@Injectable()
export class WeatherService {
    private serviceName:string = 'Weather service';
    private citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
    private citiesByIdsUrl = 'http://api.openweathermap.org/data/2.5/group';
    private citiyWeatherByNameUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private countCities: number = 50;
    private appid: string = 'f3dbe2c418d2f197d570d0224966b043';
    private refreshDataTime: number = 10*60*1000;

    private cities: City[];
    private timeRequest: Date;
    private timeRequestIds: Date;

    constructor (
        private http: Http,
        private loggerService: LoggerService
    ) {
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
                            this.loggerService.log(this.serviceName, 'Get cities weather from API', StatusMessage.Success);
                            return this.cities;
                        })
                        .catch((error) => { this.loggerService.log(this.serviceName, 'Error when getting cities weather from API', StatusMessage.Error);});
        } else {
            return new Observable<City[]>(
                observer => {
                    observer.next(this.cities);
                    observer.complete();
                    this.loggerService.log(this.serviceName, 'Get cities weather from array', StatusMessage.Info);
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
                    this.loggerService.log(this.serviceName, `Get cities weather by ids from array`, StatusMessage.Info);
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
                            this.loggerService.log(this.serviceName, `Get cities weather by ids from ${citiesIds.list[0].name} to ${citiesIds.list[citiesIds.cnt - 1].name} from API (inside map)`, StatusMessage.Success);
                            return citiesIds.list || [];
                        })
                        .catch((error) => { this.loggerService.log(this.serviceName, 'Error when getting cities weather by ids from API (inside map)', StatusMessage.Error);})
            );
            index++;
        }
        
        return Observable.onErrorResumeNext(obsArr) 
            .reduce((citiesAll, citiesNew) => {
                citiesAll = citiesAll.concat(citiesNew);
                this.timeRequestIds = new Date();
                this.loggerService.log(this.serviceName, `Get cities weather by ids from ${citiesNew[0].name} to ${citiesNew[citiesNew.length - 1].name} from API (inside reduce)`, StatusMessage.Info);
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
                            this.loggerService.log(this.serviceName, `Get ${ city.name } city weather from API`, StatusMessage.Success);
                            return city;
                        });
    }
}