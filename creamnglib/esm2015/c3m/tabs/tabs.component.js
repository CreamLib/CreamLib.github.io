/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ViewChildren, QueryList, ChangeDetectorRef, HostListener, ContentChildren } from '@angular/core';
import { TabComponent } from './tabs-item/tabs-item.component';
export class TabsComponent {
    /* constructor tab */
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        /* Variables */
        this.tabs = [];
        this.sizeInit = 0;
        this.arrayTmp = [];
        this.startIndexActiv = 0;
        this.TabComponentBis = TabComponent;
    }
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.tabsElement.length === 1 ||
            this.tabsElement.last.nativeElement.offsetTop === this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    }
    /* add tab to tab table and select tab active */
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        if (this.tabs.length === this.startIndexActiv) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    }
    /* close tabs et open the active tab */
    /**
     * @param {?} tab
     * @return {?}
     */
    selectTab(tab) {
        this.tabs.forEach(TabComponentBis => {
            TabComponentBis.isActive = false;
        });
        tab.isActive = true;
    }
    /* breakpoint tab */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.arrayTmp = this.tabsElement.toArray();
        for (let i = 0; i < this.arrayTmp.length - 1; i++) {
            this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;
        }
        if (this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = true;
        }
        else if (this.tabsElement.length === 1) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-tabs',
                template: "<div class=\"tabsContainer\">\n  <ul>\n    <li #tabs *ngFor=\"let tab of tabs\" [ngClass]=\"{ active: tab.isActive, over: isOver }\">\n      <button\n        id=\"{{ tab.tabID }}\"\n        (click)=\"selectTab(tab)\"\n        [attr.aria-expanded]=\"tab.isActive\"\n        [attr.aria-controls]=\"tab.panelID\"\n        [attr.aria-selected]=\"tab.isActive\"\n      >\n        {{ tab.tabTitle }}\n      </button>\n    </li>\n  </ul>\n\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tabsContainer{margin:2rem 0}.tabsContainer>ul li button{width:100%;font-family:var(--stack-b);text-align:left;background-color:var(--n-light);padding:.5em 1em}.tabsContainer>ul li button:focus,.tabsContainer>ul li button:hover,.tabsContainer>ul li.active button{color:var(--text-inv);background-color:var(--main-color)}c3m-tab .content[aria-hidden=false]{background-color:var(--n-light);padding:1rem}c3m-tab .content[aria-hidden=true]{display:none}.tabsContainer>ul li.over{display:inline-block;margin-right:.5rem}.tabsContainer>ul li.over button{background-color:var(--body-bg);border-radius:0}.tabsContainer>ul li.over button:focus,.tabsContainer>ul li.over button:hover,.tabsContainer>ul li.over.active button{color:var(--body-text);background-color:var(--n-light)}@media screen and (min-width:850px){.tabsContainer>ul li{font-size:1.2rem}c3m-tab .content[aria-hidden=false]{padding:2rem}}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    tabsElement: [{ type: ViewChildren, args: ['tabs',] }],
    tabComponents: [{ type: ContentChildren, args: [TabComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TabsComponent.prototype.tabsElement;
    /** @type {?} */
    TabsComponent.prototype.tabComponents;
    /** @type {?} */
    TabsComponent.prototype.tabs;
    /** @type {?} */
    TabsComponent.prototype.isOver;
    /** @type {?} */
    TabsComponent.prototype.widthBreak;
    /** @type {?} */
    TabsComponent.prototype.sizeInit;
    /** @type {?} */
    TabsComponent.prototype.arrayTmp;
    /** @type {?} */
    TabsComponent.prototype.startIndexActiv;
    /** @type {?} */
    TabsComponent.prototype.TabComponentBis;
    /**
     * @type {?}
     * @private
     */
    TabsComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFJakIsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUS9ELE1BQU0sT0FBTyxhQUFhOzs7OztJQThEeEIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBeEQxQyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxZQUFZLENBQUM7SUFrRGMsQ0FBQzs7Ozs7O0lBOUM5QyxRQUFRLENBQUMsS0FBSztRQUNaLElBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQ2hHO1lBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsR0FBaUI7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzdDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLEdBQWlCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM1RTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3BHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtZUFBb0M7Z0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVhDLGlCQUFpQjs7OzBCQWNoQixZQUFZLFNBQUMsTUFBTTs0QkFDbkIsZUFBZSxTQUFDLFlBQVk7dUJBWTVCLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFiekMsb0NBQXlEOztJQUN6RCxzQ0FBc0U7O0lBR3RFLDZCQUEwQjs7SUFDMUIsK0JBQWdCOztJQUNoQixtQ0FBbUI7O0lBQ25CLGlDQUFhOztJQUNiLGlDQUE0Qjs7SUFDNUIsd0NBQW9COztJQUNwQix3Q0FBK0I7Ozs7O0lBa0RuQiw0QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIENvbnRlbnRDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFicy1pdGVtL3RhYnMtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKiBMaXN0IG9mIFRhYnMgRWxlbWVudCAqL1xuICBAVmlld0NoaWxkcmVuKCd0YWJzJykgdGFic0VsZW1lbnQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYkNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xuXG4gIC8qIFZhcmlhYmxlcyAqL1xuICB0YWJzOiBUYWJDb21wb25lbnRbXSA9IFtdO1xuICBpc092ZXI6IGJvb2xlYW47XG4gIHdpZHRoQnJlYWs6IG51bWJlcjtcbiAgc2l6ZUluaXQgPSAwO1xuICBhcnJheVRtcDogRWxlbWVudFJlZltdID0gW107XG4gIHN0YXJ0SW5kZXhBY3RpdiA9IDA7XG4gIFRhYkNvbXBvbmVudEJpcyA9IFRhYkNvbXBvbmVudDtcblxuICAvKiBSZXNpemUgYnJlYWtwb2ludCB0YWIgKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50YWJzRWxlbWVudC5sZW5ndGggPT09IDEgfHxcbiAgICAgIHRoaXMudGFic0VsZW1lbnQubGFzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA9PT0gdGhpcy50YWJzRWxlbWVudC5maXJzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcFxuICAgICkge1xuICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKiBhZGQgdGFiIHRvIHRhYiB0YWJsZSBhbmQgc2VsZWN0IHRhYiBhY3RpdmUgKi9cbiAgYWRkVGFiKHRhYjogVGFiQ29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IHRoaXMuc3RhcnRJbmRleEFjdGl2KSB7XG4gICAgICB0YWIuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICB9XG5cbiAgLyogY2xvc2UgdGFicyBldCBvcGVuIHRoZSBhY3RpdmUgdGFiICovXG4gIHNlbGVjdFRhYih0YWI6IFRhYkNvbXBvbmVudCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKFRhYkNvbXBvbmVudEJpcyA9PiB7XG4gICAgICBUYWJDb21wb25lbnRCaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0YWIuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyogYnJlYWtwb2ludCB0YWIgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXJyYXlUbXAgPSB0aGlzLnRhYnNFbGVtZW50LnRvQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlUbXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB0aGlzLnNpemVJbml0ID0gdGhpcy5hcnJheVRtcFtpXS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICsgdGhpcy5zaXplSW5pdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YWJzRWxlbWVudC5sYXN0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICE9PSB0aGlzLnRhYnNFbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wKSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYnNFbGVtZW50Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKiBjb25zdHJ1Y3RvciB0YWIgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuIl19