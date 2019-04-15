/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
var SelectDatalistsComponent = /** @class */ (function () {
    // Constructor
    function SelectDatalistsComponent(http) {
        this.http = http;
        this.id1 = '';
        this.id2 = '';
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    SelectDatalistsComponent.prototype.ngOnInit = 
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
        this.myInput1.nativeElement.setAttribute('list', this.myListId);
        this.myInput2.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    };
    SelectDatalistsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-select-datalists',
                    template: "<p>\n  <label for=\"{{ id1 }}\">{{ this.title1 }}</label>\n  <input #inputList1 type=\"text\" id=\"{{ id2 }}\" [name]=\"this.name1\" />\n</p>\n\n<p>\n  <label for=\"{{ id1 }}\">{{ this.title2 }}</label>\n  <input #inputList2 type=\"text\" id=\"{{ id2 }}\" [name]=\"this.name2\" />\n\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-select-datalists label{display:block;padding-bottom:.3rem}c3m-select-datalists input{display:block;font:100%/1 var(--stack);padding:.5em}"]
                }] }
    ];
    /** @nocollapse */
    SelectDatalistsComponent.ctorParameters = function () { return [
        { type: Http }
    ]; };
    SelectDatalistsComponent.propDecorators = {
        myInput1: [{ type: ViewChild, args: ['inputList1',] }],
        myInput2: [{ type: ViewChild, args: ['inputList2',] }],
        myDataList: [{ type: ViewChild, args: ['dataList',] }],
        title1: [{ type: Input }],
        title2: [{ type: Input }],
        name1: [{ type: Input }],
        name2: [{ type: Input }],
        id1: [{ type: Input }],
        id2: [{ type: Input }],
        list: [{ type: Input }]
    };
    return SelectDatalistsComponent;
}());
export { SelectDatalistsComponent };
if (false) {
    /** @type {?} */
    SelectDatalistsComponent.prototype.myInput1;
    /** @type {?} */
    SelectDatalistsComponent.prototype.myInput2;
    /** @type {?} */
    SelectDatalistsComponent.prototype.myDataList;
    /** @type {?} */
    SelectDatalistsComponent.prototype.title1;
    /** @type {?} */
    SelectDatalistsComponent.prototype.title2;
    /** @type {?} */
    SelectDatalistsComponent.prototype.name1;
    /** @type {?} */
    SelectDatalistsComponent.prototype.name2;
    /** @type {?} */
    SelectDatalistsComponent.prototype.id1;
    /** @type {?} */
    SelectDatalistsComponent.prototype.id2;
    /** @type {?} */
    SelectDatalistsComponent.prototype.list;
    /**
     * @type {?}
     * @private
     */
    SelectDatalistsComponent.prototype.myListId;
    /** @type {?} */
    SelectDatalistsComponent.prototype.allOptions;
    /**
     * @type {?}
     * @private
     */
    SelectDatalistsComponent.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRhdGFsaXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc2VsZWN0LWRhdGFsaXN0cy9zZWxlY3QtZGF0YWxpc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsSUFBSSxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQztJQXNCRSxjQUFjO0lBQ2Qsa0NBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTnJCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxRQUFHLEdBQUcsRUFBRSxDQUFDO0lBS2UsQ0FBQztJQUtsQyxVQUFVOzs7OztJQUNWLDJDQUFROzs7OztJQUFSO1FBQUEsaUJBWUM7UUFYQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLDZCQUE2QjtZQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGljQUFnRDtvQkFFaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFUUSxJQUFJOzs7MkJBWVYsU0FBUyxTQUFDLFlBQVk7MkJBQ3RCLFNBQVMsU0FBQyxZQUFZOzZCQUN0QixTQUFTLFNBQUMsVUFBVTt5QkFHcEIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUF1QlIsK0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXBDWSx3QkFBd0I7OztJQUVuQyw0Q0FBOEM7O0lBQzlDLDRDQUE4Qzs7SUFDOUMsOENBQThDOztJQUc5QywwQ0FBZ0I7O0lBQ2hCLDBDQUFnQjs7SUFDaEIseUNBQWU7O0lBQ2YseUNBQWU7O0lBQ2YsdUNBQWtCOztJQUNsQix1Q0FBa0I7O0lBQ2xCLHdDQUFjOzs7OztJQUVkLDRDQUFpQjs7SUFLakIsOENBQWtCOzs7OztJQUhOLHdDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1zZWxlY3QtZGF0YWxpc3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1kYXRhbGlzdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtZGF0YWxpc3RzLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REYXRhbGlzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBDaGlsZHNcbiAgQFZpZXdDaGlsZCgnaW5wdXRMaXN0MScpIG15SW5wdXQxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbnB1dExpc3QyJykgbXlJbnB1dDI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RhdGFMaXN0JykgbXlEYXRhTGlzdDogRWxlbWVudFJlZjtcblxuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGUxO1xuICBASW5wdXQoKSB0aXRsZTI7XG4gIEBJbnB1dCgpIG5hbWUxO1xuICBASW5wdXQoKSBuYW1lMjtcbiAgQElucHV0KCkgaWQxID0gJyc7XG4gIEBJbnB1dCgpIGlkMiA9ICcnO1xuICBASW5wdXQoKSBsaXN0O1xuXG4gIHByaXZhdGUgbXlMaXN0SWQ7XG4gIC8vIENvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvLyBBcnJheSBvZiBhbGwgb3B0aW9uc1xuICBhbGxPcHRpb25zOiBhbnlbXTtcblxuICAvLyBPbiBJbml0XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEdldCBEYXRhIG9mIGEgSlNPTiAob3Igb3RoZXIuLi4pXG4gICAgZnJvbSh0aGlzLmh0dHAuZ2V0KCdhc3NldHMvanNvbi9kYXRhU2VsZWN0Lmpzb24nKSlcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpKSAvLyBTcGVjaWZ5IEpTT04gdHlwZVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgLy8gU2V0IGl0ZW1zIHRvIHJlc3BvbnNlIEpzb25cbiAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gZGF0YTtcbiAgICAgIH0pO1xuICAgIHRoaXMubXlMaXN0SWQgPSB0aGlzLmxpc3Q7XG4gICAgdGhpcy5teUlucHV0MS5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGlzdCcsIHRoaXMubXlMaXN0SWQpO1xuICAgIHRoaXMubXlJbnB1dDIubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCB0aGlzLm15TGlzdElkKTtcbiAgICB0aGlzLm15RGF0YUxpc3QubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5teUxpc3RJZCk7XG4gIH1cbn1cbiJdfQ==