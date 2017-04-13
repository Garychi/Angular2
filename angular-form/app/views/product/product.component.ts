/**
 * Created by Mos on 2017/1/10.
 */
import {Component, OnInit} from '@angular/core';
import {Product} from "./Product";
import {ProductService} from "../../service/ProductService";

@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})


export class ProductComponent implements OnInit {

    Product: Product[];

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        // this.Product = this.productService.getProdInfo();
        // this.addAttrs(this.Product);
    }

    addAttrs(product) {
        for (let prod of product) {
            prod.disabled = false;
        }
    }


    private showDetail(prod) {
        prod.disabled = !prod.disabled;
    }

    private searchProd(){
        console.log('search Prod begin ');
        this.productService.search({"a":"ab"})
            .subscribe(response => this.Product =response,
            error =>console.log(error),
            function complete(){
                console.log('complete');
            });
        console.log('search Prod end');

    }
}