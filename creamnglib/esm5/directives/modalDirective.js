/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
var ModalDirective = /** @class */ (function () {
    function ModalDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** @type {?} */
        var map = {};
        /** @type {?} */
        var oldElementFocused;
        /** @type {?} */
        var containerModal = this.el.nativeElement;
        this.el.nativeElement.onkeydown = this.el.nativeElement.onkeyup = function (e) {
            /** @type {?} */
            var elementFocused = (/** @type {?} */ (e.target));
            /** @type {?} */
            var typeElementFocused = elementFocused;
            /** @type {?} */
            var nbChild = containerModal.childElementCount;
            /** @type {?} */
            var lastChildElt = containerModal.childNodes[nbChild - 1];
            /** @type {?} */
            var firstChildElt = containerModal.childNodes[0];
            e = e || event; // to deal with IE
            map[e.keyCode] = e.type === 'keydown';
            if (map[16] && map[9]) {
                // Test if we try to focus ahead of modal title
                if (oldElementFocused.nodeName === 'H1') {
                    lastChildElt.focus();
                    e.preventDefault();
                }
            }
            else if (map[9] && !map[16]) {
                // Test if we try to focus after close button
                if (oldElementFocused.nodeName === 'BUTTON' && oldElementFocused.className === 'dialog-close') {
                    firstChildElt.focus();
                    e.preventDefault();
                }
            }
            oldElementFocused = typeElementFocused;
        };
    }
    ModalDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[c3mModalOut]'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return ModalDirective;
}());
export { ModalDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ModalDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxEaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL21vZGFsRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakU7SUFJRSx3QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOztZQUN2RCxHQUFHLEdBQUcsRUFBRTs7WUFDVixpQkFBaUI7O1lBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLFVBQVMsQ0FBQzs7Z0JBQ3BFLGNBQWMsR0FBRyxtQkFBYSxDQUFDLENBQUMsTUFBTSxFQUFBOztnQkFDdEMsa0JBQWtCLEdBQUcsY0FBYzs7Z0JBRW5DLE9BQU8sR0FBRyxjQUFjLENBQUMsaUJBQWlCOztnQkFDMUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3JELGFBQWEsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUVsRCxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLGtCQUFrQjtZQUVsQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO1lBRXRDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsK0NBQStDO2dCQUMvQyxJQUFJLGlCQUFpQixDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ3ZDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUNwQjthQUNGO2lCQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUM3Qiw2Q0FBNkM7Z0JBQzdDLElBQUksaUJBQWlCLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLEtBQUssY0FBYyxFQUFFO29CQUM3RixhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDcEI7YUFDRjtZQUNELGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQUptQixVQUFVO2dCQUFFLFNBQVM7O0lBc0N6QyxxQkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLGNBQWM7Ozs7OztJQUNiLDRCQUFzQjs7Ozs7SUFBRSxrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYzNtTW9kYWxPdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIGxldCBvbGRFbGVtZW50Rm9jdXNlZDtcbiAgICBjb25zdCBjb250YWluZXJNb2RhbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub25rZXlkb3duID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9ua2V5dXAgPSBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBlbGVtZW50Rm9jdXNlZCA9IDxIVE1MRWxlbWVudD5lLnRhcmdldDtcbiAgICAgIGNvbnN0IHR5cGVFbGVtZW50Rm9jdXNlZCA9IGVsZW1lbnRGb2N1c2VkO1xuXG4gICAgICBjb25zdCBuYkNoaWxkID0gY29udGFpbmVyTW9kYWwuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbHQgPSBjb250YWluZXJNb2RhbC5jaGlsZE5vZGVzW25iQ2hpbGQgLSAxXTtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGRFbHQgPSBjb250YWluZXJNb2RhbC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICBlID0gZSB8fCBldmVudDsgLy8gdG8gZGVhbCB3aXRoIElFXG5cbiAgICAgIG1hcFtlLmtleUNvZGVdID0gZS50eXBlID09PSAna2V5ZG93bic7XG5cbiAgICAgIGlmIChtYXBbMTZdICYmIG1hcFs5XSkge1xuICAgICAgICAvLyBUZXN0IGlmIHdlIHRyeSB0byBmb2N1cyBhaGVhZCBvZiBtb2RhbCB0aXRsZVxuICAgICAgICBpZiAob2xkRWxlbWVudEZvY3VzZWQubm9kZU5hbWUgPT09ICdIMScpIHtcbiAgICAgICAgICBsYXN0Q2hpbGRFbHQuZm9jdXMoKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWFwWzldICYmICFtYXBbMTZdKSB7XG4gICAgICAgIC8vIFRlc3QgaWYgd2UgdHJ5IHRvIGZvY3VzIGFmdGVyIGNsb3NlIGJ1dHRvblxuICAgICAgICBpZiAob2xkRWxlbWVudEZvY3VzZWQubm9kZU5hbWUgPT09ICdCVVRUT04nICYmIG9sZEVsZW1lbnRGb2N1c2VkLmNsYXNzTmFtZSA9PT0gJ2RpYWxvZy1jbG9zZScpIHtcbiAgICAgICAgICBmaXJzdENoaWxkRWx0LmZvY3VzKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbGRFbGVtZW50Rm9jdXNlZCA9IHR5cGVFbGVtZW50Rm9jdXNlZDtcbiAgICB9O1xuICB9XG59XG4iXX0=