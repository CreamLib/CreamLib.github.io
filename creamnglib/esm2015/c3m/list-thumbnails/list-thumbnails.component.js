/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export class ListThumbnailsComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataList.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.listItem = data;
        });
    }
}
ListThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-thumbnails',
                template: "<ul>\n  <li *ngFor=\"let item of listItem\">\n    <p><img src=\"{{ item.url }}\" alt=\"fake image\" /></p>\n    <div class=\"content\">\n      {{ item.value }}\n    </div>\n  </li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-thumbnails li{display:flex;align-items:center;max-width:35em}c3m-list-thumbnails li+li{padding-top:1rem;margin-top:1rem;border-top:1px solid var(--n-medium)}c3m-list-thumbnails li>p{flex-basis:30%;max-width:180px}c3m-list-thumbnails .content{flex-basis:65%;line-height:1.45}"]
            }] }
];
/** @nocollapse */
ListThumbnailsComponent.ctorParameters = () => [
    { type: Http }
];
ListThumbnailsComponent.propDecorators = {
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListThumbnailsComponent.prototype.title;
    /** @type {?} */
    ListThumbnailsComponent.prototype.listItem;
    /**
     * @type {?}
     * @private
     */
    ListThumbnailsComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9saXN0LXRodW1ibmFpbHMvbGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRckMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFLbEMsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDOzs7OztJQU1sQyxRQUFRO1FBQ04sbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix5TUFBK0M7Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVRRLElBQUk7OztvQkFZVixLQUFLOzs7O0lBQU4sd0NBQWU7O0lBTWYsMkNBQWdCOzs7OztJQUhKLHVDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdC10aHVtYm5haWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtdGh1bWJuYWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtdGh1bWJuYWlscy5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFRodW1ibmFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGU7XG5cbiAgLy8gQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIC8vIEFycmF5IG9mIGFsbCBvcHRpb25zXG4gIGxpc3RJdGVtOiBhbnlbXTtcblxuICAvLyBPbiBJbml0XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEdldCBEYXRhIG9mIGEgSlNPTiAob3Igb3RoZXIuLi4pXG4gICAgZnJvbSh0aGlzLmh0dHAuZ2V0KCdhc3NldHMvanNvbi9kYXRhTGlzdC5qc29uJykpXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSkgLy8gU3BlY2lmeSBKU09OIHR5cGVcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIFNldCBpdGVtcyB0byByZXNwb25zZSBKc29uXG4gICAgICAgIHRoaXMubGlzdEl0ZW0gPSBkYXRhO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==