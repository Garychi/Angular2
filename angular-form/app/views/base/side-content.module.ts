/**
 * Created by Mos on 2016/11/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuModule} from '../../modules/menu/menu.module';

// import {DropDownComponentModule} from '../../views/commons/dropdown/dropDown.module';

import {SideContentComponent} from './side-content.component';

@NgModule({
    imports: [
        BrowserModule,
        // DropDownComponentModule,
        MenuModule
    ],
    declarations: [
        SideContentComponent
    ],
    exports:    [ SideContentComponent ]
})
export class SideContentModule { }
