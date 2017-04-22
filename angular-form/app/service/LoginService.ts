/**
 * Created by Mos on 2017/4/19.
 */
import {Injectable} from "@angular/core";
import {DataAccessService} from "./DataAccessService";

@Injectable()
export class LoginService{
    public token: string;

    constructor(private dataAccessService: DataAccessService) {


    }

    login(username, password) {
        var body = {
            userName: username,
            password: password
        }

        let url = "http://localhost:8085/FarmProject/services/restfulService/login/checkIdentity";

        this.dataAccessService.post(url, body).subscribe(
            response => {
                let token = response;
                if(token){
                    this.token=token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token}));
                }
            },
            error => console.log(error),
            function complete() {
                console.log('token complete');
            }
        );

    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}