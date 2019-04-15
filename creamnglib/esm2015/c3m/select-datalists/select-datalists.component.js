/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export class SelectDatalistsComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.id1 = '';
        this.id2 = '';
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
        this.myInput1.nativeElement.setAttribute('list', this.myListId);
        this.myInput2.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    }
}
SelectDatalistsComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-select-datalists',
                template: "<p>\n  <label for=\"{{ id1 }}\">{{ this.title1 }}</label>\n  <input #inputList1 type=\"text\" id=\"{{ id2 }}\" [name]=\"this.name1\" />\n</p>\n\n<p>\n  <label for=\"{{ id1 }}\">{{ this.title2 }}</label>\n  <input #inputList2 type=\"text\" id=\"{{ id2 }}\" [name]=\"this.name2\" />\n\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-select-datalists label{display:block;padding-bottom:.3rem}c3m-select-datalists input{display:block;font:100%/1 var(--stack);padding:.5em}"]
            }] }
];
/** @nocollapse */
SelectDatalistsComponent.ctorParameters = () => [
    { type: Http }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRhdGFsaXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vc2VsZWN0LWRhdGFsaXN0cy9zZWxlY3QtZGF0YWxpc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsSUFBSSxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFyQyxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQWlCbkMsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFOckIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFFBQUcsR0FBRyxFQUFFLENBQUM7SUFLZSxDQUFDOzs7OztJQU1sQyxRQUFRO1FBQ04sbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsaWNBQWdEO2dCQUVoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFUUSxJQUFJOzs7dUJBWVYsU0FBUyxTQUFDLFlBQVk7dUJBQ3RCLFNBQVMsU0FBQyxZQUFZO3lCQUN0QixTQUFTLFNBQUMsVUFBVTtxQkFHcEIsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztrQkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQVhOLDRDQUE4Qzs7SUFDOUMsNENBQThDOztJQUM5Qyw4Q0FBOEM7O0lBRzlDLDBDQUFnQjs7SUFDaEIsMENBQWdCOztJQUNoQix5Q0FBZTs7SUFDZix5Q0FBZTs7SUFDZix1Q0FBa0I7O0lBQ2xCLHVDQUFrQjs7SUFDbEIsd0NBQWM7Ozs7O0lBRWQsNENBQWlCOztJQUtqQiw4Q0FBa0I7Ozs7O0lBSE4sd0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLXNlbGVjdC1kYXRhbGlzdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LWRhdGFsaXN0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC1kYXRhbGlzdHMuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERhdGFsaXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIENoaWxkc1xuICBAVmlld0NoaWxkKCdpbnB1dExpc3QxJykgbXlJbnB1dDE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0TGlzdDInKSBteUlucHV0MjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0YUxpc3QnKSBteURhdGFMaXN0OiBFbGVtZW50UmVmO1xuXG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZTE7XG4gIEBJbnB1dCgpIHRpdGxlMjtcbiAgQElucHV0KCkgbmFtZTE7XG4gIEBJbnB1dCgpIG5hbWUyO1xuICBASW5wdXQoKSBpZDEgPSAnJztcbiAgQElucHV0KCkgaWQyID0gJyc7XG4gIEBJbnB1dCgpIGxpc3Q7XG5cbiAgcHJpdmF0ZSBteUxpc3RJZDtcbiAgLy8gQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIC8vIEFycmF5IG9mIGFsbCBvcHRpb25zXG4gIGFsbE9wdGlvbnM6IGFueVtdO1xuXG4gIC8vIE9uIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IERhdGEgb2YgYSBKU09OIChvciBvdGhlci4uLilcbiAgICBmcm9tKHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9qc29uL2RhdGFTZWxlY3QuanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmFsbE9wdGlvbnMgPSBkYXRhO1xuICAgICAgfSk7XG4gICAgdGhpcy5teUxpc3RJZCA9IHRoaXMubGlzdDtcbiAgICB0aGlzLm15SW5wdXQxLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdsaXN0JywgdGhpcy5teUxpc3RJZCk7XG4gICAgdGhpcy5teUlucHV0Mi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGlzdCcsIHRoaXMubXlMaXN0SWQpO1xuICAgIHRoaXMubXlEYXRhTGlzdC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLm15TGlzdElkKTtcbiAgfVxufVxuIl19