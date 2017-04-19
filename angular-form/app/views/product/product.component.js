"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/1/10.
 */
var core_1 = require("@angular/core");
var ProductService_1 = require("../../service/ProductService");
var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.productService = productService;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addAttrs = function (product) {
        for (var _i = 0, product_1 = product; _i < product_1.length; _i++) {
            var prod = product_1[_i];
            prod.disabled = false;
        }
    };
    ProductComponent.prototype.showDetail = function (prod) {
        prod.disabled = !prod.disabled;
    };
    // response=>this.Product=response
    ProductComponent.prototype.searchProd = function () {
        var _this = this;
        this.productService.search({ "prodCode": this.keyword })
            .subscribe(function (response) {
            _this.Product = response;
            _this.Product.forEach(function (item) {
                item.selected = false;
            });
        }, function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
        console.log('search Prod end');
    };
    ProductComponent.prototype.insertProd = function () {
        this.productService.insert({ "prodCode": this.keyword })
            .subscribe(function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
    };
    ProductComponent.prototype.updateProd = function () {
        this.productService.update({ "prodCode": this.keyword })
            .subscribe(function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
    };
    ProductComponent.prototype.deleteProd = function () {
        this.productService.delete({ "prodCode": this.keyword })
            .subscribe(function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
    };
    ProductComponent.prototype.selectProd = function (prod) {
        prod.selected = !prod.selected;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product',
        templateUrl: 'product.component.html',
        styleUrls: ['product.component.css']
    }),
    __metadata("design:paramtypes", [ProductService_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map