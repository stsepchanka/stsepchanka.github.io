import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperature' })

export class TemperaturePipe implements PipeTransform {

    transform(value: number):string {
        return (value > 0 ? '+' : '') + value.toString();
    }
}