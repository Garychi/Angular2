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
 * Created by Mos on 2017/4/14.
 */
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var DialogComponent = (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'myDialog',
        templateUrl: 'dialog.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogComponent);
exports.DialogComponent = DialogComponent;
var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DialogResultExampleDialog;
}());
DialogResultExampleDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dialog-result-example-dialog',
        templateUrl: './dialog-result-example-dialog.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], DialogResultExampleDialog);
exports.DialogResultExampleDialog = DialogResultExampleDialog;
//# sourceMappingURL=dialog.component.js.map