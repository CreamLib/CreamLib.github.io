/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class ListComponent {
    constructor() {
        this.values = [];
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list',
                template: "<ul>\n  <li *ngFor=\"let item of values\">{{ item.value }}</li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list ul{list-style-type:disc;margin-left:2rem}c3m-list li+li{margin-top:.5em}"]
            }] }
];
ListComponent.propDecorators = {
    title: [{ type: Input }],
    values: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.title;
    /** @type {?} */
    ListComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTcEUsTUFBTSxPQUFPLGFBQWE7SUFOMUI7UUFTVyxXQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG9GQUFvQztnQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7b0JBR0UsS0FBSztxQkFDTCxLQUFLOzs7O0lBRE4sOEJBQWU7O0lBQ2YsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RWYWx1ZSB9IGZyb20gJy4vbGlzdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSB2YWx1ZXM6IExpc3RWYWx1ZVtdID0gW107XG59XG4iXX0=