"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/4/14.
 */
var core_1 = require("@angular/core");
// import {MdDialog, MdDialogRef} from '@angular/material';
var DialogComponent = (function () {
    function DialogComponent() {
    }
    // constructor(public dialog: MdDialog) {}
    DialogComponent.prototype.openDialog = function () {
        // let dialogRef = this.dialog.open(DialogResultExampleDialog);
        // dialogRef.afterClosed().subscribe(result => {
        //     this.selectedOption = result;
        // });
    };
    DialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'myDialog',
            templateUrl: 'dialog.component.html'
        })
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog() {
    }
    DialogResultExampleDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-result-example-dialog',
            templateUrl: './dialog-result-example-dialog.html',
        })
    ], DialogResultExampleDialog);
    return DialogResultExampleDialog;
}());
exports.DialogResultExampleDialog = DialogResultExampleDialog;
//# sourceMappingURL=dialog.component.js.map