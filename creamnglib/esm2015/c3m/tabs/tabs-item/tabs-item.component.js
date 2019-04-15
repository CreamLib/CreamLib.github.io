/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { TabsComponent } from '../tabs.component';
export class TabComponent {
    /* Constructor Tab Component */
    /**
     * @param {?} tabs
     */
    constructor(tabs) {
        tabs.addTab(this);
        this.idTab = this.randomID();
    }
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    }
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    }
    /**
     * @return {?}
     */
    randomID() {
        /** @type {?} */
        const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-tab',
                template: "<div class=\"content\" [attr.aria-hidden]=\"!isActive\" [attr.aria-labeledby]=\"tabID\" id=\"{{ panelID }}\">\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabsComponent }
];
TabComponent.propDecorators = {
    tabTitle: [{ type: Input }],
    isActive: [{ type: Input }],
    idTab: [{ type: Input }],
    isDisabled: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS90YWJzL3RhYnMtaXRlbS90YWJzLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWxELE1BQU0sT0FBTyxZQUFZOzs7OztJQVN2QixZQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBR0QsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdLQUF5QztnQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBUFEsYUFBYTs7O3VCQVNuQixLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBSE4sZ0NBQWtCOztJQUNsQixnQ0FBMkI7O0lBQzNCLDZCQUF1Qjs7SUFDdkIsa0NBQTZCOztJQUM3Qiw2QkFBYzs7SUFDZCwrQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFicy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYnMtaXRlbS5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgdGFiVGl0bGU7XG4gIEBJbnB1dCgpIGlzQWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBpZFRhYjogbnVtYmVyO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICB0YWJJRDogc3RyaW5nO1xuICBwYW5lbElEOiBzdHJpbmc7XG5cbiAgLyogQ29uc3RydWN0b3IgVGFiIENvbXBvbmVudCAqL1xuICBjb25zdHJ1Y3Rvcih0YWJzOiBUYWJzQ29tcG9uZW50KSB7XG4gICAgdGFicy5hZGRUYWIodGhpcyk7XG4gICAgdGhpcy5pZFRhYiA9IHRoaXMucmFuZG9tSUQoKTtcbiAgfVxuXG4gIC8qIElEIGZvciBBY2Nlc3NiaWxpdHkgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJJRCA9ICd0YWInICsgdGhpcy5pZFRhYjtcbiAgICB0aGlzLnBhbmVsSUQgPSAncGFuZWwnICsgdGhpcy5pZFRhYjtcbiAgfVxuXG4gIC8qIElEIGZvciBBY2Nlc3NiaWxpdHkgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudGFiSUQgPSAndGFiJyArIHRoaXMuaWRUYWI7XG4gICAgdGhpcy5wYW5lbElEID0gJ3BhbmVsJyArIHRoaXMuaWRUYWI7XG4gIH1cblxuICByYW5kb21JRCgpIHtcbiAgICBjb25zdCBpZFJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgyMDAwMCAtIDEpICsgMSk7XG4gICAgcmV0dXJuIGlkUmFuZG9tO1xuICB9XG59XG4iXX0=