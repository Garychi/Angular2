/**
 * Created by Mos on 2016/11/22.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FinTechComponent} from './fintech.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations :[
        FinTechComponent
    ],
    exports:[
        FinTechComponent
    ]
})

export class FintechModule{}