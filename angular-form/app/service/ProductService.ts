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

    constructor(private dataAccessService: DataAccessService) {

    }


    search(keyword): Observable<Product[]> {
        var body = {"id": keyword};
        let url = "http://localhost:8085/FarmProject/services/restfulService/product/search";
        return this.dataAccessService.post(url, body);
    }

    insert(keyword): Observable<Product[]> {
        var body = {
            "id": {
                "prodCode": keyword.prodCode,
                "compCode": "G001"
            },
            "description": "AI_Brain",
            "isOnshelf": "Y",
            "salesPrice": "300",
            "status": "Y",
            // "createdate":"",
            "creator": "user01",
            // "modiby": "",
            // "modidate": "",
            "flag": 1,
        };

        let url = "http://localhost:8085/FarmProject/services/restfulService/product/insert";
        return this.dataAccessService.post(url, body);
    }

    update(keyword): Observable<Product[]> {
        var body = {
            "id": {
                "prodCode": keyword.prodCode,
                "compCode": "G001"
            }
        }

        let url = "http://localhost:8085/FarmProject/services/restfulService/product/update";
        return this.dataAccessService.post(url, body);
    }

    delete(keyword): Observable<Product[]> {
        var body = {
            "id": {
                "prodCode": keyword.prodCode,
                "compCode": "G001"
            }
        }
        let url = "http://localhost:8085/FarmProject/services/restfulService/product/delete";
        return this.dataAccessService.post(url, body);
    }


    getProdInfo() {
        let products = [
            {name: "柚子", origin: "二林", planway: "有機種植", pic: "app/image/001.jpg"},
            {name: "番石柳", origin: "二林", planway: "有機種植", pic: "app/image/002.jpg"},
            {name: "稻米", origin: "二林", planway: "有機種植", pic: "app/image/003.jpg"}
        ];

        return products;
    }
}