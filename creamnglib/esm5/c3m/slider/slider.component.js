/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
var SliderComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function SliderComponent(myComponent) {
        this.myComponent = myComponent;
        this.offset = 0;
    }
    /* AFTER VIEW INIT */
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngAfterViewInit = /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    function () {
        this.isBubble = this.myComponent.nativeElement.classList.contains('bubble');
        // If contains Bubble class
        if (this.isBubble) {
            this.setPositionBubble();
        }
    };
    /* Resize breakpoint tab */
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    SliderComponent.prototype.onResize = /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isBubble) {
            this.setPositionBubble();
        }
    };
    /* Display value */
    /* Display value */
    /**
     * @return {?}
     */
    SliderComponent.prototype.showValue = /* Display value */
    /**
     * @return {?}
     */
    function () {
        if (this.isBubble) {
            this.setPositionBubble();
        }
        this.output.nativeElement.innerHTML = this.input.nativeElement.value;
    };
    /* Move the output with the slider */
    /* Move the output with the slider */
    /**
     * @return {?}
     */
    SliderComponent.prototype.setPositionBubble = /* Move the output with the slider */
    /**
     * @return {?}
     */
    function () {
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
    };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-slider',
                    template: "<!-- Slider Content -->\n<p class=\"slider-content\">\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <!-- Input type RANGE -->\n  <input\n    type=\"range\"\n    #slider\n    id=\"{{ id }}\"\n    [attr.min]=\"min\"\n    [attr.max]=\"max\"\n    [attr.step]=\"step\"\n    [attr.value]=\"value\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (input)=\"showValue()\"\n  />\n  <!-- Output for display change value -->\n  <output for=\"{{ id }}\" #output>{{ this.value }}</output>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-slider .slider-content{position:relative}c3m-slider.bubble .slider-content{margin-bottom:2em}c3m-slider input[type=range]{display:inline-block;width:50%;background-color:rgba(0,0,0,0);padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}c3m-slider input[type=range]:focus{outline:0}c3m-slider input[type=range]::-webkit-slider-runnable-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-webkit-slider-thumb{height:26px;width:26px;background:var(--sec-light);margin-top:-9px;border-radius:26px;-webkit-appearance:none;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}c3m-slider input[type=range]:focus::-webkit-slider-runnable-track{background:#45abbc}c3m-slider input[type=range]::-moz-range-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-moz-range-thumb{height:26px;width:26px;background:var(--sec-light);border:none;border-radius:26px;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}input[type=range]::-ms-track{width:100%;height:8px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}c3m-slider input[type=range]::-ms-fill-lower{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-fill-upper{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-thumb{width:26px;border-radius:12px;background:var(--sec-light);cursor:pointer;height:8.4px}c3m-slider input[type=range]:focus::-ms-fill-lower{background:var(--main-light)}c3m-slider input[type=range]:focus::-ms-fill-upper{background:var(--main-light)}c3m-slider output{position:relative;top:.3em;font:1.2rem var(--stack-b);text-transform:uppercase;color:var(--main-color);margin-left:1rem}c3m-slider.bubble output{position:absolute;display:inline-block;top:auto;bottom:-2.4rem;left:0;width:40px;height:26.2px;text-align:center;color:var(--text-inv);background-color:var(--n-dark);padding-top:.3rem;margin-left:0;border-radius:10px;-webkit-transform:translate(-50%);transform:translate(-50%)}c3m-slider.bubble output:after{content:'';position:absolute;width:0;height:0;border-bottom:10px solid var(--n-dark);border-left:5px solid transparent;border-right:5px solid transparent;bottom:100%;left:50%;margin-left:-5px;margin-top:-1px}"]
                }] }
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SliderComponent;
}());
export { SliderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFpQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhIO0lBNEJFLGlCQUFpQjtJQUNqQix5QkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFKM0MsV0FBTSxHQUFHLENBQUMsQ0FBQztJQUltQyxDQUFDO0lBRS9DLHFCQUFxQjs7Ozs7SUFDckIseUNBQWU7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSwyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUNELDJCQUEyQjs7Ozs7O0lBRTNCLGtDQUFROzs7OztJQURSLFVBQ1MsS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFDRCxtQkFBbUI7Ozs7O0lBQ25CLG1DQUFTOzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxxQ0FBcUM7Ozs7O0lBQ3JDLDJDQUFpQjs7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDcEUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDNUUsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZ2hCQUFzQztvQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFQbUIsVUFBVTs7O3FCQVUzQixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBR0wsU0FBUyxTQUFDLFFBQVE7eUJBQ2xCLFNBQVMsU0FBQyxRQUFROzJCQXFCbEIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUEyQjNDLHNCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0E3RFksZUFBZTs7O0lBRTFCLDZCQUFvQjs7SUFDcEIsK0JBQXNCOztJQUN0QixnQ0FBdUI7O0lBQ3ZCLDhCQUFhOztJQUNiLDhCQUFhOztJQUNiLCtCQUFzQjs7SUFDdEIsbUNBQTJCOztJQUMzQixtQ0FBMkI7O0lBRzNCLGdDQUF1Qzs7SUFDdkMsaUNBQXdDOztJQUd4QyxtQ0FBa0I7O0lBQ2xCLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGlDQUFXOztJQUNYLG1DQUFTOzs7OztJQUdHLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qIElOUFVUUyAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbjtcbiAgQElucHV0KCkgbWF4O1xuICBASW5wdXQoKSBzdGVwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiBDSElMRFJFTlMgKi9cbiAgQFZpZXdDaGlsZCgnc2xpZGVyJykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ291dHB1dCcpIG91dHB1dDogRWxlbWVudFJlZjtcblxuICAvKiBWQVJJQUJMRVMgKi9cbiAgaXNCdWJibGU6IGJvb2xlYW47XG4gIHdpZHRoOiBudW1iZXI7XG4gIHBvaW50OiBudW1iZXI7XG4gIG9mZnNldCA9IDA7XG4gIG5ld1BvaW50O1xuXG4gIC8qIENPTlNUUlVDVE9SICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlDb21wb25lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgLyogQUZURVIgVklFVyBJTklUICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmlzQnViYmxlID0gdGhpcy5teUNvbXBvbmVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnViYmxlJyk7XG4gICAgLy8gSWYgY29udGFpbnMgQnViYmxlIGNsYXNzXG4gICAgaWYgKHRoaXMuaXNCdWJibGUpIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb25CdWJibGUoKTtcbiAgICB9XG4gIH1cbiAgLyogUmVzaXplIGJyZWFrcG9pbnQgdGFiICovXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudCkge1xuICAgIGlmICh0aGlzLmlzQnViYmxlKSB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uQnViYmxlKCk7XG4gICAgfVxuICB9XG4gIC8qIERpc3BsYXkgdmFsdWUgKi9cbiAgc2hvd1ZhbHVlKCkge1xuICAgIGlmICh0aGlzLmlzQnViYmxlKSB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uQnViYmxlKCk7XG4gICAgfVxuICAgIHRoaXMub3V0cHV0Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgLyogTW92ZSB0aGUgb3V0cHV0IHdpdGggdGhlIHNsaWRlciAqL1xuICBzZXRQb3NpdGlvbkJ1YmJsZSgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHRoaXMucG9pbnQgPSAodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuXG4gICAgaWYgKHRoaXMucG9pbnQgPCAwLjUpIHtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5wb2ludCAqIDIgKiAtMTIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9pbnQgPiAwLjUpIHtcbiAgICAgIHRoaXMub2Zmc2V0ID0gKHRoaXMucG9pbnQgLSAwLjUpICogMiAqIC0xMjtcbiAgICB9XG4gICAgdGhpcy5uZXdQb2ludCA9IHRoaXMud2lkdGggKiB0aGlzLnBvaW50O1xuICAgIHRoaXMub3V0cHV0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMubmV3UG9pbnQgKyB0aGlzLm9mZnNldCArICdweCc7XG4gIH1cbn1cbiJdfQ==