/**
 * Created by Mos on 2016/11/22.
 */
import {Component} from '@angular/core';

import {DataAccessService} from '../../service/DataAccessService';

@Component({
    moduleId:module.id,
    selector:'fintech',
    templateUrl:'fintech.component.html'
})

export class FinTechComponent{
    private errorMessage;
    private valueObject;

    constructor(private dataAccessService :DataAccessService){

    }

    sendRequest():void{
        console.log('sendRequest');
        this.dataAccessService.getFarmInfo().
        subscribe(error => this.errorMessage = <any>error,
            extractData => this.valueObject);

        // console.log();
        console.log('done');
    }
}