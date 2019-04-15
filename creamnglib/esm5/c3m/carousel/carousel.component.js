/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(eRef) {
        this.eRef = eRef;
        this.sizeLi = 0;
        this.groups = [];
    }
    // After View Init
    // After View Init
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = 
    // After View Init
    /**
     * @return {?}
     */
    function () {
        // Select All Carousel Item Content
        this.tabItemContent = this.eRef.nativeElement.querySelectorAll('.carousel-item-content');
        // Calcul Size of all Carousel Item
        for (var i = 0; i < this.tabItemContent.length; i++) {
            this.sizeLi = this.sizeLi + this.tabItemContent[i].getBoundingClientRect().width;
        }
        // Opacity 0 for All Carousel Item
        for (var i = 0; i < this.tabItemContent.length; i++) {
            this.tabItemContent[i].style.opacity = '0';
        }
        // Opacity 1 for the first Carousel Item
        this.tabItemContent[0].style.opacity = '1';
    };
    // On Init
    // On Init
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // For the visible Carousel Item, change the Aria Attributes and Tab Index
        this.groups[0].isVisible = true;
        this.groups[0].tabIndex = '0';
    };
    // Add a Carousel Item to the group of Carousel Item
    // Add a Carousel Item to the group of Carousel Item
    /**
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.addGroup = 
    // Add a Carousel Item to the group of Carousel Item
    /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    // Click on Next Button
    // Click on Next Button
    /**
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.next = 
    // Click on Next Button
    /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        // "index" is the index of the carousel item in the group
        /** @type {?} */
        var index = this.groups.indexOf(group);
        // "lengthGroup" is the length of the Carousel Item Group
        /** @type {?} */
        var lengthGroup = this.groups.length;
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // If click next button with the last Slide (go to the first slide)
        if (index + 1 > lengthGroup - 1) {
            this.groups[0].isVisible = true;
            this.groups[0].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[lengthGroup - 1].style.opacity = '1';
            this.tabItemContent[0].style.transition = 'none';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[0].style.opacity = '1';
                _this.tabItemContent[0].style.transition = 'transform 0.3s';
                _this.tabItemContent[0].style.zIndex = '10';
                _this.tabItemContent[0].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index + 1].isVisible = true;
            this.groups[index + 1].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index + 1].style.transition = 'none';
            this.tabItemContent[index + 1].style.transform =
                'translate(+' + this.tabItemContent[index + 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform =
                'translate(-' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[index + 1].style.opacity = '1';
                _this.tabItemContent[index + 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[index + 1].style.zIndex = '10';
                _this.tabItemContent[index + 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    };
    /* Click on a previous button  */
    /* Click on a previous button  */
    /**
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.previous = /* Click on a previous button  */
    /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        /** @type {?} */
        var index = this.groups.indexOf(group);
        /** @type {?} */
        var lengthGroup = this.groups.length;
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        if (index - 1 < 0) {
            this.groups[lengthGroup - 1].isVisible = true;
            this.groups[lengthGroup - 1].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[0].style.opacity = '1';
            this.tabItemContent[lengthGroup - 1].style.transition = 'none';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[lengthGroup - 1].style.opacity = '1';
                _this.tabItemContent[lengthGroup - 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[lengthGroup - 1].style.zIndex = '10';
                _this.tabItemContent[lengthGroup - 1].style.transform = 'translate(0,0)';
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
            setTimeout(function () {
                _this.tabItemContent[index - 1].style.opacity = '1';
                _this.tabItemContent[index - 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[index - 1].style.zIndex = '10';
                _this.tabItemContent[index - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    };
    /* Function to go on a specific item with Bullepoint Click Event */
    /* Function to go on a specific item with Bullepoint Click Event */
    /**
     * @param {?} indexToGo
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.goTo = /* Function to go on a specific item with Bullepoint Click Event */
    /**
     * @param {?} indexToGo
     * @param {?} group
     * @return {?}
     */
    function (indexToGo, group) {
        var _this = this;
        /** @type {?} */
        var random = Math.floor(Math.random() * 2 + 0);
        console.log(random);
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        this.groups[indexToGo].isVisible = true;
        this.groups[indexToGo].tabIndex = '0';
        this.tabItemContent[indexToGo].style.transition = 'none';
        if (random === 1) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(+' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(-' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        else if (random === 0) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(-' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(+' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        setTimeout(function () {
            _this.tabItemContent[indexToGo].style.opacity = '1';
            _this.tabItemContent[indexToGo].style.transition = 'transform 0.3s';
            _this.tabItemContent[indexToGo].style.zIndex = '10';
            _this.tabItemContent[indexToGo].style.transform = 'translate(0,0)';
        }, 300);
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-carousel',
                    template: "<!-- A Carousel -->\n<div class=\"carousel\">\n  <!-- Carousel Item List -->\n  <ul role=\"tablist\" class=\"carouselItemList\">\n    <ng-content></ng-content>\n  </ul>\n\n  <!-- Carousel Bullet Points -->\n  <ul class=\"bulletpoint\">\n    <li\n      *ngFor=\"let groupItem of groups; let i = index\"\n      [attr.aria-controls]=\"groupItem.itemID\"\n      role=\"tab\"\n      [attr.aria-selected]=\"groupItem.isVisible\"\n      tabindex=\"{{ groupItem.tabIndex }}\"\n    >\n      <button #bulletPoint aria-label=\"Go to this slide\" (click)=\"goTo(i, groupItem)\"></button>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-carousel .carousel{position:relative;overflow:hidden;width:80%;margin:2.5rem}c3m-carousel .carouselItemList{display:block;overflow:hidden;width:100%;height:20rem;margin:0 auto}c3m-carousel .bulletpoint{display:block;position:absolute;width:100%;bottom:5%;text-align:center;margin:0 auto;z-index:17}c3m-carousel .bulletpoint li{display:inline-block;margin-right:1rem}c3m-carousel .bulletpoint li button{width:1.2rem;height:1.2rem;background-color:var(--text-inv);padding:0;border-radius:1.2rem;opacity:.5}c3m-carousel .bulletpoint li button:hover,c3m-carousel .bulletpoint li[aria-selected=true] button{opacity:1}c3m-carousel .previousCarouselItem::before{display:block;position:absolute;top:1rem;left:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid var(--body-bg);border-left:4px solid var(--body-bg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}c3m-carousel .nextCarouselItem::before{display:block;position:absolute;top:1rem;right:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid #fff;border-right:4px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}c3m-carousel .carousel-item{display:inline-block;height:20rem;width:100%}c3m-carousel .nextCarouselItem:hover,c3m-carousel .previousCarouselItem:hover{opacity:.8}c3m-carousel .carousel-item-content{display:block;position:absolute;left:0;top:3.4rem;width:100%;height:calc(100% - 3.4rem);background-color:var(--main-color);margin:0 auto;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}c3m-carousel .carousel-item-content p{display:block;font-size:4rem;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding-top:5.2rem}c3m-carousel .previousCarouselItem{display:inline-block;position:absolute;top:0;left:0;width:50%;height:3.4rem;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem{display:inline-block;position:absolute;top:0;width:50%;height:3.4rem;left:50%;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem[tabindex='-1'],c3m-carousel .previousCarouselItem[tabindex='-1']{z-index:0;opacity:0}c3m-carousel .nextCarouselItem[tabindex='0'],c3m-carousel .previousCarouselItem[tabindex='0']{z-index:15}@media (min-width:1000px){c3m-carousel .previousCarouselItem::before{width:2rem;height:2rem;top:45%;left:39.7%}c3m-carousel .nextCarouselItem::before{width:2rem;height:2rem;top:45%;right:39.7%}c3m-carousel .previousCarouselItem{display:inline-block;width:11.5%;height:100%;left:0;font-size:3.5rem}c3m-carousel .carouselItemList{width:75%}c3m-carousel .nextCarouselItem{display:inline-block;width:11.5%;height:100%;right:0;left:auto;font-size:3.5rem}c3m-carousel .carousel-item-content{display:block;position:absolute;height:100%;left:0;top:0;margin:0 auto}c3m-carousel .carousel-item-content p{padding-top:6rem}c3m-carousel .bulletpoint{bottom:1rem}}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return CarouselComponent;
}());
export { CarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBeUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHO0lBV0UsMkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKcEMsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFdBQU0sR0FBaUMsRUFBRSxDQUFDO0lBRUgsQ0FBQztJQUV4QyxrQkFBa0I7Ozs7O0lBQ2xCLDJDQUFlOzs7OztJQUFmO1FBQ0UsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUV6RixtQ0FBbUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ2xGO1FBRUQsa0NBQWtDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzVDO1FBRUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDN0MsQ0FBQztJQUVELFVBQVU7Ozs7O0lBQ1Ysb0NBQVE7Ozs7O0lBQVI7UUFDRSwwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFtQztZQUN0RCxZQUFZLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMvQixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILDBFQUEwRTtRQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvREFBb0Q7Ozs7OztJQUNwRCxvQ0FBUTs7Ozs7O0lBQVIsVUFBUyxLQUE0QjtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsdUJBQXVCOzs7Ozs7SUFDdkIsZ0NBQUk7Ozs7OztJQUFKLFVBQUssS0FBNEI7UUFBakMsaUJBcURDOzs7WUFuRE8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7O1lBR2xDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07UUFFdEMsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBbUM7WUFDdEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDL0IsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxtRUFBbUU7UUFDbkUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ3BDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDbEQsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUVoRyxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO2dCQUMzRCxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMzQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7WUFDNUQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUM1QyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQzFGLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ3hDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUV0RixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ25FLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1lBQ3BFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQztJQUVELGlDQUFpQzs7Ozs7O0lBQ2pDLG9DQUFROzs7OztJQUFSLFVBQVMsS0FBNEI7UUFBckMsaUJBZ0RDOztZQS9DTyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDOztZQUNsQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBbUM7WUFDdEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDL0IsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDNUM7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUNsRCxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ2hHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ3BDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUVsRixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN6RCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1lBQzFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUMxRixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUN4QyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFFdEYsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO2dCQUNuRSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUNwRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7SUFFRCxtRUFBbUU7Ozs7Ozs7SUFDbkUsZ0NBQUk7Ozs7OztJQUFKLFVBQUssU0FBaUIsRUFBRSxLQUE0QjtRQUFwRCxpQkFrQ0M7O1lBakNPLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFtQztZQUN0RCxZQUFZLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMvQixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6RCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQzFGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFDcEMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2FBQ25GO1NBQ0Y7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQzFGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFDcEMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2FBQ25GO1NBQ0Y7UUFFRCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztZQUNuRSxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOztnQkFoTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qix5bUJBQXdDO29CQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVI2RCxVQUFVOztJQW9NeEUsd0JBQUM7Q0FBQSxBQWpNRCxJQWlNQztTQTNMWSxpQkFBaUI7OztJQUM1QixtQ0FBVzs7SUFDWCwyQ0FBc0I7O0lBQ3RCLG1DQUEwQzs7Ozs7SUFFOUIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJvdXNlbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBzaXplTGkgPSAwO1xuICBwdWJsaWMgdGFiSXRlbUNvbnRlbnQ7XG4gIGdyb3VwczogQXJyYXk8Q2Fyb3VzZWxJdGVtQ29tcG9uZW50PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikge31cblxuICAvLyBBZnRlciBWaWV3IEluaXRcbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFNlbGVjdCBBbGwgQ2Fyb3VzZWwgSXRlbSBDb250ZW50XG4gICAgdGhpcy50YWJJdGVtQ29udGVudCA9IHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1pdGVtLWNvbnRlbnQnKTtcblxuICAgIC8vIENhbGN1bCBTaXplIG9mIGFsbCBDYXJvdXNlbCBJdGVtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1Db250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNpemVMaSA9IHRoaXMuc2l6ZUxpICsgdGhpcy50YWJJdGVtQ29udGVudFtpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG5cbiAgICAvLyBPcGFjaXR5IDAgZm9yIEFsbCBDYXJvdXNlbCBJdGVtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1Db250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfVxuXG4gICAgLy8gT3BhY2l0eSAxIGZvciB0aGUgZmlyc3QgQ2Fyb3VzZWwgSXRlbVxuICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfVxuXG4gIC8vIE9uIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gRm9yIHRoZSB2YW5pc2ggQ2Fyb3VzZWwgSXRlbXMsIGNoYW5nZSB0aGUgQXJpYSBBdHRyaWJ1dGVzIGFuZCBUYWIgSW5kZXhcbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cFRvQ2xvc2U6IENhcm91c2VsSXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgZ3JvdXBUb0Nsb3NlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgZ3JvdXBUb0Nsb3NlLnRhYkluZGV4ID0gJy0xJztcbiAgICB9KTtcblxuICAgIC8vIEZvciB0aGUgdmlzaWJsZSBDYXJvdXNlbCBJdGVtLCBjaGFuZ2UgdGhlIEFyaWEgQXR0cmlidXRlcyBhbmQgVGFiIEluZGV4XG4gICAgdGhpcy5ncm91cHNbMF0uaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmdyb3Vwc1swXS50YWJJbmRleCA9ICcwJztcbiAgfVxuXG4gIC8vIEFkZCBhIENhcm91c2VsIEl0ZW0gdG8gdGhlIGdyb3VwIG9mIENhcm91c2VsIEl0ZW1cbiAgYWRkR3JvdXAoZ3JvdXA6IENhcm91c2VsSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICB9XG5cbiAgLy8gQ2xpY2sgb24gTmV4dCBCdXR0b25cbiAgbmV4dChncm91cDogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgLy8gXCJpbmRleFwiIGlzIHRoZSBpbmRleCBvZiB0aGUgY2Fyb3VzZWwgaXRlbSBpbiB0aGUgZ3JvdXBcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuXG4gICAgLy8gXCJsZW5ndGhHcm91cFwiIGlzIHRoZSBsZW5ndGggb2YgdGhlIENhcm91c2VsIEl0ZW0gR3JvdXBcbiAgICBjb25zdCBsZW5ndGhHcm91cCA9IHRoaXMuZ3JvdXBzLmxlbmd0aDtcblxuICAgIC8vIEZvciB0aGUgdmFuaXNoIENhcm91c2VsIEl0ZW1zLCBjaGFuZ2UgdGhlIEFyaWEgQXR0cmlidXRlcyBhbmQgVGFiIEluZGV4XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXBUb0Nsb3NlOiBDYXJvdXNlbEl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgIGdyb3VwVG9DbG9zZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgIGdyb3VwVG9DbG9zZS50YWJJbmRleCA9ICctMSc7XG4gICAgfSk7XG5cbiAgICAvLyBJZiBjbGljayBuZXh0IGJ1dHRvbiB3aXRoIHRoZSBsYXN0IFNsaWRlIChnbyB0byB0aGUgZmlyc3Qgc2xpZGUpXG4gICAgaWYgKGluZGV4ICsgMSA+IGxlbmd0aEdyb3VwIC0gMSkge1xuICAgICAgdGhpcy5ncm91cHNbMF0uaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ3JvdXBzWzBdLnRhYkluZGV4ID0gJzAnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1Db250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaV0uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbbGVuZ3RoR3JvdXAgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFswXS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFswXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKCsnICsgdGhpcy50YWJJdGVtQ29udGVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCwgMCknO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtsZW5ndGhHcm91cCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoLScgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFswXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjNzJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFswXS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSc7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncm91cHNbaW5kZXggKyAxXS5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5ncm91cHNbaW5kZXggKyAxXS50YWJJbmRleCA9ICcwJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCArIDFdLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4ICsgMV0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgrJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggKyAxXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCwgMCknO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleF0uc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4ICsgMV0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCArIDFdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuM3MnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4ICsgMV0uc3R5bGUuekluZGV4ID0gJzEwJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSc7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKiBDbGljayBvbiBhIHByZXZpb3VzIGJ1dHRvbiAgKi9cbiAgcHJldmlvdXMoZ3JvdXA6IENhcm91c2VsSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XG4gICAgY29uc3QgbGVuZ3RoR3JvdXAgPSB0aGlzLmdyb3Vwcy5sZW5ndGg7XG5cbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cFRvQ2xvc2U6IENhcm91c2VsSXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgZ3JvdXBUb0Nsb3NlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgZ3JvdXBUb0Nsb3NlLnRhYkluZGV4ID0gJy0xJztcbiAgICB9KTtcblxuICAgIGlmIChpbmRleCAtIDEgPCAwKSB7XG4gICAgICB0aGlzLmdyb3Vwc1tsZW5ndGhHcm91cCAtIDFdLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmdyb3Vwc1tsZW5ndGhHcm91cCAtIDFdLnRhYkluZGV4ID0gJzAnO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiSXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbbGVuZ3RoR3JvdXAgLSAxXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKC0nICsgdGhpcy50YWJJdGVtQ29udGVudFtsZW5ndGhHcm91cCAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoKycgKyB0aGlzLnRhYkl0ZW1Db250ZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtsZW5ndGhHcm91cCAtIDFdLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuM3MnO1xuICAgICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2xlbmd0aEdyb3VwIC0gMV0uc3R5bGUuekluZGV4ID0gJzEwJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtsZW5ndGhHcm91cCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSc7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncm91cHNbaW5kZXggLSAxXS5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5ncm91cHNbaW5kZXggLSAxXS50YWJJbmRleCA9ICcwJztcblxuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggLSAxXS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoLScgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4IC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgsIDApJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoKycgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCwgMCknO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCAtIDFdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggLSAxXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjNzJztcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleCAtIDFdLnN0eWxlLnpJbmRleCA9ICcxMCc7XG4gICAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXggLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDAsMCknO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyogRnVuY3Rpb24gdG8gZ28gb24gYSBzcGVjaWZpYyBpdGVtIHdpdGggQnVsbGVwb2ludCBDbGljayBFdmVudCAqL1xuICBnb1RvKGluZGV4VG9HbzogbnVtYmVyLCBncm91cDogQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDApO1xuICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG5cbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cFRvQ2xvc2U6IENhcm91c2VsSXRlbUNvbXBvbmVudCkgPT4ge1xuICAgICAgZ3JvdXBUb0Nsb3NlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgZ3JvdXBUb0Nsb3NlLnRhYkluZGV4ID0gJy0xJztcbiAgICB9KTtcblxuICAgIHRoaXMuZ3JvdXBzW2luZGV4VG9Hb10uaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmdyb3Vwc1tpbmRleFRvR29dLnRhYkluZGV4ID0gJzAnO1xuICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhUb0dvXS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIGlmIChyYW5kb20gPT09IDEpIHtcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhUb0dvXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKCsnICsgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiSXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICd0cmFuc2xhdGUoLScgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYW5kb20gPT09IDApIHtcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhUb0dvXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKC0nICsgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiSXRlbUNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpXS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICd0cmFuc2xhdGUoKycgKyB0aGlzLnRhYkl0ZW1Db250ZW50W2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4LCAwKSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRhYkl0ZW1Db250ZW50W2luZGV4VG9Hb10uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhUb0dvXS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwLjNzJztcbiAgICAgIHRoaXMudGFiSXRlbUNvbnRlbnRbaW5kZXhUb0dvXS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgdGhpcy50YWJJdGVtQ29udGVudFtpbmRleFRvR29dLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwwKSc7XG4gICAgfSwgMzAwKTtcbiAgfVxufVxuIl19