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
 * Created by Mos on 2017/1/11.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var ProductService = (function () {
    function ProductService(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    ProductService.prototype.search = function (keyword) {
        var body = { "id": keyword };
        var url = "http://localhost:8085/FarmProject/services/restfulService/product/search";
        return this.dataAccessService.post(url, body);
    };
    ProductService.prototype.insert = function (keyword) {
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
        var url = "http://localhost:8085/FarmProject/services/restfulService/product/insert";
        return this.dataAccessService.post(url, body);
    };
    ProductService.prototype.update = function (keyword) {
        var body = {
            "id": {
                "prodCode": keyword.prodCode,
                "compCode": "G001"
            }
        };
        var url = "http://localhost:8085/FarmProject/services/restfulService/product/update";
        return this.dataAccessService.post(url, body);
    };
    ProductService.prototype.delete = function (keyword) {
        var body = {
            "id": {
                "prodCode": keyword.prodCode,
                "compCode": "G001"
            }
        };
        var url = "http://localhost:8085/FarmProject/services/restfulService/product/delete";
        return this.dataAccessService.post(url, body);
    };
    ProductService.prototype.getProdInfo = function () {
        var products = [
            { name: "柚子", origin: "二林", planway: "有機種植", pic: "app/image/001.jpg" },
            { name: "番石柳", origin: "二林", planway: "有機種植", pic: "app/image/002.jpg" },
            { name: "稻米", origin: "二林", planway: "有機種植", pic: "app/image/003.jpg" }
        ];
        return products;
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map