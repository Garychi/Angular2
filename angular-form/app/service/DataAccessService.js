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
 * Created by Mos on 2016/11/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var mock_boxes_1 = require("../mock-boxes");
var DataAccessService = (function () {
    function DataAccessService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_2.RequestOptions({ headers: this.headers });
    }
    DataAccessService.prototype.post = function (url, body) {
        return this.http.post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataAccessService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataAccessService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        console.log('in to this handleError');
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    DataAccessService.prototype.getMockBoxData = function () {
        return mock_boxes_1.BOXES;
    };
    DataAccessService.prototype.getMockData = function (url, queryString) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        // let token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJwcm9maWxlXCI6XCJ7XFxcInByaW1lcktleVxcXCI6XFxcIjcxYzE1ODg1LWM2MDYtNGVjZi05ZWM3LWJlOWVjNmNlZGEyZlxcXCIsXFxcImtleVxcXCI6XFxcIjFcXFwiLFxcXCJpbmZvM1xcXCI6XFxcImluZm9ybWF0aW9uIDNcXFwiLFxcXCJpbmZvMlxcXCI6XFxcImluZm9ybWF0aW9uIDJcXFwifVwiLFwiaXNzdWVkQXRcIjoxNDc5Njk5MTc1NzA3LFwibG9naW5Qb2xpY3lcIjpcIkFMTE9XX01VTFRJUExFX0xPR0lOXCJ9IiwiZXhwIjoxNDc5Nzg1NTc1LCJpYXQiOjE0Nzk2OTkxNzUsImp0aSI6IjcxYzE1ODg1LWM2MDYtNGVjZi05ZWM3LWJlOWVjNmNlZGEyZiJ9.9pXcU3hHHjOlVeSvKKNDT8LRO_hcojrgCFs01aqEbrxDqyypA01do3qBLCeOXK8_gWdzxHIkKlv6xdqU-sjXZA";
        // headers.append("Token",token);
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(url, queryString, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataAccessService.prototype.getMenuInfo = function () {
        var data = [
            { "menuId": "0001", "menuName": "Home", "parent": "root", "path": "/fintech" },
            { "menuId": "0002", "menuName": "Employee", "parent": "root", "path": "/employee" },
            { "menuId": "0003", "menuName": "Stocks", "parent": "root", "path": "/stocks" },
            { "menuId": "0004", "menuName": "Fintech", "parent": "root", "path": "/fintech" },
            { "menuId": "0005", "menuName": "Organization", "parent": "root", "path": "/organization" },
            { "menuId": "0006", "menuName": "Test", "parent": "root", "path": "/test" },
            { "menuId": "0007", "menuName": "產品", "parent": "root", "path": "/product" },
            { "menuId": "0008", "menuName": "設定", "parent": "root", "path": "/setting" }
        ];
        return data;
    };
    return DataAccessService;
}());
DataAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataAccessService);
exports.DataAccessService = DataAccessService;
//# sourceMappingURL=DataAccessService.js.map