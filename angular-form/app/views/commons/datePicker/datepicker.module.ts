/**
 * Created by Mos on 2016/12/9.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DatepickerModule} from 'ng2-bootstrap/ng2-bootstrap';

import {DatepickerComponent} from './datepicker.component';

@NgModule({
    imports: [
        BrowserModule,
        DatepickerModule
    ],
    declarations: [
        DatepickerComponent
    ],
    exports: [
        DatepickerComponent
    ]
})
export class DatepickerComponentModule {
}