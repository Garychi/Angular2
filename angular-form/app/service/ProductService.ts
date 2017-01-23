/**
 * Created by Mos on 2017/1/11.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {Headers, RequestOptions} from '@angular/http';
import {Product} from "../views/product/Product";

@Injectable()
export class ProductService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private dataAccessService: DataAccessService) {

    }


    search(keyword): Observable<Product[]> {
        keyword = {"empno": "7839","ename":"KING"};

        let url = "http://localhost:8085/FarmProject/services/restfulService/employee/search";
        return this.dataAccessService.post(url, keyword, this.options);
    }

    getProdInfo(){
        let products=[
            {name:"柚子",origin:"二林",planway:"有機種植",pic:"app/image/001.jpg"},
            {name:"番石柳",origin:"二林",planway:"有機種植",pic:"app/image/002.jpg"},
            {name:"稻米",origin:"二林",planway:"有機種植",pic:"app/image/003.jpg"}
        ];

        return products;
    }

}