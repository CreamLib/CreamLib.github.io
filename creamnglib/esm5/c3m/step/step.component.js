/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { StepItemComponent } from './step-item/step-item.component';
var StepComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function StepComponent(cdr) {
        this.cdr = cdr;
        /* VARIABLES */
        this.itemStepTab = [];
        this.itemsStepTabReference = [];
        this.sizeInit = 0;
        this.StepItemComponentBis = StepItemComponent;
    }
    /* AFTER VIEW INIT */
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    StepComponent.prototype.ngAfterViewInit = /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.itemStepTab.forEach(function (StepItemComponentBis, index) {
            StepItemComponentBis.indexStep = index + 1;
            _this.itemsStepTabReference.push(StepItemComponentBis.reference);
            if (StepItemComponentBis.isActive) {
                _this.theActiveStepItem = StepItemComponentBis.indexStep;
            }
        });
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (var i = 0; i < this.itemsStepTabReference.length - 1; i++) {
            this.sizeInit = this.itemsStepTabReference[i].nativeElement.clientWidth + this.sizeInit;
        }
        if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop !==
            this.itemsStepTabReference[0].nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* AFTER VIEW CHECK */
    /* AFTER VIEW CHECK */
    /**
     * @return {?}
     */
    StepComponent.prototype.ngAfterViewChecked = /* AFTER VIEW CHECK */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* For Each items */
        this.itemStepTab.forEach(function (StepItemComponentBis, index) {
            /* if after the active item, add class future */
            if (index + 1 > _this.theActiveStepItem) {
                StepItemComponentBis.Future = true;
            }
            else {
                StepItemComponentBis.Future = false;
            }
            /* if before the active item, add class past */
            if (index + 1 < _this.theActiveStepItem) {
                StepItemComponentBis.Past = true;
            }
            else {
                StepItemComponentBis.Past = false;
            }
        });
    };
    /* Resize breakpoint tab*/
    /* Resize breakpoint tab*/
    /**
     * @param {?} event
     * @return {?}
     */
    StepComponent.prototype.onResize = /* Resize breakpoint tab*/
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop >
            this.itemsStepTabReference[0].nativeElement.offsetTop) {
            if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop >
                this.itemsStepTabReference[0].nativeElement.offsetTop &&
                this.isOver !== true) {
                this.widthBreak = event.target.innerWidth;
                this.isOver = true;
            }
            if (this.widthBreak) {
                if (event.target.innerWidth > this.widthBreak && this.isOver === true) {
                    this.isOver = false;
                }
            }
            else {
                this.widthBreak = this.sizeInit;
                if (event.target.innerWidth >= this.widthBreak) {
                    this.isOver = false;
                }
            }
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* ADD AN ITEM INTO ITEMS TAB */
    /* ADD AN ITEM INTO ITEMS TAB */
    /**
     * @param {?} stepItem
     * @return {?}
     */
    StepComponent.prototype.addTab = /* ADD AN ITEM INTO ITEMS TAB */
    /**
     * @param {?} stepItem
     * @return {?}
     */
    function (stepItem) {
        stepItem.isActive = false; // And set isActive var to False
        this.itemStepTab.push(stepItem);
    };
    StepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-step',
                    template: "<!-- Items List -->\n<ol #items [ngClass]=\"{ over: isOver }\">\n  <ng-content></ng-content>\n</ol>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-step ol{counter-reset:step}c3m-step ol li{display:inline-block;position:relative;list-style-type:none;font-size:.9em;text-align:center;color:var(--n-dark);background-color:rgba(255,255,255,0);padding:.8em 1em;margin-left:-5px}c3m-step ol li::before{display:block;position:relative;width:1.5em;height:1.5em;line-height:1.5em;font-size:1.2em;content:counter(step);counter-increment:step;text-align:center;color:var(--text-inv);background-color:var(--n-dark);border-radius:1.5em;margin:0 auto .6rem;z-index:2}c3m-step ol li::after{display:block;position:absolute;width:100%;height:5px;top:1.5em;left:0;content:'';background-color:var(--n-dark);z-index:1}c3m-step-item:first-child li::after{width:50%;left:50%}c3m-step-item:last-child li::after{width:50%;left:auto;right:50%}c3m-step ol li.past{color:var(--n-dark);background-color:rgba(255,255,255,0)}c3m-step ol li.past::before{content:'';color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat}c3m-step ol li.past::after{background-color:var(--main-color)}c3m-step ol li.active::before{color:var(--text-inv);background-color:var(--main-color)}c3m-step ol li.active::after{background-color:var(--n-dark);background-image:linear-gradient(90deg,var(--main-color) 50%,var(--n-dark) 50%)}c3m-step ol li.future{color:var(--n-dark);background-color:var(--n-light)}c3m-step ol li.future::before{color:var(--n-light);background-color:var(--n-dark)}c3m-step ol.over li{display:block;width:100%;text-align:left;padding:.5rem}c3m-step ol.over li:before{display:inline-block;margin:0}"]
                }] }
    ];
    /** @nocollapse */
    StepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StepComponent.propDecorators = {
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return StepComponent;
}());
export { StepComponent };
if (false) {
    /** @type {?} */
    StepComponent.prototype.itemStepTab;
    /** @type {?} */
    StepComponent.prototype.theActiveStepItem;
    /** @type {?} */
    StepComponent.prototype.isOver;
    /** @type {?} */
    StepComponent.prototype.widthBreak;
    /** @type {?} */
    StepComponent.prototype.itemsStepTabReference;
    /** @type {?} */
    StepComponent.prototype.sizeInit;
    /** @type {?} */
    StepComponent.prototype.StepItemComponentBis;
    /**
     * @type {?}
     * @private
     */
    StepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc3RlcC9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUdaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVwRTtJQWdCRSxpQkFBaUI7SUFDakIsdUJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQVQxQyxnQkFBVyxHQUF3QixFQUFFLENBQUM7UUFJdEMsMEJBQXFCLEdBQWlCLEVBQUUsQ0FBQztRQUN6QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IseUJBQW9CLEdBQUcsaUJBQWlCLENBQUM7SUFHSSxDQUFDO0lBRTlDLHFCQUFxQjs7Ozs7SUFDckIsdUNBQWU7Ozs7SUFBZjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLG9CQUFvQixFQUFFLEtBQUs7WUFDbkQsb0JBQW9CLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsRUFBRTtnQkFDakMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQzthQUN6RDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsb0NBQW9DO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDekY7UUFFRCxJQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1lBQ3pGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUNyRDtZQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFzQjs7Ozs7SUFDdEIsMENBQWtCOzs7O0lBQWxCO1FBQUEsaUJBZ0JDO1FBZkMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsb0JBQW9CLEVBQUUsS0FBSztZQUNuRCxnREFBZ0Q7WUFDaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdEMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JDO1lBQ0QsK0NBQStDO1lBQy9DLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RDLG9CQUFvQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsb0JBQW9CLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBCQUEwQjs7Ozs7O0lBRTFCLGdDQUFROzs7OztJQURSLFVBQ1MsS0FBSztRQUNaLElBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVM7WUFDekYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQ3JEO1lBQ0EsSUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUztnQkFDdkYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFDcEI7Z0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3JCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQWdDOzs7Ozs7SUFDaEMsOEJBQU07Ozs7O0lBQU4sVUFBTyxRQUEyQjtRQUNoQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLGdDQUFnQztRQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFwR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixpSEFBb0M7b0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBZkMsaUJBQWlCOzs7MkJBMkVoQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQW9DM0Msb0JBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQS9GWSxhQUFhOzs7SUFFeEIsb0NBQXNDOztJQUN0QywwQ0FBMEI7O0lBQzFCLCtCQUFnQjs7SUFDaEIsbUNBQW1COztJQUNuQiw4Q0FBeUM7O0lBQ3pDLGlDQUFhOztJQUNiLDZDQUF5Qzs7Ozs7SUFHN0IsNEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGVwSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1pdGVtL3N0ZXAtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICAvKiBWQVJJQUJMRVMgKi9cbiAgaXRlbVN0ZXBUYWI6IFN0ZXBJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgdGhlQWN0aXZlU3RlcEl0ZW06IG51bWJlcjtcbiAgaXNPdmVyOiBib29sZWFuO1xuICB3aWR0aEJyZWFrOiBudW1iZXI7XG4gIGl0ZW1zU3RlcFRhYlJlZmVyZW5jZTogRWxlbWVudFJlZltdID0gW107XG4gIHNpemVJbml0ID0gMDtcbiAgU3RlcEl0ZW1Db21wb25lbnRCaXMgPSBTdGVwSXRlbUNvbXBvbmVudDtcblxuICAvKiBDT05TVFJVQ1RPUiAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgLyogQUZURVIgVklFVyBJTklUICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLml0ZW1TdGVwVGFiLmZvckVhY2goKFN0ZXBJdGVtQ29tcG9uZW50QmlzLCBpbmRleCkgPT4ge1xuICAgICAgU3RlcEl0ZW1Db21wb25lbnRCaXMuaW5kZXhTdGVwID0gaW5kZXggKyAxO1xuICAgICAgdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2UucHVzaChTdGVwSXRlbUNvbXBvbmVudEJpcy5yZWZlcmVuY2UpO1xuICAgICAgaWYgKFN0ZXBJdGVtQ29tcG9uZW50QmlzLmlzQWN0aXZlKSB7XG4gICAgICAgIHRoaXMudGhlQWN0aXZlU3RlcEl0ZW0gPSBTdGVwSXRlbUNvbXBvbmVudEJpcy5pbmRleFN0ZXA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiBDQUxDVUwgQlJFQUtQT0lOVCBPTiBQQUdFIExPQUQgKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdGhpcy5zaXplSW5pdCA9IHRoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlW2ldLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKyB0aGlzLnNpemVJbml0O1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlW3RoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlLmxlbmd0aCAtIDFdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICE9PVxuICAgICAgdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2VbMF0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyogQUZURVIgVklFVyBDSEVDSyAqL1xuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgLyogRm9yIEVhY2ggaXRlbXMgKi9cbiAgICB0aGlzLml0ZW1TdGVwVGFiLmZvckVhY2goKFN0ZXBJdGVtQ29tcG9uZW50QmlzLCBpbmRleCkgPT4ge1xuICAgICAgLyogaWYgYWZ0ZXIgdGhlIGFjdGl2ZSBpdGVtLCBhZGQgY2xhc3MgZnV0dXJlICovXG4gICAgICBpZiAoaW5kZXggKyAxID4gdGhpcy50aGVBY3RpdmVTdGVwSXRlbSkge1xuICAgICAgICBTdGVwSXRlbUNvbXBvbmVudEJpcy5GdXR1cmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3RlcEl0ZW1Db21wb25lbnRCaXMuRnV0dXJlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKiBpZiBiZWZvcmUgdGhlIGFjdGl2ZSBpdGVtLCBhZGQgY2xhc3MgcGFzdCAqL1xuICAgICAgaWYgKGluZGV4ICsgMSA8IHRoaXMudGhlQWN0aXZlU3RlcEl0ZW0pIHtcbiAgICAgICAgU3RlcEl0ZW1Db21wb25lbnRCaXMuUGFzdCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTdGVwSXRlbUNvbXBvbmVudEJpcy5QYXN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiBSZXNpemUgYnJlYWtwb2ludCB0YWIqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZVt0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZS5sZW5ndGggLSAxXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA+XG4gICAgICB0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZVswXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcFxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZVt0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZS5sZW5ndGggLSAxXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA+XG4gICAgICAgICAgdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2VbMF0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgJiZcbiAgICAgICAgdGhpcy5pc092ZXIgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB0aGlzLndpZHRoQnJlYWsgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy53aWR0aEJyZWFrKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA+IHRoaXMud2lkdGhCcmVhayAmJiB0aGlzLmlzT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2lkdGhCcmVhayA9IHRoaXMuc2l6ZUluaXQ7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA+PSB0aGlzLndpZHRoQnJlYWspIHtcbiAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qIEFERCBBTiBJVEVNIElOVE8gSVRFTVMgVEFCICovXG4gIGFkZFRhYihzdGVwSXRlbTogU3RlcEl0ZW1Db21wb25lbnQpIHtcbiAgICBzdGVwSXRlbS5pc0FjdGl2ZSA9IGZhbHNlOyAvLyBBbmQgc2V0IGlzQWN0aXZlIHZhciB0byBGYWxzZVxuICAgIHRoaXMuaXRlbVN0ZXBUYWIucHVzaChzdGVwSXRlbSk7XG4gIH1cbn1cbiJdfQ==