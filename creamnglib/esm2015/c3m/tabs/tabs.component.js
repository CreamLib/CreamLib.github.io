/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ViewChild, ChangeDetectorRef, ViewEncapsulation, HostListener, ViewChildren, ElementRef } from '@angular/core';
import { TabComponent } from './tabs-item/tabs-item.component';
export class TabsComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.sizeInit = 0;
    }
    // contentChildren are set
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isOver = true;
        // get all active tabs
        /** @type {?} */
        const activeTabs = this.tabs.filter(tab => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    /* breakpoint tab */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.arrayTmp = this.tabsElement.toArray();
        for (let i = 0; i < this.arrayTmp.length; i++) {
            this.sizeInit += this.arrayTmp[i].nativeElement.clientWidth;
        }
        if (this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = false;
        }
        else if (this.tabsElement.length === 1) {
            this.isOver = false;
        }
        else {
            this.isOver = true;
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = false;
            if (this.sizeInit +
                parseFloat(getComputedStyle(this.tabsElement.last.nativeElement).marginRight) * this.tabsElement.length <
                this.container.nativeElement.clientWidth) {
                this.isOver = true;
            }
        }
        else {
            this.isOver = true;
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(t => (t.active = false));
        // activate the tab the user has clicked on.
        tab.active = true;
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-tabs',
                template: "<div class=\"tabsContainer\" #container>\n  <ul>\n    <li #tabs *ngFor=\"let tab of tabs\" [ngClass]=\"{ active: tab.active, over: isOver }\">\n      <button\n        id=\"{{ tab.tabID }}\"\n        (click)=\"selectTab(tab)\"\n        [attr.aria-expanded]=\"tab.isActive\"\n        [attr.aria-controls]=\"tab.panelID\"\n        [attr.aria-selected]=\"tab.isActive\"\n      >\n        {{ tab.tabTitle }}\n      </button>\n    </li>\n  </ul>\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tabsContainer{margin:2rem 0}.tabsContainer ul li button{width:100%;font-family:var(--stack-b);text-align:left;background-color:var(--n-light);padding:.5em 1em}.tabsContainer ul li button:focus,.tabsContainer ul li button:hover,.tabsContainer ul li.active button{color:var(--text-inv);background-color:var(--main-color)}c3m-tab .content{background-color:var(--n-light);padding:1rem}c3m-tab .content[hidden]{display:none}.tabsContainer ul li.over{display:inline-block;margin-right:.5rem}.tabsContainer ul li.over button{background-color:var(--body-bg);border-radius:0}.tabsContainer ul li.over button:focus,.tabsContainer ul li.over button:hover,.tabsContainer ul li.over.active button{color:var(--body-text);background-color:var(--n-light)}@media screen and (min-width:850px){.tabsContainer ul li{font-size:1.2rem}c3m-tab .content{padding:2rem}}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    tabs: [{ type: ContentChildren, args: [TabComponent,] }],
    tabsElement: [{ type: ViewChildren, args: ['tabs',] }],
    container: [{ type: ViewChild, args: ['container',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TabsComponent.prototype.tabs;
    /** @type {?} */
    TabsComponent.prototype.tabsElement;
    /** @type {?} */
    TabsComponent.prototype.container;
    /** @type {?} */
    TabsComponent.prototype.isOver;
    /** @type {?} */
    TabsComponent.prototype.widthBreak;
    /** @type {?} */
    TabsComponent.prototype.sizeInit;
    /** @type {?} */
    TabsComponent.prototype.marginInit;
    /** @type {?} */
    TabsComponent.prototype.arrayTmp;
    /**
     * @type {?}
     * @private
     */
    TabsComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUVULFNBQVMsRUFHVCxpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVEvRCxNQUFNLE9BQU8sYUFBYTs7OztJQWdFeEIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUExRDFDLGFBQVEsR0FBRyxDQUFDLENBQUM7SUEwRGdDLENBQUM7Ozs7O0lBckQ5QyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7OztjQUViLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFdEQsb0RBQW9EO1FBQ3BELElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUM3RDtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3BHLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDcEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFDRSxJQUFJLENBQUMsUUFBUTtnQkFDWCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO2dCQUN6RyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQ3hDO2dCQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxHQUFpQjtRQUN6QixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyRCw0Q0FBNEM7UUFDNUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMGVBQW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFmQyxpQkFBaUI7OzttQkFpQmhCLGVBQWUsU0FBQyxZQUFZOzBCQUM1QixZQUFZLFNBQUMsTUFBTTt3QkFDbkIsU0FBUyxTQUFDLFdBQVc7dUJBb0NyQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBdEN6Qyw2QkFBNkQ7O0lBQzdELG9DQUF5RDs7SUFDekQsa0NBQThDOztJQUM5QywrQkFBZ0I7O0lBQ2hCLG1DQUFtQjs7SUFDbkIsaUNBQWE7O0lBQ2IsbUNBQWdCOztJQUNoQixpQ0FBdUI7Ozs7O0lBd0RYLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDaGlsZCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYnMtaXRlbS90YWJzLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCd0YWJzJykgdGFic0VsZW1lbnQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBpc092ZXI6IGJvb2xlYW47XG4gIHdpZHRoQnJlYWs6IG51bWJlcjtcbiAgc2l6ZUluaXQgPSAwO1xuICBtYXJnaW5Jbml0OiBhbnk7XG4gIGFycmF5VG1wOiBFbGVtZW50UmVmW107XG5cbiAgLy8gY29udGVudENoaWxkcmVuIGFyZSBzZXRcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICAvLyBnZXQgYWxsIGFjdGl2ZSB0YWJzXG4gICAgY29uc3QgYWN0aXZlVGFicyA9IHRoaXMudGFicy5maWx0ZXIodGFiID0+IHRhYi5hY3RpdmUpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gYWN0aXZlIHRhYiBzZXQsIGFjdGl2YXRlIHRoZSBmaXJzdFxuICAgIGlmIChhY3RpdmVUYWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZWxlY3RUYWIodGhpcy50YWJzLmZpcnN0KTtcbiAgICB9XG4gIH1cblxuICAvKiBicmVha3BvaW50IHRhYiAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hcnJheVRtcCA9IHRoaXMudGFic0VsZW1lbnQudG9BcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheVRtcC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zaXplSW5pdCArPSB0aGlzLmFycmF5VG1wW2ldLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFic0VsZW1lbnQubGFzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAhPT0gdGhpcy50YWJzRWxlbWVudC5maXJzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCkge1xuICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFic0VsZW1lbnQubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIGlmICh0aGlzLnRhYnNFbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgIT09IHRoaXMudGFic0VsZW1lbnQuZmlyc3QubmF0aXZlRWxlbWVudC5vZmZzZXRUb3ApIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2l6ZUluaXQgK1xuICAgICAgICAgIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhYnNFbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkubWFyZ2luUmlnaHQpICogdGhpcy50YWJzRWxlbWVudC5sZW5ndGggPFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNlbGVjdFRhYih0YWI6IFRhYkNvbXBvbmVudCkge1xuICAgIC8vIGRlYWN0aXZhdGUgYWxsIHRhYnNcbiAgICB0aGlzLnRhYnMudG9BcnJheSgpLmZvckVhY2godCA9PiAodC5hY3RpdmUgPSBmYWxzZSkpO1xuXG4gICAgLy8gYWN0aXZhdGUgdGhlIHRhYiB0aGUgdXNlciBoYXMgY2xpY2tlZCBvbi5cbiAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cbiJdfQ==