/**
 * Created by Mos on 2016/10/12.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';

import '../rxjs-operators';

//custom Module
import {MainContentModule} from '../views/base/main-content.module';
import {SideContentModule} from '../views/base/side-content.module';
import {MenuBarModule} from '../views/base/menu-bar.module';
import {AlertComponentModule} from '../views/commons/alert/alert.module';
import {ModalComponentModule} from '../views/commons/openWindow/modal.module';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent }   from './app.component';

@NgModule({
    imports:      [
        BrowserModule,
        Ng2BootstrapModule,
        MainContentModule,
        SideContentModule,
        MenuBarModule,
        AlertComponentModule,
        ModalComponentModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

