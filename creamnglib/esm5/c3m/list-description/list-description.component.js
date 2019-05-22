/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var ListDescriptionComponent = /** @class */ (function () {
    function ListDescriptionComponent() {
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
    return ListDescriptionComponent;
}());
export { ListDescriptionComponent };
if (false) {
    /** @type {?} */
    ListDescriptionComponent.prototype.title;
    /** @type {?} */
    ListDescriptionComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1kZXNjcmlwdGlvbi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEU7SUFBQTtJQVVBLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxtSEFBZ0Q7b0JBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozt3QkFHRSxLQUFLO3lCQUNMLEtBQUs7O0lBQ1IsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FKWSx3QkFBd0I7OztJQUVuQyx5Q0FBZTs7SUFDZiwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFZhbHVlIH0gZnJvbSAnLi4vLi4vcHVibGljX2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1saXN0LWRlc2NyaXB0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtZGVzY3JpcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RGVzY3JpcHRpb25Db21wb25lbnQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGU7XG4gIEBJbnB1dCgpIHZhbHVlczogTGlzdFZhbHVlW107XG59XG4iXX0=