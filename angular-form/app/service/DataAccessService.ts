/**
 * Created by Mos on 2016/11/17.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {BOXES} from '../mock-boxes';


@Injectable()
export class DataAccessService {

    constructor(private http: Http) {
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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

    getMockData(url, queryString): Observable<Object> {
        let headers = new Headers({'Content-Type': 'application/json'});
        // let token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJwcm9maWxlXCI6XCJ7XFxcInByaW1lcktleVxcXCI6XFxcIjcxYzE1ODg1LWM2MDYtNGVjZi05ZWM3LWJlOWVjNmNlZGEyZlxcXCIsXFxcImtleVxcXCI6XFxcIjFcXFwiLFxcXCJpbmZvM1xcXCI6XFxcImluZm9ybWF0aW9uIDNcXFwiLFxcXCJpbmZvMlxcXCI6XFxcImluZm9ybWF0aW9uIDJcXFwifVwiLFwiaXNzdWVkQXRcIjoxNDc5Njk5MTc1NzA3LFwibG9naW5Qb2xpY3lcIjpcIkFMTE9XX01VTFRJUExFX0xPR0lOXCJ9IiwiZXhwIjoxNDc5Nzg1NTc1LCJpYXQiOjE0Nzk2OTkxNzUsImp0aSI6IjcxYzE1ODg1LWM2MDYtNGVjZi05ZWM3LWJlOWVjNmNlZGEyZiJ9.9pXcU3hHHjOlVeSvKKNDT8LRO_hcojrgCFs01aqEbrxDqyypA01do3qBLCeOXK8_gWdzxHIkKlv6xdqU-sjXZA";
        // headers.append("Token",token);

        let options = new RequestOptions({headers: headers});
        return this.http.post(url, queryString, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getMenuContent() {
        var data = [
            {"menuId": "0001", "menuName": "Home", "parent": "root", "path": "/fintech"},
            {"menuId": "0002", "menuName": "Game", "parent": "root", "path": "/fintech"},
            {"menuId": "0003", "menuName": "Stocks", "parent": "stocks", "path": "/stocks"},
            {"menuId": "0004", "menuName": "Fintech", "parent": "fintech", "path": "/fintech"},
            {"menuId": "0005", "menuName": "Info", "parent": "root", "path": "/fintech"}
        ];

        return data;
    }

    getFarmInfo(){
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.append("Access-Control-Allow-Origin","*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        headers.append("Access-Control-Max-Age", "1209600");

        let url="http://localhost:8080/FarmProject/services/restfulService/stock/getData";
        let queryString =[];

        let options = new RequestOptions({headers: headers});
        return this.http.post(url, queryString, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}