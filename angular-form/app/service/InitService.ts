/**
 * Created by Mos on 2017/4/21.
 */
import {Injectable} from "@angular/core";
import {DataAccessService} from "./DataAccessService";
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class InitService{

    private headers = new Headers({'Content-Type': 'application/json','Authorization':'aaasssss'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private dataAccessService:DataAccessService){

    }

    getMenu(){
        var body = {"id": "keyword"};
        let url = "http://localhost:8085/FarmProject/services/restfulService/product/search";
        return this.dataAccessService.post(url, body,this.options);
    }
}