import {CityCoordinates} from './cityCoordinates';
import {Cloud} from './cloud';
import {WeatherDescription} from './weatherDescription';
import {WeatherMain} from './weatherMain';
import {Wind} from './wind';

export class City {
    id: number;
    name: string
    coord: CityCoordinates;
    main: WeatherMain;
    wind: Wind;
    clouds: Cloud;
    weather: WeatherMain[];
}