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
var core_1 = require("@angular/core");
var core_2 = require("@ng2-dynamic-forms/core");
var primeng_example_model_1 = require("./primeng-example.model");
var MyDynamicFormComponent = (function () {
    function MyDynamicFormComponent(formService) {
        this.formService = formService;
        this.formModel = primeng_example_model_1.PRIMENG_EXAMPLE_MODEL;
    }
    MyDynamicFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.checkboxControl = this.formGroup.controls["exampleCheckbox"]; // Type assertion for having updateValue method available
        this.checkboxModel = this.formService.findById("exampleCheckbox", this.formModel);
        //this.checkboxControl.valueChanges.subscribe((value: string) => console.log("example checkbox field changed to: ", value, typeof value));
    };
    MyDynamicFormComponent.prototype.onChange = function ($event) {
        console.log("CHANGE event on " + $event.model.id + ": ", $event);
    };
    return MyDynamicFormComponent;
}());
MyDynamicFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "dynamic-form-primeng-example",
        templateUrl: "dynamicForm.component.html",
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_2.DynamicFormService])
], MyDynamicFormComponent);
exports.MyDynamicFormComponent = MyDynamicFormComponent;
//# sourceMappingURL=MyDynamicFormComponent.js.map