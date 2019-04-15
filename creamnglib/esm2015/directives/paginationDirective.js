/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
export class PaginationDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.liElement = this.el.nativeElement;
        if (this.pager === true) {
            this.liElement.childNodes[0].setAttribute('aria-current', 'page');
        }
    }
}
PaginationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mPaginationCurrent]'
            },] }
];
/** @nocollapse */
PaginationDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
PaginationDirective.propDecorators = {
    pager: [{ type: Input, args: ['c3mPaginationCurrent',] }]
};
if (false) {
    /** @type {?} */
    PaginationDirective.prototype.pager;
    /** @type {?} */
    PaginationDirective.prototype.liElement;
    /** @type {?} */
    PaginationDirective.prototype.buttonElement;
    /**
     * @type {?}
     * @private
     */
    PaginationDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PaginationDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbkRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcGFnaW5hdGlvbkRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUtoRixNQUFNLE9BQU8sbUJBQW1COzs7OztJQUs5QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDOzs7O0lBRW5FLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7O1lBSm1CLFVBQVU7WUFBRSxTQUFTOzs7b0JBTXRDLEtBQUssU0FBQyxzQkFBc0I7Ozs7SUFBN0Isb0NBQThDOztJQUM5Qyx3Q0FBVTs7SUFDViw0Q0FBYzs7Ozs7SUFFRixpQ0FBc0I7Ozs7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2MzbVBhZ2luYXRpb25DdXJyZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnYzNtUGFnaW5hdGlvbkN1cnJlbnQnKSBwYWdlcjogYm9vbGVhbjtcbiAgbGlFbGVtZW50O1xuICBidXR0b25FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5wYWdlciA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5saUVsZW1lbnQuY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdwYWdlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=