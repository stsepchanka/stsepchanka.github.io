import { Injectable } from '@angular/core';

import { StatusMessage } from './../Enum/statusMessage';

@Injectable()
export class LoggerService {

    constructor () {
    }

    log(component: string, message: string, status: StatusMessage): void {
        console.log(`%c ${ component }: ${ message}`, `color: ${ this.getColor(status) }`)
    }

    private getColor(status: StatusMessage): string {
        switch (status) {
            case StatusMessage.Info:
                return 'blue';
            case StatusMessage.Success:
                return 'green';
            case StatusMessage.Error:
                return 'red';
            default:
                return 'black'
        }
    }
}