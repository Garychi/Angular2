/**
 * Created by Mos on 2016/10/12.
 */
import {Component, OnInit} from '@angular/core';
import {DataAccessService} from '../../service/DataAccessService';


import '../../rxjs-operators';


@Component({
    moduleId: module.id,
    selector: 'main-content',
    templateUrl: 'main-content.component.html'
    // , styleUrls:['main-content.component.css']
})

export class MainContentComponent implements OnInit {

    private boxes;
    private errorMessage;
    private valueObject;
    private title;

    constructor(private dataAccessService: DataAccessService) {
        this.title="This is Main Content";
    }


    ngOnInit(): void {
        // this.boxes=this.dataAccessService.getMockBoxData();
    }
}