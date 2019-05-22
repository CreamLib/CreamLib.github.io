/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, HostListener, QueryList, ViewChildren, ViewEncapsulation, Input } from '@angular/core';
export class StepComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.stepLink = '#';
        this.sizeInit = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.indexNum = parseInt(this.activeStep, 10) - 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.stepLi = this.stepLiReference.toArray();
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (let i = 0; i < this.stepLi.length; i++) {
            this.sizeInit = this.stepLi[i].nativeElement.clientWidth + this.sizeInit;
            console.log(this.sizeInit);
        }
        if (this.stepLi[this.stepLi.length - 1].nativeElement.offsetTop !== this.stepLi[0].nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.stepLi[this.stepLi.length - 1].nativeElement.offsetTop > this.stepLi[0].nativeElement.offsetTop) {
            if (this.stepLi[this.stepLi.length - 1].nativeElement.offsetTop > this.stepLi[0].nativeElement.offsetTop &&
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
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-step',
                template: "<ol [ngClass]=\"{ over: isOver }\">\n  <li\n    #stepLi\n    *ngFor=\"let step of steps; let i = index\"\n    [ngClass]=\"{ active: i === this.indexNum, past: i < this.indexNum, future: i > this.indexNum }\"\n    [c3mStepCurrent]=\"i === this.indexNum\"\n  >\n    <ng-container *ngIf=\"i < this.indexNum\">\n      <a href=\"{{ stepLink }}\">{{ step.title }}</a>\n    </ng-container>\n    <ng-container *ngIf=\"!(i < this.indexNum)\">\n      {{ step.title }}\n    </ng-container>\n  </li>\n</ol>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-step ol{counter-reset:step}c3m-step ol li{display:inline-block;position:relative;list-style-type:none;font-size:.9em;text-align:center;color:var(--n-dark);background-color:rgba(255,255,255,0);padding:.8em 1em;margin-left:-5px}c3m-step ol li::before{display:block;position:relative;width:1.5em;height:1.5em;line-height:1.5em;font-size:1.2em;content:counter(step);counter-increment:step;text-align:center;color:var(--text-inv);background-color:var(--n-dark);border-radius:1.5em;margin:0 auto .6rem;z-index:2}c3m-step ol li::after{display:block;position:absolute;width:100%;height:5px;top:1.5em;left:0;content:'';background-color:var(--n-dark);z-index:1}c3m-step ol li:first-child li::after{width:50%;left:50%}c3m-step ol li:last-child li::after{width:50%;left:auto;right:50%}c3m-step ol li.past{color:var(--n-dark);background-color:rgba(255,255,255,0)}c3m-step ol li.past::before{content:'';color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat}c3m-step ol li.past::after{background-color:var(--main-color)}c3m-step ol li.active::before{color:var(--text-inv);background-color:var(--main-color)}c3m-step ol li.active::after{background-color:var(--n-dark);background-image:linear-gradient(90deg,var(--main-color) 50%,var(--n-dark) 50%)}c3m-step ol li.future{color:var(--n-dark);background-color:var(--n-light)}c3m-step ol li.future::before{color:var(--n-light);background-color:var(--n-dark)}c3m-step ol.over li{display:block;width:100%;text-align:left;padding:.5rem}c3m-step ol.over li:before{display:inline-block;margin:0}"]
            }] }
];
/** @nocollapse */
StepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StepComponent.propDecorators = {
    activeStep: [{ type: Input }],
    stepLink: [{ type: Input }],
    stepLiReference: [{ type: ViewChildren, args: ['stepLi',] }],
    steps: [{ type: Input }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    StepComponent.prototype.activeStep;
    /** @type {?} */
    StepComponent.prototype.stepLink;
    /** @type {?} */
    StepComponent.prototype.indexNum;
    /** @type {?} */
    StepComponent.prototype.isOver;
    /** @type {?} */
    StepComponent.prototype.stepLiReference;
    /** @type {?} */
    StepComponent.prototype.stepLi;
    /** @type {?} */
    StepComponent.prototype.steps;
    /** @type {?} */
    StepComponent.prototype.sizeInit;
    /** @type {?} */
    StepComponent.prototype.widthBreak;
    /**
     * @type {?}
     * @private
     */
    StepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc3RlcC9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBRWpCLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNLE9BQU8sYUFBYTs7OztJQVd4QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVRqQyxhQUFRLEdBQUcsR0FBRyxDQUFDO1FBTXhCLGFBQVEsR0FBRyxDQUFDLENBQUM7SUFHZ0MsQ0FBQzs7OztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFN0Msb0NBQW9DO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQzFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtZQUN4RyxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUNwRyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFDcEI7Z0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3JCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw0ZkFBb0M7Z0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQWxCQyxpQkFBaUI7Ozt5QkFvQmhCLEtBQUs7dUJBQ0wsS0FBSzs4QkFHTCxZQUFZLFNBQUMsUUFBUTtvQkFFckIsS0FBSzt1QkEyQkwsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQWpDekMsbUNBQTRCOztJQUM1QixpQ0FBd0I7O0lBQ3hCLGlDQUFpQjs7SUFDakIsK0JBQWdCOztJQUNoQix3Q0FBK0Q7O0lBQy9ELCtCQUEwQjs7SUFDMUIsOEJBQTJCOztJQUMzQixpQ0FBYTs7SUFDYixtQ0FBbUI7Ozs7O0lBRVAsNEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBJdGVtIH0gZnJvbSAnLi4vLi4vc3RlcC1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBhY3RpdmVTdGVwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0ZXBMaW5rID0gJyMnO1xuICBpbmRleE51bTogbnVtYmVyO1xuICBpc092ZXI6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBMaScpIHN0ZXBMaVJlZmVyZW5jZTogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBzdGVwTGk6IEFycmF5PEVsZW1lbnRSZWY+O1xuICBASW5wdXQoKSBzdGVwczogU3RlcEl0ZW1bXTtcbiAgc2l6ZUluaXQgPSAwO1xuICB3aWR0aEJyZWFrOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5kZXhOdW0gPSBwYXJzZUludCh0aGlzLmFjdGl2ZVN0ZXAsIDEwKSAtIDE7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdGVwTGkgPSB0aGlzLnN0ZXBMaVJlZmVyZW5jZS50b0FycmF5KCk7XG5cbiAgICAvKiBDQUxDVUwgQlJFQUtQT0lOVCBPTiBQQUdFIExPQUQgKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcExpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNpemVJbml0ID0gdGhpcy5zdGVwTGlbaV0ubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCArIHRoaXMuc2l6ZUluaXQ7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNpemVJbml0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGVwTGlbdGhpcy5zdGVwTGkubGVuZ3RoIC0gMV0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgIT09IHRoaXMuc3RlcExpWzBdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wKSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIGlmICh0aGlzLnN0ZXBMaVt0aGlzLnN0ZXBMaS5sZW5ndGggLSAxXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA+IHRoaXMuc3RlcExpWzBdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc3RlcExpW3RoaXMuc3RlcExpLmxlbmd0aCAtIDFdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wID4gdGhpcy5zdGVwTGlbMF0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgJiZcbiAgICAgICAgdGhpcy5pc092ZXIgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB0aGlzLndpZHRoQnJlYWsgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy53aWR0aEJyZWFrKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA+IHRoaXMud2lkdGhCcmVhayAmJiB0aGlzLmlzT3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2lkdGhCcmVhayA9IHRoaXMuc2l6ZUluaXQ7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA+PSB0aGlzLndpZHRoQnJlYWspIHtcbiAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19