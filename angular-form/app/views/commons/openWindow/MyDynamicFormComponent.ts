/**
 * Created by Mos on 2016/12/20.
 */
import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {FormGroup,FormControl,} from '@angular/forms';
import {MY_DYNAMIC_FORM_MODEL} from "./MY_DYNAMIC_FORM_MODEL";
import {DynamicFormControlModel, DynamicFormService} from "@ng2-dynamic-forms/core";
// REACTIVE_FORM_DIRECTIVES

@Component({
    moduleId:module.id,
    selector:'dynamic-form-test',
    templateUrl:'dynamicForm.component.html',
    encapsulation: ViewEncapsulation.None
})

export class MyDynamicFormComponent implements OnInit {

    myDynamicFormModel: Array<DynamicFormControlModel> = MY_DYNAMIC_FORM_MODEL;
    myForm: FormGroup;

    constructor(private dynamicFormService: DynamicFormService) {}

    ngOnInit() {
        this.myForm = this.dynamicFormService.createFormGroup(this.myDynamicFormModel);
    }
}