/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
var SelectDatalistComponent = /** @class */ (function () {
    // Constructor
    function SelectDatalistComponent(http) {
        this.http = http;
        this.id = '';
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    SelectDatalistComponent.prototype.ngOnInit = 
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
        this.myListId = this.list;
        this.myInput.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    };
    SelectDatalistComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-select-datalist',
                    template: "<p>\n  <label for=\"{{ id }}\"> {{ this.title }}</label>\n  <input #inputList type=\"text\" id=\"{{ id }}\" [name]=\"this.name\" />\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-select-datalist label{display:block;padding-bottom:.3rem}c3m-select-datalist input{display:block;font:100%/1 var(--stack);padding:.5em}"]
                }] }
    ];
    /** @nocollapse */
    SelectDatalistComponent.ctorParameters = function () { return [
        { type: Http }
    ]; };
    SelectDatalistComponent.propDecorators = {
        myInput: [{ type: ViewChild, args: ['inputList',] }],
        myDataList: [{ type: ViewChild, args: ['dataList',] }],
        title: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }],
        list: [{ type: Input }]
    };
    return SelectDatalistComponent;
}());
export { SelectDatalistComponent };
if (false) {
    /** @type {?} */
    SelectDatalistComponent.prototype.myInput;
    /** @type {?} */
    SelectDatalistComponent.prototype.myDataList;
    /** @type {?} */
    SelectDatalistComponent.prototype.title;
    /** @type {?} */
    SelectDatalistComponent.prototype.name;
    /** @type {?} */
    SelectDatalistComponent.prototype.id;
    /** @type {?} */
    SelectDatalistComponent.prototype.list;
    /**
     * @type {?}
     * @private
     */
    SelectDatalistComponent.prototype.myListId;
    /** @type {?} */
    SelectDatalistComponent.prototype.allOptions;
    /**
     * @type {?}
     * @private
     */
    SelectDatalistComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zZWxlY3QtZGF0YWxpc3Qvc2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsSUFBSSxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQztJQWlCRSxjQUFjO0lBQ2QsaUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTHJCLE9BQUUsR0FBRyxFQUFFLENBQUM7SUFLZ0IsQ0FBQztJQUtsQyxVQUFVOzs7OztJQUNWLDBDQUFROzs7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDBTQUErQztvQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFUUSxJQUFJOzs7MEJBWVYsU0FBUyxTQUFDLFdBQVc7NkJBQ3JCLFNBQVMsU0FBQyxVQUFVO3dCQUVwQixLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQXNCUiw4QkFBQztDQUFBLEFBcENELElBb0NDO1NBOUJZLHVCQUF1Qjs7O0lBRWxDLDBDQUE0Qzs7SUFDNUMsNkNBQThDOztJQUU5Qyx3Q0FBZTs7SUFDZix1Q0FBYzs7SUFDZCxxQ0FBaUI7O0lBQ2pCLHVDQUFjOzs7OztJQUVkLDJDQUFpQjs7SUFLakIsNkNBQWtCOzs7OztJQUhOLHVDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1zZWxlY3QtZGF0YWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REYXRhbGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIENoaWxkc1xuICBAVmlld0NoaWxkKCdpbnB1dExpc3QnKSBteUlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkYXRhTGlzdCcpIG15RGF0YUxpc3Q6IEVsZW1lbnRSZWY7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgbmFtZTtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbGlzdDtcblxuICBwcml2YXRlIG15TGlzdElkO1xuICAvLyBDb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgLy8gQXJyYXkgb2YgYWxsIG9wdGlvbnNcbiAgYWxsT3B0aW9uczogYW55W107XG5cbiAgLy8gT24gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBHZXQgRGF0YSBvZiBhIEpTT04gKG9yIG90aGVyLi4uKVxuICAgIGZyb20odGhpcy5odHRwLmdldCgnYXNzZXRzL2pzb24vZGF0YVNlbGVjdC5qc29uJykpXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSkgLy8gU3BlY2lmeSBKU09OIHR5cGVcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIFNldCBpdGVtcyB0byByZXNwb25zZSBKc29uXG4gICAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IGRhdGE7XG4gICAgICB9KTtcbiAgICB0aGlzLm15TGlzdElkID0gdGhpcy5saXN0O1xuICAgIHRoaXMubXlJbnB1dC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGlzdCcsIHRoaXMubXlMaXN0SWQpO1xuICAgIHRoaXMubXlEYXRhTGlzdC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm15TGlzdElkKTtcbiAgfVxufVxuIl19