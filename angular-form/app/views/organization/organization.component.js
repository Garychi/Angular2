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
 * Created by Mos on 2016/12/12.
 */
var core_1 = require("@angular/core");
var OrganizationService_1 = require("../../service/OrganizationService");
var OrganizationComponent = (function () {
    function OrganizationComponent(organizationService) {
        this.organizationService = organizationService;
    }
    OrganizationComponent.prototype.searchOrg = function () {
        var _this = this;
        this.organizationService.search(this.keyword)
            .subscribe(function (response) { return _this.Organizations = response; }, function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
    };
    OrganizationComponent.prototype.insertOrg = function () {
        var _this = this;
        this.organizationService.insert(this.keyword)
            .subscribe(function (response) { return _this.Organizations = response; }, function (error) { return console.log(error); }, function complete() {
            console.log('complete');
        });
    };
    OrganizationComponent.prototype.updateOrg = function () {
    };
    OrganizationComponent.prototype.deleteOrg = function () {
    };
    return OrganizationComponent;
}());
OrganizationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'organization',
        templateUrl: 'organization.component.html'
    }),
    __metadata("design:paramtypes", [OrganizationService_1.OrganizationService])
], OrganizationComponent);
exports.OrganizationComponent = OrganizationComponent;
//# sourceMappingURL=organization.component.js.map