/**
 * Created by Mos on 2016/12/8.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {EmployeeComponent} from './employee.component';
import {EmployeeService} from "../../service/EmployeeService";

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations :[
        EmployeeComponent
    ],
    exports:[
        EmployeeComponent
    ],
    providers:[
        EmployeeService
    ]

})

export class EmployeeModule{}