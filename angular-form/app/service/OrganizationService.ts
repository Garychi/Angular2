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
        keyword ={"org_code":keyword,"IS_LEGAL_PERSON":"Y"};
        let url ="http://localhost:8085/FarmProject/services/restfulService/organization/search";
        return this.dataAccessService.post(url,keyword);
    }

    insert(body){
        body ={"org_code":"G12345","IS_LEGAL_PERSON":"Y"};
        let url ="http://localhost:8085/FarmProject/services/restfulService/organization/insert";
        return this.dataAccessService.post(url,body);
    }

    update(body){

    }

    delete(body){

    }

}