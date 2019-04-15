/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        /* INPUTS */
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /* Open / Close the Dropdown */
    /* Open / Close the Dropdown */
    /**
     * @return {?}
     */
    DropdownComponent.prototype.toggleOpen = /* Open / Close the Dropdown */
    /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.isOpen = false;
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        document.querySelector('details').removeAttribute('open');
        this.isOpen = false;
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-dropdown',
                    template: "<details class=\"dropdown\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggleOpen()\" (focusout)=\"close()\">\n  <!-- Dropdown Button -->\n  <summary>{{ this.nameDropdown }}</summary>\n  <!-- Dropdown Content List -->\n  <ul [ngClass]=\"{ open: isOpen }\">\n    <ng-content></ng-content>\n  </ul>\n</details>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["details.dropdown{display:inline-block;position:relative}details.dropdown summary{color:var(--text-inv);background:var(--main-color);padding:.4em 1em .5em .5em;border-radius:.3em;cursor:pointer}details.dropdown summary:focus,details.dropdown summary[open]{border:1px dashed outline;background:var(--main-light)}details.dropdown ul{box-sizing:border-box;position:absolute;overflow:hidden;width:10em;height:1px;list-style-type:none;padding:.5em;border-radius:.3em;box-shadow:1px 1px 3px rgba(0,0,0,.5);opacity:0;transition:1s}details.dropdown.open ul{height:auto;opacity:1;transition:1s}details.dropdown.open li{font-size:1em}details.dropdown a,details.dropdown button,details.dropdown c3m-button button,details.dropdown c3m-button-link a{display:block;width:100%;font:100% var(--stack);text-decoration:none;text-align:center;color:var(--body-text);background-color:var(--body-bg);padding:.5em;border-radius:.3em}details.dropdown button:hover,details.dropdown c3m-button button:hover,details.dropdown c3m-button-link a:hover{color:var(--body-text);background-color:var(--n-light)}c3m-dropdown details.dropdown.open ul{background:#fff}c3m-dropdown details c3m-button button,c3m-dropdown details li a{display:block;padding:.5em;font:100%/1 var(--stack);color:initial;text-decoration:none;text-align:left;background:0 0}c3m-dropdown details li a:focus,c3m-dropdown details li a:hover,c3m-dropdown details li button:focus,c3m-dropdown details li button:hover{text-decoration:underline;color:inherit;background:inherit}"]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    DropdownComponent.propDecorators = {
        isOpen: [{ type: Input }],
        nameDropdown: [{ type: Input }]
    };
    return DropdownComponent;
}());
export { DropdownComponent };
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.isOpen;
    /** @type {?} */
    DropdownComponent.prototype.nameDropdown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFPRTs7UUFHUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBSFQsQ0FBQzs7OztJQU1oQixvQ0FBUTs7O0lBQVIsY0FBWSxDQUFDO0lBRWIsK0JBQStCOzs7OztJQUMvQixzQ0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBQ0QsaUNBQUs7OztJQUFMO1FBQ0UsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZ1VBQXdDO29CQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Ozt5QkFLRSxLQUFLOytCQUNMLEtBQUs7O0lBaUJSLHdCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0QlksaUJBQWlCOzs7SUFJNUIsbUNBQXdCOztJQUN4Qix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKiBJTlBVVFMgKi9cbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5hbWVEcm9wZG93bjogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge31cblxuICAvKiBPcGVuIC8gQ2xvc2UgdGhlIERyb3Bkb3duICovXG4gIHRvZ2dsZU9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RldGFpbHMnKS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==