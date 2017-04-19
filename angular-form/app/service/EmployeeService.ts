/**
 * Created by Mos on 2016/12/11.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {Headers, RequestOptions} from '@angular/http';
import {Employee} from "../views/employee/Employee";

@Injectable()
export class EmployeeService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private dataAccessService: DataAccessService) {

    }


    search(keyword): Observable<Employee[]> {
        keyword = {"empno": "7839","ename":"KING"};

        let url = "http://localhost:8085/FarmProject/services/restfulService/employee/search";
        return this.dataAccessService.post(url, keyword);
    }

    addEmp(body){
        let url = "http://localhost:8085/FarmProject/services/restfulService/employee/insert";
        return this.dataAccessService.post(url, body);
    }

    update() {

    }

    delete() {

    }
}