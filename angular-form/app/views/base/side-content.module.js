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
 * Created by Mos on 2016/11/15.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var menu_module_1 = require('../../modules/menu/menu.module');
var dropDown_module_1 = require('../../views/commons/dropdown/dropDown.module');
var side_content_component_1 = require('./side-content.component');
var SideContentModule = (function () {
    function SideContentModule() {
    }
    SideContentModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dropDown_module_1.DropDownComponentModule,
                menu_module_1.MenuModule
            ],
            declarations: [
                side_content_component_1.SideContentComponent
            ],
            exports: [side_content_component_1.SideContentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SideContentModule);
    return SideContentModule;
}());
exports.SideContentModule = SideContentModule;
//# sourceMappingURL=side-content.module.js.map