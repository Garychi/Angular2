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
    keyword: string;
    salesPrice: number;

    selectedProd: Product;

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {

    }


    addAttrs(product) {
        for (let prod of product) {
            prod.disabled = false;
        }
    }


    private showDetail(prod) {
        prod.disabled = !prod.disabled;
    }

    // response=>this.Product=response
    private searchProd() {
        this.productService.search({"prodCode": this.keyword})
            .subscribe(response => {
                    this.Product = response;
                    this.Product.forEach(function (item) {
                        item.selected = false;
                    });
                },
                error => console.log(error),
                function complete() {
                    console.log('complete');
                });


        console.log('search Prod end');

    }

    private insertProd() {
        this.productService.insert({"prodCode": this.keyword})
            .subscribe(
                error => console.log(error),
                function complete() {
                    console.log('complete');
                });
    }

    private updateProd() {
        this.productService.update({"prodCode": this.keyword})
            .subscribe(
                error => console.log(error),
                function complete() {
                    console.log('complete');
                });
    }

    private deleteProd() {
        this.productService.delete({"prodCode": this.keyword})
            .subscribe(
                error => console.log(error),
                function complete() {
                    console.log('complete');
                });
    }

    private selectProd(prod) {
        prod.selected = !prod.selected;
    }
}