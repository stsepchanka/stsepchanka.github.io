import {Component, Input} from '@angular/core';

import {City} from './../../Entities/city';
import {Kelvin2celsiusPipe} from './../../Pipes/kelvin2celsius.pipe';

@Component({
    selector: 'city',
    providers: [Kelvin2celsiusPipe],
    templateUrl: './app/Components/City/city.component.html',
    styleUrls: ['./app/Components/City/city.component.css']
})

export class CityComponent {
    @Input() city: City;
    @Input() isDisplayLetter: Boolean;

    constructor(private kelvin2celsius: Kelvin2celsiusPipe) {}

    getClassColor(tempKelvin: number):string {
        let tempCelsius: number = this.kelvin2celsius.transform(tempKelvin);
        return tempCelsius > 0 ? 'red' : 'blue';
    }
}
