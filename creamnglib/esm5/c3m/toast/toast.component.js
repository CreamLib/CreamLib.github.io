/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
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
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Positioning the toast
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            /** @type {?} */
            var toastElt = this.toast.nativeElement;
            this.positionElt = '110%';
            toastElt.style.bottom = this.positionElt;
        }
        else {
            /** @type {?} */
            var toastElt = this.toast.nativeElement;
            /** @type {?} */
            var HeightElt = toastElt.clientHeight;
            this.positionElt = '-' + (HeightElt + 50) + 'px';
            toastElt.style.top = this.positionElt;
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var toastElement = this.toast.nativeElement;
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
                setTimeout(function () {
                    _this.closeToast();
                }, this.delay);
            }
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.closeToast = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toastElement = this.toast.nativeElement;
        this.active = false;
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            toastElement.style.bottom = this.positionElt;
        }
        else {
            toastElement.style.top = this.positionElt;
        }
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-toast',
                    template: "<!-- Toast -->\n<p\n  #toast\n  role=\"alert\"\n  aria-live=\"assertive\"\n  [ngClass]=\"{\n    active: active,\n    inactive: !active,\n    topRight: position === 'top-right',\n    topLeft: position === 'top-left',\n    bottomRight: position === 'bottom-right',\n    bottomLeft: position === 'bottom-left'\n  }\"\n  class=\"{{ styleClass }}\"\n>\n  <!-- Your Content -->\n  <span class=\"close\" *ngIf=\"closeBtn\"\n    ><button class=\"ico-close\" (click)=\"closeToast()\"><img src=\"{{ imgCloseBtn }}\" alt=\"{{ closeBtnTitle }}\" /></button>\n  </span>\n  <ng-content></ng-content>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-toast .close{display:flex;justify-content:flex-end;margin-bottom:.5em}c3m-toast .close button{display:block;width:.5em;height:.5em;padding:0;background:0 0}c3m-toast p{position:fixed;padding:.5rem 1rem;background-color:#d769a8;color:#fff;border-radius:3px;z-index:5000}c3m-toast p.bottomRight,c3m-toast p.topRight{right:1em}c3m-toast p.bottomLeft,c3m-toast p.topLeft{left:1em}c3m-toast p.topLeft.active,c3m-toast p.topRight.active{transition:top 1s cubic-bezier(.43,1.18,.99,.98);top:1rem}c3m-toast p.bottomLeft.active,c3m-toast p.bottomRight.active{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98);bottom:1rem}c3m-toast p.inactive{transition:top 1s cubic-bezier(.43,1.18,.99,.98)}c3m-toast p.bottomLeft.inactive,c3m-toast p.bottomRight.inactive{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98)}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
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
    return ToastComponent;
}());
export { ToastComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRztJQW9CRTtRQWJTLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDeEIsZ0JBQVcsR0FDbEIsNHRGQUE0dEYsQ0FBQztJQU1odEYsQ0FBQzs7OztJQUVoQixpQ0FBUTs7O0lBQVI7UUFDRSx3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRTs7Z0JBQ2pFLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7WUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDMUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMxQzthQUFNOztnQkFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhOztnQkFDbkMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRCxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUVNLCtCQUFNOzs7SUFBYjtRQUFBLGlCQWlCQzs7WUFoQk8sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUM3QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFO1lBQ3ZFLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQixnQ0FBZ0M7WUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLG1DQUFVOzs7SUFBakI7O1lBQ1EsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFO1lBQ3ZFLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDOUM7YUFBTTtZQUNMLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2bEJBQXFDO29CQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Ozt3QkFFRSxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUdMLFNBQVMsU0FBQyxPQUFPOztJQWdEcEIscUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQTFEWSxjQUFjOzs7SUFDekIsK0JBQW1COztJQUNuQixnQ0FBd0I7O0lBQ3hCLG9DQUF5Qjs7SUFDekIsa0NBQWdDOztJQUNoQyxrQ0FBMEI7O0lBQzFCLHVDQUFpQzs7SUFDakMscUNBQyt0Rjs7SUFFL3RGLCtCQUFzQzs7SUFFdEMscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgcG9zaXRpb24gPSAndG9wLXJpZ2h0JztcbiAgQElucHV0KCkgY2xvc2VCdG4gPSBmYWxzZTtcbiAgQElucHV0KCkgY2xvc2VCdG5UaXRsZSA9ICdjbG9zZSc7XG4gIEBJbnB1dCgpIGltZ0Nsb3NlQnRuID1cbiAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOVUFBQURWQ0FZQUFBREFRTFdEQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUI3VkpSRUZVZU5yczNZOVJHMGNVQjJBOVZVQTZnQXFNS3pCVUVOTUI3aUR1Z0ZUZ1NRVTRGVUFIZ2dyQUZVQUhvZ05sRjY4d3dTR1d4SjUwZS9mOVppNENqOGU1ZSs5OTdOM3BEekZaTTR2RllpODlIS1h0TUcwZlh2bHJ0Mm43bHJhcmlMaWZpUFFvYVliei9QNWVadmpvbGI5MlZlYjRPczN3WldjN2tyYnp4ZnFacGUxVUsyWEhrUGJTZHBhMnV3MW1lSjYyTDJuYnI3VXord1hHVzVNUDVxUDJ5ZzVBL1ZGZ3ZEWDUzemg3Njg2Y0xlcm5vcHhDaW14amRacDFNTU0zYVR2Y1pHZk9GOTNscHRwU0t2TGZNM3k0NGFuZU9xdlc0VHFnYmhiZFo3NjJkcEhWUWMxN004TWRyMUJneVZCQXJUYkRIVjFEZ1NWREJmVjBPZk4vTzdTcmdDV3RnbHJtNmE1Z1BOdXAyZVQxSjhLMmtZZTBIVWZFclJHUmRVR2xoenkvdTc2cmZQRDBZb2Z5eEc0ZllzV1MxbGFvNS9ueXRGTGxteFBwNGJRbmRiSmlTV3NyMU5Qc3BybjlMY29Uc2ZPZTFRc3NhUTNVTWlmVEhWOUh2WlpjcUpsVFFXa01WTTZIaktxdmd3dVd0QVlxNXpCNmNOZlBxYUFNQmRSanBnM1Uwb29sellES3lTdlZ2SVVkdFdJQjFjaWNQcUphTkZSZnNJQnFBbFhmcjZuQUFxcXA5OTlORzZ5MWF5eWdlby9xSGl3QnFscXVNcXJyUm1zUEZsQjl6RzJVdDdYZk5kd0gxMWhBOVNrbnl4ZlU1amRaSFlJbFFMMHA5MmtHRDVZM0t2NXF2Q2RPQllIcVEvN08vM24rSnNWOENyamYrRUZac1lEYTVlemxOeWsrUEwrbC9ua0FQYkppQWJXci9KbEIvV3VsS2dkNWtSNkc4Q215Vml5Z3RwbjhPd09PbDkrOFJKVVA4R1lBcDRGZ0FiVzFteE5wZTc5Y3BYNUNOY0FEQmd1b3JjOVhqUFhBQmFpdTVpckdYZ0FCcXZZOGhVSUlVSFhuS0JSRWdLbzdQNkV3QWxUZHVRa0ZFcURxemtzb0ZGaEExWjJUVURDd2dLbzdINkZ3WUFGVmR5NUNBY0VDcXU0OGhFS0NCVlRkT1FnRkJVdi82L1kvRkJZc2ZhL2I5MUJnc1BTN2JyOURvY0hTNTdwOURnVUhTMy9yOWpjVUhpeDlyWnZRQUxEMHN4RlVHZ0hVV1BzWUdnS1cvaldHU21PQUdsdmZRb1BBMHE5R1VXa1VVR1BwVTJnWVdQclRPQ3FOQTJyb2ZRa05CRXMvQm9KS0k0RWFhaDlDUThjTlMvMEhpRXBqMVgxb2RROE5IaWNzOVI0QktvMVc1NkhVT1RSOFhBMVgzeEdpMG5oMWJmMU1JUHBhTVFPZ25xMWVzMGFmSzJjUTFMRTFVTDFIWlNEVXJ6VlFUYUF5R09yV0VxaG1VQmtROVpvMDlFcVZhS215QmtXZG9BSnI2d09qUGxBWm5JcURveTVRR2FDS0E2UWVVSUZWY1pEVUFTcXdLZzRVVUZDQlZYR3dnSUlLcklvREJoUlVZRlVjTktDZ0Fxdml3QUVGRlZnVkJ3OG9xTUNxTzRDZjAvWUZLS2pBa2xHQkdqd3FzSUNDQ2l5Z29BSkxnQm90S3JDQWdnb3NvS0FDUzRBYUxTcXdnSUlLTEtDZ0FndW84U2JNQVZoQVFRVVdVRkNCQlJSVVlJRUZGRlJnQVFVVldFQkJCWllBQlJWWVFFRUZGbEJRZ1FXVVFBVVdVRkNCQlJSVVlBRUZsWUFGRkZSZ0FRWFZjR0dkcG9mekFSM1Nwd1RxcTg1Q1phV3lVa0VGRkZoUXlWaEFnUVVWVUdCQkJSUllVSW5YL29FRkZWQmdRUVVVV0ZBQkJaWkFCUlJZVUFFRkZsUkFnU1ZRQVFVV1ZFQ0JCUlZRWUVFRmxJQUZGVkJnUVFVVVdGQUJKV0JCQlJSWVVBRUZGbFJBQ1ZpalJBVVVXRkFCQlJaVVFBbFl5MHlCYW1ZUVA1WEgxcFA3TVN2OXNWSUJ0ZHVmN0VNOUxxaUEydW5nZ1FVVlVCME1IRmhRQWRYQm9JRUZGVkFkREJoWVVBSFZ3V0NCQlJWUUhReVVPa0FGVkFlRHBCNVFBZFhCQUtrTFZBYW5nOEZSSDZnTVRBY0RvMDVRR1JUMUdoU3NBR3E0QTZKdVVCa005UnNFckFCcStBT2hqbEFaQlBWc0dsWUFOWjRCVU5lUm90SjQ5VzBkVmdBMXZwK2s2andTVkJxdDNrT3BkMmp3K0VDcCs4QlJhYXo2RDYzK29hSGpCYVVQQTBPbGtXQU50UitoZ1VEcFMrT29OQTZzb2Zjbk5Bd29mV29VbFVhQk5aWitoUVlCcFcrTm9kSVlzTWJXdjlBUW9QU3hFVlFhQWRaWSt4a2FBSlMrOWh5VndvTTE5djZHZ2dPbHozWDdIQW9ObEg3WDdYY29NRkQ2WHJmdm9iQkE2WC9kL29lQ0FnVlczVGtJaFFRS3JMcnpFQW9JRkZoMTV5SVVEaWl3NnM1SEtCaFFZTldkazFBb0FhdnV2SVFDQ1ZoMTV5WVVSc0NxT3oraElBSlczVGtLaFJDdzZzNVRBQ1ZnMVoyckFFckFldE44dlUvemRmOHFxblRBZStXQUQ0RVNzRmJLYlptemg5ZFFYYVNIajBBSldHdmxNczNheVUrbzBrRm1UQmRBQ1ZnYjVTVE4zT1ZMVkhmcFlSOG9BV3VqM0tlNU84aGZUTXVCblFJbHUwanAxM0hwWDh2Wkw0NityMVRwbTV2R2IwNEFaY1hxUTY3U0RCNUhPcGk4UXQwQkpXQlZ5VUUrL1RzQ1Nwd0tWc3RSUnZVT0tBR3JXdDdsMDc5Wmc2c1ZVRTRGZTN0ZE5iVkNpUldyOHI2bm53Z0xvTVNLVlcrbHlxam1qZXd3VUdDMU1LZVBwMyszUUlsVHdYcVpBaVZnMVVkMURaU0FWUzNYZlQ3OUEwcGFoSFViNVkySmM2Q2twZlQxNWtXYTJaaVdkeXhlQWlWV3JEZm42K08rRmZWSFJUMVFZc1hhUEhsMnI1N3YzR3l4Mjh4TGdVVFdobFhtWjVkNVdwVGloZmdiSzVSWXNUYkt3Y3RQVlZydTJKa1ZTcXhZYStmc1Z6dDJBWlNBdFhMT1Y5bXB2ZnoyZXFBRXJGL21wandsTlZrVjFrWEhPd09VZEEzcnJzc1ZhbVZRVzdqR3V0aG9aMFRXbjkrdUZvZXpHdUpyM0c2L0t4L1lLYkp0WEI4cnJWcXpxbWRZK1FuaXN1UnRjcXAzcXJYU0ExeW5HOTR2T0M4dmtGZ3BtL3gyK256cWx2OEhXZXlIOHNmNTYvem5WK1g3L0h6VHQ4bjN6MEc3MTA3cEdhNzlNc1B2Smo4Kzd6Si8vekQ1OFFMejYvTDExZk5mUHJCSy9oRmdBQy8vWUJnc1ZMTDhBQUFBQUVsRlRrU3VRbUNDJztcblxuICBAVmlld0NoaWxkKCd0b2FzdCcpIHRvYXN0OiBFbGVtZW50UmVmO1xuXG4gIHBvc2l0aW9uRWx0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFBvc2l0aW9uaW5nIHRoZSB0b2FzdFxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tLWxlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdib3R0b20tcmlnaHQnKSB7XG4gICAgICBjb25zdCB0b2FzdEVsdCA9IHRoaXMudG9hc3QubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMucG9zaXRpb25FbHQgPSAnMTEwJSc7XG4gICAgICB0b2FzdEVsdC5zdHlsZS5ib3R0b20gPSB0aGlzLnBvc2l0aW9uRWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2FzdEVsdCA9IHRoaXMudG9hc3QubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IEhlaWdodEVsdCA9IHRvYXN0RWx0LmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMucG9zaXRpb25FbHQgPSAnLScgKyAoSGVpZ2h0RWx0ICsgNTApICsgJ3B4JztcbiAgICAgIHRvYXN0RWx0LnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb25FbHQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICBjb25zdCB0b2FzdEVsZW1lbnQgPSB0aGlzLnRvYXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20tbGVmdCcgfHwgdGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcbiAgICAgIHRvYXN0RWxlbWVudC5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3RFbGVtZW50LnN0eWxlLnRvcCA9ICcnO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgIC8vIElmIGRlbGF5LCBoaWRlIHRvYXN0IGFmdGVyIGl0XG4gICAgICBpZiAodGhpcy5kZWxheSA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVRvYXN0KCk7XG4gICAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IHRoaXMudG9hc3QubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tLWxlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdib3R0b20tcmlnaHQnKSB7XG4gICAgICB0b2FzdEVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5wb3NpdGlvbkVsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3RFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb25FbHQ7XG4gICAgfVxuICB9XG59XG4iXX0=