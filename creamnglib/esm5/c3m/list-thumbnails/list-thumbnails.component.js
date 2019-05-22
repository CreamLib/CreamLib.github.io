/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var ListThumbnailsComponent = /** @class */ (function () {
    function ListThumbnailsComponent() {
    }
    ListThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-list-thumbnails',
                    template: "<ul>\n  <li *ngFor=\"let item of values\">\n    <p><img src=\"{{ item.url }}\" alt=\"fake image\" /></p>\n    <div class=\"content\">\n      {{ item.value }}\n    </div>\n  </li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-list-thumbnails li{display:flex;align-items:center;max-width:35em}c3m-list-thumbnails li+li{padding-top:1rem;margin-top:1rem;border-top:1px solid var(--n-medium)}c3m-list-thumbnails li>p{flex-basis:30%;max-width:180px}c3m-list-thumbnails .content{flex-basis:65%;line-height:1.45}"]
                }] }
    ];
    ListThumbnailsComponent.propDecorators = {
        title: [{ type: Input }],
        values: [{ type: Input }]
    };
    return ListThumbnailsComponent;
}());
export { ListThumbnailsComponent };
if (false) {
    /** @type {?} */
    ListThumbnailsComponent.prototype.title;
    /** @type {?} */
    ListThumbnailsComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9saXN0LXRodW1ibmFpbHMvbGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEU7SUFBQTtJQVVBLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix1TUFBK0M7b0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozt3QkFHRSxLQUFLO3lCQUNMLEtBQUs7O0lBQ1IsOEJBQUM7Q0FBQSxBQVZELElBVUM7U0FKWSx1QkFBdUI7OztJQUVsQyx3Q0FBZTs7SUFDZix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFZhbHVlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWxpc3QtdGh1bWJuYWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LXRodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LXRodW1ibmFpbHMuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RUaHVtYm5haWxzQ29tcG9uZW50IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSB2YWx1ZXM6IExpc3RWYWx1ZVtdO1xufVxuIl19