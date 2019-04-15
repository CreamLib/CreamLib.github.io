/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { trigger, state, transition, animate, style, AUTO_STYLE } from '@angular/animations';
import { AccordionComponent } from '../accordion.component';
export class AccordionItemComponent {
    /* By default , add item to accordion */
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        this.accordion = accordion;
        this.accordion.addGroup(this);
    }
    /* remove item to accordion*/
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /* changes */
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const change in changes) {
            if (changes.hasOwnProperty(change)) {
                /** @type {?} */
                const changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.accordion.groups[this.index + 1].toggleOpen();
                }
            }
        }
    }
    /* initialisation */
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    }
    /* when view init */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    }
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
    toggleOpen() {
        this.isOpen = !this.isOpen;
        this.accordion.closeOthers(this);
    }
}
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
AccordionItemComponent.ctorParameters = () => [
    { type: AccordionComponent }
];
AccordionItemComponent.propDecorators = {
    nameButton: [{ type: Input }],
    urlImage: [{ type: Input }],
    isOpen: [{ type: Input }],
    index: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFNTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTZCNUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFTakMsWUFBb0IsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBR0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzVCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7c0JBQzVCLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNwRDthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFZRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBbkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw0a0JBQThDO2dCQUU5QyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDbkIsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0osTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLE9BQU8sRUFBRSxLQUFLO3lCQUNmLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQ0gsUUFBUSxFQUNSLEtBQUssQ0FBQzs0QkFDSixPQUFPLEVBQUUsTUFBTTs0QkFDZixNQUFNLEVBQUUsQ0FBQzs0QkFDVCxPQUFPLEVBQUUsT0FBTzt5QkFDakIsQ0FBQyxDQUNIO3dCQUNELFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztxQkFDeEQsQ0FBQztpQkFDSDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUE1QlEsa0JBQWtCOzs7eUJBOEJ4QixLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBSE4sNENBQTRCOztJQUM1QiwwQ0FBMEI7O0lBQzFCLHdDQUF5Qjs7SUFDekIsdUNBQXVCOztJQUN2Qix1Q0FBYzs7SUFDZCx5Q0FBZ0I7Ozs7O0lBR0osMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUsIEFVVE9fU1RZTEUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2FjY29yZGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYWNjb3JkaW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ29wZW4nLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxuICAgICAgICAgIHBhZGRpbmc6ICcxZW0nXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdjbG9zZWQnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAxZW0nXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbYW5pbWF0ZSgnMC4ycyBlYXNlLWluJyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1pbicpXSlcbiAgICBdKVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZUJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoKSB1cmxJbWFnZTogc3RyaW5nO1xuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIHRhYklEOiBzdHJpbmc7XG4gIHBhbmVsSUQ6IHN0cmluZztcblxuICAvKiBCeSBkZWZhdWx0ICwgYWRkIGl0ZW0gdG8gYWNjb3JkaW9uICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcbiAgfVxuXG4gIC8qIHJlbW92ZSBpdGVtIHRvIGFjY29yZGlvbiovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xuICB9XG5cbiAgLyogY2hhbmdlcyAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBjaGFuZ2UgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoY2hhbmdlKSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcCA9IGNoYW5nZXNbY2hhbmdlXTtcblxuICAgICAgICBpZiAoIWNoYW5nZWRQcm9wLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgIHRoaXMuYWNjb3JkaW9uLmdyb3Vwc1t0aGlzLmluZGV4ICsgMV0udG9nZ2xlT3BlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogaW5pdGlhbGlzYXRpb24gKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50YWJJRCA9ICd0YWInICsgdGhpcy5pbmRleDtcbiAgICB0aGlzLnBhbmVsSUQgPSAncGFuZWwnICsgdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qIHdoZW4gdmlldyBpbml0ICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnRhYklEID0gJ3RhYicgKyB0aGlzLmluZGV4O1xuICAgIHRoaXMucGFuZWxJRCA9ICdwYW5lbCcgKyB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyogb3BlbiBhY2NvcmRpb24nZWxlbWVudCAqL1xuICAvKnRvZ2dsZU9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlcnModGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VBbGwodGhpcyk7XG4gICAgfVxuICB9Ki9cblxuICB0b2dnbGVPcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJzKHRoaXMpO1xuICB9XG59XG4iXX0=