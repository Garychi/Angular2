"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/12/20.
 */
var core_1 = require("@ng2-dynamic-forms/core");
exports.MY_DYNAMIC_FORM_MODEL = [
    new core_1.DynamicInputModel({
        id: "exampleInput",
        label: "Example Input",
        maxLength: 42,
        placeholder: "example input",
    }),
    new core_1.DynamicRadioGroupModel({
        id: "exampleRadioGroup",
        label: "Example Radio Group",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            }
        ],
        value: "option-3"
    }),
    new core_1.DynamicCheckboxModel({
        id: "exampleCheckbox",
        label: "I do agree"
    })
];
//# sourceMappingURL=MY_DYNAMIC_FORM_MODEL.js.map