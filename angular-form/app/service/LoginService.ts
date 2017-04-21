/**
 * Created by Mos on 2017/4/19.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";

@Injectable()
export class LoginService{

    constructor(private dataAccessService:DataAccessService){


    }

    login(username,password){
        var body={
            userId:username,
            password:password
        }

        let url = "http://localhost:8085/FarmProject/services/restfulService/login/checkIdentity";
        return this.dataAccessService.post(url, body);
    }


}