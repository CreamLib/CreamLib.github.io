/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
export class ScrolltoDirective {
    constructor() { }
    /**
     * @param {?} elt
     * @return {?}
     */
    onClick(elt) {
        /** @type {?} */
        const target = elt.target;
        /** @type {?} */
        const classToFocus = target.classList[0];
        /** @type {?} */
        const eltToFocus = document.getElementById(classToFocus);
        if (eltToFocus) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(eltToFocus.tagName)) {
                eltToFocus.tabIndex = -1;
            }
            eltToFocus.focus();
        }
    }
}
ScrolltoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mScrollTo]'
            },] }
];
/** @nocollapse */
ScrolltoDirective.ctorParameters = () => [];
ScrolltoDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsdG9EaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Njcm9sbHRvRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt4RCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLGdCQUFlLENBQUM7Ozs7O0lBR2hCLE9BQU8sQ0FBQyxHQUFHOztjQUNILE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTTs7Y0FDbkIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztjQUNsQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDeEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsdUNBQXVDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDckUsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxQjtZQUNELFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7O3NCQUlFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYzNtU2Nyb2xsVG9dJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGx0b0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZWx0LnRhcmdldDtcbiAgICBjb25zdCBjbGFzc1RvRm9jdXMgPSB0YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IGVsdFRvRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGFzc1RvRm9jdXMpO1xuICAgIGlmIChlbHRUb0ZvY3VzKSB7XG4gICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsdFRvRm9jdXMudGFnTmFtZSkpIHtcbiAgICAgICAgZWx0VG9Gb2N1cy50YWJJbmRleCA9IC0xO1xuICAgICAgfVxuICAgICAgZWx0VG9Gb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIl19