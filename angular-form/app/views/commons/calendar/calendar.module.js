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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var primeng_1 = require('primeng/primeng');
var calendar_component_1 = require("./calendar.component"); //accordion and accordion tab
var CalendarComponentModule = (function () {
    function CalendarComponentModule() {
    }
    CalendarComponentModule = __decorate([
        //accordion and accordion tab
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                primeng_1.CalendarModule
            ],
            declarations: [
                calendar_component_1.CalendarComponent
            ],
            exports: [
                calendar_component_1.CalendarComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponentModule);
    return CalendarComponentModule;
}());
exports.CalendarComponentModule = CalendarComponentModule;
//# sourceMappingURL=calendar.module.js.map