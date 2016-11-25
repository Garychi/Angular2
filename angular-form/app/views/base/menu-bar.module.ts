/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MenuBarComponent} from './menu-bar.component';

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        MenuBarComponent
    ],
    exports:    [ MenuBarComponent ]
})
export class MenuBarModule { }