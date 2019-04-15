/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
var ButtonFileComponent = /** @class */ (function () {
    function ButtonFileComponent() {
    }
    /* OnChange method */
    /* OnChange method */
    /**
     * @param {?} files
     * @return {?}
     */
    ButtonFileComponent.prototype.onChange = /* OnChange method */
    /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.files = files;
    };
    ButtonFileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-button-file',
                    template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n  <li *ngFor=\"let f of files\">\n    <span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only>\n  </li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-button-file label{display:inline-block;color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) .5em -242px no-repeat;padding:.5rem 1rem .5rem 2rem;border-radius:.3em;cursor:pointer}c3m-button-file label:hover{opacity:.8}c3m-button-file input[type=file]{position:absolute;left:-9999px}c3m-button-file ul{max-width:350px;padding-left:.5em;margin:.5rem 0 0 1em;border-left:3px solid var(--main-color)}c3m-button-file li{display:flex;justify-content:space-between;align-items:center;font:95% var(--stack-i);padding:.3em 0 .3em .5em;border-bottom:1px solid var(--n-medium)}c3m-button-file li:last-of-type{border:none}c3m-button-file span{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:20em;white-space:nowrap;margin-right:1rem}"]
                }] }
    ];
    return ButtonFileComponent;
}());
export { ButtonFileComponent };
if (false) {
    /** @type {?} */
    ButtonFileComponent.prototype.files;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2J1dHRvbi1maWxlL2J1dHRvbi1maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RDtJQUFBO0lBY0EsQ0FBQztJQUpDLHFCQUFxQjs7Ozs7O0lBQ3JCLHNDQUFROzs7OztJQUFSLFVBQVMsS0FBZTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsZ2JBQTJDO29CQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOztJQVNELDBCQUFDO0NBQUEsQUFkRCxJQWNDO1NBUlksbUJBQW1COzs7SUFFOUIsb0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tYnV0dG9uLWZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24tZmlsZS5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmlsZUNvbXBvbmVudCB7XG4gIC8qIEZpbGUgTGlzdCAqL1xuICBmaWxlczogRmlsZUxpc3Q7XG5cbiAgLyogT25DaGFuZ2UgbWV0aG9kICovXG4gIG9uQ2hhbmdlKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgfVxufVxuIl19