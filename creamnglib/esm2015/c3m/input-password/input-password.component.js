/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputPasswordComponent {
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
InputPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-password',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"password\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-password[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputPasswordComponent.ctorParameters = () => [];
InputPasswordComponent.propDecorators = {
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
    InputPasswordComponent.prototype.id;
    /** @type {?} */
    InputPasswordComponent.prototype.name;
    /** @type {?} */
    InputPasswordComponent.prototype.value;
    /** @type {?} */
    InputPasswordComponent.prototype.autocomplete;
    /** @type {?} */
    InputPasswordComponent.prototype.maxlength;
    /** @type {?} */
    InputPasswordComponent.prototype.required;
    /** @type {?} */
    InputPasswordComponent.prototype.disabled;
    /** @type {?} */
    InputPasswordComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2lucHV0LXBhc3N3b3JkL2lucHV0LXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLHNCQUFzQjtJQVdqQzs7UUFUUyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFFWCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFuQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGtXQUE4QztnQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztpQkFHRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFQTixvQ0FBaUI7O0lBQ2pCLHNDQUFtQjs7SUFDbkIsdUNBQW9COztJQUNwQiw4Q0FBNkI7O0lBQzdCLDJDQUF3Qjs7SUFDeEIsMENBQTJCOztJQUMzQiwwQ0FBMkI7O0lBQzNCLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWlucHV0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb24nO1xuICBASW5wdXQoKSBtYXhsZW5ndGggPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=