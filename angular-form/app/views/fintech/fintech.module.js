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
var platform_browser_1 = require('@angular/platform-browser');
var modal_module_1 = require('../commons/openWindow/modal.module');
var datepicker_module_1 = require('../commons/datePicker/datepicker.module');
var myDynamic_module_1 = require('../../views/commons/openWindow/myDynamic.module');
// import {ReactiveFormsModule} from "@angular/forms";
// import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
// import {DynamicFormsPrimeNGUIModule} from "@ng2-dynamic-forms/ui-primeng";
// import {MyDynamicFormComponent} from '../../views/commons/openWindow/MyDynamicFormComponent';
var fintech_component_1 = require('./fintech.component');
var FintechService_1 = require("../../service/FintechService");
var FintechModule = (function () {
    function FintechModule() {
    }
    FintechModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                modal_module_1.ModalComponentModule,
                datepicker_module_1.DatepickerComponentModule,
                myDynamic_module_1.MyDynamicModule
            ],
            declarations: [
                fintech_component_1.FinTechComponent
            ],
            exports: [
                fintech_component_1.FinTechComponent,
            ],
            providers: [
                FintechService_1.FintechService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FintechModule);
    return FintechModule;
}());
exports.FintechModule = FintechModule;
//# sourceMappingURL=fintech.module.js.map