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
 * Created by Mos on 2016/11/22.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var fintech_component_1 = require('../views/fintech/fintech.component');
var stocks_component_1 = require('../views/stocks/stocks.component');
var employee_component_1 = require('../views/employee/employee.component');
var organization_component_1 = require('../views/organization/organization.component');
var MyDynamicFormComponent_1 = require('../views/commons/openWindow/MyDynamicFormComponent');
var routes = [
    { path: '', redirectTo: '/fintech', pathMatch: 'full' },
    { path: 'fintech', component: fintech_component_1.FinTechComponent },
    { path: 'stocks', component: stocks_component_1.StocksComponent },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: 'organization', component: organization_component_1.OrganizationComponent },
    { path: 'test', component: MyDynamicFormComponent_1.MyDynamicFormComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map