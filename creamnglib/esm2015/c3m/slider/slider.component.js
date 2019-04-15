/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
export class SliderComponent {
    /* CONSTRUCTOR */
    /**
     * @param {?} myComponent
     */
    constructor(myComponent) {
        this.myComponent = myComponent;
        this.offset = 0;
    }
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isBubble = this.myComponent.nativeElement.classList.contains('bubble');
        // If contains Bubble class
        if (this.isBubble) {
            this.setPositionBubble();
        }
    }
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.isBubble) {
            this.setPositionBubble();
        }
    }
    /* Display value */
    /**
     * @return {?}
     */
    showValue() {
        if (this.isBubble) {
            this.setPositionBubble();
        }
        this.output.nativeElement.innerHTML = this.input.nativeElement.value;
    }
    /* Move the output with the slider */
    /**
     * @return {?}
     */
    setPositionBubble() {
        this.width = this.input.nativeElement.getBoundingClientRect().width;
        this.point = (this.input.nativeElement.value - this.min) / (this.max - this.min);
        if (this.point < 0.5) {
            this.offset = this.point * 2 * -12 + 12;
        }
        else if (this.point > 0.5) {
            this.offset = (this.point - 0.5) * 2 * -12;
        }
        this.newPoint = this.width * this.point;
        this.output.nativeElement.style.left = this.newPoint + this.offset + 'px';
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-slider',
                template: "<!-- Slider Content -->\n<p class=\"slider-content\">\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <!-- Input type RANGE -->\n  <input\n    type=\"range\"\n    #slider\n    id=\"{{ id }}\"\n    [attr.min]=\"min\"\n    [attr.max]=\"max\"\n    [attr.step]=\"step\"\n    [attr.value]=\"value\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (input)=\"showValue()\"\n  />\n  <!-- Output for display change value -->\n  <output for=\"{{ id }}\" #output>{{ this.value }}</output>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-slider .slider-content{position:relative}c3m-slider.bubble .slider-content{margin-bottom:2em}c3m-slider input[type=range]{display:inline-block;width:50%;background-color:rgba(0,0,0,0);padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}c3m-slider input[type=range]:focus{outline:0}c3m-slider input[type=range]::-webkit-slider-runnable-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-webkit-slider-thumb{height:26px;width:26px;background:var(--sec-light);margin-top:-9px;border-radius:26px;-webkit-appearance:none;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}c3m-slider input[type=range]:focus::-webkit-slider-runnable-track{background:#45abbc}c3m-slider input[type=range]::-moz-range-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-moz-range-thumb{height:26px;width:26px;background:var(--sec-light);border:none;border-radius:26px;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}input[type=range]::-ms-track{width:100%;height:8px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}c3m-slider input[type=range]::-ms-fill-lower{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-fill-upper{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-thumb{width:26px;border-radius:12px;background:var(--sec-light);cursor:pointer;height:8.4px}c3m-slider input[type=range]:focus::-ms-fill-lower{background:var(--main-light)}c3m-slider input[type=range]:focus::-ms-fill-upper{background:var(--main-light)}c3m-slider output{position:relative;top:.3em;font:1.2rem var(--stack-b);text-transform:uppercase;color:var(--main-color);margin-left:1rem}c3m-slider.bubble output{position:absolute;display:inline-block;top:auto;bottom:-2.4rem;left:0;width:40px;height:26.2px;text-align:center;color:var(--text-inv);background-color:var(--n-dark);padding-top:.3rem;margin-left:0;border-radius:10px;-webkit-transform:translate(-50%);transform:translate(-50%)}c3m-slider.bubble output:after{content:'';position:absolute;width:0;height:0;border-bottom:10px solid var(--n-dark);border-left:5px solid transparent;border-right:5px solid transparent;bottom:100%;left:50%;margin-left:-5px;margin-top:-1px}"]
            }] }
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    input: [{ type: ViewChild, args: ['slider',] }],
    output: [{ type: ViewChild, args: ['output',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SliderComponent.prototype.id;
    /** @type {?} */
    SliderComponent.prototype.name;
    /** @type {?} */
    SliderComponent.prototype.value;
    /** @type {?} */
    SliderComponent.prototype.min;
    /** @type {?} */
    SliderComponent.prototype.max;
    /** @type {?} */
    SliderComponent.prototype.step;
    /** @type {?} */
    SliderComponent.prototype.required;
    /** @type {?} */
    SliderComponent.prototype.disabled;
    /** @type {?} */
    SliderComponent.prototype.input;
    /** @type {?} */
    SliderComponent.prototype.output;
    /** @type {?} */
    SliderComponent.prototype.isBubble;
    /** @type {?} */
    SliderComponent.prototype.width;
    /** @type {?} */
    SliderComponent.prototype.point;
    /** @type {?} */
    SliderComponent.prototype.offset;
    /** @type {?} */
    SliderComponent.prototype.newPoint;
    /**
     * @type {?}
     * @private
     */
    SliderComponent.prototype.myComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFpQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXhILE1BQU0sT0FBTyxlQUFlOzs7OztJQXVCMUIsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFKM0MsV0FBTSxHQUFHLENBQUMsQ0FBQztJQUltQyxDQUFDOzs7OztJQUcvQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLDJCQUEyQjtRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFHRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakYsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUN6QzthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVFLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGdoQkFBc0M7Z0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVBtQixVQUFVOzs7aUJBVTNCLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFHTCxTQUFTLFNBQUMsUUFBUTtxQkFDbEIsU0FBUyxTQUFDLFFBQVE7dUJBcUJsQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBaEN6Qyw2QkFBb0I7O0lBQ3BCLCtCQUFzQjs7SUFDdEIsZ0NBQXVCOztJQUN2Qiw4QkFBYTs7SUFDYiw4QkFBYTs7SUFDYiwrQkFBc0I7O0lBQ3RCLG1DQUEyQjs7SUFDM0IsbUNBQTJCOztJQUczQixnQ0FBdUM7O0lBQ3ZDLGlDQUF3Qzs7SUFHeEMsbUNBQWtCOztJQUNsQixnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCxpQ0FBVzs7SUFDWCxtQ0FBUzs7Ozs7SUFHRyxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKiBJTlBVVFMgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBtaW47XG4gIEBJbnB1dCgpIG1heDtcbiAgQElucHV0KCkgc3RlcDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyogQ0hJTERSRU5TICovXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpIGlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdvdXRwdXQnKSBvdXRwdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyogVkFSSUFCTEVTICovXG4gIGlzQnViYmxlOiBib29sZWFuO1xuICB3aWR0aDogbnVtYmVyO1xuICBwb2ludDogbnVtYmVyO1xuICBvZmZzZXQgPSAwO1xuICBuZXdQb2ludDtcblxuICAvKiBDT05TVFJVQ1RPUiAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15Q29tcG9uZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIC8qIEFGVEVSIFZJRVcgSU5JVCAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pc0J1YmJsZSA9IHRoaXMubXlDb21wb25lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1YmJsZScpO1xuICAgIC8vIElmIGNvbnRhaW5zIEJ1YmJsZSBjbGFzc1xuICAgIGlmICh0aGlzLmlzQnViYmxlKSB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uQnViYmxlKCk7XG4gICAgfVxuICB9XG4gIC8qIFJlc2l6ZSBicmVha3BvaW50IHRhYiAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pc0J1YmJsZSkge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbkJ1YmJsZSgpO1xuICAgIH1cbiAgfVxuICAvKiBEaXNwbGF5IHZhbHVlICovXG4gIHNob3dWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5pc0J1YmJsZSkge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbkJ1YmJsZSgpO1xuICAgIH1cbiAgICB0aGlzLm91dHB1dC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIC8qIE1vdmUgdGhlIG91dHB1dCB3aXRoIHRoZSBzbGlkZXIgKi9cbiAgc2V0UG9zaXRpb25CdWJibGUoKSB7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB0aGlzLnBvaW50ID0gKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcblxuICAgIGlmICh0aGlzLnBvaW50IDwgMC41KSB7XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMucG9pbnQgKiAyICogLTEyICsgMTI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvaW50ID4gMC41KSB7XG4gICAgICB0aGlzLm9mZnNldCA9ICh0aGlzLnBvaW50IC0gMC41KSAqIDIgKiAtMTI7XG4gICAgfVxuICAgIHRoaXMubmV3UG9pbnQgPSB0aGlzLndpZHRoICogdGhpcy5wb2ludDtcbiAgICB0aGlzLm91dHB1dC5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLm5ld1BvaW50ICsgdGhpcy5vZmZzZXQgKyAncHgnO1xuICB9XG59XG4iXX0=