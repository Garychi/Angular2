/**
 * Created by Mos on 2016/12/9.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {Headers, RequestOptions} from '@angular/http';
import {News} from '../views/fintech/News';

@Injectable()
export class FintechService{

    constructor(private dataAccessService:DataAccessService){

    }

    getFintechInfo() : Observable<News[]>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let url = "http://localhost:8085/FarmProject/services/restfulService/fintech/getData";
        let queryString = [{"data":"aaa"}];
        let options = new RequestOptions({headers: headers});
        return this.dataAccessService.post(url,queryString,options);
    }

}
