import { Component, Input } from '@angular/core';

import { Wind } from './../../Entities/wind';

@Component({
    selector: 'weather-icon',
    templateUrl: './app/Components/WeatherIcon/weatherIcon.component.html',
    styleUrls: ['./app/Components/WeatherIcon/weatherIcon.component.css']
})

export class WeatherIconComponent {
    @Input() icon: string;

    iconUrl:string = 'http://openweathermap.org/img/w/';

    constructor() {}

}
