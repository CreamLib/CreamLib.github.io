/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var SkipComponent = /** @class */ (function () {
    function SkipComponent() {
        this.isHidden = false;
        this.styleClass = '';
    }
    /**
     * @return {?}
     */
    SkipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SkipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-skip',
                    template: "<a\n  c3mScrollTo\n  routerLink=\"./\"\n  fragment=\"{{ this.target }}\"\n  class=\"{{ this.styleClass }}\"\n  [ngClass]=\"{ hiddenLink: isHidden }\"\n>\n  <ng-content></ng-content>\n</a>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-skip a.hiddenLink{position:absolute;overflow:hidden;width:1px;height:1px;left:-9999px}c3m-skip a.hiddenLink:focus{position:static;overflow:visible;width:auto;height:auto}"]
                }] }
    ];
    /** @nocollapse */
    SkipComponent.ctorParameters = function () { return []; };
    SkipComponent.propDecorators = {
        target: [{ type: Input }],
        isHidden: [{ type: Input }],
        styleClass: [{ type: Input }]
    };
    return SkipComponent;
}());
export { SkipComponent };
if (false) {
    /** @type {?} */
    SkipComponent.prototype.target;
    /** @type {?} */
    SkipComponent.prototype.isHidden;
    /** @type {?} */
    SkipComponent.prototype.styleClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc2tpcC9za2lwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFXRTtRQUhTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVWLENBQUM7Ozs7SUFFaEIsZ0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBYmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix5TUFBb0M7b0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7O3lCQUVFLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQUtSLG9CQUFDO0NBQUEsQUFkRCxJQWNDO1NBUlksYUFBYTs7O0lBQ3hCLCtCQUF3Qjs7SUFDeEIsaUNBQTBCOztJQUMxQixtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1za2lwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NraXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9za2lwLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTa2lwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzSGlkZGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19