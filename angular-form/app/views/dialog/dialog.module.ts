/**
 * Created by Mos on 2017/4/14.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DialogComponent} from './dialog.component';
import {DialogResultExampleDialog} from './dialog.component';
import {i18nService} from "../../service/i18nService";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        DialogComponent,
        DialogResultExampleDialog
    ],
    exports: [
        DialogComponent,
        DialogResultExampleDialog
    ],
    providers: [
        i18nService
    ],
    entryComponents: [
        DialogComponent
    ]


})

export class DialogModule {
}