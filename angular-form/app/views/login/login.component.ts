/**
 * Created by Mos on 2017/4/19.
 */
import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/LoginService';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})


export class LoginComponent implements OnInit{

    username:string;
    password:string;

    constructor(private loginService :LoginService){

    }

    ngOnInit(): void {

    }


    doLogin(){
        this.loginService.login(this.username,this.password);
    }
}