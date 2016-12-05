import {Component, Input} from '@angular/core';

import {City} from './../Entity/city';

@Component({
    selector: 'city',
    templateUrl: './app/City/city.component.html',
    styleUrls: ['./app/City/city.component.css']
})

export class CityComponent {
    @Input() city: City;

    kelvin2celsius:number = 273.15;

    getTempCelsius(tempKelvin: number):number {
        return tempKelvin- this.kelvin2celsius;
    }
}
