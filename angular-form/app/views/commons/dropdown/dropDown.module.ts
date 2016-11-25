/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';


import {DropdownComponent} from './dropDown.component';

@NgModule({
    imports:      [
        BrowserModule,
        DropdownModule
    ],
    declarations: [
        DropdownComponent
    ],
    exports:[ DropdownComponent ]
})
export class DropDownComponentModule { }