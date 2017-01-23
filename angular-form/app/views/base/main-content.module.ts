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
import {EmployeeModule} from "../employee/employee.module";
import {OrganizationModule} from '../organization/organization.module';
import {MyDynamicModule} from '../commons/dynamic/myDynamic.module';
import {ProductModule} from '../product/product.module';
import {SettingModule} from '../../config/setting.module';

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
        EmployeeModule,
        OrganizationModule,
        MyDynamicModule,
        ProductModule,
        RouterModule,
        SettingModule
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