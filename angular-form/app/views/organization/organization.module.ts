/**
 * Created by Mos on 2016/12/12.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {OrganizationComponent} from './organization.component';

import {OrganizationService} from '../../service/OrganizationService';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations :[
        OrganizationComponent
    ],
    exports:[
        OrganizationComponent
    ],
    providers:[
        OrganizationService
    ]
})

export class OrganizationModule{}