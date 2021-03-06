"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/12/12.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var organization_component_1 = require("./organization.component");
var OrganizationService_1 = require("../../service/OrganizationService");
var OrganizationModule = (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                organization_component_1.OrganizationComponent
            ],
            exports: [
                organization_component_1.OrganizationComponent
            ],
            providers: [
                OrganizationService_1.OrganizationService
            ]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());
exports.OrganizationModule = OrganizationModule;
//# sourceMappingURL=organization.module.js.map