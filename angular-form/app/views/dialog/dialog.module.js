"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/4/14.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var dialog_component_1 = require("./dialog.component");
var dialog_component_2 = require("./dialog.component");
var i18nService_1 = require("../../service/i18nService");
var DialogModule = (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule
            ],
            declarations: [
                dialog_component_1.DialogComponent,
                dialog_component_2.DialogResultExampleDialog
            ],
            exports: [
                dialog_component_1.DialogComponent,
                dialog_component_2.DialogResultExampleDialog
            ],
            providers: [
                i18nService_1.i18nService
            ],
            entryComponents: [
                dialog_component_1.DialogComponent
            ]
        })
    ], DialogModule);
    return DialogModule;
}());
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.module.js.map