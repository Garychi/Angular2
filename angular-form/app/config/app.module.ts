/**
 * Created by Mos on 2016/10/12.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2BootstrapModule} from 'ngx-bootstrap';
import {HttpModule, JsonpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate';

import '../rxjs-operators';

//custom Module
import {MainContentModule} from '../views/base/main-content.module';
import {SideContentModule} from '../views/base/side-content.module';
import {MenuBarModule} from '../views/base/menu-bar.module';
// import {AlertComponentModule} from '../views/commons/alert/alert.module';
// import {ModalComponentModule} from '../views/commons/openWindow/modal.module';

import {AppRoutingModule} from './app-routing.module';

import {i18nService} from '../service/i18nService';
import {LoginService} from '../service/LoginService';

import {AppComponent}   from './app.component';
import {LoginModule} from "../views/login/login.module";

@NgModule({
    imports: [
        BrowserModule,
        Ng2BootstrapModule,
        MainContentModule,
        SideContentModule,
        MenuBarModule,
        // AlertComponentModule,
        // ModalComponentModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        TranslateModule.forRoot(),
        LoginModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [i18nService,LoginService]
})
export class AppModule {}

