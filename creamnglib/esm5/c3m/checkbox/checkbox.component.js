/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-checkbox',
                    template: "<p>\n  <input\n    type=\"checkbox\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"this.value\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n  />\n  <label [attr.for]=\"id\">{{ this.title }}</label>\n</p>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-checkbox label{display:inline-block;padding:0 0 0 .5em}c3m-checkbox.unstressed label{font-family:var(--stack)}c3m-checkbox.custom input[type=checkbox]:checked,c3m-checkbox.custom input[type=checkbox]:not(:checked){position:absolute;left:-9999px}c3m-checkbox.custom input[type=checkbox]:checked+label,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label{position:relative;padding-left:25px}c3m-checkbox.custom input[type=checkbox]:checked+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:before{content:'';position:absolute;left:0;top:-.2em;width:17px;height:17px;border:1px solid var(--n-medium);background:var(--n-light);border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.3)}c3m-checkbox.custom input[type=checkbox]:checked+label:after,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after{content:'\u2714';position:absolute;top:-.2em;left:4px;font-size:16px;color:var(--sec-color);transition:.2s;margin-top:.2rem;margin-left:0}c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0)}c3m-checkbox.custom input[type=checkbox]:checked+label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}c3m-checkbox.custom input[type=checkbox]:checked:focus+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked):focus+label:before{border:1px dotted var(--sec-color)}c3m-checkbox.on-off{position:relative}c3m-checkbox.on-off label{display:inline-block;margin-left:40px;cursor:pointer}c3m-checkbox.on-off input{position:relative;left:15px;opacity:0}c3m-checkbox.on-off label::before{display:block;position:absolute;width:50px;height:25px;top:.5em;left:0;content:'';background-color:var(--n-medium);border-radius:1rem}c3m-checkbox.on-off label::after{display:block;position:absolute;width:20px;height:20px;top:.635em;left:27px;content:'';background-color:var(--n-medium-a);border-radius:20px;transition:1s}c3m-checkbox.on-off input:checked+label::before{background:var(--main-light)}c3m-checkbox.on-off input:checked+label::after{left:2px;background:var(--body-bg)}@media screen and (min-width:750px){c3m-checkbox.custom input[type=checkbox]:checked+label:after,c3m-checkbox.custom input[type=checkbox]:checked+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:before{top:0}}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        title: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.required;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFnQkU7O1FBUlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQVFMLENBQUM7Ozs7SUFFaEIsb0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBbEJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsb1JBQXdDO29CQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7Ozt3QkFHRSxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQUtSLHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FiWSxpQkFBaUI7OztJQUU1QixrQ0FBb0I7O0lBQ3BCLCtCQUFvQjs7SUFDcEIsaUNBQXNCOztJQUN0QixrQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7SUFDMUIscUNBQTJCOztJQUMzQixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIElucHV0c1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19