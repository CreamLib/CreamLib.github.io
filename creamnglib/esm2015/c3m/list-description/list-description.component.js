/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export class ListDescriptionComponent {
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
ListDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-description',
                template: "<dl *ngFor=\"let item of listItem\">\n  <dt>{{ item.title }}</dt>\n  <dd>{{ item.content }}</dd>\n</dl>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-description dl{margin:1rem 0}c3m-list-description dt{font-family:var(--stack-b)}c3m-list-description dd{margin:.25em 0 0 1em}"]
            }] }
];
/** @nocollapse */
ListDescriptionComponent.ctorParameters = () => [
    { type: Http }
];
ListDescriptionComponent.propDecorators = {
    title: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC1kZXNjcmlwdGlvbi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRckMsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFLbkMsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDOzs7OztJQU1sQyxRQUFRO1FBQ04sbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxxSEFBZ0Q7Z0JBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVRRLElBQUk7OztvQkFZVixLQUFLOzs7O0lBQU4seUNBQWU7O0lBTWYsNENBQWdCOzs7OztJQUhKLHdDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdC1kZXNjcmlwdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdERlc2NyaXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIHRpdGxlO1xuXG4gIC8vIENvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvLyBBcnJheSBvZiBhbGwgb3B0aW9uc1xuICBsaXN0SXRlbTogYW55W107XG5cbiAgLy8gT24gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBHZXQgRGF0YSBvZiBhIEpTT04gKG9yIG90aGVyLi4uKVxuICAgIGZyb20odGhpcy5odHRwLmdldCgnYXNzZXRzL2pzb24vZGF0YUxpc3QuanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmxpc3RJdGVtID0gZGF0YTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=