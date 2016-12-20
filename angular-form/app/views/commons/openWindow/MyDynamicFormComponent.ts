/**
 * Created by Mos on 2016/12/20.
 */
import {Component,OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MY_DYNAMIC_FORM_MODEL} from "./MY_DYNAMIC_FORM_MODEL";
import {DynamicFormControlModel, DynamicFormService} from "@ng2-dynamic-forms/core";
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
    moduleId:module.id,
    selector:'dynamic-test',
    templateUrl:'dynamicForm.component.html'
})

export class MyDynamicFormComponent implements OnInit {

    myDynamicFormModel: Array<DynamicFormControlModel> = MY_DYNAMIC_FORM_MODEL;
    myForm: FormGroup;

    constructor(private dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.myForm = this.dynamicFormService.createFormGroup(this.myDynamicFormModel);
    }
}