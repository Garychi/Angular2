/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

//Custom Module
import {FintechModule} from '../fintech/fintech.module';
import {StocksModule} from '../stocks/stocks.module';


import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

//Service
import {DataAccessService} from '../../service/DataAccessService';

//Component
import {MainContentComponent} from './main-content.component';

//Directive
import {HighlightDirective} from '../../directive/HighlightDirective';
import { NgGrid, NgGridItem } from 'angular2-grid';


@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule,
        TooltipModule,
        FintechModule,
        StocksModule,
        RouterModule,
    ],
    declarations: [
        MainContentComponent,
        HighlightDirective,
        NgGrid,
        NgGridItem
    ],
    exports :[MainContentComponent],
    providers :[
        DataAccessService
    ]


})
export class MainContentModule {

}