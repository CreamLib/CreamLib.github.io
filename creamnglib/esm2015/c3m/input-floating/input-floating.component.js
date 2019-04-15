/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputFloatingComponent {
    constructor() {
        this.floating = 'bottom';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputFloatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-floating',
                template: "<p [ngClass]=\"this.floating\">\n  <input type=\"text\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-floating>p{position:relative;overflow:hidden;width:40%;font-size:1rem;min-width:220px}c3m-input-floating input{width:100%;border:2px solid gray;background:0 0;position:relative;top:0;left:0;z-index:1;padding:8px 12px;outline:0;font-family:quicksandregular;box-sizing:border-box}c3m-input-floating input:valid{background:#fff}c3m-input-floating input:focus{border-color:#f06d06}c3m-input-floating input:focus+label{background:#f06d06;color:#fff;font-size:70%;padding:1px 6px;z-index:2;text-transform:uppercase}c3m-input-floating label{transition:background .2s,color .2s,top .2s,bottom .2s,right .2s,left .2s;position:absolute;color:#999;padding:7px 6px}c3m-input-floating p.bottom>input{padding:12px 0}c3m-input-floating p.bottom>label{top:0;bottom:0;left:0;width:100%}c3m-input-floating p.bottom>input:focus{padding:4px 6px 20px}c3m-input-floating p.bottom>input:focus+label{top:100%;margin-top:-16px}c3m-input-floating p.right label{top:2px;right:100%;width:100%;margin-right:-100%;bottom:2px}c3m-input-floating p.right input:focus+label{right:0;margin-right:0;width:40%;padding-top:5px}"]
            }] }
];
/** @nocollapse */
InputFloatingComponent.ctorParameters = () => [];
InputFloatingComponent.propDecorators = {
    title: [{ type: Input }],
    floating: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputFloatingComponent.prototype.title;
    /** @type {?} */
    InputFloatingComponent.prototype.floating;
    /** @type {?} */
    InputFloatingComponent.prototype.name;
    /** @type {?} */
    InputFloatingComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmxvYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2lucHV0LWZsb2F0aW5nL2lucHV0LWZsb2F0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLHNCQUFzQjtJQU9qQztRQUpTLGFBQVEsR0FBRyxRQUFRLENBQUM7SUFJZCxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFmZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIseUtBQThDO2dCQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O29CQUdFLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO2lCQUNMLEtBQUs7Ozs7SUFITix1Q0FBZTs7SUFDZiwwQ0FBNkI7O0lBQzdCLHNDQUFjOztJQUNkLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20taW5wdXQtZmxvYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZmxvYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1mbG9hdGluZy5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGbG9hdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgZmxvYXRpbmcgPSAnYm90dG9tJztcbiAgQElucHV0KCkgbmFtZTtcbiAgQElucHV0KCkgaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==