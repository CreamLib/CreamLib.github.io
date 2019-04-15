/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputMaterialComponent {
    constructor() {
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputMaterialComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-material',
                template: "<p class=\"field\">\n  <input type=\"text\" [placeholder]=\"this.placeholder\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-material p.field{display:flex;flex-flow:column-reverse;margin-bottom:1em;width:40%;min-width:220px}c3m-input-material input,c3m-input-material label{transition:.2s;touch-action:manipulation}c3m-input-material input{font-size:1.2em;border:0;border-bottom:1px solid #ccc;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;border-radius:0;padding:0;cursor:text}c3m-input-material input:focus{outline:0;border-bottom:1px solid #666}c3m-input-material label{text-transform:uppercase;letter-spacing:.05em}c3m-input-material input::-webkit-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translate(0,1.825rem) scale(1.3);transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input:-ms-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input::-ms-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input::placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translate(0,1.825rem) scale(1.3);transform:translate(0,1.825rem) scale(1.3)}c3m-input-material ::-webkit-input-placeholder{opacity:0;transition:inherit}c3m-input-material input:focus::-webkit-input-placeholder{opacity:1}c3m-input-material input:focus+label,c3m-input-material input:not(:placeholder-shown)+label{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:translate(0,0) scale(.8);transform:translate(0,0) scale(.8);padding-bottom:0;cursor:pointer}"]
            }] }
];
/** @nocollapse */
InputMaterialComponent.ctorParameters = () => [];
InputMaterialComponent.propDecorators = {
    title: [{ type: Input }],
    placeholder: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputMaterialComponent.prototype.title;
    /** @type {?} */
    InputMaterialComponent.prototype.placeholder;
    /** @type {?} */
    InputMaterialComponent.prototype.name;
    /** @type {?} */
    InputMaterialComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbWF0ZXJpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2lucHV0LW1hdGVyaWFsL2lucHV0LW1hdGVyaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLHNCQUFzQjtJQU9qQztRQUpTLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBSVgsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBZmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGdNQUE4QztnQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztvQkFHRSxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSztpQkFDTCxLQUFLOzs7O0lBSE4sdUNBQWU7O0lBQ2YsNkNBQTBCOztJQUMxQixzQ0FBYzs7SUFDZCxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWlucHV0LW1hdGVyaWFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LW1hdGVyaWFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtbWF0ZXJpYWwuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TWF0ZXJpYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGU7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIG5hbWU7XG4gIEBJbnB1dCgpIGlkO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=