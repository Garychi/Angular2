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
 * Created by Mos on 2017/1/23.
 */
var core_1 = require("@angular/core");
var ng2_translate_1 = require("ng2-translate");
var i18nService = (function () {
    function i18nService(translate) {
        this.translate = translate;
        this.browserLang = this.translate.getBrowserLang();
        this.browserLang = this.browserLang == 'zh' ? "zh_TW" : this.browserLang;
        this.translate.addLangs(["en", "fr", "zh_TW"]);
        this.translate.setDefaultLang('en');
        this.translate.use(this.browserLang.match(/en|fr|zh_TW/) ? this.browserLang : 'en');
    }
    i18nService.prototype.changeLang = function (lang) {
        if (this.browserLang != lang) {
            this.translate.use(lang);
        }
    };
    i18nService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng2_translate_1.TranslateService])
    ], i18nService);
    return i18nService;
}());
exports.i18nService = i18nService;
//# sourceMappingURL=i18nService.js.map