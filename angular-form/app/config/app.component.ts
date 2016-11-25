/**
 * Created by Mos on 2016/10/12.
 */
import { Component } from '@angular/core';

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
export class AppComponent { }
