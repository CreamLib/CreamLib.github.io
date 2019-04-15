/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.topPosition = 0;
        this.leftPosition = 0;
        this.modalWidth = 0;
        this.closeBtnTitle = 'Close dialog';
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.dialogTitle = 'modalTitle' + this.randomID();
        this.dialogDescription = 'modalDesc' + this.randomID();
        this.btnCloseLabel = 'Close dialog';
        this.getScreenSize();
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ModalComponent.prototype.getScreenSize = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    };
    /* Open Modal */
    /* Open Modal */
    /**
     * @return {?}
     */
    ModalComponent.prototype.ToggleOpen = /* Open Modal */
    /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.isOpen = true;
            /** @type {?} */
            var eventOpen = this;
            this.onShow.emit(this.dialogElement);
            this.modalPosition();
            // Focus on close button
            /** @type {?} */
            var titleModalFocus_1 = this.focusable.nativeElement;
            setTimeout(function () {
                titleModalFocus_1.focus();
            }, 500);
        }
        else if (this.isOpen) {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.modalPosition = /**
     * @return {?}
     */
    function () {
        if (this.screenWidth > 768) {
            if (this.topPosition > 0) {
                this.container.nativeElement.style.top = this.topPosition + 'px';
            }
            else {
                this.container.nativeElement.style.top = '40%';
            }
            if (this.leftPosition > 0) {
                /** @type {?} */
                var widthModal = 100 - this.leftPosition * 2;
                this.container.nativeElement.style.width = widthModal + '%';
                this.container.nativeElement.style.left = this.leftPosition + '%';
            }
            else if (this.modalWidth > 0) {
                /** @type {?} */
                var leftPositionModal = (this.screenWidth - this.modalWidth) / 2;
                this.container.nativeElement.style.left = leftPositionModal + 'px';
                this.container.nativeElement.style.width = this.modalWidth + 'px';
            }
            else {
                this.container.nativeElement.style.width = '50%';
                this.container.nativeElement.style.left = '25%';
            }
        }
        else {
            this.container.nativeElement.style.left = '5%';
            this.container.nativeElement.style.width = '90%';
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.onKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === 'Escape') {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.randomID = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-modal',
                    template: "<div class=\"dialog\" #dialogElement [attr.aria-hidden]=\"!isOpen\">\n  <div class=\"dialog-overlay\" (click)=\"ToggleOpen()\" tabindex=\"-1\"></div>\n  <div\n    class=\"dialog-content\"\n    #container\n    [ngClass]=\"styleClass\"\n    [attr.aria-labeledby]=\"dialogTitle\"\n    [attr.aria-describedby]=\"dialogDescription\"\n    role=\"dialog\"\n    (keyup)=\"onKey($event)\"\n    c3mModalOut\n  >\n    <h1 id=\"{{ dialogTitle }}\" tabindex=\"0\" #focusable>{{ modaTitle }}</h1>\n    <div id=\"{{ dialogDescription }}\">\n      <ng-content></ng-content>\n    </div>\n\n    <button (click)=\"ToggleOpen()\" class=\"dialog-close\" [attr.aria-label]=\"closeBtnTitle\">\n      &times;\n    </button>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".dialog[aria-hidden=true]{display:none}.dialog-overlay{z-index:10;background-color:rgba(16,15,15,.84);position:fixed;top:0;left:0;bottom:0;right:0}.dialog-content{background-color:#fff;z-index:15;position:fixed;padding:2em;border-radius:2px}.dialog[aria-hidden=false] .dialog-content{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:test;animation-name:test}@-webkit-keyframes test{from{opacity:0}to{opacity:1}}@keyframes test{from{opacity:0}to{opacity:1}}.dialog h1{margin-bottom:1.5rem;font-size:2rem}.dialog p{font-size:1.2rem;margin-bottom:1.5rem}.dialog-close{position:absolute;top:.5em;right:.5em;border:0;padding:0;background-color:transparent;font-weight:700;font-size:1.25em;width:1.2em;height:1.2em;text-align:center;cursor:pointer;transition:.15s}.dialog input{border-radius:2px;border:1px solid gray;height:1.4rem;width:90%;min-width:10em}.dialog label{font-family:quicksanditalic;margin-right:1rem}@media screen and (min-width:700px){.dialog-close{top:1em;right:1em}}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return []; };
    ModalComponent.propDecorators = {
        isOpen: [{ type: HostListener, args: ['window:resize', ['$event'],] }, { type: Input }],
        styleClass: [{ type: Input }],
        topPosition: [{ type: Input }],
        leftPosition: [{ type: Input }],
        modalWidth: [{ type: Input }],
        modaTitle: [{ type: Input }],
        closeBtnTitle: [{ type: Input }],
        onShow: [{ type: Output }],
        onHide: [{ type: Output }],
        dialogElement: [{ type: ViewChild, args: ['dialogElement',] }],
        container: [{ type: ViewChild, args: ['container',] }],
        focusable: [{ type: ViewChild, args: ['focusable',] }],
        getScreenSize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return ModalComponent;
}());
export { ModalComponent };
if (false) {
    /** @type {?} */
    ModalComponent.prototype.isOpen;
    /** @type {?} */
    ModalComponent.prototype.styleClass;
    /** @type {?} */
    ModalComponent.prototype.topPosition;
    /** @type {?} */
    ModalComponent.prototype.leftPosition;
    /** @type {?} */
    ModalComponent.prototype.modalWidth;
    /** @type {?} */
    ModalComponent.prototype.modaTitle;
    /** @type {?} */
    ModalComponent.prototype.closeBtnTitle;
    /** @type {?} */
    ModalComponent.prototype.onShow;
    /** @type {?} */
    ModalComponent.prototype.onHide;
    /** @type {?} */
    ModalComponent.prototype.dialogElement;
    /** @type {?} */
    ModalComponent.prototype.container;
    /** @type {?} */
    ModalComponent.prototype.focusable;
    /** @type {?} */
    ModalComponent.prototype.dialogTitle;
    /** @type {?} */
    ModalComponent.prototype.dialogDescription;
    /** @type {?} */
    ModalComponent.prototype.btnCloseLabel;
    /** @type {?} */
    ModalComponent.prototype.screenHeight;
    /** @type {?} */
    ModalComponent.prototype.screenWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUE4QkU7UUFuQlMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBRTlCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNekQsZ0JBQVcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFLN0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUdELHNDQUFhOzs7O0lBRGIsVUFDYyxLQUFNO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQjs7Ozs7SUFDaEIsbUNBQVU7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lB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QU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkFuR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwydEJBQXFDO29CQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Ozt5QkFFRSxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3hDLEtBQUs7NkJBRUwsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNO2dDQUVOLFNBQVMsU0FBQyxlQUFlOzRCQUN6QixTQUFTLFNBQUMsV0FBVzs0QkFDckIsU0FBUyxTQUFDLFdBQVc7Z0NBZ0JyQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQThEM0MscUJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQTlGWSxjQUFjOzs7SUFDekIsZ0NBRWdCOztJQUNoQixvQ0FBNEI7O0lBQzVCLHFDQUF5Qjs7SUFDekIsc0NBQTBCOztJQUMxQixvQ0FBd0I7O0lBQ3hCLG1DQUEyQjs7SUFDM0IsdUNBQXdDOztJQUV4QyxnQ0FBeUQ7O0lBQ3pELGdDQUF5RDs7SUFFekQsdUNBQXNEOztJQUN0RCxtQ0FBOEM7O0lBQzlDLG1DQUE4Qzs7SUFFOUMscUNBQTZDOztJQUM3QywyQ0FBa0Q7O0lBQ2xELHVDQUErQjs7SUFDL0Isc0NBQWtCOztJQUNsQixxQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBASW5wdXQoKVxuICBpc09wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdG9wUG9zaXRpb24gPSAwO1xuICBASW5wdXQoKSBsZWZ0UG9zaXRpb24gPSAwO1xuICBASW5wdXQoKSBtb2RhbFdpZHRoID0gMDtcbiAgQElucHV0KCkgbW9kYVRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsb3NlQnRuVGl0bGUgPSAnQ2xvc2UgZGlhbG9nJztcblxuICBAT3V0cHV0KCkgb25TaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nRWxlbWVudCcpIGRpYWxvZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlJykgZm9jdXNhYmxlOiBFbGVtZW50UmVmO1xuXG4gIGRpYWxvZ1RpdGxlID0gJ21vZGFsVGl0bGUnICsgdGhpcy5yYW5kb21JRCgpO1xuICBkaWFsb2dEZXNjcmlwdGlvbiA9ICdtb2RhbERlc2MnICsgdGhpcy5yYW5kb21JRCgpO1xuICBidG5DbG9zZUxhYmVsID0gJ0Nsb3NlIGRpYWxvZyc7XG4gIHNjcmVlbkhlaWdodDogYW55O1xuICBzY3JlZW5XaWR0aDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2V0U2NyZWVuU2l6ZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBnZXRTY3JlZW5TaXplKGV2ZW50Pykge1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIC8qIE9wZW4gTW9kYWwgKi9cbiAgVG9nZ2xlT3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICBjb25zdCBldmVudE9wZW4gPSB0aGlzO1xuICAgICAgdGhpcy5vblNob3cuZW1pdCh0aGlzLmRpYWxvZ0VsZW1lbnQpO1xuICAgICAgdGhpcy5tb2RhbFBvc2l0aW9uKCk7XG5cbiAgICAgIC8vIEZvY3VzIG9uIGNsb3NlIGJ1dHRvblxuICAgICAgY29uc3QgdGl0bGVNb2RhbEZvY3VzID0gdGhpcy5mb2N1c2FibGUubmF0aXZlRWxlbWVudDtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpdGxlTW9kYWxGb2N1cy5mb2N1cygpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzLmRpYWxvZ0VsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG1vZGFsUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuc2NyZWVuV2lkdGggPiA3NjgpIHtcbiAgICAgIGlmICh0aGlzLnRvcFBvc2l0aW9uID4gMCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMudG9wUG9zaXRpb24gKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSAnNDAlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGVmdFBvc2l0aW9uID4gMCkge1xuICAgICAgICBjb25zdCB3aWR0aE1vZGFsID0gMTAwIC0gdGhpcy5sZWZ0UG9zaXRpb24gKiAyO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGhNb2RhbCArICclJztcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gdGhpcy5sZWZ0UG9zaXRpb24gKyAnJSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kYWxXaWR0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGVmdFBvc2l0aW9uTW9kYWwgPSAodGhpcy5zY3JlZW5XaWR0aCAtIHRoaXMubW9kYWxXaWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSBsZWZ0UG9zaXRpb25Nb2RhbCArICdweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLm1vZGFsV2lkdGggKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICc1MCUnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAnMjUlJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzUlJztcbiAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSAnOTAlJztcbiAgICB9XG4gIH1cblxuICBvbktleShldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzLmRpYWxvZ0VsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJhbmRvbUlEKCkge1xuICAgIGNvbnN0IGlkUmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDIwMDAwIC0gMSkgKyAxKTtcbiAgICByZXR1cm4gaWRSYW5kb207XG4gIH1cbn1cbiJdfQ==