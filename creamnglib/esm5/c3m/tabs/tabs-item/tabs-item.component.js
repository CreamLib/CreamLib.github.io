/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TabsComponent } from '../tabs.component';
var TabComponent = /** @class */ (function () {
    /* Constructor Tab Component */
    function TabComponent(tabs) {
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
                    template: "<div [hidden]=\"!active\" class=\"content\" [attr.aria-hidden]=\"!active\" [attr.aria-labeledby]=\"tabID\" id=\"{{ panelID }}\">\n  <ng-content></ng-content>\n</div>\n",
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
        active: [{ type: Input }],
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
    TabComponent.prototype.active;
    /** @type {?} */
    TabComponent.prototype.idTab;
    /** @type {?} */
    TabComponent.prototype.isDisabled;
    /** @type {?} */
    TabComponent.prototype.tabID;
    /** @type {?} */
    TabComponent.prototype.panelID;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS90YWJzL3RhYnMtaXRlbS90YWJzLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxEO0lBY0UsK0JBQStCO0lBQy9CLHNCQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCx5QkFBeUI7Ozs7O0lBQ3pCLCtCQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7SUFDekIsc0NBQWU7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsbUxBQXlDO29CQUV6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVBRLGFBQWE7OzsyQkFTbkIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUF5QlIsbUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQTdCWSxZQUFZOzs7SUFDdkIsZ0NBQTBCOztJQUMxQiw4QkFBeUI7O0lBQ3pCLDZCQUF1Qjs7SUFDdkIsa0NBQTZCOztJQUM3Qiw2QkFBYzs7SUFDZCwrQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFicy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYnMtaXRlbS5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgdGFiVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBpZFRhYjogbnVtYmVyO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICB0YWJJRDogc3RyaW5nO1xuICBwYW5lbElEOiBzdHJpbmc7XG5cbiAgLyogQ29uc3RydWN0b3IgVGFiIENvbXBvbmVudCAqL1xuICBjb25zdHJ1Y3Rvcih0YWJzOiBUYWJzQ29tcG9uZW50KSB7XG4gICAgdGhpcy5pZFRhYiA9IHRoaXMucmFuZG9tSUQoKTtcbiAgfVxuXG4gIC8qIElEIGZvciBBY2Nlc3NiaWxpdHkgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJJRCA9ICd0YWInICsgdGhpcy5pZFRhYjtcbiAgICB0aGlzLnBhbmVsSUQgPSAncGFuZWwnICsgdGhpcy5pZFRhYjtcbiAgfVxuXG4gIC8qIElEIGZvciBBY2Nlc3NiaWxpdHkgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudGFiSUQgPSAndGFiJyArIHRoaXMuaWRUYWI7XG4gICAgdGhpcy5wYW5lbElEID0gJ3BhbmVsJyArIHRoaXMuaWRUYWI7XG4gIH1cblxuICByYW5kb21JRCgpIHtcbiAgICBjb25zdCBpZFJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgyMDAwMCAtIDEpICsgMSk7XG4gICAgcmV0dXJuIGlkUmFuZG9tO1xuICB9XG59XG4iXX0=