/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
export class ModalDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** @type {?} */
        const map = {};
        /** @type {?} */
        let oldElementFocused;
        /** @type {?} */
        const containerModal = this.el.nativeElement;
        this.el.nativeElement.onkeydown = this.el.nativeElement.onkeyup = function (e) {
            /** @type {?} */
            const elementFocused = (/** @type {?} */ (e.target));
            /** @type {?} */
            const typeElementFocused = elementFocused;
            /** @type {?} */
            const nbChild = containerModal.childElementCount;
            /** @type {?} */
            const lastChildElt = containerModal.childNodes[nbChild - 1];
            /** @type {?} */
            const firstChildElt = containerModal.childNodes[0];
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
}
ModalDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mModalOut]'
            },] }
];
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxEaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL21vZGFsRGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLakUsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7Y0FDdkQsR0FBRyxHQUFHLEVBQUU7O1lBQ1YsaUJBQWlCOztjQUNmLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxVQUFTLENBQUM7O2tCQUNwRSxjQUFjLEdBQUcsbUJBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBQTs7a0JBQ3RDLGtCQUFrQixHQUFHLGNBQWM7O2tCQUVuQyxPQUFPLEdBQUcsY0FBYyxDQUFDLGlCQUFpQjs7a0JBQzFDLFlBQVksR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7O2tCQUNyRCxhQUFhLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFbEQsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxrQkFBa0I7WUFFbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztZQUV0QyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLCtDQUErQztnQkFDL0MsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUN2QyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDcEI7YUFDRjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDN0IsNkNBQTZDO2dCQUM3QyxJQUFJLGlCQUFpQixDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksaUJBQWlCLENBQUMsU0FBUyxLQUFLLGNBQWMsRUFBRTtvQkFDN0YsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7WUFDRCxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN6QyxDQUFDLENBQUM7SUFDSixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBSm1CLFVBQVU7WUFBRSxTQUFTOzs7Ozs7O0lBTTNCLDRCQUFzQjs7Ozs7SUFBRSxrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYzNtTW9kYWxPdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIGxldCBvbGRFbGVtZW50Rm9jdXNlZDtcbiAgICBjb25zdCBjb250YWluZXJNb2RhbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub25rZXlkb3duID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9ua2V5dXAgPSBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBlbGVtZW50Rm9jdXNlZCA9IDxIVE1MRWxlbWVudD5lLnRhcmdldDtcbiAgICAgIGNvbnN0IHR5cGVFbGVtZW50Rm9jdXNlZCA9IGVsZW1lbnRGb2N1c2VkO1xuXG4gICAgICBjb25zdCBuYkNoaWxkID0gY29udGFpbmVyTW9kYWwuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbHQgPSBjb250YWluZXJNb2RhbC5jaGlsZE5vZGVzW25iQ2hpbGQgLSAxXTtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGRFbHQgPSBjb250YWluZXJNb2RhbC5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICBlID0gZSB8fCBldmVudDsgLy8gdG8gZGVhbCB3aXRoIElFXG5cbiAgICAgIG1hcFtlLmtleUNvZGVdID0gZS50eXBlID09PSAna2V5ZG93bic7XG5cbiAgICAgIGlmIChtYXBbMTZdICYmIG1hcFs5XSkge1xuICAgICAgICAvLyBUZXN0IGlmIHdlIHRyeSB0byBmb2N1cyBhaGVhZCBvZiBtb2RhbCB0aXRsZVxuICAgICAgICBpZiAob2xkRWxlbWVudEZvY3VzZWQubm9kZU5hbWUgPT09ICdIMScpIHtcbiAgICAgICAgICBsYXN0Q2hpbGRFbHQuZm9jdXMoKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWFwWzldICYmICFtYXBbMTZdKSB7XG4gICAgICAgIC8vIFRlc3QgaWYgd2UgdHJ5IHRvIGZvY3VzIGFmdGVyIGNsb3NlIGJ1dHRvblxuICAgICAgICBpZiAob2xkRWxlbWVudEZvY3VzZWQubm9kZU5hbWUgPT09ICdCVVRUT04nICYmIG9sZEVsZW1lbnRGb2N1c2VkLmNsYXNzTmFtZSA9PT0gJ2RpYWxvZy1jbG9zZScpIHtcbiAgICAgICAgICBmaXJzdENoaWxkRWx0LmZvY3VzKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbGRFbGVtZW50Rm9jdXNlZCA9IHR5cGVFbGVtZW50Rm9jdXNlZDtcbiAgICB9O1xuICB9XG59XG4iXX0=