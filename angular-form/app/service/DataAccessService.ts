/**
 * Created by Mos on 2016/11/17.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {BOXES} from '../mock-boxes';
import {News} from '../views/fintech/News';
import {Employee} from "../views/employee/Employee";


@Injectable()
export class DataAccessService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http) {

    }

    post(url,body,options?){
        options = options || this.options;

        if(localStorage.getItem('currentUser') !=null){
            options.headers.set('Authorization',JSON.parse(localStorage.getItem('currentUser')).token);
        }

        return this.http.post(url, body,options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getMockBoxData() {
        return BOXES;
    }


    getMenuInfo() {
        var data = [
            {"menuId": "0001", "menuName": "Home", "parent": "root", "path": "/login"},
            {"menuId": "0002", "menuName": "Employee", "parent": "root", "path": "/employee"},
            {"menuId": "0003", "menuName": "Stocks", "parent": "root", "path": "/stocks"},
            {"menuId": "0004", "menuName": "Fintech", "parent": "root", "path": "/fintech"},
            {"menuId": "0005", "menuName": "Organization", "parent": "root", "path": "/organization"},
            // {"menuId": "0006", "menuName": "Test", "parent": "root", "path": "/test"},
            {"menuId": "0007", "menuName": "產品", "parent": "root", "path": "/product"},
            {"menuId": "0008", "menuName": "設定", "parent": "root", "path": "/setting"}
        ];

        return data;
    }



}