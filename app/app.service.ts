import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CityCoordinates } from './Entity/cityCoordinates';

@Injectable()
export class AppService {
    private centerCoord: Observable<CityCoordinates>;

    constructor () {}

    setCenterCoord(): void {
        this.centerCoord = new Observable<CityCoordinates>(
            observer => {
                 navigator.geolocation.getCurrentPosition(position => {
                     observer.next(new CityCoordinates(position.coords.latitude, position.coords.longitude));
                     observer.complete();
                 }
            }
        );
    }

    getCenterCoord(): Observable<CityCoordinates> {
        return this.centerCoord;
    }
}