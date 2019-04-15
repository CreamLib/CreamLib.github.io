/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
export class StepsDirective {
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
        /** @type {?} */
        const liElement = this.el.nativeElement;
        if (this.activeStep) {
            liElement.setAttribute('aria-current', 'step');
        }
    }
}
StepsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mStepCurrent]'
            },] }
];
/** @nocollapse */
StepsDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
StepsDirective.propDecorators = {
    activeStep: [{ type: Input, args: ['c3mStepCurrent',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHNEaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3N0ZXBzRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS2hGLE1BQU0sT0FBTyxjQUFjOzs7OztJQUd6QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDOzs7O0lBRW5FLFFBQVE7O2NBQ0EsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUN2QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQUptQixVQUFVO1lBQUUsU0FBUzs7O3lCQU10QyxLQUFLLFNBQUMsZ0JBQWdCOzs7O0lBQXZCLG9DQUE2Qzs7Ozs7SUFFakMsNEJBQXNCOzs7OztJQUFFLGtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjM21TdGVwQ3VycmVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjM21TdGVwQ3VycmVudCcpIGFjdGl2ZVN0ZXA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwKSB7XG4gICAgICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAnc3RlcCcpO1xuICAgIH1cbiAgfVxufVxuIl19