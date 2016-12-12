/**
 * Created by Mos on 2016/12/8.
 */
import {Component} from '@angular/core';
import {EmployeeService} from '../../service/EmployeeService';

import {Employee} from './Employee';

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent {

    Employees: Employee[];
    keyword:string;

    constructor(private employeeService: EmployeeService) {

    }

    private searchEmployee() {
        this.employeeService.search(this.keyword)
            .subscribe(response => this.Employees = response,
                error => this.handleError(error),
                function complete() {
                    console.log('complete');
                }
            );
    }

    private addEmp() {
        var body =
                {
                    "empno": "001", "ename": "Jack", "job": "CEO",
                    "mgr": "10", "hiredate": "2016-12-11", "sal": "10",
                    "comm": "100", "depno": "20"
                };

        this.employeeService.addEmp(body)
            .subscribe(response => console.log(response),
                error => console.log(error),
                function complete() {
                    console.log('complete');
                }
            );
    }

    private handleError(error) {
        console.log(error);
    }
}