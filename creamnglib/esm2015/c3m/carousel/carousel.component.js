/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
export class CarouselComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.sizeLi = 0;
        this.groups = [];
    }
    // After View Init
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Select All Carousel Item Content
        this.tabItemContent = this.eRef.nativeElement.querySelectorAll('.carousel-item-content');
        // Calcul Size of all Carousel Item
        for (let i = 0; i < this.tabItemContent.length; i++) {
            this.sizeLi = this.sizeLi + this.tabItemContent[i].getBoundingClientRect().width;
        }
        // Opacity 0 for All Carousel Item
        for (let i = 0; i < this.tabItemContent.length; i++) {
            this.tabItemContent[i].style.opacity = '0';
        }
        // Opacity 1 for the first Carousel Item
        this.tabItemContent[0].style.opacity = '1';
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // For the visible Carousel Item, change the Aria Attributes and Tab Index
        this.groups[0].isVisible = true;
        this.groups[0].tabIndex = '0';
    }
    // Add a Carousel Item to the group of Carousel Item
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        this.groups.push(group);
    }
    // Click on Next Button
    /**
     * @param {?} group
     * @return {?}
     */
    next(group) {
        // "index" is the index of the carousel item in the group
        /** @type {?} */
        const index = this.groups.indexOf(group);
        // "lengthGroup" is the length of the Carousel Item Group
        /** @type {?} */
        const lengthGroup = this.groups.length;
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // If click next button with the last Slide (go to the first slide)
        if (index + 1 > lengthGroup - 1) {
            this.groups[0].isVisible = true;
            this.groups[0].tabIndex = '0';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[lengthGroup - 1].style.opacity = '1';
            this.tabItemContent[0].style.transition = 'none';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[0].style.opacity = '1';
                this.tabItemContent[0].style.transition = 'transform 0.3s';
                this.tabItemContent[0].style.zIndex = '10';
                this.tabItemContent[0].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index + 1].isVisible = true;
            this.groups[index + 1].tabIndex = '0';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index + 1].style.transition = 'none';
            this.tabItemContent[index + 1].style.transform =
                'translate(+' + this.tabItemContent[index + 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform =
                'translate(-' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[index + 1].style.opacity = '1';
                this.tabItemContent[index + 1].style.transition = 'transform 0.3s';
                this.tabItemContent[index + 1].style.zIndex = '10';
                this.tabItemContent[index + 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    }
    /* Click on a previous button  */
    /**
     * @param {?} group
     * @return {?}
     */
    previous(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        /** @type {?} */
        const lengthGroup = this.groups.length;
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        if (index - 1 < 0) {
            this.groups[lengthGroup - 1].isVisible = true;
            this.groups[lengthGroup - 1].tabIndex = '0';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[0].style.opacity = '1';
            this.tabItemContent[lengthGroup - 1].style.transition = 'none';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[lengthGroup - 1].style.opacity = '1';
                this.tabItemContent[lengthGroup - 1].style.transition = 'transform 0.3s';
                this.tabItemContent[lengthGroup - 1].style.zIndex = '10';
                this.tabItemContent[lengthGroup - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index - 1].isVisible = true;
            this.groups[index - 1].tabIndex = '0';
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index - 1].style.transition = 'none';
            this.tabItemContent[index - 1].style.transform =
                'translate(-' + this.tabItemContent[index - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform =
                'translate(+' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[index - 1].style.opacity = '1';
                this.tabItemContent[index - 1].style.transition = 'transform 0.3s';
                this.tabItemContent[index - 1].style.zIndex = '10';
                this.tabItemContent[index - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    }
    /* Function to go on a specific item with Bullepoint Click Event */
    /**
     * @param {?} indexToGo
     * @param {?} group
     * @return {?}
     */
    goTo(indexToGo, group) {
        /** @type {?} */
        const random = Math.floor(Math.random() * 2 + 0);
        console.log(random);
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        this.groups[indexToGo].isVisible = true;
        this.groups[indexToGo].tabIndex = '0';
        this.tabItemContent[indexToGo].style.transition = 'none';
        if (random === 1) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(+' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(-' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        else if (random === 0) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(-' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(+' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        setTimeout(() => {
            this.tabItemContent[indexToGo].style.opacity = '1';
            this.tabItemContent[indexToGo].style.transition = 'transform 0.3s';
            this.tabItemContent[indexToGo].style.zIndex = '10';
            this.tabItemContent[indexToGo].style.transform = 'translate(0,0)';
        }, 300);
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-carousel',
                template: "<!-- A Carousel -->\n<div class=\"carousel\">\n  <!-- Carousel Item List -->\n  <ul role=\"tablist\" class=\"carouselItemList\">\n    <ng-content></ng-content>\n  </ul>\n\n  <!-- Carousel Bullet Points -->\n  <ul class=\"bulletpoint\">\n    <li\n      *ngFor=\"let groupItem of groups; let i = index\"\n      [attr.aria-controls]=\"groupItem.itemID\"\n      role=\"tab\"\n      [attr.aria-selected]=\"groupItem.isVisible\"\n      tabindex=\"{{ groupItem.tabIndex }}\"\n    >\n      <button #bulletPoint aria-label=\"Go to this slide\" (click)=\"goTo(i, groupItem)\"></button>\n    </li>\n  </ul>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-carousel .carousel{position:relative;overflow:hidden;width:80%;margin:2.5rem}c3m-carousel .carouselItemList{display:block;overflow:hidden;width:100%;height:20rem;margin:0 auto}c3m-carousel .bulletpoint{display:block;position:absolute;width:100%;bottom:5%;text-align:center;margin:0 auto;z-index:17}c3m-carousel .bulletpoint li{display:inline-block;margin-right:1rem}c3m-carousel .bulletpoint li button{width:1.2rem;height:1.2rem;background-color:var(--text-inv);padding:0;border-radius:1.2rem;opacity:.5}c3m-carousel .bulletpoint li button:hover,c3m-carousel .bulletpoint li[aria-selected=true] button{opacity:1}c3m-carousel .previousCarouselItem::before{display:block;position:absolute;top:1rem;left:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid var(--body-bg);border-left:4px solid var(--body-bg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}c3m-carousel .nextCarouselItem::before{display:block;position:absolute;top:1rem;right:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid #fff;border-right:4px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}c3m-carousel .carousel-item{display:inline-block;height:20rem;width:100%}c3m-carousel .nextCarouselItem:hover,c3m-carousel .previousCarouselItem:hover{opacity:.8}c3m-carousel .carousel-item-content{display:block;position:absolute;left:0;top:3.4rem;width:100%;height:calc(100% - 3.4rem);background-color:var(--main-color);margin:0 auto;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}c3m-carousel .carousel-item-content p{display:block;font-size:4rem;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding-top:5.2rem}c3m-carousel .previousCarouselItem{display:inline-block;position:absolute;top:0;left:0;width:50%;height:3.4rem;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem{display:inline-block;position:absolute;top:0;width:50%;height:3.4rem;left:50%;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem[tabindex='-1'],c3m-carousel .previousCarouselItem[tabindex='-1']{z-index:0;opacity:0}c3m-carousel .nextCarouselItem[tabindex='0'],c3m-carousel .previousCarouselItem[tabindex='0']{z-index:15}@media (min-width:1000px){c3m-carousel .previousCarouselItem::before{width:2rem;height:2rem;top:45%;left:39.7%}c3m-carousel .nextCarouselItem::before{width:2rem;height:2rem;top:45%;right:39.7%}c3m-carousel .previousCarouselItem{display:inline-block;width:11.5%;height:100%;left:0;font-size:3.5rem}c3m-carousel .carouselItemList{width:75%}c3m-carousel .nextCarouselItem{display:inline-block;width:11.5%;height:100%;right:0;left:auto;font-size:3.5rem}c3m-carousel .carousel-item-content{display:block;position:absolute;height:100%;left:0;top:0;margin:0 auto}c3m-carousel .carousel-item-content p{padding-top:6rem}c3m-carousel .bulletpoint{bottom:1rem}}"]
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.sizeLi;
    /** @type {?} */
    CarouselComponent.prototype.tabItemContent;
    /** @type {?} */
    CarouselComponent.prototype.groups;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.eRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBeUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2hHLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFLNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUpwQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsV0FBTSxHQUFpQyxFQUFFLENBQUM7SUFFSCxDQUFDOzs7OztJQUd4QyxlQUFlO1FBQ2IsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUV6RixtQ0FBbUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ2xGO1FBRUQsa0NBQWtDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzVDO1FBRUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FB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Q0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ3BFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OztZQWhNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHltQkFBd0M7Z0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVI2RCxVQUFVOzs7O0lBVXRFLG1DQUFXOztJQUNYLDJDQUFzQjs7SUFDdEIsbUNBQTBDOzs7OztJQUU5QixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcm91c2VsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHNpemVMaSA9IDA7XG4gIHB1YmxpYyB0YWJJdGVtQ29udGVudDtcbiAgZ3JvdXBzOiBBcnJheTxDYXJvdXNlbEl0ZW1Db21wb25lbnQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIC8vIEFmdGVyIFZpZXcgSW5pdFxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gU2VsZWN0IEFsbCBDYXJvdXNlbCBJdGVtIENvbnRlbnRcbiAgICB0aGlzLnRhYkl0ZW1Db250ZW50ID0gdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW0tY29udGVudCcpO1xuXG4gICAgLy8gQ2FsY3VsIFNpemUgb2YgYWxsIENhcm91c2VsIEl0ZW1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiSXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2l6ZUxpID0gdGhpcy5zaXplTGkgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cblxuICAgIC8vIE9wYWNpdHkgMCBmb3IgQWxsIENhcm91c2VsIEl0ZW1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiSXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaV0uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9XG5cbiAgICAvLyBPcGFjaXR5IDEgZm9yIHRoZSBmaXJzdCBDYXJvdXNlbCBJdGVtXG4gICAgdGhpcy50YWJJdGVtQ29udGVudFswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB9XG5cbiAgLy8gT24gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBGb3IgdGhlIHZhbmlzaCBDYXJvdXNlbCBJdGVtcywgY2hhbmdlIHRoZSBBcmlhIEF0dHJpYnV0ZXMgYW5kIFRhYiBJbmRleFxuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwVG9DbG9zZTogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICBncm91cFRvQ2xvc2UuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICBncm91cFRvQ2xvc2UudGFiSW5kZXggPSAnLTEnO1xuICAgIH0pO1xuXG4gICAgLy8gRm9yIHRoZSB2aXNpYmxlIENhcm91c2VsIEl0ZW0sIGNoYW5nZSB0aGUgQXJpYSBBdHRyaWJ1dGVzIGFuZCBUYWIgSW5kZXhcbiAgICB0aGlzLmdyb3Vwc1swXS5pc1Zpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuZ3JvdXBzWzBdLnRhYkluZGV4ID0gJzAnO1xuICB9XG5cbiAgLy8gQWRkIGEgQ2Fyb3VzZWwgSXRlbSB0byB0aGUgZ3JvdXAgb2YgQ2Fyb3VzZWwgSXRlbVxuICBhZGRHcm91cChncm91cDogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gIH1cblxuICAvLyBDbGljayBvbiBOZXh0IEJ1dHRvblxuICBuZXh0KGdyb3VwOiBDYXJvdXNlbEl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICAvLyBcImluZGV4XCIgaXMgdGhlIGluZGV4IG9mIHRoZSBjYXJvdXNlbCBpdGVtIGluIHRoZSBncm91cFxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XG5cbiAgICAvLyBcImxlbmd0aEdyb3VwXCIgaXMgdGhlIGxlbmd0aCBvZiB0aGUgQ2Fyb3VzZWwgSXRlbSBHcm91cFxuICAgIGNvbnN0IGxlbmd0aEdyb3VwID0gdGhpcy5ncm91cHMubGVuZ3RoO1xuXG4gICAgLy8gRm9yIHRoZSB2YW5pc2ggQ2Fyb3VzZWwgSXRlbXMsIGNoYW5nZSB0aGUgQXJpYSBBdHRyaWJ1dGVzIGFuZCBUYWIgSW5kZXhcbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cFRvQ2xvc2U6IENhcm91c2VsSXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgZ3JvdXBUb0Nsb3NlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgZ3JvdXBUb0Nsb3NlLnRhYkluZGV4ID0gJy0xJztcbiAgICB9KTtcblxuICAgIC8vIElmIGNsaWNrIG5leHQgYnV0dG9uIHdpdGggdGhlIGxhc3QgU2xpZGUgKGdvIHRvIHRoZSBmaXJzdCBzbGlkZSlcbiAgICBpZiAoaW5kZXggKyAxID4gbGVuZ3RoR3JvdXAgLSAxKSB7XG4gICAgICB0aGlzLmdyb3Vwc1swXS5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5ncm91cHNbMF0udGFiSW5kZXggPSAnMCc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiSXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtsZW5ndGhHcm91cCAtIDFdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoKycgKyB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbbGVuZ3RoR3JvdXAgLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCwgMCknO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuM3MnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbMF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLDApJztcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyb3Vwc1tpbmRleCArIDFdLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmdyb3Vwc1tpbmRleCArIDFdLnRhYkluZGV4ID0gJzAnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1Db250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaV0uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4ICsgMV0uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggKyAxXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKCsnICsgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCArIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKC0nICsgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggKyAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4ICsgMV0uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4zcyc7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggKyAxXS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLDApJztcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qIENsaWNrIG9uIGEgcHJldmlvdXMgYnV0dG9uICAqL1xuICBwcmV2aW91cyhncm91cDogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcbiAgICBjb25zdCBsZW5ndGhHcm91cCA9IHRoaXMuZ3JvdXBzLmxlbmd0aDtcblxuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwVG9DbG9zZTogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICBncm91cFRvQ2xvc2UuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICBncm91cFRvQ2xvc2UudGFiSW5kZXggPSAnLTEnO1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4IC0gMSA8IDApIHtcbiAgICAgIHRoaXMuZ3JvdXBzW2xlbmd0aEdyb3VwIC0gMV0uaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ3JvdXBzW2xlbmd0aEdyb3VwIC0gMV0udGFiSW5kZXggPSAnMCc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbbGVuZ3RoR3JvdXAgLSAxXS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtsZW5ndGhHcm91cCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoLScgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbMF0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgrJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbbGVuZ3RoR3JvdXAgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4zcyc7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbbGVuZ3RoR3JvdXAgLSAxXS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLDApJztcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyb3Vwc1tpbmRleCAtIDFdLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmdyb3Vwc1tpbmRleCAtIDFdLnRhYkluZGV4ID0gJzAnO1xuXG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCAtIDFdLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4IC0gMV0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggLSAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCwgMCknO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleF0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgrJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4IC0gMV0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCAtIDFdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuM3MnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4IC0gMV0uc3R5bGUuekluZGV4ID0gJzEwJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSc7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKiBGdW5jdGlvbiB0byBnbyBvbiBhIHNwZWNpZmljIGl0ZW0gd2l0aCBCdWxsZXBvaW50IENsaWNrIEV2ZW50ICovXG4gIGdvVG8oaW5kZXhUb0dvOiBudW1iZXIsIGdyb3VwOiBDYXJvdXNlbEl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMCk7XG4gICAgY29uc29sZS5sb2cocmFuZG9tKTtcblxuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwVG9DbG9zZTogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICBncm91cFRvQ2xvc2UuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICBncm91cFRvQ2xvc2UudGFiSW5kZXggPSAnLTEnO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91cHNbaW5kZXhUb0dvXS5pc1Zpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuZ3JvdXBzW2luZGV4VG9Hb10udGFiSW5kZXggPSAnMCc7XG4gICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgaWYgKHJhbmRvbSA9PT0gMSkge1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoKycgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4VG9Hb10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhbmRvbSA9PT0gMCkge1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoLScgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4VG9Hb10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgJ3RyYW5zbGF0ZSgrJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhUb0dvXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuM3MnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4VG9Hb10uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLDApJztcbiAgICB9LCAzMDApO1xuICB9XG59XG4iXX0=