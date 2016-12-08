/**
 * Created by Mos on 2016/11/22.
 */
import {Component} from '@angular/core';

import {DataAccessService} from '../../service/DataAccessService';
import {Observable, Subscription} from "rxjs";
import {News} from './News';

@Component({
    moduleId: module.id,
    selector: 'fintech',
    templateUrl: 'fintech.component.html'
})

export class FinTechComponent {
    private errorMessage;
    private myNews : News[];

    constructor(private dataAccessService: DataAccessService) {

    }


    private sendRequest() {
        console.log('sendRequest');

        this.dataAccessService.getFarmInfo()
            .subscribe(
                response => this.myNews =response,
                error => this.callBackFailed(error),
                function complete() {
                    console.log('complete');
                });
        console.log('done');
    }

    private callBackSuccess(response) {
        var data = response.json();
        console.log(data);
    }

    private callBackFailed(error) {
        this.errorMessage = error;
        console.log(this.errorMessage);
    }
}