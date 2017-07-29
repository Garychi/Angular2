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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/1/12.
 */
var core_1 = require("@angular/core");
var ng2_translate_1 = require("ng2-translate");
var i18nService_1 = require("../service/i18nService");
var SettingComponent = (function () {
    function SettingComponent(translate, i18nService) {
        this.translate = translate;
        this.i18nService = i18nService;
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.changeLang = function (lang) {
        console.log('setting change lang');
        this.i18nService.browserLang = lang;
        this.i18nService.changeLang(this.i18nService.browserLang);
    };
    SettingComponent.prototype.resetSetting = function () {
    };
    SettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'setting',
            templateUrl: 'setting.component.html',
            styleUrls: ['setting.css']
        }),
        __metadata("design:paramtypes", [ng2_translate_1.TranslateService, i18nService_1.i18nService])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=setting.component.js.map