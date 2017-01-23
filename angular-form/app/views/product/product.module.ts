/**
 * Created by Mos on 2017/1/10.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DataGridModule} from 'primeng/primeng';

import {ProductComponent} from './product.component';
import {ProductService} from "../../service/ProductService";

@NgModule({
    imports:[
        BrowserModule,
        DataGridModule
    ],
    declarations :[
        ProductComponent
    ],
    providers:[
        ProductService
    ],
    exports:[
        ProductComponent
    ]

})

export class ProductModule{}