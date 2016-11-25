/**
 * Created by Mos on 2016/11/22.
 */
import {Component,OnInit} from '@angular/core';

import {DataAccessService} from '../../service/DataAccessService';

import {Menu} from './menu';

@Component({
    moduleId:module.id,
    selector:'menuBar',
    templateUrl:'menu.component.html'
})

export class MenuComponent implements OnInit{

    private menuArray :Menu[];

    constructor(private dataAccessService : DataAccessService){

    }

    ngOnInit():void{
        this.menuArray=this.dataAccessService.getMenuContent();
    }

}