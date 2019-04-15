/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var InputMailComponent = /** @class */ (function () {
    function InputMailComponent() {
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
    InputMailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputMailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-input-mail',
                    template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"email\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    [multiple]=\"multiple\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-input-mail[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}c3m-input-mail input{width:85%;max-width:22em}"]
                }] }
    ];
    /** @nocollapse */
    InputMailComponent.ctorParameters = function () { return []; };
    InputMailComponent.propDecorators = {
        id: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        autocomplete: [{ type: Input }],
        maxlength: [{ type: Input }],
        multiple: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        placeholder: [{ type: Input }]
    };
    return InputMailComponent;
}());
export { InputMailComponent };
if (false) {
    /** @type {?} */
    InputMailComponent.prototype.id;
    /** @type {?} */
    InputMailComponent.prototype.name;
    /** @type {?} */
    InputMailComponent.prototype.value;
    /** @type {?} */
    InputMailComponent.prototype.autocomplete;
    /** @type {?} */
    InputMailComponent.prototype.maxlength;
    /** @type {?} */
    InputMailComponent.prototype.multiple;
    /** @type {?} */
    InputMailComponent.prototype.required;
    /** @type {?} */
    InputMailComponent.prototype.disabled;
    /** @type {?} */
    InputMailComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbWFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vaW5wdXQtbWFpbC9pbnB1dC1tYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFrQkU7O1FBVlMsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUlmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBRVgsQ0FBQzs7OztJQUVoQixxQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFwQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtWQUEwQztvQkFFMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7cUJBR0UsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBS1IseUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWZZLGtCQUFrQjs7O0lBRTdCLGdDQUFpQjs7SUFDakIsa0NBQW1COztJQUNuQixtQ0FBb0I7O0lBQ3BCLDBDQUE2Qjs7SUFDN0IsdUNBQXdCOztJQUN4QixzQ0FBMkI7O0lBQzNCLHNDQUEyQjs7SUFDM0Isc0NBQTJCOztJQUMzQix5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1pbnB1dC1tYWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LW1haWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1tYWlsLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dE1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb24nO1xuICBASW5wdXQoKSBtYXhsZW5ndGggPSAnJztcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19