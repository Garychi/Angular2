/**
 * Created by Mos on 2016/11/22.
 */
import {Component} from '@angular/core';

import {News} from './News';
import {FintechService} from "../../service/FintechService";

@Component({
    moduleId: module.id,
    selector: 'fintech',
    templateUrl: 'fintech.component.html'
})

export class FinTechComponent {
    private errorMessage;
    private myNews: News[];

    constructor(private fintechService: FintechService) {

    }


    private search() {
        console.log('sendRequest');

        this.fintechService.getFintechInfo()
            .subscribe(
                response => this.myNews = response,
                error => this.callBackFailed(error),
                function complete() {
                    console.log('complete');
                });

        console.log('done');
    }


    private callBackFailed(error) {
        this.errorMessage = error;
        console.log(this.errorMessage);
    }
}