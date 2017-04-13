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
 * Created by Mos on 2016/10/12.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("../../service/DataAccessService");
require("../../rxjs-operators");
var MainContentComponent = (function () {
    function MainContentComponent(dataAccessService) {
        this.dataAccessService = dataAccessService;
        this.title = "This is Main Content";
    }
    MainContentComponent.prototype.getAngularInfo = function () {
        var _this = this;
        var url = "";
        var queryString = {};
        // queryString["serviceId"] = "StockOutGet";
        this.dataAccessService.getMockData(url, queryString)
            .subscribe(function (error) { return _this.errorMessage = error; }, function (valueObject) { return _this.valueObject; });
        console.log(this.valueObject);
        console.log('done');
    };
    MainContentComponent.prototype.ngOnInit = function () {
        this.boxes = this.dataAccessService.getMockBoxData();
    };
    return MainContentComponent;
}());
MainContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main-content',
        templateUrl: 'main-content.component.html'
        // , styleUrls:['main-content.component.css']
    }),
    __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
], MainContentComponent);
exports.MainContentComponent = MainContentComponent;
//# sourceMappingURL=main-content.component.js.map