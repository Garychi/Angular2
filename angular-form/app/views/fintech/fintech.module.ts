/**
 * Created by Mos on 2016/11/22.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ModalComponentModule} from '../commons/openWindow/modal.module';
import {DatepickerComponentModule} from '../commons/datePicker/datepicker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MyDynamicModule} from '../commons/dynamic/myDynamic.module';
import {TranslateModule} from 'ng2-translate';

import {FinTechComponent} from './fintech.component';

import {FintechService} from "../../service/FintechService";
import {i18nService} from "../../service/i18nService";

@NgModule({
    imports:[
        BrowserModule,
        ModalComponentModule,
        DatepickerComponentModule,
        BrowserAnimationsModule,
        // MyDynamicModule,
        TranslateModule
    ],
    declarations :[
        FinTechComponent
    ],
    exports:[
        FinTechComponent,
    ],
    providers:[
        FintechService,i18nService
    ]
})

export class FintechModule{}