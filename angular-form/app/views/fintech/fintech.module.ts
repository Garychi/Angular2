/**
 * Created by Mos on 2016/11/22.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ModalComponentModule} from '../commons/openWindow/modal.module';
import {DatepickerComponentModule} from '../commons/datePicker/datepicker.module';

import {FinTechComponent} from './fintech.component';
import {FintechService} from "../../service/FintechService";

@NgModule({
    imports:[
        BrowserModule,
        ModalComponentModule,
        DatepickerComponentModule
    ],
    declarations :[
        FinTechComponent
    ],
    exports:[
        FinTechComponent
    ],
    providers:[
        FintechService
    ]
})

export class FintechModule{}