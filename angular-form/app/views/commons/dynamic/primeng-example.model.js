"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/12/22.
 */
var core_1 = require("@ng2-dynamic-forms/core");
exports.PRIMENG_EXAMPLE_MODEL = [
    new core_1.DynamicSelectModel({
        id: "primeSelect",
        label: "Example Select",
        multiple: true,
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
        value: ["option-3"]
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row",
            control: "ui-grid-col-9",
            label: "ui-grid-col-3"
        }
    }),
    new core_1.DynamicInputModel({
        id: "primeInput",
        label: "Example Input",
        list: ["One", "Two", "Three", "Four", "Five"],
        maxLength: 51,
        placeholder: "example input"
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row",
            control: "ui-grid-col-9",
            label: "ui-grid-col-3"
        }
    }),
    new core_1.DynamicCheckboxGroupModel({
        id: "primeCheckboxGroup",
        legend: "Example Checkbox Group",
        group: [
            new core_1.DynamicCheckboxModel({
                id: "primeCheckboxGroup1",
                label: "Checkbox 1"
            }, {
                element: {
                    label: "ui-widget"
                },
                grid: {
                    container: "ui-grid-row"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "primeCheckboxGroup2",
                label: "Checkbox 2",
                value: true
            }, {
                element: {
                    label: "ui-widget"
                },
                grid: {
                    container: "ui-grid-row"
                }
            })
        ]
    }),
    new core_1.DynamicRadioGroupModel({
        id: "primeRadioGroup",
        legend: "Example Radio Group",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                disabled: true,
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            },
            {
                label: "Option 4",
                value: "option-4"
            }
        ],
        value: "option-3"
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row"
        }
    }),
    new core_1.DynamicSwitchModel({
        id: "primeSwitch",
        label: "Example Switch",
        offLabel: "Off",
        onLabel: "On",
        value: false
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row",
            control: "ui-grid-col-9",
            label: "ui-grid-col-3"
        }
    }),
    new core_1.DynamicTextAreaModel({
        id: "primeTextArea",
        label: "Example Textarea",
        rows: 5,
        placeholder: "example Textarea",
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row",
            control: "ui-grid-col-9",
            label: "ui-grid-col-3"
        }
    }),
    new core_1.DynamicSliderModel({
        id: "primeSlider",
        label: "Example Slider",
        min: 0,
        max: 10,
        step: 1,
        value: 3
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row",
            control: "ui-grid-col-9",
            label: "ui-grid-col-3"
        }
    }),
    new core_1.DynamicCheckboxModel({
        id: "primeCheckbox",
        label: "I do agree"
    }, {
        element: {
            label: "ui-widget"
        },
        grid: {
            container: "ui-grid-row"
        }
    })
];
//# sourceMappingURL=primeng-example.model.js.map