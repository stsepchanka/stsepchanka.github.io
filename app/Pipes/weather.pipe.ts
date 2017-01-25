import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { WeatherService } from './../Services/weather.service';
import { LoggerService } from './../Services/logger.service';

import { City } from './../Entities/city';
import { StatusMessage } from './../Enum/statusMessage';

class CityWeather {
    name: string;
    city: City;
    timeRequest: Date;
    isRequestGoes: boolean;

    constructor(name: string, city: City = null, timeRequest: Date = null, isRequestGoes: boolean = false){
        this.name = name;
        this.city = city;
        this.timeRequest = timeRequest;
        this.isRequestGoes = isRequestGoes;
    }
}

@Pipe({
    name: 'weather',
    pure: false
})

export class WeatherPipe implements PipeTransform {
    private pipeName: string = 'Weather pipe';
    private cities: CityWeather[];

    constructor (
        private weatherService: WeatherService,
        private loggerService: LoggerService
    ) {
        this.cities = [];
    }

    transform(value: string):string {
        let resultHtml: string = '';

        if (value) {

            value = value.trim().toUpperCase();

            let cityWeather:CityWeather = this.cities.find(cw => cw.name === value);

            if (cityWeather) {
                this.loggerService.log(this.pipeName, `Get ${ cityWeather.name } city weather from array`, StatusMessage.Info);
            } else {
                cityWeather = new CityWeather(value);
                this.cities.push(cityWeather);
            }

            if (!cityWeather.isRequestGoes && (!cityWeather.timeRequest || (new Date()).getTime() - cityWeather.timeRequest.getTime() > 10*60*1000)) {
                cityWeather.isRequestGoes = true;
                this.weatherService.getCityWeatherByName(value).subscribe(city => {
                   cityWeather.timeRequest = new Date();
                   cityWeather.city = city;
                   cityWeather.isRequestGoes = false;
                   this.loggerService.log(this.pipeName, `Get ${ city.name } city weather from API`, StatusMessage.Info);
                })
            }

            if (cityWeather && cityWeather.city) {

                resultHtml = `<table class="weather-table">
                                <caption class="weather-table-caption">
                                    <div>Weather in ${ cityWeather.city.name }</div>
                                    <div>Last refreshed ${ ('0'+ cityWeather.timeRequest.getHours().toString()).slice(-2) + ':' +  ('0' + cityWeather.timeRequest.getMinutes().toString()).slice(-2) }</div>
                                </caption>
                                <tbody>
                                    <tr class="weather-table-tr">
                                        <td>Temperature</td>
                                        <td>${ cityWeather.city.main.temp.toFixed(0) }</td>
                                    </tr>
                                    <tr>
                                        <td>Wind</td>
                                        <td>${ cityWeather.city.wind.speed }</td>
                                    </tr>
                                    <tr>
                                        <td>Cloudiness</td>
                                        <td>${ cityWeather.city.clouds.all }</td>
                                    </tr>
                                    <tr>
                                        <td>Pressure</td>
                                        <td>${ cityWeather.city.main.pressure }</td>
                                    </tr>
                                    <tr>
                                        <td>Humidity</td>
                                        <td>${ cityWeather.city.main.humidity }</td>
                                    </tr>
                                    <tr>
                                        <td>Geo coordinates</td>
                                        <td>[${ cityWeather.city.coord.lat.toFixed(2) }, ${ cityWeather.city.coord.lon.toFixed(2) }]</td>
                                    </tr>
                                </tbody>
                            </table>` 
            } else {
                resultHtml = '<div class="nodata">No data</div>';
            }
        }

        return resultHtml;
    }
}