/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { StepItemComponent } from './step-item/step-item.component';
export class StepComponent {
    /* CONSTRUCTOR */
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        /* VARIABLES */
        this.itemStepTab = [];
        this.itemsStepTabReference = [];
        this.sizeInit = 0;
        this.StepItemComponentBis = StepItemComponent;
    }
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.itemStepTab.forEach((StepItemComponentBis, index) => {
            StepItemComponentBis.indexStep = index + 1;
            this.itemsStepTabReference.push(StepItemComponentBis.reference);
            if (StepItemComponentBis.isActive) {
                this.theActiveStepItem = StepItemComponentBis.indexStep;
            }
        });
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (let i = 0; i < this.itemsStepTabReference.length - 1; i++) {
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
    }
    /* AFTER VIEW CHECK */
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /* For Each items */
        this.itemStepTab.forEach((StepItemComponentBis, index) => {
            /* if after the active item, add class future */
            if (index + 1 > this.theActiveStepItem) {
                StepItemComponentBis.Future = true;
            }
            else {
                StepItemComponentBis.Future = false;
            }
            /* if before the active item, add class past */
            if (index + 1 < this.theActiveStepItem) {
                StepItemComponentBis.Past = true;
            }
            else {
                StepItemComponentBis.Past = false;
            }
        });
    }
    /* Resize breakpoint tab*/
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
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
    }
    /* ADD AN ITEM INTO ITEMS TAB */
    /**
     * @param {?} stepItem
     * @return {?}
     */
    addTab(stepItem) {
        stepItem.isActive = false; // And set isActive var to False
        this.itemStepTab.push(stepItem);
    }
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-step',
                template: "<!-- Items List -->\n<ol #items [ngClass]=\"{ over: isOver }\">\n  <ng-content></ng-content>\n</ol>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-step ol{counter-reset:step}c3m-step ol li{display:inline-block;position:relative;list-style-type:none;font-size:.9em;text-align:center;color:var(--n-dark);background-color:rgba(255,255,255,0);padding:.8em 1em;margin-left:-5px}c3m-step ol li::before{display:block;position:relative;width:1.5em;height:1.5em;line-height:1.5em;font-size:1.2em;content:counter(step);counter-increment:step;text-align:center;color:var(--text-inv);background-color:var(--n-dark);border-radius:1.5em;margin:0 auto .6rem;z-index:2}c3m-step ol li::after{display:block;position:absolute;width:100%;height:5px;top:1.5em;left:0;content:'';background-color:var(--n-dark);z-index:1}c3m-step-item:first-child li::after{width:50%;left:50%}c3m-step-item:last-child li::after{width:50%;left:auto;right:50%}c3m-step ol li.past{color:var(--n-dark);background-color:rgba(255,255,255,0)}c3m-step ol li.past::before{content:'';color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat}c3m-step ol li.past::after{background-color:var(--main-color)}c3m-step ol li.active::before{color:var(--text-inv);background-color:var(--main-color)}c3m-step ol li.active::after{background-color:var(--n-dark);background-image:linear-gradient(90deg,var(--main-color) 50%,var(--n-dark) 50%)}c3m-step ol li.future{color:var(--n-dark);background-color:var(--n-light)}c3m-step ol li.future::before{color:var(--n-light);background-color:var(--n-dark)}c3m-step ol.over li{display:block;width:100%;text-align:left;padding:.5rem}c3m-step ol.over li:before{display:inline-block;margin:0}"]
            }] }
];
/** @nocollapse */
StepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StepComponent.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc3RlcC9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUdaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVFwRSxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFXeEIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7O1FBVDFDLGdCQUFXLEdBQXdCLEVBQUUsQ0FBQztRQUl0QywwQkFBcUIsR0FBaUIsRUFBRSxDQUFDO1FBQ3pDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYix5QkFBb0IsR0FBRyxpQkFBaUIsQ0FBQztJQUdJLENBQUM7Ozs7O0lBRzlDLGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZELG9CQUFvQixDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEUsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7YUFDekQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILG9DQUFvQztRQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FB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Q0FBQyxnQ0FBZ0M7UUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsaUhBQW9DO2dCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFmQyxpQkFBaUI7Ozt1QkEyRWhCLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUF6RHpDLG9DQUFzQzs7SUFDdEMsMENBQTBCOztJQUMxQiwrQkFBZ0I7O0lBQ2hCLG1DQUFtQjs7SUFDbkIsOENBQXlDOztJQUN6QyxpQ0FBYTs7SUFDYiw2Q0FBeUM7Ozs7O0lBRzdCLDRCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3N0ZXAtaXRlbS9zdGVwLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgLyogVkFSSUFCTEVTICovXG4gIGl0ZW1TdGVwVGFiOiBTdGVwSXRlbUNvbXBvbmVudFtdID0gW107XG4gIHRoZUFjdGl2ZVN0ZXBJdGVtOiBudW1iZXI7XG4gIGlzT3ZlcjogYm9vbGVhbjtcbiAgd2lkdGhCcmVhazogbnVtYmVyO1xuICBpdGVtc1N0ZXBUYWJSZWZlcmVuY2U6IEVsZW1lbnRSZWZbXSA9IFtdO1xuICBzaXplSW5pdCA9IDA7XG4gIFN0ZXBJdGVtQ29tcG9uZW50QmlzID0gU3RlcEl0ZW1Db21wb25lbnQ7XG5cbiAgLyogQ09OU1RSVUNUT1IgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIC8qIEFGVEVSIFZJRVcgSU5JVCAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pdGVtU3RlcFRhYi5mb3JFYWNoKChTdGVwSXRlbUNvbXBvbmVudEJpcywgaW5kZXgpID0+IHtcbiAgICAgIFN0ZXBJdGVtQ29tcG9uZW50QmlzLmluZGV4U3RlcCA9IGluZGV4ICsgMTtcbiAgICAgIHRoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlLnB1c2goU3RlcEl0ZW1Db21wb25lbnRCaXMucmVmZXJlbmNlKTtcbiAgICAgIGlmIChTdGVwSXRlbUNvbXBvbmVudEJpcy5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLnRoZUFjdGl2ZVN0ZXBJdGVtID0gU3RlcEl0ZW1Db21wb25lbnRCaXMuaW5kZXhTdGVwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogQ0FMQ1VMIEJSRUFLUE9JTlQgT04gUEFHRSBMT0FEICovXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHRoaXMuc2l6ZUluaXQgPSB0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZVtpXS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICsgdGhpcy5zaXplSW5pdDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZVt0aGlzLml0ZW1zU3RlcFRhYlJlZmVyZW5jZS5sZW5ndGggLSAxXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAhPT1cbiAgICAgIHRoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlWzBdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wXG4gICAgKSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8qIEFGVEVSIFZJRVcgQ0hFQ0sgKi9cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIC8qIEZvciBFYWNoIGl0ZW1zICovXG4gICAgdGhpcy5pdGVtU3RlcFRhYi5mb3JFYWNoKChTdGVwSXRlbUNvbXBvbmVudEJpcywgaW5kZXgpID0+IHtcbiAgICAgIC8qIGlmIGFmdGVyIHRoZSBhY3RpdmUgaXRlbSwgYWRkIGNsYXNzIGZ1dHVyZSAqL1xuICAgICAgaWYgKGluZGV4ICsgMSA+IHRoaXMudGhlQWN0aXZlU3RlcEl0ZW0pIHtcbiAgICAgICAgU3RlcEl0ZW1Db21wb25lbnRCaXMuRnV0dXJlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFN0ZXBJdGVtQ29tcG9uZW50QmlzLkZ1dHVyZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLyogaWYgYmVmb3JlIHRoZSBhY3RpdmUgaXRlbSwgYWRkIGNsYXNzIHBhc3QgKi9cbiAgICAgIGlmIChpbmRleCArIDEgPCB0aGlzLnRoZUFjdGl2ZVN0ZXBJdGVtKSB7XG4gICAgICAgIFN0ZXBJdGVtQ29tcG9uZW50QmlzLlBhc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3RlcEl0ZW1Db21wb25lbnRCaXMuUGFzdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogUmVzaXplIGJyZWFrcG9pbnQgdGFiKi9cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2VbdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2UubGVuZ3RoIC0gMV0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgPlxuICAgICAgdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2VbMF0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3BcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2VbdGhpcy5pdGVtc1N0ZXBUYWJSZWZlcmVuY2UubGVuZ3RoIC0gMV0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgPlxuICAgICAgICAgIHRoaXMuaXRlbXNTdGVwVGFiUmVmZXJlbmNlWzBdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wICYmXG4gICAgICAgIHRoaXMuaXNPdmVyICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy53aWR0aEJyZWFrID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMud2lkdGhCcmVhaykge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPiB0aGlzLndpZHRoQnJlYWsgJiYgdGhpcy5pc092ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpZHRoQnJlYWsgPSB0aGlzLnNpemVJbml0O1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPj0gdGhpcy53aWR0aEJyZWFrKSB7XG4gICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKiBBREQgQU4gSVRFTSBJTlRPIElURU1TIFRBQiAqL1xuICBhZGRUYWIoc3RlcEl0ZW06IFN0ZXBJdGVtQ29tcG9uZW50KSB7XG4gICAgc3RlcEl0ZW0uaXNBY3RpdmUgPSBmYWxzZTsgLy8gQW5kIHNldCBpc0FjdGl2ZSB2YXIgdG8gRmFsc2VcbiAgICB0aGlzLml0ZW1TdGVwVGFiLnB1c2goc3RlcEl0ZW0pO1xuICB9XG59XG4iXX0=