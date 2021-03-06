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
 * Created by Mos on 2016/11/22.
 */
var core_1 = require("@angular/core");
var FintechService_1 = require("../../service/FintechService");
var i18nService_1 = require("../../service/i18nService");
var FinTechComponent = (function () {
    function FinTechComponent(fintechService, i18nService) {
        this.fintechService = fintechService;
        this.i18nService = i18nService;
        this.menuState = 'out';
    }
    FinTechComponent.prototype.ngOnInit = function () {
    };
    FinTechComponent.prototype.search = function () {
        var _this = this;
        console.log('sendRequest');
        this.fintechService.getFintechInfo()
            .subscribe(function (response) { return _this.myNews = response; }, function (error) { return _this.callBackFailed(error); }, function complete() {
            console.log('complete');
        });
        console.log('done');
    };
    FinTechComponent.prototype.callBackFailed = function (error) {
        this.errorMessage = error;
        console.log(this.errorMessage);
    };
    FinTechComponent.prototype.animationTest = function () {
        this.menuState = this.menuState === 'flyOut' ? 'flyIn' : 'flyOut';
    };
    FinTechComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fintech',
            templateUrl: 'fintech.component.html',
            animations: [
                core_1.trigger('slideInOut', [
                    core_1.state('flyIn', core_1.style({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    core_1.state('flyOut', core_1.style({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    core_1.transition('flyIn => flyOut', core_1.animate('400ms ease-in-out')),
                    core_1.transition('flyOut => flyIn', core_1.animate('400ms ease-in-out'))
                ]),
            ],
            styleUrls: ['fintech.component.css']
        }),
        __metadata("design:paramtypes", [FintechService_1.FintechService, i18nService_1.i18nService])
    ], FinTechComponent);
    return FinTechComponent;
}());
exports.FinTechComponent = FinTechComponent;
//# sourceMappingURL=fintech.component.js.map