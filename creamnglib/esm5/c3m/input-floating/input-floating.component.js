/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var InputFloatingComponent = /** @class */ (function () {
    function InputFloatingComponent() {
        this.floating = 'bottom';
    }
    /**
     * @return {?}
     */
    InputFloatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputFloatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-input-floating',
                    template: "<p [ngClass]=\"this.floating\">\n  <input type=\"text\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-input-floating>p{position:relative;overflow:hidden;width:40%;font-size:1rem;min-width:220px}c3m-input-floating input{width:100%;border:2px solid gray;background:0 0;position:relative;top:0;left:0;z-index:1;padding:8px 12px;outline:0;font-family:quicksandregular;box-sizing:border-box}c3m-input-floating input:valid{background:#fff}c3m-input-floating input:focus{border-color:#f06d06}c3m-input-floating input:focus+label{background:#f06d06;color:#fff;font-size:70%;padding:1px 6px;z-index:2;text-transform:uppercase}c3m-input-floating label{transition:background .2s,color .2s,top .2s,bottom .2s,right .2s,left .2s;position:absolute;color:#999;padding:7px 6px}c3m-input-floating p.bottom>input{padding:12px 0}c3m-input-floating p.bottom>label{top:0;bottom:0;left:0;width:100%}c3m-input-floating p.bottom>input:focus{padding:4px 6px 20px}c3m-input-floating p.bottom>input:focus+label{top:100%;margin-top:-16px}c3m-input-floating p.right label{top:2px;right:100%;width:100%;margin-right:-100%;bottom:2px}c3m-input-floating p.right input:focus+label{right:0;margin-right:0;width:40%;padding-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    InputFloatingComponent.ctorParameters = function () { return []; };
    InputFloatingComponent.propDecorators = {
        title: [{ type: Input }],
        floating: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }]
    };
    return InputFloatingComponent;
}());
export { InputFloatingComponent };
if (false) {
    /** @type {?} */
    InputFloatingComponent.prototype.title;
    /** @type {?} */
    InputFloatingComponent.prototype.floating;
    /** @type {?} */
    InputFloatingComponent.prototype.name;
    /** @type {?} */
    InputFloatingComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmxvYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2lucHV0LWZsb2F0aW5nL2lucHV0LWZsb2F0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFhRTtRQUpTLGFBQVEsR0FBRyxRQUFRLENBQUM7SUFJZCxDQUFDOzs7O0lBRWhCLHlDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQWZkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix5S0FBOEM7b0JBRTlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7O3dCQUdFLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7O0lBS1IsNkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVZZLHNCQUFzQjs7O0lBRWpDLHVDQUFlOztJQUNmLDBDQUE2Qjs7SUFDN0Isc0NBQWM7O0lBQ2Qsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1pbnB1dC1mbG9hdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1mbG9hdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWZsb2F0aW5nLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZsb2F0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSBmbG9hdGluZyA9ICdib3R0b20nO1xuICBASW5wdXQoKSBuYW1lO1xuICBASW5wdXQoKSBpZDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19