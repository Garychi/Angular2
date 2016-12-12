/**
 * Created by Mos on 2016/12/12.
 */
import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {Headers, RequestOptions} from '@angular/http';

import {Organization} from "../views/organization/Organization";


@Injectable()
export class OrganizationService{

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private dataAccessService: DataAccessService) {

    }


    search(keyword):Observable<Organization[]>{
        let url ="http://localhost:8085/FarmProject/services/restfulService/organization/search";
        return this.dataAccessService.post(url,keyword,this.options);
    }

    insert(body){

    }

    update(body){

    }

    delete(body){

    }

}