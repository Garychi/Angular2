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


    getAngularInfo(): void {
        let url = "http://localhost:8080/DWGateway/restful/StockOutService/IStockOutService/stockOutGet";
        let queryString = {};
        // queryString["serviceId"] = "StockOutGet";
        this.dataAccessService.getMockData(url, queryString)
            .subscribe(error => this.errorMessage = <any>error,
                valueObject => this.valueObject);

        console.log(this.valueObject);
        console.log('done');
    }

    ngOnInit(): void {
        this.boxes=this.dataAccessService.getMockBoxData();
    }
}