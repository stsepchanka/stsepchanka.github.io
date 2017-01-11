import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { City } from './../../Entities/city';

@Component({
    selector: 'city',
    templateUrl: './app/Components/City/city.component.html',
    styleUrls: ['./app/Components/City/city.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CityComponent {
    @Input() city: City;
    @Input() isDisplayLetter: Boolean;
    @Input('actions') isWithActions: Boolean;
    @Input() isFavorite: Boolean;
    @Output() favorite = new EventEmitter();
    @Output() remove = new EventEmitter();

    constructor() {}

    onStarClick() {
        this.favorite.emit(!this.isFavorite);
    }
    onRemove() {
        this.remove.emit(this.city.name);
    }
}
