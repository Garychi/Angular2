"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/11/22.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var stocks_component_1 = require("./stocks.component");
var StocksModule = (function () {
    function StocksModule() {
    }
    StocksModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule
            ],
            declarations: [
                stocks_component_1.StocksComponent
            ],
            exports: [
                stocks_component_1.StocksComponent
            ]
        })
    ], StocksModule);
    return StocksModule;
}());
exports.StocksModule = StocksModule;
//# sourceMappingURL=stocks.module.js.map