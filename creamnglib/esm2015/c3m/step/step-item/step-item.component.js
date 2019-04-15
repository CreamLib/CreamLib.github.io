/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { StepComponent } from '../step.component';
export class StepItemComponent {
    /* CONSTRUCTOR */
    /**
     * @param {?} step
     * @param {?} cdr
     */
    constructor(step, cdr) {
        this.cdr = cdr;
        this.isActive = false;
        this.isPassed = false;
        this.stepLink = '';
        step.addTab(this); // Add item on Items Tab
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Past(value) {
        this._past = value;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    get Past() {
        return this._past;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Future(value) {
        this._future = value;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    get Future() {
        return this._future;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.reference = this.itemRef;
    }
}
StepItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-step-item',
                template: "<!-- Step Item -->\n<li #items [ngClass]=\"{ active: isActive, past: Past, future: Future }\" [c3mStepCurrent]=\"isActive\">\n  <ng-container *ngIf=\"isPassed\">\n    <a href=\"{{ stepLink }}\">{{ title }}</a>\n  </ng-container>\n  <ng-container *ngIf=\"!isPassed\">\n    {{ title }}\n  </ng-container>\n</li>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
StepItemComponent.ctorParameters = () => [
    { type: StepComponent },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zdGVwL3N0ZXAtaXRlbS9zdGVwLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBbUM1QixZQUFZLElBQW1CLEVBQVUsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3QnRELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBNEJyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBQzdDLENBQUM7Ozs7O0lBdkJELElBQ0ksSUFBSSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBSUQsSUFDSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQU9ELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsbVVBQXlDOzthQUUxQzs7OztZQU5RLGFBQWE7WUFERSxpQkFBaUI7OztzQkFVdEMsU0FBUyxTQUFDLE9BQU87b0JBR2pCLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUlMLEtBQUssU0FBQyxRQUFRO3FCQVdkLEtBQUssU0FBQyxVQUFVOzs7O0lBdkJqQixvQ0FBd0M7O0lBR3hDLGtDQUFlOztJQUNmLHFDQUEwQjs7SUFDMUIscUNBQTBCOztJQUMxQixxQ0FBdUI7O0lBQ3ZCLHNDQUEyQjs7SUFDM0Isc0NBQStCOztJQUcvQixrQ0FBZTs7SUFXZixvQ0FBaUI7Ozs7O0lBV2dCLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1zdGVwLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1pdGVtLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKiBMaXN0IG9mIFN0ZXAgaXRlbXMgKi9cbiAgQFZpZXdDaGlsZCgnaXRlbXMnKSBpdGVtUmVmOiBFbGVtZW50UmVmO1xuXG4gIC8qIElOUFVUUyAqL1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgaXNBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNQYXNzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RlcExpbmsgPSAnJztcbiAgQElucHV0KCkgaW5kZXhTdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJlZmVyZW5jZTogRWxlbWVudFJlZjtcblxuICAvKiBJTlBVVCBcIlBBU1RcIiBBTkQgR0VUVEVSUyAvIFNFVFRFUlMgKi9cbiAgX3Bhc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnaXNQYXN0JylcbiAgc2V0IFBhc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wYXN0ID0gdmFsdWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIGdldCBQYXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXN0O1xuICB9XG5cbiAgLyogSU5QVVQgXCJGVVRVUkVcIiBBTkQgR0VUVEVSUyAvIFNFVFRFUlMgKi9cbiAgX2Z1dHVyZTogYm9vbGVhbjtcbiAgQElucHV0KCdpc0Z1dHVyZScpXG4gIHNldCBGdXR1cmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mdXR1cmUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgZ2V0IEZ1dHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnV0dXJlO1xuICB9XG5cbiAgLyogQ09OU1RSVUNUT1IgKi9cbiAgY29uc3RydWN0b3Ioc3RlcDogU3RlcENvbXBvbmVudCwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3RlcC5hZGRUYWIodGhpcyk7IC8vIEFkZCBpdGVtIG9uIEl0ZW1zIFRhYlxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVmZXJlbmNlID0gdGhpcy5pdGVtUmVmO1xuICB9XG59XG4iXX0=