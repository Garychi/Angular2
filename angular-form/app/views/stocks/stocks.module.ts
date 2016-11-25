/**
 * Created by Mos on 2016/11/22.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {StocksComponent} from './stocks.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations :[
        StocksComponent
    ],
    exports:[
        StocksComponent
    ]
})

export class StocksModule{}