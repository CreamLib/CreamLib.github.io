/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
export class InputSearchComponent {
    constructor() {
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-search',
                template: "<p role=\"search\">\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"search\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n  <button type=\"submit\">\n    <svg width=\"35\" height=\"35\" viewBox=\"0 0 35 35\" aria-labelledby=\"searchTitId\">\n      <title id=\"searchTitId\">Perform search</title>\n      <circle cx=\"17.5\" cy=\"17.5\" r=\"17.5\" />\n      <g>\n        <path\n          d=\"M19.12,19a7,7,0,1,1-.61-10A7.05,7.05,0,0,1,19.12,19ZM9.65,10.59a5.59,5.59,0,1,0,7.89-.49A5.6,5.6,0,0,0,9.65,10.59Z\"\n          style=\"fill: #fff\"\n        />\n        <rect\n          x=\"18.15\"\n          y=\"18.98\"\n          width=\"3.64\"\n          height=\"1.46\"\n          rx=\"0.73\"\n          ry=\"0.73\"\n          transform=\"translate(-8.02 21.63) rotate(-48.54)\"\n          style=\"fill: #fff\"\n        />\n        <rect\n          x=\"23.01\"\n          y=\"18.96\"\n          width=\"2.19\"\n          height=\"8.78\"\n          rx=\"1\"\n          ry=\"1\"\n          transform=\"translate(-9.36 25.96) rotate(-48.54)\"\n          style=\"fill: #fff\"\n        />\n      </g>\n    </svg>\n  </button>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-search button{vertical-align:bottom}c3m-input-search circle{fill:var(--main-color)}c3m-input-search button:focus circle,c3m-input-search button:hover circle{fill:var(--sec-color)}c3m-input-search[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputSearchComponent.ctorParameters = () => [];
InputSearchComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputSearchComponent.prototype.id;
    /** @type {?} */
    InputSearchComponent.prototype.name;
    /** @type {?} */
    InputSearchComponent.prototype.value;
    /** @type {?} */
    InputSearchComponent.prototype.autocomplete;
    /** @type {?} */
    InputSearchComponent.prototype.maxlength;
    /** @type {?} */
    InputSearchComponent.prototype.required;
    /** @type {?} */
    InputSearchComponent.prototype.disabled;
    /** @type {?} */
    InputSearchComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9pbnB1dC1zZWFyY2gvaW5wdXQtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQjtRQVRTLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFHZixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUVYLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQWxCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbzFDQUE0QztnQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OztpQkFFRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFQTixrQ0FBaUI7O0lBQ2pCLG9DQUFtQjs7SUFDbkIscUNBQW9COztJQUNwQiw0Q0FBNkI7O0lBQzdCLHlDQUF3Qjs7SUFDeEIsd0NBQTJCOztJQUMzQix3Q0FBMkI7O0lBQzNCLDJDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWlucHV0LXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1zZWFyY2guY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIElucHV0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb24nO1xuICBASW5wdXQoKSBtYXhsZW5ndGggPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=