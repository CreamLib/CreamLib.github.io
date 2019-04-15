/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
var ListDescriptionComponent = /** @class */ (function () {
    // Constructor
    function ListDescriptionComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListDescriptionComponent.prototype.ngOnInit = 
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
    ListDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-list-description',
                    template: "<dl *ngFor=\"let item of listItem\">\n  <dt>{{ item.title }}</dt>\n  <dd>{{ item.content }}</dd>\n</dl>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-list-description dl{margin:1rem 0}c3m-list-description dt{font-family:var(--stack-b)}c3m-list-description dd{margin:.25em 0 0 1em}"]
                }] }
    ];
    /** @nocollapse */
    ListDescriptionComponent.ctorParameters = function () { return [
        { type: Http }
    ]; };
    ListDescriptionComponent.propDecorators = {
        title: [{ type: Input }]
    };
    return ListDescriptionComponent;
}());
export { ListDescriptionComponent };
if (false) {
    /** @type {?} */
    ListDescriptionComponent.prototype.title;
    /** @type {?} */
    ListDescriptionComponent.prototype.listItem;
    /**
     * @type {?}
     * @private
     */
    ListDescriptionComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1kZXNjcmlwdGlvbi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFVRSxjQUFjO0lBQ2Qsa0NBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUtsQyxVQUFVOzs7OztJQUNWLDJDQUFROzs7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMscUhBQWdEO29CQUVoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVRRLElBQUk7Ozt3QkFZVixLQUFLOztJQWtCUiwrQkFBQztDQUFBLEFBMUJELElBMEJDO1NBcEJZLHdCQUF3Qjs7O0lBRW5DLHlDQUFlOztJQU1mLDRDQUFnQjs7Ozs7SUFISix3Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWxpc3QtZGVzY3JpcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3QtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExpc3REZXNjcmlwdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcblxuICAvLyBDb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgLy8gQXJyYXkgb2YgYWxsIG9wdGlvbnNcbiAgbGlzdEl0ZW06IGFueVtdO1xuXG4gIC8vIE9uIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IERhdGEgb2YgYSBKU09OIChvciBvdGhlci4uLilcbiAgICBmcm9tKHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9qc29uL2RhdGFMaXN0Lmpzb24nKSlcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpKSAvLyBTcGVjaWZ5IEpTT04gdHlwZVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gU2V0IGl0ZW1zIHRvIHJlc3BvbnNlIEpzb25cbiAgICAgICAgdGhpcy5saXN0SXRlbSA9IGRhdGE7XG4gICAgICB9KTtcbiAgfVxufVxuIl19