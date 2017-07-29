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
 * Created by Mos on 2016/12/9.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var http_1 = require("@angular/http");
var FintechService = (function () {
    function FintechService(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    FintechService.prototype.getFintechInfo = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = "http://localhost:8085/FarmProject/services/restfulService/fintech/getData";
        var queryString = [{ "data": "aaa" }];
        var options = new http_1.RequestOptions({ headers: headers });
        return this.dataAccessService.post(url, queryString);
    };
    FintechService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
    ], FintechService);
    return FintechService;
}());
exports.FintechService = FintechService;
//# sourceMappingURL=FintechService.js.map