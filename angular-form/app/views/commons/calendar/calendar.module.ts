/**
 * Created by Mos on 2016/12/20.
 */
import {NgModule} from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {CalendarModule} from 'primeng/primeng';
import {CalendarComponent} from "./calendar.component";     //accordion and accordion tab

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        CalendarModule
    ],
    declarations:[
        CalendarComponent
    ],
    exports:[
        CalendarComponent
    ]
})

export class CalendarComponentModule{

}