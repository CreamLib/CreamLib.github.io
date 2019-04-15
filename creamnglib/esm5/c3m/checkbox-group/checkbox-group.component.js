/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var CheckboxGroupComponent = /** @class */ (function () {
    function CheckboxGroupComponent() {
        // Inputs
        this.legend = '';
    }
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-checkbox-group',
                    template: "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-checkbox-group{margin-bottom:1rem}c3m-checkbox-group legend{font:1em/1 var(--stack-b);padding-bottom:1em}c3m-checkbox-group label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}c3m-checkbox-group-item+c3m-checkbox-group-item li{margin-top:.5em}c3m-checkbox-group.go-along ul{display:flex}c3m-checkbox-group.go-along c3m-checkbox-group-item+c3m-checkbox-group-item li{margin:0 0 0 1em}@media screen and (min-width:750px){c3m-checkbox-group legend{font-size:1.3em}}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxGroupComponent.ctorParameters = function () { return []; };
    CheckboxGroupComponent.propDecorators = {
        legend: [{ type: Input }]
    };
    return CheckboxGroupComponent;
}());
export { CheckboxGroupComponent };
if (false) {
    /** @type {?} */
    CheckboxGroupComponent.prototype.legend;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFVRTs7UUFGUyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBRU4sQ0FBQzs7OztJQUVoQix5Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFaZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsMkhBQThDO29CQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Ozt5QkFHRSxLQUFLOztJQUtSLDZCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUFksc0JBQXNCOzs7SUFFakMsd0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tY2hlY2tib3gtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC1ncm91cC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSBsZWdlbmQgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19