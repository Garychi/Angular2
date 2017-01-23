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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
// import {CalendarComponent} from "../calendar/calendar.component";
var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ModalComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    ModalComponent.prototype.add = function () {
        console.log(this.startDate);
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ModalComponent.prototype, "childModal", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'open-win',
            templateUrl: 'modal.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map