/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
export class ToastComponent {
    constructor() {
        this.delay = 0;
        this.active = false;
        this.styleClass = '';
        this.position = 'top-right';
        this.closeBtn = false;
        this.closeBtnTitle = 'close';
        this.imgCloseBtn = 'data:image/png;base64,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';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Positioning the toast
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            /** @type {?} */
            const toastElt = this.toast.nativeElement;
            this.positionElt = '110%';
            toastElt.style.bottom = this.positionElt;
        }
        else {
            /** @type {?} */
            const toastElt = this.toast.nativeElement;
            /** @type {?} */
            const HeightElt = toastElt.clientHeight;
            this.positionElt = '-' + (HeightElt + 50) + 'px';
            toastElt.style.top = this.positionElt;
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        const toastElement = this.toast.nativeElement;
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            toastElement.style.bottom = '';
        }
        else {
            toastElement.style.top = '';
        }
        if (this.active === false) {
            this.active = true;
            // If delay, hide toast after it
            if (this.delay > 0) {
                setTimeout(() => {
                    this.closeToast();
                }, this.delay);
            }
        }
    }
    /**
     * @return {?}
     */
    closeToast() {
        /** @type {?} */
        const toastElement = this.toast.nativeElement;
        this.active = false;
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            toastElement.style.bottom = this.positionElt;
        }
        else {
            toastElement.style.top = this.positionElt;
        }
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-toast',
                template: "<!-- Toast -->\n<p\n  #toast\n  role=\"alert\"\n  aria-live=\"assertive\"\n  [ngClass]=\"{\n    active: active,\n    inactive: !active,\n    topRight: position === 'top-right',\n    topLeft: position === 'top-left',\n    bottomRight: position === 'bottom-right',\n    bottomLeft: position === 'bottom-left'\n  }\"\n  class=\"{{ styleClass }}\"\n>\n  <!-- Your Content -->\n  <span class=\"close\" *ngIf=\"closeBtn\"\n    ><button class=\"ico-close\" (click)=\"closeToast()\"><img src=\"{{ imgCloseBtn }}\" alt=\"{{ closeBtnTitle }}\" /></button>\n  </span>\n  <ng-content></ng-content>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-toast .close{display:flex;justify-content:flex-end;margin-bottom:.5em}c3m-toast .close button{display:block;width:.5em;height:.5em;padding:0;background:0 0}c3m-toast p{position:fixed;padding:.5rem 1rem;background-color:#d769a8;color:#fff;border-radius:3px;z-index:5000}c3m-toast p.bottomRight,c3m-toast p.topRight{right:1em}c3m-toast p.bottomLeft,c3m-toast p.topLeft{left:1em}c3m-toast p.topLeft.active,c3m-toast p.topRight.active{transition:top 1s cubic-bezier(.43,1.18,.99,.98);top:1rem}c3m-toast p.bottomLeft.active,c3m-toast p.bottomRight.active{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98);bottom:1rem}c3m-toast p.inactive{transition:top 1s cubic-bezier(.43,1.18,.99,.98)}c3m-toast p.bottomLeft.inactive,c3m-toast p.bottomRight.inactive{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98)}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [];
