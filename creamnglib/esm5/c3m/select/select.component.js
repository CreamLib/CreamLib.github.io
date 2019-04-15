/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
var SelectComponent = /** @class */ (function () {
    // Constructor
    function SelectComponent(http) {
        this.http = http;
        this.id = '';
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataSelect.json'))
            .pipe(map(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allOptions = data;
        });
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-select',
                    template: "<p>\n  <label for=\"{{ id }}\"> {{ this.title }} </label>\n  <select id=\"{{ id }}\" [name]=\"this.name\">\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </select>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-select label{display:block;padding-bottom:.3rem}c3m-select select{display:block;font:100%/1 var(--stack);padding:.5em}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: Http }
    ]; };
    SelectComponent.propDecorators = {
        title: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.title;
    /** @type {?} */
    SelectComponent.prototype.name;
    /** @type {?} */
    SelectComponent.prototype.id;
    /** @type {?} */
    SelectComponent.prototype.allOptions;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFZRSxjQUFjO0lBQ2QseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSHJCLE9BQUUsR0FBRyxFQUFFLENBQUM7SUFHZ0IsQ0FBQztJQUtsQyxVQUFVOzs7OztJQUNWLGtDQUFROzs7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHVQQUFzQztvQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFUUSxJQUFJOzs7d0JBWVYsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7O0lBa0JSLHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0QlksZUFBZTs7O0lBRTFCLGdDQUFlOztJQUNmLCtCQUFjOztJQUNkLDZCQUFpQjs7SUFNakIscUNBQWtCOzs7OztJQUhOLCtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSBuYW1lO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuXG4gIC8vIENvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvLyBBcnJheSBvZiBhbGwgb3B0aW9uc1xuICBhbGxPcHRpb25zOiBhbnlbXTtcblxuICAvLyBPbiBJbml0XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEdldCBEYXRhIG9mIGEgSlNPTiAob3Igb3RoZXIuLi4pXG4gICAgZnJvbSh0aGlzLmh0dHAuZ2V0KCdhc3NldHMvanNvbi9kYXRhU2VsZWN0Lmpzb24nKSlcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpKSAvLyBTcGVjaWZ5IEpTT04gdHlwZVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gU2V0IGl0ZW1zIHRvIHJlc3BvbnNlIEpzb25cbiAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gZGF0YTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=