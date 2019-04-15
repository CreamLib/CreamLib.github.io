/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export class SelectDatalistComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.id = '';
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataSelect.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.allOptions = data;
        });
        this.myListId = this.list;
        this.myInput.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    }
}
SelectDatalistComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-select-datalist',
                template: "<p>\n  <label for=\"{{ id }}\"> {{ this.title }}</label>\n  <input #inputList type=\"text\" id=\"{{ id }}\" [name]=\"this.name\" />\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-select-datalist label{display:block;padding-bottom:.3rem}c3m-select-datalist input{display:block;font:100%/1 var(--stack);padding:.5em}"]
            }] }
];
/** @nocollapse */
SelectDatalistComponent.ctorParameters = () => [
    { type: Http }
];
SelectDatalistComponent.propDecorators = {
    myInput: [{ type: ViewChild, args: ['inputList',] }],
    myDataList: [{ type: ViewChild, args: ['dataList',] }],
    title: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }],
    list: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zZWxlY3QtZGF0YWxpc3Qvc2VsZWN0LWRhdGFsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsSUFBSSxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFyQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQVlsQyxZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUxyQixPQUFFLEdBQUcsRUFBRSxDQUFDO0lBS2dCLENBQUM7Ozs7O0lBTWxDLFFBQVE7UUFDTixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO2FBQ3ZFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQiw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiwwU0FBK0M7Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVRRLElBQUk7OztzQkFZVixTQUFTLFNBQUMsV0FBVzt5QkFDckIsU0FBUyxTQUFDLFVBQVU7b0JBRXBCLEtBQUs7bUJBQ0wsS0FBSztpQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFOTiwwQ0FBNEM7O0lBQzVDLDZDQUE4Qzs7SUFFOUMsd0NBQWU7O0lBQ2YsdUNBQWM7O0lBQ2QscUNBQWlCOztJQUNqQix1Q0FBYzs7Ozs7SUFFZCwyQ0FBaUI7O0lBS2pCLDZDQUFrQjs7Ozs7SUFITix1Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tc2VsZWN0LWRhdGFsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1kYXRhbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC1kYXRhbGlzdC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RGF0YWxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBDaGlsZHNcbiAgQFZpZXdDaGlsZCgnaW5wdXRMaXN0JykgbXlJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0YUxpc3QnKSBteURhdGFMaXN0OiBFbGVtZW50UmVmO1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGU7XG4gIEBJbnB1dCgpIG5hbWU7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBJbnB1dCgpIGxpc3Q7XG5cbiAgcHJpdmF0ZSBteUxpc3RJZDtcbiAgLy8gQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIC8vIEFycmF5IG9mIGFsbCBvcHRpb25zXG4gIGFsbE9wdGlvbnM6IGFueVtdO1xuXG4gIC8vIE9uIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IERhdGEgb2YgYSBKU09OIChvciBvdGhlci4uLilcbiAgICBmcm9tKHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9qc29uL2RhdGFTZWxlY3QuanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmFsbE9wdGlvbnMgPSBkYXRhO1xuICAgICAgfSk7XG4gICAgdGhpcy5teUxpc3RJZCA9IHRoaXMubGlzdDtcbiAgICB0aGlzLm15SW5wdXQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCB0aGlzLm15TGlzdElkKTtcbiAgICB0aGlzLm15RGF0YUxpc3QubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5teUxpc3RJZCk7XG4gIH1cbn1cbiJdfQ==