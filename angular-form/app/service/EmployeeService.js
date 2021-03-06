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
 * Created by Mos on 2016/12/11.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var http_1 = require("@angular/http");
var EmployeeService = (function () {
    function EmployeeService(dataAccessService) {
        this.dataAccessService = dataAccessService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    EmployeeService.prototype.search = function (keyword) {
        keyword = { "empno": "7839", "ename": "KING" };
        var url = "http://localhost:8085/FarmProject/services/restfulService/employee/search";
        return this.dataAccessService.post(url, keyword);
    };
    EmployeeService.prototype.addEmp = function (body) {
        var url = "http://localhost:8085/FarmProject/services/restfulService/employee/insert";
        return this.dataAccessService.post(url, body);
    };
    EmployeeService.prototype.update = function () {
    };
    EmployeeService.prototype.delete = function () {
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map