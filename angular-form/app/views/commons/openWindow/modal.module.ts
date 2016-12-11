/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import {ModalComponent} from './modal.component';

// import {DatepickerComponentModule} from '../../commons/datePicker/datepicker.module';


@NgModule({
    imports:      [
        BrowserModule,
        ModalModule
        // DatepickerComponentModule
    ],
    declarations: [
        ModalComponent
    ],
    exports:    [
        ModalComponent
    ]
})
export class ModalComponentModule { }