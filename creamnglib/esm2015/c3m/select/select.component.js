/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
export class SelectComponent {
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
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-select',
                template: "<p>\n  <label for=\"{{ id }}\"> {{ this.title }} </label>\n  <select id=\"{{ id }}\" [name]=\"this.name\">\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </select>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-select label{display:block;padding-bottom:.3rem}c3m-select select{display:block;font:100%/1 var(--stack);padding:.5em}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: Http }
];
SelectComponent.propDecorators = {
    title: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBcUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRckMsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBTzFCLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSHJCLE9BQUUsR0FBRyxFQUFFLENBQUM7SUFHZ0IsQ0FBQzs7Ozs7SUFNbEMsUUFBUTtRQUNOLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7YUFDdkUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHVQQUFzQztnQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBVFEsSUFBSTs7O29CQVlWLEtBQUs7bUJBQ0wsS0FBSztpQkFDTCxLQUFLOzs7O0lBRk4sZ0NBQWU7O0lBQ2YsK0JBQWM7O0lBQ2QsNkJBQWlCOztJQU1qQixxQ0FBa0I7Ozs7O0lBSE4sK0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgdGl0bGU7XG4gIEBJbnB1dCgpIG5hbWU7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG5cbiAgLy8gQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIC8vIEFycmF5IG9mIGFsbCBvcHRpb25zXG4gIGFsbE9wdGlvbnM6IGFueVtdO1xuXG4gIC8vIE9uIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IERhdGEgb2YgYSBKU09OIChvciBvdGhlci4uLilcbiAgICBmcm9tKHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9qc29uL2RhdGFTZWxlY3QuanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmFsbE9wdGlvbnMgPSBkYXRhO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==