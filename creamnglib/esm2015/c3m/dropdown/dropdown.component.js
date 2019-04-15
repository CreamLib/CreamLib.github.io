/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class DropdownComponent {
    constructor() {
        /* INPUTS */
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /* Open / Close the Dropdown */
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.isOpen = false;
        }
    }
    /**
     * @return {?}
     */
    close() {
        document.querySelector('details').removeAttribute('open');
        this.isOpen = false;
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-dropdown',
                template: "<details class=\"dropdown\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggleOpen()\" (focusout)=\"close()\">\n  <!-- Dropdown Button -->\n  <summary>{{ this.nameDropdown }}</summary>\n  <!-- Dropdown Content List -->\n  <ul [ngClass]=\"{ open: isOpen }\">\n    <ng-content></ng-content>\n  </ul>\n</details>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["details.dropdown{display:inline-block;position:relative}details.dropdown summary{color:var(--text-inv);background:var(--main-color);padding:.4em 1em .5em .5em;border-radius:.3em;cursor:pointer}details.dropdown summary:focus,details.dropdown summary[open]{border:1px dashed outline;background:var(--main-light)}details.dropdown ul{box-sizing:border-box;position:absolute;overflow:hidden;width:10em;height:1px;list-style-type:none;padding:.5em;border-radius:.3em;box-shadow:1px 1px 3px rgba(0,0,0,.5);opacity:0;transition:1s}details.dropdown.open ul{height:auto;opacity:1;transition:1s}details.dropdown.open li{font-size:1em}details.dropdown a,details.dropdown button,details.dropdown c3m-button button,details.dropdown c3m-button-link a{display:block;width:100%;font:100% var(--stack);text-decoration:none;text-align:center;color:var(--body-text);background-color:var(--body-bg);padding:.5em;border-radius:.3em}details.dropdown button:hover,details.dropdown c3m-button button:hover,details.dropdown c3m-button-link a:hover{color:var(--body-text);background-color:var(--n-light)}c3m-dropdown details.dropdown.open ul{background:#fff}c3m-dropdown details c3m-button button,c3m-dropdown details li a{display:block;padding:.5em;font:100%/1 var(--stack);color:initial;text-decoration:none;text-align:left;background:0 0}c3m-dropdown details li a:focus,c3m-dropdown details li a:hover,c3m-dropdown details li button:focus,c3m-dropdown details li button:hover{text-decoration:underline;color:inherit;background:inherit}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [];
DropdownComponent.propDecorators = {
    isOpen: [{ type: Input }],
    nameDropdown: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.isOpen;
    /** @type {?} */
    DropdownComponent.prototype.nameDropdown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1Qjs7UUFHUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBSFQsQ0FBQzs7OztJQU1oQixRQUFRLEtBQUksQ0FBQzs7Ozs7SUFHYixVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBQ0QsS0FBSztRQUNILFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGdVQUF3QztnQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztxQkFLRSxLQUFLOzJCQUNMLEtBQUs7Ozs7SUFETixtQ0FBd0I7O0lBQ3hCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8qIElOUFVUUyAqL1xuICBASW5wdXQoKSBpc09wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbmFtZURyb3Bkb3duOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8qIE9wZW4gLyBDbG9zZSB0aGUgRHJvcGRvd24gKi9cbiAgdG9nZ2xlT3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGV0YWlscycpLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gIH1cblxufVxuIl19