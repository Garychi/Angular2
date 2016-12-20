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
 * Created by Mos on 2016/11/15.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
//Custom Module
var fintech_module_1 = require('../fintech/fintech.module');
var stocks_module_1 = require('../stocks/stocks.module');
var employee_module_1 = require("../employee/employee.module");
var organization_module_1 = require('../organization/organization.module');
var myDynamic_module_1 = require('../commons/openWindow/myDynamic.module');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
//Service
var DataAccessService_1 = require('../../service/DataAccessService');
//Component
var main_content_component_1 = require('./main-content.component');
//Directive
var HighlightDirective_1 = require('../../directive/HighlightDirective');
var angular2_grid_1 = require('angular2-grid');
var MainContentModule = (function () {
    function MainContentModule() {
    }
    MainContentModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                ng2_bootstrap_1.TooltipModule,
                fintech_module_1.FintechModule,
                stocks_module_1.StocksModule,
                employee_module_1.EmployeeModule,
                organization_module_1.OrganizationModule,
                myDynamic_module_1.MyDynamicModule,
                router_1.RouterModule,
            ],
            declarations: [
                main_content_component_1.MainContentComponent,
                HighlightDirective_1.HighlightDirective,
                angular2_grid_1.NgGrid,
                angular2_grid_1.NgGridItem
            ],
            exports: [main_content_component_1.MainContentComponent],
            providers: [
                DataAccessService_1.DataAccessService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainContentModule);
    return MainContentModule;
}());
exports.MainContentModule = MainContentModule;
//# sourceMappingURL=main-content.module.js.map