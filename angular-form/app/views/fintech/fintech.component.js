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
var DataAccessService_1 = require('../../service/DataAccessService');
var FinTechComponent = (function () {
    function FinTechComponent(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    FinTechComponent.prototype.sendRequest = function () {
        var _this = this;
        console.log('sendRequest');
        this.dataAccessService.getFarmInfo()
            .subscribe(function (response) { return _this.myNews = response; }, function (error) { return _this.callBackFailed(error); }, function complete() {
            console.log('complete');
        });
        console.log('done');
    };
    FinTechComponent.prototype.callBackSuccess = function (response) {
        var data = response.json();
        console.log(data);
    };
    FinTechComponent.prototype.callBackFailed = function (error) {
        this.errorMessage = error;
        console.log(this.errorMessage);
    };
    FinTechComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fintech',
            templateUrl: 'fintech.component.html'
        }), 
        __metadata('design:paramtypes', [DataAccessService_1.DataAccessService])
    ], FinTechComponent);
    return FinTechComponent;
}());
exports.FinTechComponent = FinTechComponent;
//# sourceMappingURL=fintech.component.js.map