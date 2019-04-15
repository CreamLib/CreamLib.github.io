/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputUrlComponent {
    constructor() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputUrlComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-url',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"url\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-url input{width:85%;max-width:22em}c3m-input-url[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputUrlComponent.ctorParameters = () => [];
InputUrlComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputUrlComponent.prototype.id;
    /** @type {?} */
    InputUrlComponent.prototype.name;
    /** @type {?} */
    InputUrlComponent.prototype.value;
    /** @type {?} */
    InputUrlComponent.prototype.autocomplete;
    /** @type {?} */
    InputUrlComponent.prototype.maxlength;
    /** @type {?} */
    InputUrlComponent.prototype.required;
    /** @type {?} */
    InputUrlComponent.prototype.disabled;
    /** @type {?} */
    InputUrlComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdXJsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9pbnB1dC11cmwvaW5wdXQtdXJsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLGlCQUFpQjtJQVc1Qjs7UUFUUyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFFWCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFuQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw2VkFBeUM7Z0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7aUJBR0UsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBUE4sK0JBQWlCOztJQUNqQixpQ0FBbUI7O0lBQ25CLGtDQUFvQjs7SUFDcEIseUNBQTZCOztJQUM3QixzQ0FBd0I7O0lBQ3hCLHFDQUEyQjs7SUFDM0IscUNBQTJCOztJQUMzQix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1pbnB1dC11cmwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtdXJsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtdXJsLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFVybENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBuYW1lID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9ICdvbic7XG4gIEBJbnB1dCgpIG1heGxlbmd0aCA9ICcnO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==