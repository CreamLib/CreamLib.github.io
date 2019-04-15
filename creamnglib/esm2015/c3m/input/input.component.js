/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputComponent {
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
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"text\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
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
    InputComponent.prototype.id;
    /** @type {?} */
    InputComponent.prototype.name;
    /** @type {?} */
    InputComponent.prototype.value;
    /** @type {?} */
    InputComponent.prototype.autocomplete;
    /** @type {?} */
    InputComponent.prototype.maxlength;
    /** @type {?} */
    InputComponent.prototype.required;
    /** @type {?} */
    InputComponent.prototype.disabled;
    /** @type {?} */
    InputComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLGNBQWM7SUFXekI7O1FBVFMsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBRVgsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBbkJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsOFZBQXFDO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O2lCQUdFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQVBOLDRCQUFpQjs7SUFDakIsOEJBQW1COztJQUNuQiwrQkFBb0I7O0lBQ3BCLHNDQUE2Qjs7SUFDN0IsbUNBQXdCOztJQUN4QixrQ0FBMkI7O0lBQzNCLGtDQUEyQjs7SUFDM0IscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20taW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb24nO1xuICBASW5wdXQoKSBtYXhsZW5ndGggPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=