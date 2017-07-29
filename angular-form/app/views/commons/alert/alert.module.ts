/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';

import {AlertComponent} from './alert.component';

@NgModule({
    imports:      [
        BrowserModule,
        AlertModule
    ],
    declarations: [
        AlertComponent
    ],
    exports:    [ AlertComponent ]
})
export class AlertComponentModule { }