/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TabsComponent } from '../tabs.component';
export class TabComponent {
    /* Constructor Tab Component */
    /**
     * @param {?} tabs
     */
    constructor(tabs) {
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
                template: "<div [hidden]=\"!active\" class=\"content\" [attr.aria-hidden]=\"!active\" [attr.aria-labeledby]=\"tabID\" id=\"{{ panelID }}\">\n  <ng-content></ng-content>\n</div>\n",
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
    active: [{ type: Input }],
    idTab: [{ type: Input }],
    isDisabled: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS90YWJzL3RhYnMtaXRlbS90YWJzLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWxELE1BQU0sT0FBTyxZQUFZOzs7OztJQVN2QixZQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7OztJQUdELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixtTEFBeUM7Z0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVBRLGFBQWE7Ozt1QkFTbkIsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzs7OztJQUhOLGdDQUEwQjs7SUFDMUIsOEJBQXlCOztJQUN6Qiw2QkFBdUI7O0lBQ3ZCLGtDQUE2Qjs7SUFDN0IsNkJBQWM7O0lBQ2QsK0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4uL3RhYnMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLWl0ZW0uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHRhYlRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaWRUYWI6IG51bWJlcjtcbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgdGFiSUQ6IHN0cmluZztcbiAgcGFuZWxJRDogc3RyaW5nO1xuXG4gIC8qIENvbnN0cnVjdG9yIFRhYiBDb21wb25lbnQgKi9cbiAgY29uc3RydWN0b3IodGFiczogVGFic0NvbXBvbmVudCkge1xuICAgIHRoaXMuaWRUYWIgPSB0aGlzLnJhbmRvbUlEKCk7XG4gIH1cblxuICAvKiBJRCBmb3IgQWNjZXNzYmlsaXR5ICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFiSUQgPSAndGFiJyArIHRoaXMuaWRUYWI7XG4gICAgdGhpcy5wYW5lbElEID0gJ3BhbmVsJyArIHRoaXMuaWRUYWI7XG4gIH1cblxuICAvKiBJRCBmb3IgQWNjZXNzYmlsaXR5ICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRhYklEID0gJ3RhYicgKyB0aGlzLmlkVGFiO1xuICAgIHRoaXMucGFuZWxJRCA9ICdwYW5lbCcgKyB0aGlzLmlkVGFiO1xuICB9XG5cbiAgcmFuZG9tSUQoKSB7XG4gICAgY29uc3QgaWRSYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMjAwMDAgLSAxKSArIDEpO1xuICAgIHJldHVybiBpZFJhbmRvbTtcbiAgfVxufVxuIl19