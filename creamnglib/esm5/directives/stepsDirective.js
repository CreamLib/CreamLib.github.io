/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
var StepsDirective = /** @class */ (function () {
    function StepsDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    StepsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var liElement = this.el.nativeElement;
        if (this.activeStep) {
            liElement.setAttribute('aria-current', 'step');
        }
    };
    StepsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[c3mStepCurrent]'
                },] }
    ];
    /** @nocollapse */
    StepsDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    StepsDirective.propDecorators = {
        activeStep: [{ type: Input, args: ['c3mStepCurrent',] }]
    };
    return StepsDirective;
}());
export { StepsDirective };
if (false) {
    /** @type {?} */
    StepsDirective.prototype.activeStep;
    /**
     * @type {?}
     * @private
     */
    StepsDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    StepsDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNEaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3N0ZXBzRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBTUUsd0JBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7Ozs7SUFFbkUsaUNBQVE7OztJQUFSOztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUptQixVQUFVO2dCQUFFLFNBQVM7Ozs2QkFNdEMsS0FBSyxTQUFDLGdCQUFnQjs7SUFVekIscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FYWSxjQUFjOzs7SUFDekIsb0NBQTZDOzs7OztJQUVqQyw0QkFBc0I7Ozs7O0lBQUUsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2MzbVN0ZXBDdXJyZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2MzbVN0ZXBDdXJyZW50JykgYWN0aXZlU3RlcDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXApIHtcbiAgICAgIGxpRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICdzdGVwJyk7XG4gICAgfVxuICB9XG59XG4iXX0=