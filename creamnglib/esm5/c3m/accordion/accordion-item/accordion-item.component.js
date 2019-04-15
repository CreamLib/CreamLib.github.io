/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { trigger, state, transition, animate, style, AUTO_STYLE } from '@angular/animations';
import { AccordionComponent } from '../accordion.component';
var AccordionItemComponent = /** @class */ (function () {
    /* By default , add item to accordion */
    function AccordionItemComponent(accordion) {
        this.accordion = accordion;
        this.accordion.addGroup(this);
    }
    /* remove item to accordion*/
    /* remove item to accordion*/
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnDestroy = /* remove item to accordion*/
    /**
     * @return {?}
     */
    function () {
        this.accordion.removeGroup(this);
    };
    /* changes */
    /* changes */
    /**
     * @param {?} changes
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnChanges = /* changes */
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                /** @type {?} */
                var changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.accordion.groups[this.index + 1].toggleOpen();
                }
            }
        }
    };
    /* initialisation */
    /* initialisation */
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnInit = /* initialisation */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* when view init */
    /* when view init */
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngAfterViewInit = /* when view init */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* open accordion'element */
    /*toggleOpen(): void {
      if (!this.isOpen) {
        this.isOpen = true;
        this.accordion.closeOthers(this);
      } else if (this.isOpen) {
        this.accordion.closeAll(this);
      }
    }*/
    /* open accordion'element */
    /*toggleOpen(): void {
        if (!this.isOpen) {
          this.isOpen = true;
          this.accordion.closeOthers(this);
        } else if (this.isOpen) {
          this.accordion.closeAll(this);
        }
      }*/
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.toggleOpen = /* open accordion'element */
    /*toggleOpen(): void {
        if (!this.isOpen) {
          this.isOpen = true;
          this.accordion.closeOthers(this);
        } else if (this.isOpen) {
          this.accordion.closeAll(this);
        }
      }*/
    /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.accordion.closeOthers(this);
    };
    AccordionItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-accordion-item',
                    template: "<li class=\"accordion-group\">\n  <button\n    class=\"panel-heading\"\n    (click)=\"toggleOpen()\"\n    [attr.aria-expanded]=\"isOpen\"\n    [attr.aria-controls]=\"panelID\"\n    id=\"{{ tabID }}\"\n  >\n    {{ nameButton }}\n\n    <svg>\n      <use xlink:href=\"/assets/img/icons.svg#arrowDownSvg\"></use>\n    </svg>\n  </button>\n\n  <div\n    class=\"panel-collapse\"\n    [@openClose]=\"isOpen ? 'open' : 'closed'\"\n    [attr.aria-hidden]=\"!isOpen\"\n    id=\"{{ panelID }}\"\n    [attr.aria-labeledby]=\"tabID\"\n  >\n    <ng-content></ng-content>\n  </div>\n</li>\n",
                    animations: [
                        trigger('openClose', [
                            state('open', style({
                                height: AUTO_STYLE,
                                padding: '1em'
                            })),
                            state('closed', style({
                                display: 'none',
                                height: 0,
                                padding: '0 1em'
                            })),
                            transition('open => closed', [animate('0.2s ease-in')]),
                            transition('closed => open', [animate('0.2s ease-in')])
                        ])
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-accordion>ul{width:80%;padding:1rem}c3m-accordion-item>li{position:relative;color:var(--body-text);background-color:var(--body-bg);border:none;z-index:5}c3m-accordion-item>li.closed{color:var(--text-inv);background-color:var(--main-color);border-bottom:1px solid var(--body-bg)}c3m-accordion-item:last-child>li.closed{border:none}c3m-accordion-item>li>.panel-collapse{overflow:hidden;padding:0}c3m-accordion-item>li>button{position:relative;width:100%;height:100%;line-height:1.7rem;text-align:left;color:var(--text-inv);background-color:var(--main-color);background-size:2.1rem;padding:.5rem 2.5rem .5rem .5rem;border-radius:0;cursor:pointer;z-index:10}c3m-accordion-item>li>button svg{position:absolute;width:24px;height:24px;right:1rem;fill:#fff;transition:.3s;-webkit-transform:rotate(0);transform:rotate(0);z-index:1}c3m-accordion-item>li>button[aria-expanded=true] svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}"]
                }] }
    ];
    /** @nocollapse */
    AccordionItemComponent.ctorParameters = function () { return [
        { type: AccordionComponent }
    ]; };
    AccordionItemComponent.propDecorators = {
        nameButton: [{ type: Input }],
        urlImage: [{ type: Input }],
        isOpen: [{ type: Input }],
        index: [{ type: Input }]
    };
    return AccordionItemComponent;
}());
export { AccordionItemComponent };
if (false) {
    /** @type {?} */
    AccordionItemComponent.prototype.nameButton;
    /** @type {?} */
    AccordionItemComponent.prototype.urlImage;
    /** @type {?} */
    AccordionItemComponent.prototype.isOpen;
    /** @type {?} */
    AccordionItemComponent.prototype.index;
    /** @type {?} */
    AccordionItemComponent.prototype.tabID;
    /** @type {?} */
    AccordionItemComponent.prototype.panelID;
    /**
     * @type {?}
     * @private
     */
    AccordionItemComponent.prototype.accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFNTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQW1DRSx3Q0FBd0M7SUFDeEMsZ0NBQW9CLFNBQTZCO1FBQTdCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2QkFBNkI7Ozs7O0lBQzdCLDRDQUFXOzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsYUFBYTs7Ozs7O0lBQ2IsNENBQVc7Ozs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxLQUFLLElBQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUM1QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7O29CQUM1QixXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFFbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDcEQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjs7Ozs7SUFDcEIseUNBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0JBQW9COzs7OztJQUNwQixnREFBZTs7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw0QkFBNEI7SUFDNUI7Ozs7Ozs7T0FPRzs7Ozs7Ozs7Ozs7OztJQUVILDJDQUFVOzs7Ozs7Ozs7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQW5GRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsNGtCQUE4QztvQkFFOUMsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ25CLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO2dDQUNKLE1BQU0sRUFBRSxVQUFVO2dDQUNsQixPQUFPLEVBQUUsS0FBSzs2QkFDZixDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUNILFFBQVEsRUFDUixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLE1BQU07Z0NBQ2YsTUFBTSxFQUFFLENBQUM7Z0NBQ1QsT0FBTyxFQUFFLE9BQU87NkJBQ2pCLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs0QkFDdkQsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7eUJBQ3hELENBQUM7cUJBQ0g7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkE1QlEsa0JBQWtCOzs7NkJBOEJ4QixLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQXFEUiw2QkFBQztDQUFBLEFBcEZELElBb0ZDO1NBekRZLHNCQUFzQjs7O0lBQ2pDLDRDQUE0Qjs7SUFDNUIsMENBQTBCOztJQUMxQix3Q0FBeUI7O0lBQ3pCLHVDQUF1Qjs7SUFDdkIsdUNBQWM7O0lBQ2QseUNBQWdCOzs7OztJQUdKLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlLCBBVVRPX1NUWUxFIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWFjY29yZGlvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3BlbkNsb3NlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdvcGVuJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIGhlaWdodDogQVVUT19TVFlMRSxcbiAgICAgICAgICBwYWRkaW5nOiAnMWVtJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnY2xvc2VkJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgcGFkZGluZzogJzAgMWVtJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1pbicpXSksXG4gICAgICB0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIFthbmltYXRlKCcwLjJzIGVhc2UtaW4nKV0pXG4gICAgXSlcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hbWVCdXR0b246IHN0cmluZztcbiAgQElucHV0KCkgdXJsSW1hZ2U6IHN0cmluZztcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICB0YWJJRDogc3RyaW5nO1xuICBwYW5lbElEOiBzdHJpbmc7XG5cbiAgLyogQnkgZGVmYXVsdCAsIGFkZCBpdGVtIHRvIGFjY29yZGlvbiAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50KSB7XG4gICAgdGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XG4gIH1cblxuICAvKiByZW1vdmUgaXRlbSB0byBhY2NvcmRpb24qL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmFjY29yZGlvbi5yZW1vdmVHcm91cCh0aGlzKTtcbiAgfVxuXG4gIC8qIGNoYW5nZXMgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3QgY2hhbmdlIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGNoYW5nZSkpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlZFByb3AgPSBjaGFuZ2VzW2NoYW5nZV07XG5cbiAgICAgICAgaWYgKCFjaGFuZ2VkUHJvcC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICB0aGlzLmFjY29yZGlvbi5ncm91cHNbdGhpcy5pbmRleCArIDFdLnRvZ2dsZU9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIGluaXRpYWxpc2F0aW9uICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFiSUQgPSAndGFiJyArIHRoaXMuaW5kZXg7XG4gICAgdGhpcy5wYW5lbElEID0gJ3BhbmVsJyArIHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKiB3aGVuIHZpZXcgaW5pdCAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy50YWJJRCA9ICd0YWInICsgdGhpcy5pbmRleDtcbiAgICB0aGlzLnBhbmVsSUQgPSAncGFuZWwnICsgdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qIG9wZW4gYWNjb3JkaW9uJ2VsZW1lbnQgKi9cbiAgLyp0b2dnbGVPcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJzKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlQWxsKHRoaXMpO1xuICAgIH1cbiAgfSovXG5cbiAgdG9nZ2xlT3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVycyh0aGlzKTtcbiAgfVxufVxuIl19