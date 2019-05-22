/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var ListOrderComponent = /** @class */ (function () {
    function ListOrderComponent() {
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
    return ListOrderComponent;
}());
export { ListOrderComponent };
if (false) {
    /** @type {?} */
    ListOrderComponent.prototype.title;
    /** @type {?} */
    ListOrderComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vcmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEU7SUFBQTtJQVVBLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixvRkFBMEM7b0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozt3QkFHRSxLQUFLO3lCQUNMLEtBQUs7O0lBQ1IseUJBQUM7Q0FBQSxBQVZELElBVUM7U0FKWSxrQkFBa0I7OztJQUU3QixtQ0FBZTs7SUFDZixvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFZhbHVlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWxpc3Qtb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1vcmRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3Qtb3JkZXIuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RPcmRlckNvbXBvbmVudCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgdmFsdWVzOiBMaXN0VmFsdWVbXTtcbn1cbiJdfQ==