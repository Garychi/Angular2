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
/**
 * Created by Mos on 2016/12/8.
 */
var core_1 = require('@angular/core');
var DataAccessService_1 = require('../../service/DataAccessService');
var EmployeeComponent = (function () {
    function EmployeeComponent(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    EmployeeComponent.prototype.searchEmployee = function () {
        var _this = this;
        this.dataAccessService.getEmployeeInfo()
            .subscribe(function (response) { return _this.Employees = response; }, function (error) { return _this.handleError(error); }, function complete() {
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
        __metadata('design:paramtypes', [DataAccessService_1.DataAccessService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map