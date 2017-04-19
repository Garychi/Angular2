/**
 * Created by Mos on 2017/4/19.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateModule} from 'ng2-translate';
import {FormsModule } from '@angular/forms';


import {LoginComponent} from './login.component';
import {LoginService} from "../../service/LoginService";
import {i18nService} from "../../service/i18nService";

@NgModule({
    imports:[
        BrowserModule,
        TranslateModule,
        FormsModule
    ],
    declarations:[
        LoginComponent
    ],
    exports:[
        LoginComponent
    ],
    providers:[
        LoginService,i18nService
    ]
})

export class LoginModule{

}