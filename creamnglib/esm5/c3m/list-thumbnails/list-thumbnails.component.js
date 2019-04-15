/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
var ListThumbnailsComponent = /** @class */ (function () {
    // Constructor
    function ListThumbnailsComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListThumbnailsComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataList.json'))
            .pipe(map(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    ListThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-list-thumbnails',
                    template: "<ul>\n  <li *ngFor=\"let item of listItem\">\n    <p><img src=\"{{ item.url }}\" alt=\"fake image\" /></p>\n    <div class=\"content\">\n      {{ item.value }}\n    </div>\n  </li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-list-thumbnails li{display:flex;align-items:center;max-width:35em}c3m-list-thumbnails li+li{padding-top:1rem;margin-top:1rem;border-top:1px solid var(--n-medium)}c3m-list-thumbnails li>p{flex-basis:30%;max-width:180px}c3m-list-thumbnails .content{flex-basis:65%;line-height:1.45}"]
                }] }
    ];
    /** @nocollapse */
    ListThumbnailsComponent.ctorParameters = function () { return [
        { type: Http }
    ]; };
    ListThumbnailsComponent.propDecorators = {
        title: [{ type: Input }]
    };
    return ListThumbnailsComponent;
}());
export { ListThumbnailsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9saXN0LXRodW1ibmFpbHMvbGlzdC10aHVtYm5haWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFVRSxjQUFjO0lBQ2QsaUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUtsQyxVQUFVOzs7OztJQUNWLDBDQUFROzs7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IseU1BQStDO29CQUUvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVRRLElBQUk7Ozt3QkFZVixLQUFLOztJQWtCUiw4QkFBQztDQUFBLEFBMUJELElBMEJDO1NBcEJZLHVCQUF1Qjs7O0lBRWxDLHdDQUFlOztJQU1mLDJDQUFnQjs7Ozs7SUFISix1Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWxpc3QtdGh1bWJuYWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LXRodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LXRodW1ibmFpbHMuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3RUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuXG4gIC8vIENvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvLyBBcnJheSBvZiBhbGwgb3B0aW9uc1xuICBsaXN0SXRlbTogYW55W107XG5cbiAgLy8gT24gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBHZXQgRGF0YSBvZiBhIEpTT04gKG9yIG90aGVyLi4uKVxuICAgIGZyb20odGhpcy5odHRwLmdldCgnYXNzZXRzL2pzb24vZGF0YUxpc3QuanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmxpc3RJdGVtID0gZGF0YTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=