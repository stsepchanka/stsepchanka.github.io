import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from './logger.service';

import { CityCoordinates } from './../Entities/cityCoordinates';
import { StatusMessage } from './../Enum/statusMessage';

@Injectable()
export class LocationService {
    private serviceName = 'Location service';
    private centerCoord: CityCoordinates;

    constructor (private loggerService: LoggerService) {
        this.centerCoord = null;
    }

    getCenterCoord(): Observable<CityCoordinates> {
        return new Observable<CityCoordinates>(
            observer => {
                if (this.centerCoord == null) {
                    navigator.geolocation.getCurrentPosition(position => {
                        this.centerCoord = new CityCoordinates(position.coords.latitude, position.coords.longitude); 
                        observer.next(this.centerCoord);
                        observer.complete();
                        this.loggerService.log(this.serviceName, 'Get geo coordinates from navigator', StatusMessage.Success);
                    })
                } else {
                    observer.next(this.centerCoord);
                    observer.complete();
                    this.loggerService.log(this.serviceName, 'Get geo coordinates from saved data', StatusMessage.Info);
                }
            }
        );
    }
}