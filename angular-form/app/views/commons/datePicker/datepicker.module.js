"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/12/9.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var datepicker_component_1 = require("./datepicker.component");
var DatepickerComponentModule = (function () {
    function DatepickerComponentModule() {
    }
    DatepickerComponentModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ngx_bootstrap_1.DatepickerModule
            ],
            declarations: [
                datepicker_component_1.DatepickerComponent
            ],
            exports: [
                datepicker_component_1.DatepickerComponent
            ]
        })
    ], DatepickerComponentModule);
    return DatepickerComponentModule;
}());
exports.DatepickerComponentModule = DatepickerComponentModule;
//# sourceMappingURL=datepicker.module.js.map