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
 * Created by Mos on 2016/12/8.
 */
var core_1 = require("@angular/core");
var EmployeeService_1 = require("../../service/EmployeeService");
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.searchEmployee = function () {
        var _this = this;
        this.employeeService.search(this.keyword)
            .subscribe(function (response) { return _this.Employees = response; }, function (error) { return _this.handleError(error); }, function complete() {
            console.log('complete');
        });
    };
    EmployeeComponent.prototype.addEmp = function () {
        var body = {
            "empno": "001", "ename": "Jack", "job": "CEO",
            "mgr": "10", "hiredate": "2016-12-11", "sal": "10",
            "comm": "100", "depno": "20"
        };
        this.employeeService.addEmp(body)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
    };
    EmployeeComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'employee',
            templateUrl: 'employee.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map