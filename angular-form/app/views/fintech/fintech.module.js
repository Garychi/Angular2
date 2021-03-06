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
var modal_module_1 = require("../commons/openWindow/modal.module");
var datepicker_module_1 = require("../commons/datePicker/datepicker.module");
var animations_1 = require("@angular/platform-browser/animations");
// import {MyDynamicModule} from '../commons/dynamic/myDynamic.module';
var ng2_translate_1 = require("ng2-translate");
var fintech_component_1 = require("./fintech.component");
var FintechService_1 = require("../../service/FintechService");
var i18nService_1 = require("../../service/i18nService");
var FintechModule = (function () {
    function FintechModule() {
    }
    FintechModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                modal_module_1.ModalComponentModule,
                datepicker_module_1.DatepickerComponentModule,
                animations_1.BrowserAnimationsModule,
                // MyDynamicModule,
                ng2_translate_1.TranslateModule
            ],
            declarations: [
                fintech_component_1.FinTechComponent
            ],
            exports: [
                fintech_component_1.FinTechComponent,
            ],
            providers: [
                FintechService_1.FintechService, i18nService_1.i18nService
            ]
        })
    ], FintechModule);
    return FintechModule;
}());
exports.FintechModule = FintechModule;
//# sourceMappingURL=fintech.module.js.map