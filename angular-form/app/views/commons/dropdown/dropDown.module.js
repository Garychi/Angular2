"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/11/15.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var dropDown_component_1 = require("./dropDown.component");
var DropDownComponentModule = (function () {
    function DropDownComponentModule() {
    }
    return DropDownComponentModule;
}());
DropDownComponentModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng2_bootstrap_1.DropdownModule
        ],
        declarations: [
            dropDown_component_1.DropdownComponent
        ],
        exports: [dropDown_component_1.DropdownComponent]
    })
], DropDownComponentModule);
exports.DropDownComponentModule = DropDownComponentModule;
//# sourceMappingURL=dropDown.module.js.map