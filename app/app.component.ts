/// <reference path="../typings/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts"/>
/// <reference path="../node_modules/rxjs/rx.d.ts"/>  

import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
    selector: 'my-app',
    providers: [AppService],
    templateUrl: './app/app.component.html',
    styleUrls:  ['./app/app.component.css']
})

export class AppComponent {

    constructor(private appService: AppService) {
        appService.setCenterCoord();
    }

}
