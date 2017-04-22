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
 * Created by Mos on 2017/4/21.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var http_1 = require("@angular/http");
var InitService = (function () {
    function InitService(dataAccessService) {
        this.dataAccessService = dataAccessService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'aaasssss' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    InitService.prototype.getMenu = function () {
        var body = { "id": "keyword" };
        var url = "http://localhost:8085/FarmProject/services/restfulService/product/search";
        return this.dataAccessService.post(url, body, this.options);
    };
    return InitService;
}());
InitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
], InitService);
exports.InitService = InitService;
//# sourceMappingURL=InitService.js.map