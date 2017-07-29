/**
 * Created by Mos on 2016/11/15.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';

import {CalendarModule} from 'primeng/primeng';
// import {CalendarComponentModule} from '../calendar/calendar.module';

import {ModalComponent} from './modal.component';


@NgModule({
    imports: [
        BrowserModule,
        ModalModule,
        FormsModule,
        CalendarModule
        // CalendarComponentModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalComponentModule {
}