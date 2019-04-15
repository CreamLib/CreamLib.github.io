/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class RadioItemComponent {
    constructor() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-radio-item',
                template: "<li>\n  <input\n    type=\"radio\"\n    id=\"{{ id }}\"\n    [name]=\"this.name\"\n    [value]=\"this.value\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n  />\n  <label for=\"{{ id }}\">{{ this.title }}</label>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
RadioItemComponent.ctorParameters = () => [];
RadioItemComponent.propDecorators = {
    title: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioItemComponent.prototype.title;
    /** @type {?} */
    RadioItemComponent.prototype.id;
    /** @type {?} */
    RadioItemComponent.prototype.name;
    /** @type {?} */
    RadioItemComponent.prototype.value;
    /** @type {?} */
    RadioItemComponent.prototype.checked;
    /** @type {?} */
    RadioItemComponent.prototype.disabled;
    /** @type {?} */
    RadioItemComponent.prototype.required;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vcmFkaW8vcmFkaW8taXRlbS9yYWRpby1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLGtCQUFrQjtJQVU3Qjs7UUFSUyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBUUwsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBbEJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixpUkFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7b0JBR0UsS0FBSztpQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQU5OLG1DQUFvQjs7SUFDcEIsZ0NBQW9COztJQUNwQixrQ0FBc0I7O0lBQ3RCLG1DQUF1Qjs7SUFDdkIscUNBQTBCOztJQUMxQixzQ0FBMkI7O0lBQzNCLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXJhZGlvLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8taXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLWl0ZW0uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19