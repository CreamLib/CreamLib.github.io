/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StepComponent } from '../step.component';
var StepItemComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function StepItemComponent(step, cdr) {
        this.cdr = cdr;
        this.isActive = false;
        this.isPassed = false;
        this.stepLink = '';
        step.addTab(this); // Add item on Items Tab
    }
    Object.defineProperty(StepItemComponent.prototype, "Past", {
        get: /**
         * @return {?}
         */
        function () {
            return this._past;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._past = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepItemComponent.prototype, "Future", {
        get: /**
         * @return {?}
         */
        function () {
            return this._future;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._future = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StepItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.reference = this.itemRef;
    };
    StepItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-step-item',
                    template: "<!-- Step Item -->\n<li #items [ngClass]=\"{ active: isActive, past: Past, future: Future }\" [c3mStepCurrent]=\"isActive\">\n  <ng-container *ngIf=\"isPassed\">\n    <a href=\"{{ stepLink }}\">{{ title }}</a>\n  </ng-container>\n  <ng-container *ngIf=\"!isPassed\">\n    {{ title }}\n  </ng-container>\n</li>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StepItemComponent.ctorParameters = function () { return [
        { type: StepComponent },
        { type: ChangeDetectorRef }
    ]; };
    StepItemComponent.propDecorators = {
        itemRef: [{ type: ViewChild, args: ['items',] }],
        title: [{ type: Input }],
        isActive: [{ type: Input }],
        isPassed: [{ type: Input }],
        stepLink: [{ type: Input }],
        indexStep: [{ type: Input }],
        reference: [{ type: Input }],
        Past: [{ type: Input, args: ['isPast',] }],
        Future: [{ type: Input, args: ['isFuture',] }]
    };
    return StepItemComponent;
}());
export { StepItemComponent };
if (false) {
    /** @type {?} */
    StepItemComponent.prototype.itemRef;
    /** @type {?} */
    StepItemComponent.prototype.title;
    /** @type {?} */
    StepItemComponent.prototype.isActive;
    /** @type {?} */
    StepItemComponent.prototype.isPassed;
    /** @type {?} */
    StepItemComponent.prototype.stepLink;
    /** @type {?} */
    StepItemComponent.prototype.indexStep;
    /** @type {?} */
    StepItemComponent.prototype.reference;
    /** @type {?} */
    StepItemComponent.prototype._past;
    /** @type {?} */
    StepItemComponent.prototype._future;
    /**
     * @type {?}
     * @private
     */
    StepItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zdGVwL3N0ZXAtaXRlbS9zdGVwLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQ7SUF1Q0UsaUJBQWlCO0lBQ2pCLDJCQUFZLElBQW1CLEVBQVUsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3QnRELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBNEJyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBQzdDLENBQUM7SUF2QkQsc0JBQ0ksbUNBQUk7Ozs7UUFJUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQVBELFVBQ1MsS0FBYztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBT0Qsc0JBQ0kscUNBQU07Ozs7UUFJVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQVBELFVBQ1csS0FBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBVUQsMkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG1VQUF5Qzs7aUJBRTFDOzs7O2dCQU5RLGFBQWE7Z0JBREUsaUJBQWlCOzs7MEJBVXRDLFNBQVMsU0FBQyxPQUFPO3dCQUdqQixLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFJTCxLQUFLLFNBQUMsUUFBUTt5QkFXZCxLQUFLLFNBQUMsVUFBVTs7SUFpQm5CLHdCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1ksaUJBQWlCOzs7SUFFNUIsb0NBQXdDOztJQUd4QyxrQ0FBZTs7SUFDZixxQ0FBMEI7O0lBQzFCLHFDQUEwQjs7SUFDMUIscUNBQXVCOztJQUN2QixzQ0FBMkI7O0lBQzNCLHNDQUErQjs7SUFHL0Isa0NBQWU7O0lBV2Ysb0NBQWlCOzs7OztJQVdnQixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RlcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tc3RlcC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtaXRlbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyogTGlzdCBvZiBTdGVwIGl0ZW1zICovXG4gIEBWaWV3Q2hpbGQoJ2l0ZW1zJykgaXRlbVJlZjogRWxlbWVudFJlZjtcblxuICAvKiBJTlBVVFMgKi9cbiAgQElucHV0KCkgdGl0bGU7XG4gIEBJbnB1dCgpIGlzQWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzUGFzc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0ZXBMaW5rID0gJyc7XG4gIEBJbnB1dCgpIGluZGV4U3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSByZWZlcmVuY2U6IEVsZW1lbnRSZWY7XG5cbiAgLyogSU5QVVQgXCJQQVNUXCIgQU5EIEdFVFRFUlMgLyBTRVRURVJTICovXG4gIF9wYXN0OiBib29sZWFuO1xuICBASW5wdXQoJ2lzUGFzdCcpXG4gIHNldCBQYXN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFzdCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBnZXQgUGFzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzdDtcbiAgfVxuXG4gIC8qIElOUFVUIFwiRlVUVVJFXCIgQU5EIEdFVFRFUlMgLyBTRVRURVJTICovXG4gIF9mdXR1cmU6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXNGdXR1cmUnKVxuICBzZXQgRnV0dXJlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZnV0dXJlID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIGdldCBGdXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1dHVyZTtcbiAgfVxuXG4gIC8qIENPTlNUUlVDVE9SICovXG4gIGNvbnN0cnVjdG9yKHN0ZXA6IFN0ZXBDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN0ZXAuYWRkVGFiKHRoaXMpOyAvLyBBZGQgaXRlbSBvbiBJdGVtcyBUYWJcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHRoaXMuaXRlbVJlZjtcbiAgfVxufVxuIl19