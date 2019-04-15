/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from '../carousel.component';
var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(carousel) {
        this.carousel = carousel;
        this.isVisible = true;
        this.tabIndex = '-1';
        this.carousel.addGroup(this);
    }
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.itemID = 'item' + this.index;
    };
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.itemID = 'item' + this.index;
    };
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.previousSlide = /**
     * @return {?}
     */
    function () {
        this.carousel.previous(this);
    };
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.nextSlide = /**
     * @return {?}
     */
    function () {
        this.carousel.next(this);
    };
    CarouselItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-carousel-item',
                    template: "<!-- A Carousel Item-->\n<li\n  class=\"carousel-item\"\n  role=\"tab\"\n  tabindex=\"{{ tabIndex }}\"\n  [attr.aria-selected]=\"isVisible\"\n  [attr.aria-controls]=\"itemID\"\n>\n  <!-- Previous button -->\n  <button\n    class=\"previousCarouselItem\"\n    tabindex=\"{{ tabIndex }}\"\n    (click)=\"previousSlide()\"\n    aria-label=\"Previous slide\"\n  ></button>\n\n  <!-- Carousel item Content -->\n  <div class=\"carousel-item-content\" role=\"tabpanel\" id=\"{{ itemID }}\" [attr.aria-hidden]=\"!isVisible\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Next Button -->\n  <button class=\"nextCarouselItem\" tabindex=\"{{ tabIndex }}\" (click)=\"nextSlide()\" aria-label=\"Next slide\"></button>\n</li>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CarouselItemComponent.ctorParameters = function () { return [
        { type: CarouselComponent }
    ]; };
    CarouselItemComponent.propDecorators = {
        isVisible: [{ type: Input }],
        index: [{ type: Input }],
        tabIndex: [{ type: Input }],
        itemID: [{ type: Input }]
    };
    return CarouselItemComponent;
}());
export { CarouselItemComponent };
if (false) {
    /** @type {?} */
    CarouselItemComponent.prototype.isVisible;
    /** @type {?} */
    CarouselItemComponent.prototype.index;
    /** @type {?} */
    CarouselItemComponent.prototype.tabIndex;
    /** @type {?} */
    CarouselItemComponent.prototype.itemID;
    /**
     * @type {?}
     * @private
     */
    CarouselItemComponent.prototype.carousel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBWUUsK0JBQW9CLFFBQTJCO1FBQTNCLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBTHRDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUl2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMnRCQUE2QztvQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFQUSxpQkFBaUI7Ozs0QkFTdkIsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFxQlIsNEJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQXpCWSxxQkFBcUI7OztJQUNoQywwQ0FBMEI7O0lBQzFCLHNDQUF1Qjs7SUFDdkIseUNBQXlCOztJQUN6Qix1Q0FBd0I7Ozs7O0lBRVoseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tY2Fyb3VzZWwtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgdGFiSW5kZXggPSAnLTEnO1xuICBASW5wdXQoKSBpdGVtSUQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudCkge1xuICAgIHRoaXMuY2Fyb3VzZWwuYWRkR3JvdXAodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLml0ZW1JRCA9ICdpdGVtJyArIHRoaXMuaW5kZXg7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pdGVtSUQgPSAnaXRlbScgKyB0aGlzLmluZGV4O1xuICB9XG5cbiAgcHJldmlvdXNTbGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLnByZXZpb3VzKHRoaXMpO1xuICB9XG5cbiAgbmV4dFNsaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWwubmV4dCh0aGlzKTtcbiAgfVxufVxuIl19