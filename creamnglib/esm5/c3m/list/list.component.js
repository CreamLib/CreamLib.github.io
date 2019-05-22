/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.values = [];
    }
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-list',
                    template: "<ul>\n  <li *ngFor=\"let item of values\">{{ item.value }}</li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-list ul{list-style-type:disc;margin-left:2rem}c3m-list li+li{margin-top:.5em}"]
                }] }
    ];
    ListComponent.propDecorators = {
        title: [{ type: Input }],
        values: [{ type: Input }]
    };
    return ListComponent;
}());
export { ListComponent };
if (false) {
    /** @type {?} */
    ListComponent.prototype.title;
    /** @type {?} */
    ListComponent.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEU7SUFBQTtRQVNXLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsb0ZBQW9DO29CQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7d0JBR0UsS0FBSzt5QkFDTCxLQUFLOztJQUNSLG9CQUFDO0NBQUEsQUFWRCxJQVVDO1NBSlksYUFBYTs7O0lBRXhCLDhCQUFlOztJQUNmLCtCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0VmFsdWUgfSBmcm9tICcuL2xpc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgdmFsdWVzOiBMaXN0VmFsdWVbXSA9IFtdO1xufVxuIl19