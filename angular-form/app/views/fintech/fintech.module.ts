/**
 * Created by Mos on 2016/11/22.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ModalComponentModule} from '../commons/openWindow/modal.module';
import {DatepickerComponentModule} from '../commons/datePicker/datepicker.module';

import {MyDynamicModule} from '../commons/dynamic/myDynamic.module';

// import {ReactiveFormsModule} from "@angular/forms";
// import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
// import {DynamicFormsPrimeNGUIModule} from "@ng2-dynamic-forms/ui-primeng";

// import {MyDynamicFormComponent} from '../../views/commons/openWindow/MyDynamicFormComponent';

import {FinTechComponent} from './fintech.component';
import {FintechService} from "../../service/FintechService";

@NgModule({
    imports:[
        BrowserModule,
        ModalComponentModule,
        DatepickerComponentModule,
        MyDynamicModule
        // ReactiveFormsModule,
        // DynamicFormsCoreModule.forRoot(),
        // DynamicFormsPrimeNGUIModule
    ],
    declarations :[
        FinTechComponent
        // MyDynamicFormComponent
    ],
    exports:[
        FinTechComponent,
        // MyDynamicFormComponent
    ],
    providers:[
        FintechService
    ]
})

export class FintechModule{}