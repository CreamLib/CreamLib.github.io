/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class ListOrderComponent {
}
ListOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-order',
                template: "<ol>\n  <li *ngFor=\"let item of values\">{{ item.value }}</li>\n</ol>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-order ol{list-style-type:decimal;margin-left:2rem}c3m-list-order li+li{margin-top:.5em}"]
            }] }
];
ListOrderComponent.propDecorators = {
    title: [{ type: Input }],
    values: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListOrderComponent.prototype.title;
    /** @type {?} */
    ListOrderComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vcmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTcEUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBTjlCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixvRkFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O29CQUdFLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLG1DQUFlOztJQUNmLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0VmFsdWUgfSBmcm9tICcuLi9saXN0L2xpc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdC1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1vcmRlci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdE9yZGVyQ29tcG9uZW50IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSB2YWx1ZXM6IExpc3RWYWx1ZVtdO1xufVxuIl19