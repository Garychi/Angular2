"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/1/23.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var setting_component_1 = require("./setting.component");
var ng2_translate_1 = require("ng2-translate");
var SettingModule = (function () {
    function SettingModule() {
    }
    SettingModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_translate_1.TranslateModule
            ],
            declarations: [
                setting_component_1.SettingComponent
            ]
        })
    ], SettingModule);
    return SettingModule;
}());
exports.SettingModule = SettingModule;
//# sourceMappingURL=setting.module.js.map