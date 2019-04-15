/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
var ScrolltoDirective = /** @class */ (function () {
    function ScrolltoDirective() {
    }
    /**
     * @param {?} elt
     * @return {?}
     */
    ScrolltoDirective.prototype.onClick = /**
     * @param {?} elt
     * @return {?}
     */
    function (elt) {
        /** @type {?} */
        var target = elt.target;
        /** @type {?} */
        var classToFocus = target.classList[0];
        /** @type {?} */
        var eltToFocus = document.getElementById(classToFocus);
        if (eltToFocus) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(eltToFocus.tagName)) {
                eltToFocus.tabIndex = -1;
            }
            eltToFocus.focus();
        }
    };
    ScrolltoDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[c3mScrollTo]'
                },] }
    ];
    /** @nocollapse */
    ScrolltoDirective.ctorParameters = function () { return []; };
    ScrolltoDirective.propDecorators = {
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ScrolltoDirective;
}());
export { ScrolltoDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsdG9EaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Njcm9sbHRvRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RDtJQUlFO0lBQWUsQ0FBQzs7Ozs7SUFHaEIsbUNBQU87Ozs7SUFEUCxVQUNRLEdBQUc7O1lBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNOztZQUNuQixZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O1lBQ2xDLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUN4RCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNyRSxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7OzBCQUlFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBWW5DLHdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYzNtU2Nyb2xsVG9dJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGx0b0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZWx0LnRhcmdldDtcbiAgICBjb25zdCBjbGFzc1RvRm9jdXMgPSB0YXJnZXQuY2xhc3NMaXN0WzBdO1xuICAgIGNvbnN0IGVsdFRvRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGFzc1RvRm9jdXMpO1xuICAgIGlmIChlbHRUb0ZvY3VzKSB7XG4gICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsdFRvRm9jdXMudGFnTmFtZSkpIHtcbiAgICAgICAgZWx0VG9Gb2N1cy50YWJJbmRleCA9IC0xO1xuICAgICAgfVxuICAgICAgZWx0VG9Gb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIl19