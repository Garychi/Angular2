/**
 * Created by Mos on 2016/12/8.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {EmployeeComponent} from './employee.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations :[
        EmployeeComponent
    ],
    exports:[
        EmployeeComponent
    ]
})

export class EmployeeModule{}