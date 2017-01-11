import { Component, Input } from '@angular/core';

import { Wind } from './../../Entities/wind';

@Component({
    selector: 'wind',
    templateUrl: './app/Components/Wind/wind.component.html',
    styleUrls: ['./app/Components/Wind/wind.component.css']
})

export class WindComponent {
    @Input() wind: Wind;

    constructor() {}

}
