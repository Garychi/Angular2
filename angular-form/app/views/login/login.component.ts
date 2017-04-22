/**
 * Created by Mos on 2017/4/19.
 */
import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/LoginService';
import {Router, NavigationExtras} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})


export class LoginComponent implements OnInit {

    username: string;
    password: string;
    isLogin:boolean;
    something:object;

    constructor(private loginService: LoginService, private router: Router) {

    }

    ngOnInit(): void {
        console.log('Login init');
    }


    doLogin() {
        this.loginService.login(this.username, this.password);


        let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
        };

        this.router.navigate(['/fintech'], navigationExtras);
    }
}