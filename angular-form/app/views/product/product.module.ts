/**
 * Created by Mos on 2017/1/10.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DataGridModule} from 'primeng/primeng';
import {TranslateModule} from 'ng2-translate';
import {FormsModule } from '@angular/forms';

import {ProductComponent} from './product.component';
import {ProductService} from "../../service/ProductService";
import {i18nService} from "../../service/i18nService";

@NgModule({
    imports:[
        BrowserModule,
        TranslateModule,
        FormsModule,
        DataGridModule
    ],
    declarations :[
        ProductComponent
    ],
    providers:[
        ProductService,i18nService
    ],
    exports:[
        ProductComponent
    ]

})

export class ProductModule{}