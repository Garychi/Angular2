"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/4/19.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_translate_1 = require("ng2-translate");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login.component");
var LoginService_1 = require("../../service/LoginService");
var i18nService_1 = require("../../service/i18nService");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng2_translate_1.TranslateModule,
            forms_1.FormsModule
        ],
        declarations: [
            login_component_1.LoginComponent
        ],
        exports: [
            login_component_1.LoginComponent
        ],
        providers: [
            LoginService_1.LoginService, i18nService_1.i18nService
        ]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map