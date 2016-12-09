import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'kelvin2celsius'})

export class Kelvin2celsiusPipe implements PipeTransform {
    
    kelvin2celsius:number = 273.15;

    transform(value: number):number {
        return value - this.kelvin2celsius;
    }
}