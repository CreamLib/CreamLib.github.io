/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export class ListOrderComponent {
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
ListOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-order',
                template: "<ol>\n  <li *ngFor=\"let item of listItem\">{{ item.value }}</li>\n</ol>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-order ol{list-style-type:decimal;margin-left:2rem}c3m-list-order li+li{margin-top:.5em}"]
            }] }
];
/** @nocollapse */
ListOrderComponent.ctorParameters = () => [
    { type: Http }
];
ListOrderComponent.propDecorators = {
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListOrderComponent.prototype.title;
    /** @type {?} */
    ListOrderComponent.prototype.listItem;
    /**
     * @type {?}
     * @private
     */
    ListOrderComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vcmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRckMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFLN0IsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDOzs7OztJQU1sQyxRQUFRO1FBQ04sbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixzRkFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVRRLElBQUk7OztvQkFZVixLQUFLOzs7O0lBQU4sbUNBQWU7O0lBTWYsc0NBQWdCOzs7OztJQUhKLGtDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdC1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1vcmRlci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdE9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuXG4gIC8vIENvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvLyBBcnJheSBvZiBhbGwgb3B0aW9uc1xuICBsaXN0SXRlbTogYW55W107XG5cbiAgLy8gT24gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBHZXQgRGF0YSBvZiBhIEpTT04gKG9yIG90aGVyLi4uKVxuICAgIGZyb20odGhpcy5odHRwLmdldCgnYXNzZXRzL2pzb24vZGF0YUxpc3QuanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmxpc3RJdGVtID0gZGF0YTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=