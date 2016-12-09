/**
 * Created by Mos on 2016/12/8.
 */
import {Component} from '@angular/core';
import {DataAccessService} from '../../service/DataAccessService';

import {Employee} from './Employee';

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent{

    Employees :Employee[];

    constructor(private dataAccessService:DataAccessService){

    }

    private searchEmployee(){
        this.dataAccessService.getEmployeeInfo()
            .subscribe(response =>this.Employees=response,
                error=>this.handleError(error),
                function complete() {
                    console.log('complete');
                }
            );
    }

    private handleError(error){
        console.log(error);
    }
}