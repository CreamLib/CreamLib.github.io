/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class ProgressComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-progress',
                template: "<p>\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <progress id=\"{{ id }}\" name=\"name\" [attr.max]=\"max\" [attr.value]=\"value\" disabled=\"disabled\"> </progress>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    max: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProgressComponent.prototype.id;
    /** @type {?} */
    ProgressComponent.prototype.name;
    /** @type {?} */
    ProgressComponent.prototype.value;
    /** @type {?} */
    ProgressComponent.prototype.max;
    /** @type {?} */
    ProgressComponent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLGlCQUFpQjtJQVE1QixnQkFBZSxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFoQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw0TUFBd0M7Z0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7aUJBR0UsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7O0lBSk4sK0JBQW9COztJQUNwQixpQ0FBc0I7O0lBQ3RCLGtDQUF1Qjs7SUFDdkIsZ0NBQXFCOztJQUNyQixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19