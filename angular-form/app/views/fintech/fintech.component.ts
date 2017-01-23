/**
 * Created by Mos on 2016/11/22.
 */
import {Component,trigger, style, transition, animate,state,OnInit} from '@angular/core';
import {News} from './News';
import {FintechService} from "../../service/FintechService";
import {i18nService} from "../../service/i18nService";

@Component({
    moduleId: module.id,
    selector: 'fintech',
    templateUrl: 'fintech.component.html',
    animations: [
        trigger('slideInOut', [
            state('flyIn', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('flyOut', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('flyIn => flyOut', animate('400ms ease-in-out')),
            transition('flyOut => flyIn', animate('400ms ease-in-out'))
        ]),
    ],
    styleUrls:['fintech.component.css']
})


export class FinTechComponent implements OnInit{
    private errorMessage;
    private myNews: News[];

    menuState:string = 'out';

    constructor(private fintechService: FintechService,private i18nService :i18nService) {

    }


    ngOnInit():void{

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

    private animationTest(){
        this.menuState = this.menuState === 'flyOut' ? 'flyIn' : 'flyOut';
    }
}