/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
var ListComponent = /** @class */ (function () {
    // Constructor
    function ListComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = 
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
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-list',
                    template: "<ul>\n  <li *ngFor=\"let item of listItem\">{{ item.value }}</li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-list ul{list-style-type:disc;margin-left:2rem}c3m-list li+li{margin-top:.5em}"]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return [
        { type: Http }
    ]; };
    ListComponent.propDecorators = {
        title: [{ type: Input }]
    };
    return ListComponent;
}());
export { ListComponent };
if (false) {
    /** @type {?} */
    ListComponent.prototype.title;
    /** @type {?} */
    ListComponent.prototype.listItem;
    /**
     * @type {?}
     * @private
     */
    ListComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFVRSxjQUFjO0lBQ2QsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUtsQyxVQUFVOzs7OztJQUNWLGdDQUFROzs7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHNGQUFvQztvQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFUUSxJQUFJOzs7d0JBWVYsS0FBSzs7SUFrQlIsb0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXBCWSxhQUFhOzs7SUFFeEIsOEJBQWU7O0lBTWYsaUNBQWdCOzs7OztJQUhKLDZCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcblxuICAvLyBDb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgLy8gQXJyYXkgb2YgYWxsIG9wdGlvbnNcbiAgbGlzdEl0ZW06IGFueVtdO1xuXG4gIC8vIE9uIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IERhdGEgb2YgYSBKU09OIChvciBvdGhlci4uLilcbiAgICBmcm9tKHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9qc29uL2RhdGFMaXN0Lmpzb24nKSlcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpKSAvLyBTcGVjaWZ5IEpTT04gdHlwZVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gU2V0IGl0ZW1zIHRvIHJlc3BvbnNlIEpzb25cbiAgICAgICAgdGhpcy5saXN0SXRlbSA9IGRhdGE7XG4gICAgICB9KTtcbiAgfVxufVxuIl19