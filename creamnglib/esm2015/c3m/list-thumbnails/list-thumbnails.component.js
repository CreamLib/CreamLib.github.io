/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class ListThumbnailsComponent {
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
if (false) {
    /** @type {?} */
    ListThumbnailsComponent.prototype.title;
    /** @type {?} */
    ListThumbnailsComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9saXN0LXRodW1ibmFpbHMvbGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTcEUsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBTm5DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix1TUFBK0M7Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O29CQUdFLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLHdDQUFlOztJQUNmLHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0VmFsdWUgfSBmcm9tICcuLi9saXN0L2xpc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdC10aHVtYm5haWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtdGh1bWJuYWlscy5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFRodW1ibmFpbHNDb21wb25lbnQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGU7XG4gIEBJbnB1dCgpIHZhbHVlczogTGlzdFZhbHVlW107XG59XG4iXX0=