/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

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