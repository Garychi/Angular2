"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/11/15.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
//Custom Module
var fintech_module_1 = require("../fintech/fintech.module");
var stocks_module_1 = require("../stocks/stocks.module");
var employee_module_1 = require("../employee/employee.module");
var organization_module_1 = require("../organization/organization.module");
// import {MyDynamicModule} from '../commons/dynamic/myDynamic.module';
var product_module_1 = require("../product/product.module");
var setting_module_1 = require("../../config/setting.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
//Service
var DataAccessService_1 = require("../../service/DataAccessService");
//Component
var main_content_component_1 = require("./main-content.component");
//Directive
var HighlightDirective_1 = require("../../directive/HighlightDirective");
var angular2_grid_1 = require("angular2-grid");
var MainContentModule = (function () {
    function MainContentModule() {
    }
    MainContentModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                ngx_bootstrap_1.TooltipModule,
                fintech_module_1.FintechModule,
                stocks_module_1.StocksModule,
                employee_module_1.EmployeeModule,
                organization_module_1.OrganizationModule,
                // MyDynamicModule,
                product_module_1.ProductModule,
                router_1.RouterModule,
                setting_module_1.SettingModule
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
        })
    ], MainContentModule);
    return MainContentModule;
}());
exports.MainContentModule = MainContentModule;
//# sourceMappingURL=main-content.module.js.map