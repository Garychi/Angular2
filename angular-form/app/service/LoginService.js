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
 * Created by Mos on 2017/4/19.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var LoginService = (function () {
    function LoginService(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var body = {
            userName: username,
            password: password
        };
        var url = "http://localhost:8085/FarmProject/services/restfulService/login/checkIdentity";
        this.dataAccessService.post(url, body).subscribe(function (response) {
            var token = response;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
            }
        }, function (error) { return console.log(error); }, function complete() {
            console.log('token complete');
        });
    };
    LoginService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=LoginService.js.map