ToastComponent.propDecorators = {
    delay: [{ type: Input }],
    active: [{ type: Input }],
    styleClass: [{ type: Input }],
    position: [{ type: Input }],
    closeBtn: [{ type: Input }],
    closeBtnTitle: [{ type: Input }],
    imgCloseBtn: [{ type: Input }],
    toast: [{ type: ViewChild, args: ['toast',] }]
};
if (false) {
    /** @type {?} */
    ToastComponent.prototype.delay;
    /** @type {?} */
    ToastComponent.prototype.active;
    /** @type {?} */
    ToastComponent.prototype.styleClass;
    /** @type {?} */
    ToastComponent.prototype.position;
    /** @type {?} */
    ToastComponent.prototype.closeBtn;
    /** @type {?} */
    ToastComponent.prototype.closeBtnTitle;
    /** @type {?} */
    ToastComponent.prototype.imgCloseBtn;
    /** @type {?} */
    ToastComponent.prototype.toast;
    /** @type {?} */
    ToastComponent.prototype.positionElt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFuRyxNQUFNLE9BQU8sY0FBYztJQWN6QjtRQWJTLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDeEIsZ0JBQVcsR0FDbEIsNHRGQUE0dEYsQ0FBQztJQU1odEYsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUU7O2tCQUNqRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDMUM7YUFBTTs7a0JBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTs7a0JBQ25DLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakQsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFFTSxNQUFNOztjQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDN0MsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRTtZQUN2RSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNMLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsZ0NBQWdDO1lBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU0sVUFBVTs7Y0FDVCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUU7WUFDdkUsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM5QzthQUFNO1lBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQztJQUNILENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDZsQkFBcUM7Z0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7b0JBRUUsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSztvQkFHTCxTQUFTLFNBQUMsT0FBTzs7OztJQVRsQiwrQkFBbUI7O0lBQ25CLGdDQUF3Qjs7SUFDeEIsb0NBQXlCOztJQUN6QixrQ0FBZ0M7O0lBQ2hDLGtDQUEwQjs7SUFDMUIsdUNBQWlDOztJQUNqQyxxQ0FDK3RGOztJQUUvdEYsK0JBQXNDOztJQUV0QyxxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXRvYXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgc3R5bGVDbGFzcyA9ICcnO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICd0b3AtcmlnaHQnO1xuICBASW5wdXQoKSBjbG9zZUJ0biA9IGZhbHNlO1xuICBASW5wdXQoKSBjbG9zZUJ0blRpdGxlID0gJ2Nsb3NlJztcbiAgQElucHV0KCkgaW1nQ2xvc2VCdG4gPVxuICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU5VQUFBRFZDQVlBQUFEQVFMV0RBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQjdWSlJFRlVlTnJzM1k5UkcwY1VCMkE5VlVBNmdBcU1LekJVRU5NQjdpRHVnRlRnU1FVNEZVQUhnZ3JBRlVBSG9nTmxGNjh3d1NHV3hKNTBlL2Y5Wmk0Q2o4ZTVlKzk5N04zcER6RlpNNHZGWWk4OUhLWHRNRzBmWHZscnQybjdscmFyaUxpZmlQUW9hWWJ6L1A1ZVp2am9sYjkyVmViNE9zM3daV2M3a3JienhmcVpwZTFVSzJYSGtQYlNkcGEydXcxbWVKNjJMMm5icjdVeit3WEdXNU1QNXFQMnlnNUEvVkZndkRYNTN6aDc2ODZjTGVybm9weENpbXhqZFpwMU1NTTNhVHZjWkdmT0Y5M2xwdHBTS3ZMZk0zeTQ0YW5lT3F2VzRUcWdiaGJkWjc2MmRwSFZRYzE3TThNZHIxQmd5VkJBclRiREhWMURnU1ZEQmZWME9mTi9PN1NyZ0NXdGdscm02YTVnUE51cDJlVDFKOEsya1llMEhVZkVyUkdSZFVHbGh6eS91NzZyZlBEMFlvZnl4RzRmWXNXUzFsYW81L255dEZMbG14UHA0YlFuZGJKaVNXc3IxTlBzcHJuOUxjb1RzZk9lMVFzc2FRM1VNaWZUSFY5SHZaWmNxSmxUUVdrTVZNNkhqS3F2Z3d1V3RBWXE1ekI2Y05mUHFhQU1CZFJqcGczVTBvb2x6WURLeVN2VnZJVWR0V0lCMWNpY1BxSmFORlJmc0lCcUFsWGZyNm5BQXFxcDk5OU5HNnkxYXl5Z2VvL3FIaXdCcWxxdU1xcnJSbXNQRmxCOXpHMlV0N1hmTmR3SDExaEE5U2tueXhmVTVqZFpIWUlsUUwwcDkya0dENVkzS3Y1cXZDZE9CWUhxUS83Ty8zbitKc1Y4Q3JqZitFRlpzWURhNWV6bE55aytQTCtsL25rQVBiSmlBYldyL0psQi9XdWxLZ2Q1a1I2RzhDbXlWaXlndHBuOE93T09sOSs4UkpVUDhHWUFwNEZnQWJXMW14TnBlNzljcFg1Q05jQURCZ3VvcmM5WGpQWEFCYWl1NWlyR1hnQUJxdlk4aFVJSVVIWG5LQlJFZ0tvN1A2RXdBbFRkdVFrRkVxRHF6a3NvRkZoQTFaMlRVREN3Z0tvN0g2RndZQUZWZHk1Q0FjRUNxdTQ4aEVLQ0JWVGRPUWdGQlV2LzYvWS9GQllzZmEvYjkxQmdzUFM3YnI5RG9jSFM1N3A5RGdVSFMzL3I5amNVSGl4OXJadlFBTEQwc3hGVUdnSFVXUHNZR2dLVy9qV0dTbU9BR2x2ZlFvUEEwcTlHVVdrVVVHUHBVMmdZV1ByVE9DcU5BMnJvZlFrTkJFcy9Cb0pLSTRFYWFoOUNROGNOUy8wSGlFcGoxWDFvZFE4TkhpY3M5UjRCS28xVzU2SFVPVFI4WEExWDN4R2kwbmgxYmYxTUlQcGFNUU9nbnExZXMwYWZLMmNRMUxFMVVMMUhaU0RVcnpWUVRhQXlHT3JXRXFobVVCa1E5Wm8wOUVxVmFLbXlCa1dkb0FKcjZ3T2pQbEFabklxRG95NVFHYUNLQTZRZVVJRlZjWkRVQVNxd0tnNFVVRkNCVlhHd2dJSUtySW9EQmhSVVlGVWNOS0NnQXF2aXdBRUZGVmdWQnc4b3FNQ3FPNENmMC9ZRktLakFrbEdCR2p3cXNJQ0NDaXlnb0FKTGdCb3RLckNBZ2dvc29LQUNTNEFhTFNxd2dJSUtMS0NnQWd1bzhTYk1BVmhBUVFVV1VGQ0JCUlJVWUlFRkZGUmdBUVVWV0VCQkJaWUFCUlZZUUVFRkZsQlFnUVdVUUFVV1VGQ0JCUlJVWUFFRmxZQUZGRlJnQVFYVmNHR2Rwb2Z6QVIzU3B3VHFxODVDWmFXeVVrRUZGRmhReVZoQWdRVVZVR0JCQlJSWVVJblgvb0VGRlZCZ1FRVVVXRkFCQlpaQUJSUllVQUVGRmxSQWdTVlFBUVVXVkVDQkJSVlFZRUVGbElBRkZWQmdRUVVVV0ZBQkpXQkJCUlJZVUFFRkZsUkFDVmlqUkFVVVdGQUJCUlpVUUFsWXkweUJhbVlRUDVYSDFwUDdNU3Y5c1ZJQnRkdWY3RU05THFpQTJ1bmdnUVVWVUIwTUhGaFFBZFhCb0lFRkZWQWREQmhZVUFIVndXQ0JCUlZRSFF5VU9rQUZWQWVEcEI1UUFkWEJBS2tMVkFhbmc4RlJINmdNVEFjRG8wNVFHUlQxR2hTc0FHcTRBNkp1VUJrTTlSc0VyQUJxK0FPaGpsQVpCUFZzR2xZQU5aNEJVTmVSb3RKNDlXMGRWZ0ExdnArazZqd1NWQnF0M2tPcGQyancrRUNwKzhCUmFhejZENjMrb2FIakJhVVBBME9sa1dBTnRSK2hnVURwUytPb05BNnNvZmNuTkF3b2ZXb1VsVWFCTlpaK2hRWUJwVytOb2RJWXNNYld2OUFRb1BTeEVWUWFBZFpZK3hrYUFKUys5aHlWd29NMTl2NkdnZ09sejNYN0hBb05sSDdYN1hjb01GRDZYcmZ2b2JCQTZYL2Qvb2VDQWdWVzNUa0loUVFLckxyekVBb0lGRmgxNXlJVURpaXc2czVIS0JoUVlOV2RrMUFvQWF2dXZJUUNDVmgxNXlZVVJzQ3FPeitoSUFKVzNUa0toUkN3NnM1VEFDVmcxWjJyQUVyQWV0Tjh2VS96ZGY4cXFuVEFlK1dBRDRFU3NGYktiWm16aDlkUVhhU0hqMEFKV0d2bE1zM2F5VStvMGtGbVRCZEFDVmdiNVNUTjNPVkxWSGZwWVI4b0FXdWozS2U1TzhoZlRNdUJuUUlsdTBqcDEzSHBYOHZaTDQ2K3IxVHBtNXZHYjA0QVpjWHFRNjdTREI1SE9waThRdDBCSldCVnlVRSsvVHNDU3B3S1ZzdFJSdlVPS0FHcld0N2wwNzlaZzZzVlVFNEZlM3RkTmJWQ2lSV3I4cjZubndnTG9NU0tWVytseXFqbWpld3dVR0MxTUtlUHAzKzNRSWxUd1hxWkFpVmcxVWQxRFpTQVZTM1hmVDc5QTBwYWhIVWI1WTJKYzZDa3BmVDE1a1dhMlppV2R5eGVBaVZXckRmbjYrTytGZlZIUlQxUVlzWGFQSGwycjU3djNHeXgyOHhMZ1VUV2hsWG1aNWQ1V3BUaWhmZ2JLNVJZc1RiS3djdFBWVnJ1MkprVlNxeFlhK2ZzVnp0MkFaU0F0WExPVjltcHZmejJlcUFFckYvbXBqd2xOVmtWMWtYSE93T1VkQTNycnNzVmFtVlFXN2pHdXRob1owVFduOSt1Rm9lekd1SnIzRzYvS3gvWUtiSnRYQjhyclZxenFtZFkrUW5pc3VSdGNxcDNxclhTQTF5bkc5NHZPQzh2a0ZncG0veDIrbnpxbHY4SFdleUg4c2Y1Ni96blYrWDcvSHpUdDhuM3owRzcxMDdwR2E3OU1zUHZKajgrN3pKLy96RDU4UUx6Ni9MMTFmTmZQckJLL2hGZ0FDLy9ZQmdzVkxMOEFBQUFBRWxGVGtTdVFtQ0MnO1xuXG4gIEBWaWV3Q2hpbGQoJ3RvYXN0JykgdG9hc3Q6IEVsZW1lbnRSZWY7XG5cbiAgcG9zaXRpb25FbHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gUG9zaXRpb25pbmcgdGhlIHRvYXN0XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20tbGVmdCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcbiAgICAgIGNvbnN0IHRvYXN0RWx0ID0gdGhpcy50b2FzdC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5wb3NpdGlvbkVsdCA9ICcxMTAlJztcbiAgICAgIHRvYXN0RWx0LnN0eWxlLmJvdHRvbSA9IHRoaXMucG9zaXRpb25FbHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvYXN0RWx0ID0gdGhpcy50b2FzdC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgSGVpZ2h0RWx0ID0gdG9hc3RFbHQuY2xpZW50SGVpZ2h0O1xuICAgICAgdGhpcy5wb3NpdGlvbkVsdCA9ICctJyArIChIZWlnaHRFbHQgKyA1MCkgKyAncHgnO1xuICAgICAgdG9hc3RFbHQuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbkVsdDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IHRoaXMudG9hc3QubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbS1sZWZ0JyB8fCB0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgICAgdG9hc3RFbGVtZW50LnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdEVsZW1lbnQuc3R5bGUudG9wID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgLy8gSWYgZGVsYXksIGhpZGUgdG9hc3QgYWZ0ZXIgaXRcbiAgICAgIGlmICh0aGlzLmRlbGF5ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlVG9hc3QoKTtcbiAgICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlVG9hc3QoKSB7XG4gICAgY29uc3QgdG9hc3RFbGVtZW50ID0gdGhpcy50b2FzdC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20tbGVmdCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcbiAgICAgIHRvYXN0RWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLnBvc2l0aW9uRWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdEVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbkVsdDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==