/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputTelComponent {
    constructor() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.pattern = '';
        this.title = '';
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputTelComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-tel',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"tel\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [pattern]=\"\"\n    [title]=\"\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-tel input{width:85%;max-width:22em}c3m-input-tel[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputTelComponent.ctorParameters = () => [];
InputTelComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    pattern: [{ type: Input }],
    title: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputTelComponent.prototype.id;
    /** @type {?} */
    InputTelComponent.prototype.name;
    /** @type {?} */
    InputTelComponent.prototype.value;
    /** @type {?} */
    InputTelComponent.prototype.autocomplete;
    /** @type {?} */
    InputTelComponent.prototype.maxlength;
    /** @type {?} */
    InputTelComponent.prototype.pattern;
    /** @type {?} */
    InputTelComponent.prototype.title;
    /** @type {?} */
    InputTelComponent.prototype.required;
    /** @type {?} */
    InputTelComponent.prototype.disabled;
    /** @type {?} */
    InputTelComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9pbnB1dC10ZWwvaW5wdXQtdGVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLGlCQUFpQjtJQWE1Qjs7UUFYUyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQUssR0FBRyxFQUFFLENBQUM7UUFHWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUVYLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQXJCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG1ZQUF5QztnQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztpQkFHRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBVE4sK0JBQWlCOztJQUNqQixpQ0FBbUI7O0lBQ25CLGtDQUFvQjs7SUFDcEIseUNBQTZCOztJQUM3QixzQ0FBd0I7O0lBQ3hCLG9DQUFzQjs7SUFDdEIsa0NBQW9COztJQUNwQixxQ0FBMkI7O0lBQzNCLHFDQUEyQjs7SUFDM0Isd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20taW5wdXQtdGVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXRlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LXRlbC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb24nO1xuICBASW5wdXQoKSBtYXhsZW5ndGggPSAnJztcbiAgQElucHV0KCkgcGF0dGVybiA9ICcnO1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==