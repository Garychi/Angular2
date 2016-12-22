/**
 * Created by Mos on 2016/12/20.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {ReactiveFormsModule} from "@angular/forms";
import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
import {DynamicFormsPrimeNGUIModule} from "@ng2-dynamic-forms/ui-primeng";

import {DynamicFormService,DynamicFormRelationService} from "@ng2-dynamic-forms/core";
import {MyDynamicFormComponent} from './MyDynamicFormComponent';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule,
        DynamicFormsPrimeNGUIModule
    ],
    declarations: [
        MyDynamicFormComponent
    ],
    providers:[
        DynamicFormService,
        DynamicFormRelationService
    ],
    exports:    [ MyDynamicFormComponent ]

})
export class MyDynamicModule { }