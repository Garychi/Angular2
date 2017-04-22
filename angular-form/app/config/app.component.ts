/**
 * Created by Mos on 2016/10/12.
 */
import {Component, OnInit} from '@angular/core';
import {i18nService} from "../service/i18nService";

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
        <div id="content">
            <div id="menu-content">
                <menu-bar></menu-bar>
            </div>
            
            <div id="side-content">
                <side-content></side-content>
            </div>
            
            <div id="main-content">
                <main-content></main-content>
            </div>
        </div>     
    `
})

export class AppComponent implements OnInit {

    constructor(private i18nService :i18nService) {

    }

    ngOnInit() {
        console.log('app_component init complete');
    }

}


