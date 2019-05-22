/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, HostListener, QueryList, ViewChildren, ViewEncapsulation, Input } from '@angular/core';
var StepComponent = /** @class */ (function () {
    function StepComponent(cdr) {
        this.cdr = cdr;
        this.stepLink = '#';
        this.sizeInit = 0;
    }
    /**
     * @return {?}
     */
    StepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.indexNum = parseInt(this.activeStep, 10) - 1;
    };
    /**
     * @return {?}
     */
    StepComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.stepLi = this.stepLiReference.toArray();
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (var i = 0; i < this.stepLi.length; i++) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StepComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    StepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-step',
                    template: "<ol [ngClass]=\"{ over: isOver }\">\n  <li\n    #stepLi\n    *ngFor=\"let step of steps; let i = index\"\n    [ngClass]=\"{ active: i === this.indexNum, past: i < this.indexNum, future: i > this.indexNum }\"\n    [c3mStepCurrent]=\"i === this.indexNum\"\n  >\n    <ng-container *ngIf=\"i < this.indexNum\">\n      <a href=\"{{ stepLink }}\">{{ step.title }}</a>\n    </ng-container>\n    <ng-container *ngIf=\"!(i < this.indexNum)\">\n      {{ step.title }}\n    </ng-container>\n  </li>\n</ol>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-step ol{counter-reset:step}c3m-step ol li{display:inline-block;position:relative;list-style-type:none;font-size:.9em;text-align:center;color:var(--n-dark);background-color:rgba(255,255,255,0);padding:.8em 1em;margin-left:-5px}c3m-step ol li::before{display:block;position:relative;width:1.5em;height:1.5em;line-height:1.5em;font-size:1.2em;content:counter(step);counter-increment:step;text-align:center;color:var(--text-inv);background-color:var(--n-dark);border-radius:1.5em;margin:0 auto .6rem;z-index:2}c3m-step ol li::after{display:block;position:absolute;width:100%;height:5px;top:1.5em;left:0;content:'';background-color:var(--n-dark);z-index:1}c3m-step ol li:first-child li::after{width:50%;left:50%}c3m-step ol li:last-child li::after{width:50%;left:auto;right:50%}c3m-step ol li.past{color:var(--n-dark);background-color:rgba(255,255,255,0)}c3m-step ol li.past::before{content:'';color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat}c3m-step ol li.past::after{background-color:var(--main-color)}c3m-step ol li.active::before{color:var(--text-inv);background-color:var(--main-color)}c3m-step ol li.active::after{background-color:var(--n-dark);background-image:linear-gradient(90deg,var(--main-color) 50%,var(--n-dark) 50%)}c3m-step ol li.future{color:var(--n-dark);background-color:var(--n-light)}c3m-step ol li.future::before{color:var(--n-light);background-color:var(--n-dark)}c3m-step ol.over li{display:block;width:100%;text-align:left;padding:.5rem}c3m-step ol.over li:before{display:inline-block;margin:0}"]
                }] }
    ];
    /** @nocollapse */
    StepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StepComponent.propDecorators = {
        activeStep: [{ type: Input }],
        stepLink: [{ type: Input }],
        stepLiReference: [{ type: ViewChildren, args: ['stepLi',] }],
        steps: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return StepComponent;
}());
export { StepComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc3RlcC9zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBRWpCLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQWlCRSx1QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFUakMsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQU14QixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBR2dDLENBQUM7Ozs7SUFFOUMsZ0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELHVDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU3QyxvQ0FBb0M7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDMUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELGdDQUFROzs7O0lBRFIsVUFDUyxLQUFLO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3hHLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQ3BHLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUNwQjtnQkFDQSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDckI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDRmQUFvQztvQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFsQkMsaUJBQWlCOzs7NkJBb0JoQixLQUFLOzJCQUNMLEtBQUs7a0NBR0wsWUFBWSxTQUFDLFFBQVE7d0JBRXJCLEtBQUs7MkJBMkJMLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBMEIzQyxvQkFBQztDQUFBLEFBbEVELElBa0VDO1NBNURZLGFBQWE7OztJQUN4QixtQ0FBNEI7O0lBQzVCLGlDQUF3Qjs7SUFDeEIsaUNBQWlCOztJQUNqQiwrQkFBZ0I7O0lBQ2hCLHdDQUErRDs7SUFDL0QsK0JBQTBCOztJQUMxQiw4QkFBMkI7O0lBQzNCLGlDQUFhOztJQUNiLG1DQUFtQjs7Ozs7SUFFUCw0QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RlcEl0ZW0gfSBmcm9tICcuLi8uLi9zdGVwLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGFjdGl2ZVN0ZXA6IHN0cmluZztcbiAgQElucHV0KCkgc3RlcExpbmsgPSAnIyc7XG4gIGluZGV4TnVtOiBudW1iZXI7XG4gIGlzT3ZlcjogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZHJlbignc3RlcExpJykgc3RlcExpUmVmZXJlbmNlOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIHN0ZXBMaTogQXJyYXk8RWxlbWVudFJlZj47XG4gIEBJbnB1dCgpIHN0ZXBzOiBTdGVwSXRlbVtdO1xuICBzaXplSW5pdCA9IDA7XG4gIHdpZHRoQnJlYWs6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbmRleE51bSA9IHBhcnNlSW50KHRoaXMuYWN0aXZlU3RlcCwgMTApIC0gMTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0ZXBMaSA9IHRoaXMuc3RlcExpUmVmZXJlbmNlLnRvQXJyYXkoKTtcblxuICAgIC8qIENBTENVTCBCUkVBS1BPSU5UIE9OIFBBR0UgTE9BRCAqL1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGVwTGkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2l6ZUluaXQgPSB0aGlzLnN0ZXBMaVtpXS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoICsgdGhpcy5zaXplSW5pdDtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2l6ZUluaXQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0ZXBMaVt0aGlzLnN0ZXBMaS5sZW5ndGggLSAxXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAhPT0gdGhpcy5zdGVwTGlbMF0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3ApIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RlcExpW3RoaXMuc3RlcExpLmxlbmd0aCAtIDFdLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wID4gdGhpcy5zdGVwTGlbMF0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3ApIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdGVwTGlbdGhpcy5zdGVwTGkubGVuZ3RoIC0gMV0ubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgPiB0aGlzLnN0ZXBMaVswXS5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAmJlxuICAgICAgICB0aGlzLmlzT3ZlciAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMud2lkdGhCcmVhayA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLndpZHRoQnJlYWspIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID4gdGhpcy53aWR0aEJyZWFrICYmIHRoaXMuaXNPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aWR0aEJyZWFrID0gdGhpcy5zaXplSW5pdDtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID49IHRoaXMud2lkdGhCcmVhaykge1xuICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=