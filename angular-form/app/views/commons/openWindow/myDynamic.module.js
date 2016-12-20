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
 * Created by Mos on 2016/12/20.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var forms_2 = require("@angular/forms");
var core_2 = require("@ng2-dynamic-forms/core");
var ui_primeng_1 = require("@ng2-dynamic-forms/ui-primeng");
var MyDynamicFormComponent_1 = require('./MyDynamicFormComponent');
var MyDynamicModule = (function () {
    function MyDynamicModule() {
    }
    MyDynamicModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                core_2.DynamicFormsCoreModule.forRoot(),
                ui_primeng_1.DynamicFormsPrimeNGUIModule
            ],
            declarations: [
                MyDynamicFormComponent_1.MyDynamicFormComponent
            ],
            exports: [MyDynamicFormComponent_1.MyDynamicFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyDynamicModule);
    return MyDynamicModule;
}());
exports.MyDynamicModule = MyDynamicModule;
//# sourceMappingURL=myDynamic.module.js.map