/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
var PaginationDirective = /** @class */ (function () {
    function PaginationDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    PaginationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.liElement = this.el.nativeElement;
        if (this.pager === true) {
            this.liElement.childNodes[0].setAttribute('aria-current', 'page');
        }
    };
    PaginationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[c3mPaginationCurrent]'
                },] }
    ];
    /** @nocollapse */
    PaginationDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    PaginationDirective.propDecorators = {
        pager: [{ type: Input, args: ['c3mPaginationCurrent',] }]
    };
    return PaginationDirective;
}());
export { PaginationDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbkRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcGFnaW5hdGlvbkRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQVFFLDZCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDOzs7O0lBRW5FLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOzs7O2dCQUptQixVQUFVO2dCQUFFLFNBQVM7Ozt3QkFNdEMsS0FBSyxTQUFDLHNCQUFzQjs7SUFZL0IsMEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLG1CQUFtQjs7O0lBQzlCLG9DQUE4Qzs7SUFDOUMsd0NBQVU7O0lBQ1YsNENBQWM7Ozs7O0lBRUYsaUNBQXNCOzs7OztJQUFFLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjM21QYWdpbmF0aW9uQ3VycmVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2MzbVBhZ2luYXRpb25DdXJyZW50JykgcGFnZXI6IGJvb2xlYW47XG4gIGxpRWxlbWVudDtcbiAgYnV0dG9uRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucGFnZXIgPT09IHRydWUpIHtcbiAgICAgIHRoaXMubGlFbGVtZW50LmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAncGFnZScpO1xuICAgIH1cbiAgfVxufVxuIl19