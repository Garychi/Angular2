/**
 * Created by Mos on 2017/1/23.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SettingComponent} from "./setting.component";

import {TranslateModule} from 'ng2-translate';

@NgModule({
    imports:[
        BrowserModule,
        TranslateModule
    ],
    declarations:[
        SettingComponent
    ]
})

export class SettingModule{}