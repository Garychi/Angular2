/**
 * Created by Mos on 2017/4/19.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class LoginService{

    constructor(private dataAccessService:DataAccessService){


    }

    login(username,password){
        var body={
            username:username,
            password:password
        }

        let url = "http://localhost:8085/FarmProject/services/restfulService/login/check";
        return this.dataAccessService.post(url, body);
    }
}