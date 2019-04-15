/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { TabsComponent } from '../tabs.component';
var TabComponent = /** @class */ (function () {
    /* Constructor Tab Component */
    function TabComponent(tabs) {
        tabs.addTab(this);
        this.idTab = this.randomID();
    }
    /* ID for Accessbility */
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /* ID for Accessbility */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    };
    /* ID for Accessbility */
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterViewInit = /* ID for Accessbility */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.randomID = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-tab',
                    template: "<div class=\"content\" [attr.aria-hidden]=\"!isActive\" [attr.aria-labeledby]=\"tabID\" id=\"{{ panelID }}\">\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabsComponent }
    ]; };
    TabComponent.propDecorators = {
        tabTitle: [{ type: Input }],
        isActive: [{ type: Input }],
        idTab: [{ type: Input }],
        isDisabled: [{ type: Input }]
    };
    return TabComponent;
}());
export { TabComponent };
if (false) {
    /** @type {?} */
    TabComponent.prototype.tabTitle;
    /** @type {?} */
    TabComponent.prototype.isActive;
    /** @type {?} */
    TabComponent.prototype.idTab;
    /** @type {?} */
    TabComponent.prototype.isDisabled;
    /** @type {?} */
    TabComponent.prototype.tabID;
    /** @type {?} */
    TabComponent.prototype.panelID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS90YWJzL3RhYnMtaXRlbS90YWJzLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxEO0lBY0UsK0JBQStCO0lBQy9CLHNCQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7SUFDekIsK0JBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQseUJBQXlCOzs7OztJQUN6QixzQ0FBZTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7O1lBQ1EsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixnS0FBeUM7b0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBUFEsYUFBYTs7OzJCQVNuQixLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOztJQTBCUixtQkFBQztDQUFBLEFBcENELElBb0NDO1NBOUJZLFlBQVk7OztJQUN2QixnQ0FBa0I7O0lBQ2xCLGdDQUEyQjs7SUFDM0IsNkJBQXVCOztJQUN2QixrQ0FBNkI7O0lBQzdCLDZCQUFjOztJQUNkLCtCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuLi90YWJzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy1pdGVtLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSB0YWJUaXRsZTtcbiAgQElucHV0KCkgaXNBY3RpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlkVGFiOiBudW1iZXI7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIHRhYklEOiBzdHJpbmc7XG4gIHBhbmVsSUQ6IHN0cmluZztcblxuICAvKiBDb25zdHJ1Y3RvciBUYWIgQ29tcG9uZW50ICovXG4gIGNvbnN0cnVjdG9yKHRhYnM6IFRhYnNDb21wb25lbnQpIHtcbiAgICB0YWJzLmFkZFRhYih0aGlzKTtcbiAgICB0aGlzLmlkVGFiID0gdGhpcy5yYW5kb21JRCgpO1xuICB9XG5cbiAgLyogSUQgZm9yIEFjY2Vzc2JpbGl0eSAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRhYklEID0gJ3RhYicgKyB0aGlzLmlkVGFiO1xuICAgIHRoaXMucGFuZWxJRCA9ICdwYW5lbCcgKyB0aGlzLmlkVGFiO1xuICB9XG5cbiAgLyogSUQgZm9yIEFjY2Vzc2JpbGl0eSAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy50YWJJRCA9ICd0YWInICsgdGhpcy5pZFRhYjtcbiAgICB0aGlzLnBhbmVsSUQgPSAncGFuZWwnICsgdGhpcy5pZFRhYjtcbiAgfVxuXG4gIHJhbmRvbUlEKCkge1xuICAgIGNvbnN0IGlkUmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDIwMDAwIC0gMSkgKyAxKTtcbiAgICByZXR1cm4gaWRSYW5kb207XG4gIH1cbn1cbiJdfQ==