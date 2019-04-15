/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
export class ModalComponent {
    constructor() {
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
    ngOnInit() {
        this.isOpen = false;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }
    /* Open Modal */
    /**
     * @return {?}
     */
    ToggleOpen() {
        if (!this.isOpen) {
            this.isOpen = true;
            /** @type {?} */
            const eventOpen = this;
            this.onShow.emit(this.dialogElement);
            this.modalPosition();
            // Focus on close button
            /** @type {?} */
            const titleModalFocus = this.focusable.nativeElement;
            setTimeout(function () {
                titleModalFocus.focus();
            }, 500);
        }
        else if (this.isOpen) {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    }
    /**
     * @return {?}
     */
    modalPosition() {
        if (this.screenWidth > 768) {
            if (this.topPosition > 0) {
                this.container.nativeElement.style.top = this.topPosition + 'px';
            }
            else {
                this.container.nativeElement.style.top = '40%';
            }
            if (this.leftPosition > 0) {
                /** @type {?} */
                const widthModal = 100 - this.leftPosition * 2;
                this.container.nativeElement.style.width = widthModal + '%';
                this.container.nativeElement.style.left = this.leftPosition + '%';
            }
            else if (this.modalWidth > 0) {
                /** @type {?} */
                const leftPositionModal = (this.screenWidth - this.modalWidth) / 2;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === 'Escape') {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    }
    /**
     * @return {?}
     */
    randomID() {
        /** @type {?} */
        const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-modal',
                template: "<div class=\"dialog\" #dialogElement [attr.aria-hidden]=\"!isOpen\">\n  <div class=\"dialog-overlay\" (click)=\"ToggleOpen()\" tabindex=\"-1\"></div>\n  <div\n    class=\"dialog-content\"\n    #container\n    [ngClass]=\"styleClass\"\n    [attr.aria-labeledby]=\"dialogTitle\"\n    [attr.aria-describedby]=\"dialogDescription\"\n    role=\"dialog\"\n    (keyup)=\"onKey($event)\"\n    c3mModalOut\n  >\n    <h1 id=\"{{ dialogTitle }}\" tabindex=\"0\" #focusable>{{ modaTitle }}</h1>\n    <div id=\"{{ dialogDescription }}\">\n      <ng-content></ng-content>\n    </div>\n\n    <button (click)=\"ToggleOpen()\" class=\"dialog-close\" [attr.aria-label]=\"closeBtnTitle\">\n      &times;\n    </button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".dialog[aria-hidden=true]{display:none}.dialog-overlay{z-index:10;background-color:rgba(16,15,15,.84);position:fixed;top:0;left:0;bottom:0;right:0}.dialog-content{background-color:#fff;z-index:15;position:fixed;padding:2em;border-radius:2px}.dialog[aria-hidden=false] .dialog-content{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:test;animation-name:test}@-webkit-keyframes test{from{opacity:0}to{opacity:1}}@keyframes test{from{opacity:0}to{opacity:1}}.dialog h1{margin-bottom:1.5rem;font-size:2rem}.dialog p{font-size:1.2rem;margin-bottom:1.5rem}.dialog-close{position:absolute;top:.5em;right:.5em;border:0;padding:0;background-color:transparent;font-weight:700;font-size:1.25em;width:1.2em;height:1.2em;text-align:center;cursor:pointer;transition:.15s}.dialog input{border-radius:2px;border:1px solid gray;height:1.4rem;width:90%;min-width:10em}.dialog label{font-family:quicksanditalic;margin-right:1rem}@media screen and (min-width:700px){.dialog-close{top:1em;right:1em}}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLGNBQWM7SUF3QnpCO1FBbkJTLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixrQkFBYSxHQUFHLGNBQWMsQ0FBQztRQUU5QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXpELGdCQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBSzdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBR0QsYUFBYSxDQUFDLEtBQU07UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUdELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFH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QUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBbkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMnRCQUFxQztnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFFRSxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3hDLEtBQUs7eUJBRUwsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBRUwsTUFBTTtxQkFDTixNQUFNOzRCQUVOLFNBQVMsU0FBQyxlQUFlO3dCQUN6QixTQUFTLFNBQUMsV0FBVzt3QkFDckIsU0FBUyxTQUFDLFdBQVc7NEJBZ0JyQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBL0J6QyxnQ0FFZ0I7O0lBQ2hCLG9DQUE0Qjs7SUFDNUIscUNBQXlCOztJQUN6QixzQ0FBMEI7O0lBQzFCLG9DQUF3Qjs7SUFDeEIsbUNBQTJCOztJQUMzQix1Q0FBd0M7O0lBRXhDLGdDQUF5RDs7SUFDekQsZ0NBQXlEOztJQUV6RCx1Q0FBc0Q7O0lBQ3RELG1DQUE4Qzs7SUFDOUMsbUNBQThDOztJQUU5QyxxQ0FBNkM7O0lBQzdDLDJDQUFrRDs7SUFDbEQsdUNBQStCOztJQUMvQixzQ0FBa0I7O0lBQ2xCLHFDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIEBJbnB1dCgpXG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB0b3BQb3NpdGlvbiA9IDA7XG4gIEBJbnB1dCgpIGxlZnRQb3NpdGlvbiA9IDA7XG4gIEBJbnB1dCgpIG1vZGFsV2lkdGggPSAwO1xuICBASW5wdXQoKSBtb2RhVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgY2xvc2VCdG5UaXRsZSA9ICdDbG9zZSBkaWFsb2cnO1xuXG4gIEBPdXRwdXQoKSBvblNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2dFbGVtZW50JykgZGlhbG9nRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdmb2N1c2FibGUnKSBmb2N1c2FibGU6IEVsZW1lbnRSZWY7XG5cbiAgZGlhbG9nVGl0bGUgPSAnbW9kYWxUaXRsZScgKyB0aGlzLnJhbmRvbUlEKCk7XG4gIGRpYWxvZ0Rlc2NyaXB0aW9uID0gJ21vZGFsRGVzYycgKyB0aGlzLnJhbmRvbUlEKCk7XG4gIGJ0bkNsb3NlTGFiZWwgPSAnQ2xvc2UgZGlhbG9nJztcbiAgc2NyZWVuSGVpZ2h0OiBhbnk7XG4gIHNjcmVlbldpZHRoOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZXRTY3JlZW5TaXplKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIGdldFNjcmVlblNpemUoZXZlbnQ/KSB7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgLyogT3BlbiBNb2RhbCAqL1xuICBUb2dnbGVPcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGV2ZW50T3BlbiA9IHRoaXM7XG4gICAgICB0aGlzLm9uU2hvdy5lbWl0KHRoaXMuZGlhbG9nRWxlbWVudCk7XG4gICAgICB0aGlzLm1vZGFsUG9zaXRpb24oKTtcblxuICAgICAgLy8gRm9jdXMgb24gY2xvc2UgYnV0dG9uXG4gICAgICBjb25zdCB0aXRsZU1vZGFsRm9jdXMgPSB0aGlzLmZvY3VzYWJsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGl0bGVNb2RhbEZvY3VzLmZvY3VzKCk7XG4gICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm9uSGlkZS5lbWl0KHRoaXMuZGlhbG9nRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbW9kYWxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5zY3JlZW5XaWR0aCA+IDc2OCkge1xuICAgICAgaWYgKHRoaXMudG9wUG9zaXRpb24gPiAwKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy50b3BQb3NpdGlvbiArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9ICc0MCUnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sZWZ0UG9zaXRpb24gPiAwKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoTW9kYWwgPSAxMDAgLSB0aGlzLmxlZnRQb3NpdGlvbiAqIDI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aE1vZGFsICsgJyUnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLmxlZnRQb3NpdGlvbiArICclJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RhbFdpZHRoID4gMCkge1xuICAgICAgICBjb25zdCBsZWZ0UG9zaXRpb25Nb2RhbCA9ICh0aGlzLnNjcmVlbldpZHRoIC0gdGhpcy5tb2RhbFdpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9IGxlZnRQb3NpdGlvbk1vZGFsICsgJ3B4JztcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMubW9kYWxXaWR0aCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gJzUwJSc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICcyNSUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAnNSUnO1xuICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9ICc5MCUnO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm9uSGlkZS5lbWl0KHRoaXMuZGlhbG9nRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmFuZG9tSUQoKSB7XG4gICAgY29uc3QgaWRSYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMjAwMDAgLSAxKSArIDEpO1xuICAgIHJldHVybiBpZFJhbmRvbTtcbiAgfVxufVxuIl19