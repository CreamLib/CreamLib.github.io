/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class ListDescriptionComponent {
}
ListDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-description',
                template: "<dl *ngFor=\"let item of values\">\n  <dt>{{ item.title }}</dt>\n  <dd>{{ item.content }}</dd>\n</dl>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-description dl{margin:1rem 0}c3m-list-description dt{font-family:var(--stack-b)}c3m-list-description dd{margin:.25em 0 0 1em}"]
            }] }
];
ListDescriptionComponent.propDecorators = {
    title: [{ type: Input }],
    values: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListDescriptionComponent.prototype.title;
    /** @type {?} */
    ListDescriptionComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1kZXNjcmlwdGlvbi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTcEUsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBTnBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtSEFBZ0Q7Z0JBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O29CQUdFLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLHlDQUFlOztJQUNmLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0VmFsdWUgfSBmcm9tICcuLi8uLi9wdWJsaWNfYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWxpc3QtZGVzY3JpcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3REZXNjcmlwdGlvbkNvbXBvbmVudCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgdmFsdWVzOiBMaXN0VmFsdWVbXTtcbn1cbiJdfQ==