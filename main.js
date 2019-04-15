(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/creamnglib/fesm5/creamlib-ng.js":
/*!**********************************************!*\
  !*** ./dist/creamnglib/fesm5/creamlib-ng.js ***!
  \**********************************************/
/*! exports provided: ButtonComponent, ButtonFileComponent, ButtonIconComponent, ButtonIconOnlyComponent, ButtonSubmitComponent, ToastComponent, AccordionComponent, AccordionItemComponent, CalendarComponent, CarouselComponent, CarouselItemComponent, CheckboxComponent, CheckboxButtonComponent, CheckboxGroupComponent, CheckboxGroupItemComponent, CheckboxLinkComponent, DropdownComponent, DropdownItemComponent, FieldsetComponent, InputComponent, InputErrorMsgComponent, InputFloatingComponent, InputMailComponent, InputMaterialComponent, InputPasswordComponent, InputSearchComponent, InputTelComponent, InputUrlComponent, ListComponent, ListDescriptionComponent, ListOrderComponent, ListThumbnailsComponent, RadioComponent, RadioItemComponent, SelectComponent, SelectDatalistComponent, SelectDatalistsComponent, SkipComponent, SliderComponent, ProgressComponent, SpinnerProgressComponent, StepComponent, StepItemComponent, ColumnTableComponent, ToggleTableComponent, PageSwipeTableComponent, TabsComponent, TabComponent, PaginationComponent, ModalComponent, ModalAlertComponent, ButtonLinkComponent, ModalDirective, PaginationDirective, StepsDirective, ScrolltoDirective, CreamnglibModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFileComponent", function() { return ButtonFileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconComponent", function() { return ButtonIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIconOnlyComponent", function() { return ButtonIconOnlyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSubmitComponent", function() { return ButtonSubmitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function() { return AccordionItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxButtonComponent", function() { return CheckboxButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupComponent", function() { return CheckboxGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupItemComponent", function() { return CheckboxGroupItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxLinkComponent", function() { return CheckboxLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItemComponent", function() { return DropdownItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetComponent", function() { return FieldsetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputErrorMsgComponent", function() { return InputErrorMsgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFloatingComponent", function() { return InputFloatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMailComponent", function() { return InputMailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaterialComponent", function() { return InputMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPasswordComponent", function() { return InputPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearchComponent", function() { return InputSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTelComponent", function() { return InputTelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputUrlComponent", function() { return InputUrlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDescriptionComponent", function() { return ListDescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function() { return ListOrderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThumbnailsComponent", function() { return ListThumbnailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioItemComponent", function() { return RadioItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDatalistComponent", function() { return SelectDatalistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDatalistsComponent", function() { return SelectDatalistsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipComponent", function() { return SkipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerProgressComponent", function() { return SpinnerProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepItemComponent", function() { return StepItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnTableComponent", function() { return ColumnTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTableComponent", function() { return ToggleTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSwipeTableComponent", function() { return PageSwipeTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAlertComponent", function() { return ModalAlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLinkComponent", function() { return ButtonLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationDirective", function() { return PaginationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsDirective", function() { return StepsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrolltoDirective", function() { return ScrolltoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreamnglibModule", function() { return CreamnglibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PagerService; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-button',
                    template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-button button{color:var(--text-inv);background:var(--main-color)}c3m-button button:hover{opacity:.8}c3m-button.optional button{background-color:var(--n-dark)}c3m-button.submit button{background-color:var(--hot-color)}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-button-file',
                    template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n  <li *ngFor=\"let f of files\">\n    <span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only>\n  </li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-button-file label{display:inline-block;color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) .5em -242px no-repeat;padding:.5rem 1rem .5rem 2rem;border-radius:.3em;cursor:pointer}c3m-button-file label:hover{opacity:.8}c3m-button-file input[type=file]{position:absolute;left:-9999px}c3m-button-file ul{max-width:350px;padding-left:.5em;margin:.5rem 0 0 1em;border-left:3px solid var(--main-color)}c3m-button-file li{display:flex;justify-content:space-between;align-items:center;font:95% var(--stack-i);padding:.3em 0 .3em .5em;border-bottom:1px solid var(--n-medium)}c3m-button-file li:last-of-type{border:none}c3m-button-file span{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:20em;white-space:nowrap;margin-right:1rem}"]
                }] }
    ];
    return ButtonFileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonIconComponent = /** @class */ (function () {
    function ButtonIconComponent() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ButtonIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ButtonIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-button-icon',
                    template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=\"this.class\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-button-icon[class*=icon-] button{color:var(--text-inv);background-color:var(--main-color);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem .5rem 2rem}c3m-button-icon button:hover{opacity:.8}.icon-delete button{background-position:.5em 5px}.icon-edit button{background-position:.5em -78px}.icon-download button{background-position:.5em -176px}.icon-add button{background-position:.5em -242px}"]
                }] }
    ];
    /** @nocollapse */
    ButtonIconComponent.ctorParameters = function () { return []; };
    ButtonIconComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ButtonIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonIconOnlyComponent = /** @class */ (function () {
    function ButtonIconOnlyComponent() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ButtonIconOnlyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ButtonIconOnlyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-button-icon-only',
                    template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=\"this.class\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-button-icon-only{position:relative}c3m-button-icon-only[class*=icon-] button{overflow:hidden;text-indent:-50em;color:var(--text-inv);background-color:var(--n-dark);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem}c3m-button-icon-only button:hover{opacity:.8}span.tooltip{display:none;position:absolute;top:50px;width:8em;height:auto;max-width:8em;overflow-wrap:break-word;font:9px/1 var(--stack-m);text-align:center;color:#fff;background:var(--n-s-dark);padding:.7em 1em;border:1px solid var(--n-s-dark);box-shadow:0 1px 2px rgba(0,0,0,.5);opacity:1;z-index:10000}span.tooltip::before{position:absolute;top:-5px;left:50%;display:block;width:10px;height:10px;content:'';background:var(--n-s-dark);margin-left:-5px;border-top:1px solid var(--n-s-dark);border-left:1px solid var(--n-s-dark);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-delete button{background-position:7px 5px}.icon-edit button{background-position:7px -78px}.icon-download button{background-position:7px -176px}.icon-add button{background-position:7px -242px}"]
                }] }
    ];
    /** @nocollapse */
    ButtonIconOnlyComponent.ctorParameters = function () { return []; };
    ButtonIconOnlyComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ButtonIconOnlyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonSubmitComponent = /** @class */ (function () {
    function ButtonSubmitComponent() {
    }
    ButtonSubmitComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-button-submit',
                    template: "<!-- USE \"Input\" type submit -->\n<input type=\"submit\" [attr.value]=\"inputValue\" />\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-button-submit input{color:var(--text-inv);background:var(--hot-color);border:none;cursor:pointer}c3m-button-submit input:hover{opacity:.8}"]
                }] }
    ];
    /** @nocollapse */
    ButtonSubmitComponent.ctorParameters = function () { return []; };
    ButtonSubmitComponent.propDecorators = {
        inputValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ButtonSubmitComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.delay = 0;
        this.active = false;
        this.styleClass = '';
        this.position = 'top-right';
        this.closeBtn = false;
        this.closeBtnTitle = 'close';
        this.imgCloseBtn = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADVCAYAAADAQLWDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB7VJREFUeNrs3Y9RG0cUB2A9VUA6gAqMKzBUENMB7iDugFTgSQU4FUAHggrAFUAHogNlF68wwSGWxJ50e/f9Zi4Cj8e5e+997N3pDzFZM4vFYi89HKXtMG0fXvlrt2n7lrariLifiPQoaYbz/P5eZvjolb92Veb4Os3wZWc7krbzxfqZpe1UK2XHkPbSdpa2uw1meJ62L2nbr7Uz+wXGW5MP5qP2yg5A/VFgvDX53zh7686cLernopxCimxjdZp1MMM3aTvcZGfOF93lptpSKvLfM3y44aneOqvW4TqgbhbdZ762dpHVQc17M8Mdr1BgyVBArTbDHV1DgSVDBfV0OfN/O7SrgCWtglrm6a5gPNup2eT1J8K2kYe0HUfErRGRdUGlhzy/u76rfPD0YofyxG4fYsWS1lao5/nytFLlmxPp4bQndbJiSWsr1NPsprn9LcoTsfOe1QssaQ3UMifTHV9HvZZcqJlTQWkMVM6HjKqvgwuWtAYq5zB6cNfPqaAMBdRjpg3U0oolzYDKySvVvIUdtWIB1cicPqJaNFRfsIBqAlXfr6nAAqqp999NG6y1ayygeo/qHiwBqlquMqrrRmsPFlB9zG2Ut7XfNdwH11hA9SknyxfU5jdZHYIlQL0p92kGD5Y3Kv5qvCdOBYHqQ/7O/3n+JsV8Crjf+EFZsYDa5ezlNyk+PL+l/nkAPbJiAbWr/JlB/WulKgd5kR6G8CmyViygtpn8OwOOl9+8RJUP8GYAp4FgAbW1mxNpe79cpX5CNcADBguorc9XjPXABaiu5irGXgABqvY8hUIIUHXnKBREgKo7P6EwAlTduQkFEqDqzksoFFhA1Z2TUDCwgKo7H6FwYAFVdy5CAcECqu48hEKCBVTdOQgFBUv/6/Y/FBYsfa/b91BgsPS7br9DocHS57p9DgUHS3/r9jcUHix9rZvQALD0sxFUGgHUWPsYGgKW/jWGSmOAGlvfQoPA0q9GUWkUUGPpU2gYWPrTOCqNA2rofQkNBEs/BoJKI4Eaah9CQ8cNS/0HiEpj1X1odQ8NHics9R4BKo1W56HUOTR8XA1X3xGi0nh1bf1MIPpaMQOgnq1es0afK2cQ1LE1UL1HZSDUrzVQTaAyGOrWEqhmUBkQ9Zo09EqVaKmyBkWdoAJr6wOjPlAZnIqDoy5QGaCKA6QeUIFVcZDUASqwKg4UUFCBVXGwgIIKrIoDBhRUYFUcNKCgAqviwAEFFVgVBw8oqMCqO4Cf0/YFKKjAklGBGjwqsICCCiygoAJLgBotKrCAggosoKACS4AaLSqwgIIKLKCgAguo8SbMAVhAQQUWUFCBBRRUYIEFFFRgAQUVWEBBBZYABRVYQEEFFlBQgQWUQAUWUFCBBRRUYAEFlYAFFFRgAQXVcGGdpofzAR3SpwTqq85CZaWyUkEFFFhQyVhAgQUVUGBBBRRYUInX/oEFFVBgQQUUWFABBZZABRRYUAEFFlRAgSVQAQUWVECBBRVQYEEFlIAFFVBgQQUUWFABJWBBBRRYUAEFFlRACVijRAUUWFABBRZUQAlYy0yBamYQP5XH1pP7MSv9sVIBtduf7EM9LqiA2unggQUVUB0MHFhQAdXBoIEFFVAdDBhYUAHVwWCBBRVQHQyUOkAFVAeDpB5QAdXBAKkLVAang8FRH6gMTAcDo05QGRT1GhSsAGq4A6JuUBkM9RsErABq+AOhjlAZBPVsGlYANZ4BUNeRotJ49W0dVgA1vp+k6jwSVBqt3kOpd2jw+ECp+8BRaaz6D63+oaHjBaUPA0OlkWANtR+hgUDpS+OoNA6sofcnNAwofWoUlUaBNZZ+hQYBpW+NodIYsMbWv9AQoPSxEVQaAdZY+xkaAJS+9hyVwoM19v6GggOlz3X7HAoNlH7X7XcoMFD6XrfvobBA6X/d/oeCAgVW3TkIhQQKrLrzEAoIFFh15yIUDiiw6s5HKBhQYNWdk1AoAavuvIQCCVh15yYURsCqOz+hIAJW3TkKhRCw6s5TACVg1Z2rAErAetN8vU/zdf8qqnTAe+WAD4ESsFbKbZmzh9dQXaSHj0AJWGvlMs3ayU+o0kFmTBdACVgb5STN3OVLVHfpYR8oAWuj3Ke5O8hfTMuBnQIlu0jp13HpX8vZL46+r1Tpm5vGb04AZcXqQ67SDB5HOpi8Qt0BJWBVyUE+/TsCSpwKVstRRvUOKAGrWt7l079Zg6sVUE4Fe3tdNbVCiRWr8r6nnwgLoMSKVW+lyqjmjewwUGC1MKePp3+3QIlTwXqZAiVg1Ud1DZSAVS3XfT79A0pahHUb5Y2Jc6CkpfT15kWa2ZiWdyxeAiVWrDfn6+O+FfVHRT1QYsXaPHl2r57v3Gyx28xLgUTWhlXmZ5d5WpTihfgbK5RYsTbKwctPVVru2JkVSqxYa+fsVzt2AZSAtXLOV9mpvfz2eqAErF/mpjwlNVkV1kXHOwOUdA3rrssVamVQW7jGuthoZ0TWn9+uFoezGuJr3G6/Kx/YKbJtXB8rrVqzqmdY+QnisuRtcqp3qrXSA1ynG94vOC8vkFgpm/x2+nzqlv8HWeyH8sf56/znV+X7/HzTt8n3z0G7107pGa79MsPvJj8+7zJ//zD58QLz6/L11fNfPrBK/hFgAC//YBgsVLL8AAAAAElFTkSuQmCC';
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Positioning the toast
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            /** @type {?} */
            var toastElt = this.toast.nativeElement;
            this.positionElt = '110%';
            toastElt.style.bottom = this.positionElt;
        }
        else {
            /** @type {?} */
            var toastElt = this.toast.nativeElement;
            /** @type {?} */
            var HeightElt = toastElt.clientHeight;
            this.positionElt = '-' + (HeightElt + 50) + 'px';
            toastElt.style.top = this.positionElt;
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var toastElement = this.toast.nativeElement;
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            toastElement.style.bottom = '';
        }
        else {
            toastElement.style.top = '';
        }
        if (this.active === false) {
            this.active = true;
            // If delay, hide toast after it
            if (this.delay > 0) {
                setTimeout(function () {
                    _this.closeToast();
                }, this.delay);
            }
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.closeToast = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toastElement = this.toast.nativeElement;
        this.active = false;
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            toastElement.style.bottom = this.positionElt;
        }
        else {
            toastElement.style.top = this.positionElt;
        }
    };
    ToastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-toast',
                    template: "<!-- Toast -->\n<p\n  #toast\n  role=\"alert\"\n  aria-live=\"assertive\"\n  [ngClass]=\"{\n    active: active,\n    inactive: !active,\n    topRight: position === 'top-right',\n    topLeft: position === 'top-left',\n    bottomRight: position === 'bottom-right',\n    bottomLeft: position === 'bottom-left'\n  }\"\n  class=\"{{ styleClass }}\"\n>\n  <!-- Your Content -->\n  <span class=\"close\" *ngIf=\"closeBtn\"\n    ><button class=\"ico-close\" (click)=\"closeToast()\"><img src=\"{{ imgCloseBtn }}\" alt=\"{{ closeBtnTitle }}\" /></button>\n  </span>\n  <ng-content></ng-content>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-toast .close{display:flex;justify-content:flex-end;margin-bottom:.5em}c3m-toast .close button{display:block;width:.5em;height:.5em;padding:0;background:0 0}c3m-toast p{position:fixed;padding:.5rem 1rem;background-color:#d769a8;color:#fff;border-radius:3px;z-index:5000}c3m-toast p.bottomRight,c3m-toast p.topRight{right:1em}c3m-toast p.bottomLeft,c3m-toast p.topLeft{left:1em}c3m-toast p.topLeft.active,c3m-toast p.topRight.active{transition:top 1s cubic-bezier(.43,1.18,.99,.98);top:1rem}c3m-toast p.bottomLeft.active,c3m-toast p.bottomRight.active{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98);bottom:1rem}c3m-toast p.inactive{transition:top 1s cubic-bezier(.43,1.18,.99,.98)}c3m-toast p.bottomLeft.inactive,c3m-toast p.bottomRight.inactive{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98)}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
    ToastComponent.propDecorators = {
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        closeBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        closeBtnTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        imgCloseBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['toast',] }]
    };
    return ToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.groups = [];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOthers = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeAll = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        this.groups.forEach(function (group) {
            group.isOpen = false;
        });
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.removeGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-accordion',
                    template: "<ul class=\"accordion\">\n  <ng-content></ng-content>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    return AccordionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccordionItemComponent = /** @class */ (function () {
    /* By default , add item to accordion */
    function AccordionItemComponent(accordion) {
        this.accordion = accordion;
        this.accordion.addGroup(this);
    }
    /* remove item to accordion*/
    /* remove item to accordion*/
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnDestroy = /* remove item to accordion*/
    /**
     * @return {?}
     */
    function () {
        this.accordion.removeGroup(this);
    };
    /* changes */
    /* changes */
    /**
     * @param {?} changes
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnChanges = /* changes */
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                /** @type {?} */
                var changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.accordion.groups[this.index + 1].toggleOpen();
                }
            }
        }
    };
    /* initialisation */
    /* initialisation */
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngOnInit = /* initialisation */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* when view init */
    /* when view init */
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.ngAfterViewInit = /* when view init */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* open accordion'element */
    /*toggleOpen(): void {
      if (!this.isOpen) {
        this.isOpen = true;
        this.accordion.closeOthers(this);
      } else if (this.isOpen) {
        this.accordion.closeAll(this);
      }
    }*/
    /* open accordion'element */
    /*toggleOpen(): void {
        if (!this.isOpen) {
          this.isOpen = true;
          this.accordion.closeOthers(this);
        } else if (this.isOpen) {
          this.accordion.closeAll(this);
        }
      }*/
    /**
     * @return {?}
     */
    AccordionItemComponent.prototype.toggleOpen = /* open accordion'element */
    /*toggleOpen(): void {
        if (!this.isOpen) {
          this.isOpen = true;
          this.accordion.closeOthers(this);
        } else if (this.isOpen) {
          this.accordion.closeAll(this);
        }
      }*/
    /**
     * @return {?}
     */
    function () {
        this.isOpen = !this.isOpen;
        this.accordion.closeOthers(this);
    };
    AccordionItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-accordion-item',
                    template: "<li class=\"accordion-group\">\n  <button\n    class=\"panel-heading\"\n    (click)=\"toggleOpen()\"\n    [attr.aria-expanded]=\"isOpen\"\n    [attr.aria-controls]=\"panelID\"\n    id=\"{{ tabID }}\"\n  >\n    {{ nameButton }}\n\n    <svg>\n      <use xlink:href=\"/assets/img/icons.svg#arrowDownSvg\"></use>\n    </svg>\n  </button>\n\n  <div\n    class=\"panel-collapse\"\n    [@openClose]=\"isOpen ? 'open' : 'closed'\"\n    [attr.aria-hidden]=\"!isOpen\"\n    id=\"{{ panelID }}\"\n    [attr.aria-labeledby]=\"tabID\"\n  >\n    <ng-content></ng-content>\n  </div>\n</li>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
                                padding: '1em'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                display: 'none',
                                height: 0,
                                padding: '0 1em'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in')]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in')])
                        ])
                    ],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-accordion>ul{width:80%;padding:1rem}c3m-accordion-item>li{position:relative;color:var(--body-text);background-color:var(--body-bg);border:none;z-index:5}c3m-accordion-item>li.closed{color:var(--text-inv);background-color:var(--main-color);border-bottom:1px solid var(--body-bg)}c3m-accordion-item:last-child>li.closed{border:none}c3m-accordion-item>li>.panel-collapse{overflow:hidden;padding:0}c3m-accordion-item>li>button{position:relative;width:100%;height:100%;line-height:1.7rem;text-align:left;color:var(--text-inv);background-color:var(--main-color);background-size:2.1rem;padding:.5rem 2.5rem .5rem .5rem;border-radius:0;cursor:pointer;z-index:10}c3m-accordion-item>li>button svg{position:absolute;width:24px;height:24px;right:1rem;fill:#fff;transition:.3s;-webkit-transform:rotate(0);transform:rotate(0);z-index:1}c3m-accordion-item>li>button[aria-expanded=true] svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}"]
                }] }
    ];
    /** @nocollapse */
    AccordionItemComponent.ctorParameters = function () { return [
        { type: AccordionComponent }
    ]; };
    AccordionItemComponent.propDecorators = {
        nameButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        urlImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return AccordionItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    /* ********* CONSTRUCTOR ********* */
    function CalendarComponent(eRef, renderer) {
        this.eRef = eRef;
        this.renderer = renderer;
        this.targetString = ' ';
        this.type = 'text';
        this.keys = {};
    }
    /* ************ ON INIT *********** */
    /* ************ ON INIT *********** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /* ************ ON INIT *********** */
    /**
     * @return {?}
     */
    function () {
        this.datepicker(true);
        if (this.type === 'date') {
            if (this.checkDateInput()) {
                this.renderer.setStyle(this.buttonShow.nativeElement, 'display', 'none');
            }
        }
    };
    /* ************** MAIN FUNCTION ************** */
    /* ************** MAIN FUNCTION ************** */
    /**
     * @param {?} modal
     * @return {?}
     */
    CalendarComponent.prototype.datepicker = /* ************** MAIN FUNCTION ************** */
    /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /* All the selectors */
        this.dp = this.dp.nativeElement;
        this.prev = this.prev.nativeElement;
        this.next = this.next.nativeElement;
        this.grid = this.grid.nativeElement;
        this.target = this.target.nativeElement;
        this.bModal = modal; // true if datepicker should appear in modal
        // Month Names
        this.monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        // Day Names
        this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // DATE
        this.dateObj = new Date();
        // Current Date
        this.curYear = this.dateObj.getFullYear(); // Get the Year using Local Time
        this.year = this.curYear;
        this.curMonth = this.dateObj.getMonth(); // Get the Month using Local Time
        this.month = this.curMonth;
        this.currentDate = true;
        this.date = this.dateObj.getDate();
        // Keyboard Keys
        this.keys = {
            tab: 9,
            enter: 13,
            esc: 27,
            space: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        // Stock name of current Date
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        // Fill the calendar grid
        this.fillGrid();
        // Point Activedescendant to the current day
        /** @type {?} */
        var today = this.grid.querySelector('.today');
        this.grid.setAttribute('aria-activedescendant', today.getAttribute('id'));
        // Call all events listener
        this.bindHandlers();
    };
    /* ************ CHECK IF TYPE DATE IS SUPPORTED ******** */
    /* ************ CHECK IF TYPE DATE IS SUPPORTED ******** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.checkDateInput = /* ************ CHECK IF TYPE DATE IS SUPPORTED ******** */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var input = document.createElement('input');
        input.setAttribute('type', 'date');
        /** @type {?} */
        var notADateValue = 'not-a-date';
        input.setAttribute('value', notADateValue);
        return input.value !== notADateValue;
    };
    /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
    /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.bindHandlers = /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var thisobj = this;
        /* ---------------------------------------------- */
        thisobj.renderer.listen(this.grid, 'keydown', function (e) {
            return thisobj.handleGridKeyDown(e);
        });
        thisobj.renderer.listen(this.grid, 'keypress', function (e) {
            return thisobj.handleGridKeyDown(e);
        });
        thisobj.renderer.listen(this.grid, 'focus', function () {
            return thisobj.handleGridFocus();
        });
        thisobj.renderer.listen(this.grid, 'blur', function () {
            return thisobj.handleGridBlur();
        });
        /* ---------------------------------------------- */
        this.addEventListenerList(thisobj);
    };
    /* ************************** HANDLE GRID BLUR ********************** */
    /* ************************** HANDLE GRID BLUR ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.handleGridBlur = /* ************************** HANDLE GRID BLUR ********************** */
    /**
     * @return {?}
     */
    function () {
        if (this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'))) {
            /** @type {?} */
            var idActiveDescendant = this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'));
            idActiveDescendant.classList.remove('focus');
            idActiveDescendant.setAttribute('aria-selected', 'false');
        }
        return true;
    };
    /* ************************** HANDLE GRID FOCUS ********************** */
    /* ************************** HANDLE GRID FOCUS ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.handleGridFocus = /* ************************** HANDLE GRID FOCUS ********************** */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var active = this.grid.getAttribute('aria-activedescendant');
        if (this.eRef.nativeElement.querySelector('#' + active).getAttribute('id') === undefined) {
            /** @type {?} */
            var lastDay = 'day' + this.calcNumDays(this.year, this.month);
            this.eRef.nativeElement.querySelector('#' + lastDay).classList.add('focus');
            this.eRef.nativeElement.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
        }
        else {
            this.eRef.nativeElement.querySelector('#' + active).classList.add('focus');
            this.eRef.nativeElement.querySelector('#' + active).setAttribute('aria-selected', 'true');
        }
        return true;
    };
    /* ************************** HANDLE KEY PRESS ********************** */
    /* ************************** HANDLE KEY PRESS ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handleGridKeyPress = /* ************************** HANDLE KEY PRESS ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.altKey) {
            return true;
        }
        switch (e.keyCode) {
            case this.keys.tab:
            case this.keys.enter:
            case this.keys.space:
            case this.keys.esc:
            case this.keys.left:
            case this.keys.right:
            case this.keys.up:
            case this.keys.down:
            case this.keys.pageup:
            case this.keys.pagedown:
            case this.keys.home:
            case this.keys.end: {
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** HANDLE GRID CLICK ********************** */
    /* ************************** HANDLE GRID CLICK ********************** */
    /**
     * @param {?} id
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handleGridClick = /* ************************** HANDLE GRID CLICK ********************** */
    /**
     * @param {?} id
     * @param {?} e
     * @return {?}
     */
    function (id, e) {
        /** @type {?} */
        var cell = id;
        // If Cell is empty
        if (cell.classList.contains('empty')) {
            return true;
        }
        // Get Focus Cell
        /** @type {?} */
        var tmpCell = this.grid.querySelector('.focus');
        tmpCell.classList.remove('focus');
        tmpCell.setAttribute('aria-selected', 'false');
        // Add New Focus Cell
        cell.classList.add('focus');
        cell.setAttribute('aria-selected', 'true');
        // Change Grid ActiveDescendant to the newCellId
        this.grid.setAttribute('aria-activedescendant', cell.getAttribute('id'));
        // Get the new Click Cell
        /** @type {?} */
        var curDay = this.eRef.nativeElement.querySelector("#" + this.grid.getAttribute('aria-activedescendant'));
        // Change the targetString to represente the new current date
        /** @type {?} */
        var x = curDay.firstChild.nodeValue;
        this.targetString =
            (this.month < 9 ? '0' : '') +
                (this.month + 1) +
                '/' +
                (parseInt(x, 10) < 9 ? '0' : '') +
                curDay.firstChild.nodeValue +
                '/' +
                this.year;
        // Hide modal Dialog
        this.hideDlg();
        e.stopPropagation();
        return false;
    };
    /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
    /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
    /**
     * @param {?} thisobj
     * @return {?}
     */
    CalendarComponent.prototype.addEventListenerList = /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
    /**
     * @param {?} thisobj
     * @return {?}
     */
    function (thisobj) {
        /** @type {?} */
        var list = this.grid.querySelectorAll('td');
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var len = list.length;
        var _loop_1 = function () {
            /** @type {?} */
            var itemList = list[i];
            /*itemList.addEventListener('click', function(e){
                return thisobj.handleGridClick(this, e);
              });*/
            thisobj.renderer.listen(itemList, 'click', function (e) {
                return thisobj.handleGridClick(itemList, e);
            });
        };
        for (i = 0; i < len; i++) {
            _loop_1();
        }
    };
    /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
    /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handlePrevClick = /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var active = this.grid.getAttribute('aria-activedescendant');
        if (e.ctrlKey) {
            this.showPrevYear();
        }
        else {
            this.showPrevMonth(1);
        }
        if (this.currentDate === false) {
            this.grid.setAttribute('aria-activedescendant', 'day1');
        }
        else {
            this.grid.setAttribute('aria-activedescendant', 'active');
        }
        e.stopPropagation();
        return false;
    };
    /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
    /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handleNextClick = /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var active = this.grid.getAttribute('aria-activedescendant');
        if (e.ctrlKey) {
            this.showNextYear();
        }
        else {
            this.showNextMonth(1);
        }
        if (this.currentDate === false) {
            this.grid.setAttribute('aria-activedescendant', 'day1');
        }
        else {
            this.grid.setAttribute('aria-activedescendant', active);
        }
        e.stopPropagation();
        return false;
    };
    /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
    /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handlePrevKeyDown = /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.altKey) {
            return true;
        }
        switch (e.keyCode) {
            case this.keys.tab: {
                e.preventDefault();
                if (e.ctrlKey) {
                    return true;
                }
                else if (e.shiftKey) {
                    this.grid.focus();
                }
                else {
                    this.next.focus();
                }
                e.stopPropagation();
                return false;
            }
            case this.keys.enter:
            case this.keys.space: {
                if (e.shiftKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showPrevYear();
                }
                else {
                    this.showPrevMonth(1);
                }
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
    /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handleNextKeyDown = /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // Alt
        if (e.altKey) {
            return true;
        }
        // ENTER OR SPACE
        switch (e.keyCode) {
            case this.keys.enter:
            case this.keys.space: {
                // CTRL + SPACE   OR CTRL + ENTER
                if (e.ctrlKey) {
                    this.showNextYear();
                }
                else {
                    this.showNextMonth(1);
                }
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ************************** SHOW DIALOG ********************** */
    /* ************************** SHOW DIALOG ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.showDlg = /* ************************** SHOW DIALOG ********************** */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var thisObj = this;
        // Bind Event Listener
        thisObj.renderer.listen(this.eRef.nativeElement, 'click', function (e) {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mousedown', function (e) {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mouseup', function (e) {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mousemove', function (e) {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mouseover', function (e) {
            return thisObj.showDialogMethod(e);
        });
        thisObj.dp.setAttribute('aria-hidden', 'false');
        this.grid.focus();
    };
    /* ************************** ShowDialog Modal Method ********************** */
    /* ************************** ShowDialog Modal Method ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.showDialogMethod = /* ************************** ShowDialog Modal Method ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.grid.focus();
        e.stopPropagation();
        return false;
    };
    /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
    /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    CalendarComponent.prototype.handleGridKeyDown = /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var rows = this.grid.querySelectorAll('tbody tr');
        /** @type {?} */
        var curDay = this.eRef.nativeElement.querySelector("#" + this.grid.getAttribute('aria-activedescendant'));
        /** @type {?} */
        var days = this.grid.querySelectorAll('td:not(.empty)');
        /** @type {?} */
        var curRow = curDay.parentElement;
        // ALT
        if (e.altKey) {
            return true;
        }
        // TAB
        switch (e.keyCode) {
            case this.keys.tab: {
                e.preventDefault();
                if (this.bModal === true) {
                    // SHIFT + TAB
                    if (e.shiftKey) {
                        this.next.focus();
                    }
                    else {
                        this.prev.focus();
                    }
                    e.stopPropagation();
                    return false;
                }
                break;
            }
            // ENTER OR SPACE
            case this.keys.enter:
            case this.keys.space: {
                // CTRL ENTER OR CTRL SPACE
                if (e.ctrlKey) {
                    return true;
                }
                // update targent box
                this.targetString =
                    (this.month < 9 ? '0' : '') + (this.month + 1) + '/' + curDay.firstChild.nodeValue + '/' + this.year;
                this.hideDlg();
                return false;
            }
            // ESCAPE
            case this.keys.esc: {
                this.hideDlg();
                e.stopPropagation();
                return false;
            }
            // LEFT
            case this.keys.left: {
                // LEFT + CTRL OR LEFT + SHIFT
                if (e.ctlrKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                var dayIndex = days.indexOf(curDay) - 1;
                /** @type {?} */
                var prevDay = null;
                if (dayIndex >= 0) {
                    prevDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    prevDay.classList.add('focus');
                    prevDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
                }
                else {
                    this.showPrevMonth(1);
                }
                e.stopPropagation();
                return false;
            }
            // RIGHT
            case this.keys.right: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                var dayIndex = days.indexOf(curDay) + 1;
                /** @type {?} */
                var nextDay = null;
                if (dayIndex < days.length) {
                    nextDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    nextDay.classList.add('focus');
                    nextDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
                }
                else {
                    this.showNextMonth(1);
                }
                e.stopPropagation();
                return false;
            }
            // UP
            case this.keys.up: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                var dayIndex = days.indexOf(curDay) - 7;
                /** @type {?} */
                var prevDay = null;
                if (dayIndex > 0) {
                    prevDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    prevDay.classList.add('focus');
                    prevDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
                }
                else {
                    days = Array.prototype.slice.call(days);
                    dayIndex = 3 - days.indexOf(curDay) + 7;
                    this.showPrevMonth(dayIndex);
                }
                e.preventDefault();
                return false;
            }
            // DOWN
            case this.keys.down: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                var dayIndex = days.indexOf(curDay) + 7;
                /** @type {?} */
                var nextDay = null;
                if (dayIndex < days.length) {
                    nextDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    nextDay.classList.add('focus');
                    nextDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
                }
                else {
                    days = Array.prototype.slice.call(days);
                    dayIndex = 8 - (days.length - days.indexOf(curDay));
                    this.showNextMonth(dayIndex);
                }
                e.preventDefault();
                return false;
            }
            // PAGE UP
            case this.keys.pageup: {
                /** @type {?} */
                var active = this.grid.getAttribute('aria-activedescendant');
                if (e.shifKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showPrevYear();
                }
                else {
                    this.showPrevMonth(1);
                }
                if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
                    /** @type {?} */
                    var lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    /** @type {?} */
                    var lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    /** @type {?} */
                    var lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.preventDefault();
                return false;
            }
            // PAGE DOWN
            case this.keys.pagedown: {
                /** @type {?} */
                var active = this.grid.getAttribute('aria-activedescendant');
                if (e.shifKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showNextYear();
                }
                else {
                    this.showNextMonth(1);
                }
                if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
                    /** @type {?} */
                    var lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    /** @type {?} */
                    var lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    /** @type {?} */
                    var lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.preventDefault();
                return false;
            }
            // HOME
            case this.keys.home: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                curDay.classList.remove('focus');
                curDay.setAttribute('aria-selected', 'false');
                this.grid.querySelector('#day1').classList.add('focus');
                this.grid.querySelector('#day1').setAttribute('aria-selected', 'true');
                this.grid.setAttribute('aria-activedescendant', 'day1');
                e.stopPropagation();
                return false;
            }
            // END
            case this.keys.end: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                /** @type {?} */
                var lastDay = 'day' + this.calcNumDays(this.year, this.month);
                curDay.classList.remove('focus');
                curDay.setAttribute('aria-selected', 'false');
                this.grid.querySelector('#' + lastDay).classList.add('focus');
                this.grid.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
                this.grid.setAttribute('aria-activedescendant', lastDay);
                e.stopPropagation();
                return false;
            }
        }
        return true;
    };
    /* ****************** Hide modal on click outiside ******************* */
    /* ****************** Hide modal on click outiside ******************* */
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.clickedOutside = /* ****************** Hide modal on click outiside ******************* */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // here you can hide your menu
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.hideDlg();
        }
    };
    /* ************************** HIDE MODAL DIALOG ********************** */
    /* ************************** HIDE MODAL DIALOG ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.hideDlg = /* ************************** HIDE MODAL DIALOG ********************** */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var thisObj = this;
        thisObj.renderer.destroy();
        thisObj.dp.setAttribute('aria-hidden', 'true');
        this.target.focus();
    };
    /* ************************** SHOW PREVIOUS MONTH ********************** */
    /* ************************** SHOW PREVIOUS MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    CalendarComponent.prototype.showPrevMonth = /* ************************** SHOW PREVIOUS MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        if (this.month === 0) {
            this.month = 11;
            this.year--;
        }
        else {
            this.month--;
        }
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
        if (offset !== null) {
            /** @type {?} */
            var numDays = this.calcNumDays(this.year, this.month);
            /** @type {?} */
            var day = 'day' + (numDays - offset);
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    };
    /* ************************** SHOW NEXT MONTH ********************** */
    /* ************************** SHOW NEXT MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    CalendarComponent.prototype.showNextMonth = /* ************************** SHOW NEXT MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        if (this.month === 11) {
            this.month = 0;
            this.year++;
        }
        else {
            this.month++;
        }
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
        if (offset !== null) {
            /** @type {?} */
            var day = 'day' + offset;
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    };
    /* ************************** SHOW PREVIOUS YEAR ********************** */
    /* ************************** SHOW PREVIOUS YEAR ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.showPrevYear = /* ************************** SHOW PREVIOUS YEAR ********************** */
    /**
     * @return {?}
     */
    function () {
        this.year--;
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
    };
    /* ************************** SHOW NEXT YEAR ********************** */
    /* ************************** SHOW NEXT YEAR ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.showNextYear = /* ************************** SHOW NEXT YEAR ********************** */
    /**
     * @return {?}
     */
    function () {
        this.year++;
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
    };
    /* ************************** FILL THE GRID ********************** */
    /* ************************** FILL THE GRID ********************** */
    /**
     * @return {?}
     */
    CalendarComponent.prototype.fillGrid = /* ************************** FILL THE GRID ********************** */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numDays = this.calcNumDays(this.year, this.month);
        /** @type {?} */
        var startWeekDay = this.calcStarWeekDay(this.year, this.month);
        /** @type {?} */
        var weekDay = 0;
        /** @type {?} */
        var curDay = 1;
        /** @type {?} */
        var rowCount = 1;
        this.tbody = this.grid.querySelector('tbody');
        /** @type {?} */
        var gridCells = '\t<tr id="row0">\n';
        while (this.tbody.firstChild) {
            this.tbody.removeChild(this.tbody.firstChild);
        }
        // Insert Empty Cells
        for (weekDay = 0; weekDay < startWeekDay; weekDay++) {
            gridCells += '\t\t<td class="empty">&nbsp; </td>\n';
        }
        // Insert the days of the month
        for (curDay = 1; curDay <= numDays; curDay++) {
            if (curDay === this.date && this.currentDate === true) {
                gridCells +=
                    '\t\t<td id="day' +
                        curDay +
                        '" class="today"' +
                        'headers="row' +
                        rowCount +
                        ' ' +
                        this.dayNames[weekDay] +
                        '" ' +
                        'role="gridcell" aria-selected="false">' +
                        curDay +
                        '</td> \n';
            }
            else {
                gridCells +=
                    '\t\t<td id="day' +
                        curDay +
                        '" headers="row' +
                        rowCount +
                        ' ' +
                        this.dayNames[weekDay] +
                        '" ' +
                        'role="gridcell" aria-selected="false">' +
                        curDay +
                        '</td> \n';
            }
            // Last day of week
            if (weekDay === 6 && curDay < numDays) {
                gridCells += '\t</tr>\n\t<tr id="row' + rowCount + '">\n';
                rowCount++;
                weekDay = 0;
            }
            else {
                weekDay++;
            }
        }
        // Insert empty cells
        for (weekDay; weekDay < 7; weekDay++) {
            gridCells += '\t\t<td class="empty">&nbsp;</td>\n';
        }
        gridCells += '\t </tr>';
        this.tbody.insertAdjacentHTML('beforeend', gridCells);
    };
    /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
    /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    CalendarComponent.prototype.calcNumDays = /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        return 32 - new Date(year, month, 32).getDate();
    };
    /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
    /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    CalendarComponent.prototype.calcStarWeekDay = /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        return new Date(year, month, 1).getDay();
    };
    CalendarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-calendar',
                    template: "<div role=\"application\">\n  <p>\n    <label for=\"date\">Date</label>\n    <input [attr.type]=\"type\" value=\"{{ targetString }}\" #date />\n    <button (click)=\"showDlg()\" #showDP>Select Date</button>\n  </p>\n\n  <div class=\"datepicker\" aria-hidden=\"true\" #dp>\n    <div class=\"month-wrap\">\n      <button\n        (click)=\"handlePrevClick($event)\"\n        (keydown)=\"handlePrevKeyDown($event)\"\n        role=\"button\"\n        aria-label=\"Mois ou Ann\u00E9e pr\u00E9c\u00E9dent(e)\"\n        aria-labelledby=\"bn_prev-label\"\n        tabindex=\"0\"\n        #prev\n      >\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#leftCalendarSvg\"></use>\n        </svg>\n      </button>\n      <strong role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthString }}</strong>\n      <button\n        (click)=\"handleNextClick($event)\"\n        (keydown)=\"handleNextKeyDown($event)\"\n        role=\"button\"\n        aria-label=\"Mois ou Ann\u00E9e suivant(e)\"\n        aria-labelledby=\"bn_next-label\"\n        tabindex=\"0\"\n        #next\n      >\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#rightCalendarSvg\"></use>\n        </svg>\n      </button>\n    </div>\n\n    <table aria-activedescendant=\"errMsg\" aria-labelledby=\"month\" tabindex=\"0\" #cal>\n      <thead>\n        <tr id=\"weekdays\">\n          <th scope=\"col\"><abbr title=\"Sunday\">Su</abbr></th>\n          <th scope=\"col\"><abbr title=\"Monday\">Mo</abbr></th>\n          <th scope=\"col\"><abbr title=\"Tuesday\">Tu</abbr></th>\n          <th scope=\"col\"><abbr title=\"Wednesday\">We</abbr></th>\n          <th scope=\"col\"><abbr title=\"Thursday\">Th</abbr></th>\n          <th scope=\"col\"><abbr title=\"Friday\">Fr</abbr></th>\n          <th scope=\"col\"><abbr title=\"Saturday\">Sa</abbr></th>\n        </tr>\n      </thead>\n\n      <tbody #tbody>\n        <tr>\n          <td id=\"errMsg\" colspan=\"7\">Javascript must be enabled</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <button id=\"bn_prev-label\" class=\"offscreen\">Go to previous month</button>\n    <button id=\"bn_next-label\" class=\"offscreen\">Go to next month</button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-calendar div>input{max-width:9em}c3m-calendar p button{color:var(--text-inv);background-color:var(--n-dark)}c3m-calendar button:hover{opacity:.8}c3m-calendar .datepicker{position:absolute;width:250px;background-color:var(--body-bg);margin:.5rem;border:none;border-radius:.3rem;box-shadow:0 3px 7px rgba(0,0,0,.5)}.month-wrap{display:flex;justify-content:space-between;align-items:center;color:var(--text-inv);background-color:var(--main-color);padding:.5em}.month-wrap strong{display:inline-block}.month-wrap button{background-color:var(--main-color);padding:0}c3m-calendar table thead{margin-top:2rem;line-height:2.2rem}c3m-calendar button svg{height:1.2rem;width:1.7rem;fill:var(--text-inv)}c3m-calendar div#month{float:left;padding-top:6px;width:199px;height:24px;text-align:center;font-weight:700;font-size:1.2em}c3m-calendar tbody#cal{width:261px;font-size:1.2em;text-align:center}c3m-calendar table{color:var(--text-inv);background-color:var(--main-color);width:100%;border-collapse:collapse;border-spacing:1px}c3m-calendar table td,c3m-calendar table th{width:35px;height:35px;line-height:2em;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding:0}c3m-calendar table th{font:var(--stack-l);text-transform:uppercase}c3m-calendar table th abbr{text-decoration:none}c3m-calendar table td.today,c3m-calendar table td.today.focus{background-color:var(--hot-color-sec)}c3m-calendar table td.empty,c3m-calendar table td.empty:hover{background-color:var(--main-color);cursor:initial}c3m-calendar table td.focus,c3m-calendar table td:hover{background-color:rgba(255,255,255,.15);cursor:pointer}c3m-calendar .offscreen{position:absolute;left:-200em;top:-100em}c3m-calendar [aria-hidden=true]{display:none}"]
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
    ]; };
    CalendarComponent.propDecorators = {
        monthString: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        targetString: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        dp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['dp',] }],
        prev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['prev',] }],
        next: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['next',] }],
        grid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['cal',] }],
        buttonShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['showDP',] }],
        target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['date',] }],
        clickedOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['document:click', ['$event'],] }]
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(eRef) {
        this.eRef = eRef;
        this.sizeLi = 0;
        this.groups = [];
    }
    // After View Init
    // After View Init
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = 
    // After View Init
    /**
     * @return {?}
     */
    function () {
        // Select All Carousel Item Content
        this.tabItemContent = this.eRef.nativeElement.querySelectorAll('.carousel-item-content');
        // Calcul Size of all Carousel Item
        for (var i = 0; i < this.tabItemContent.length; i++) {
            this.sizeLi = this.sizeLi + this.tabItemContent[i].getBoundingClientRect().width;
        }
        // Opacity 0 for All Carousel Item
        for (var i = 0; i < this.tabItemContent.length; i++) {
            this.tabItemContent[i].style.opacity = '0';
        }
        // Opacity 1 for the first Carousel Item
        this.tabItemContent[0].style.opacity = '1';
    };
    // On Init
    // On Init
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // For the visible Carousel Item, change the Aria Attributes and Tab Index
        this.groups[0].isVisible = true;
        this.groups[0].tabIndex = '0';
    };
    // Add a Carousel Item to the group of Carousel Item
    // Add a Carousel Item to the group of Carousel Item
    /**
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.addGroup = 
    // Add a Carousel Item to the group of Carousel Item
    /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    // Click on Next Button
    // Click on Next Button
    /**
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.next = 
    // Click on Next Button
    /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        // "index" is the index of the carousel item in the group
        /** @type {?} */
        var index = this.groups.indexOf(group);
        // "lengthGroup" is the length of the Carousel Item Group
        /** @type {?} */
        var lengthGroup = this.groups.length;
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // If click next button with the last Slide (go to the first slide)
        if (index + 1 > lengthGroup - 1) {
            this.groups[0].isVisible = true;
            this.groups[0].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[lengthGroup - 1].style.opacity = '1';
            this.tabItemContent[0].style.transition = 'none';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[0].style.opacity = '1';
                _this.tabItemContent[0].style.transition = 'transform 0.3s';
                _this.tabItemContent[0].style.zIndex = '10';
                _this.tabItemContent[0].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index + 1].isVisible = true;
            this.groups[index + 1].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index + 1].style.transition = 'none';
            this.tabItemContent[index + 1].style.transform =
                'translate(+' + this.tabItemContent[index + 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform =
                'translate(-' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[index + 1].style.opacity = '1';
                _this.tabItemContent[index + 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[index + 1].style.zIndex = '10';
                _this.tabItemContent[index + 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    };
    /* Click on a previous button  */
    /* Click on a previous button  */
    /**
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.previous = /* Click on a previous button  */
    /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        /** @type {?} */
        var index = this.groups.indexOf(group);
        /** @type {?} */
        var lengthGroup = this.groups.length;
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        if (index - 1 < 0) {
            this.groups[lengthGroup - 1].isVisible = true;
            this.groups[lengthGroup - 1].tabIndex = '0';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[0].style.opacity = '1';
            this.tabItemContent[lengthGroup - 1].style.transition = 'none';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[lengthGroup - 1].style.opacity = '1';
                _this.tabItemContent[lengthGroup - 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[lengthGroup - 1].style.zIndex = '10';
                _this.tabItemContent[lengthGroup - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index - 1].isVisible = true;
            this.groups[index - 1].tabIndex = '0';
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index - 1].style.transition = 'none';
            this.tabItemContent[index - 1].style.transform =
                'translate(-' + this.tabItemContent[index - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform =
                'translate(+' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(function () {
                _this.tabItemContent[index - 1].style.opacity = '1';
                _this.tabItemContent[index - 1].style.transition = 'transform 0.3s';
                _this.tabItemContent[index - 1].style.zIndex = '10';
                _this.tabItemContent[index - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    };
    /* Function to go on a specific item with Bullepoint Click Event */
    /* Function to go on a specific item with Bullepoint Click Event */
    /**
     * @param {?} indexToGo
     * @param {?} group
     * @return {?}
     */
    CarouselComponent.prototype.goTo = /* Function to go on a specific item with Bullepoint Click Event */
    /**
     * @param {?} indexToGo
     * @param {?} group
     * @return {?}
     */
    function (indexToGo, group) {
        var _this = this;
        /** @type {?} */
        var random = Math.floor(Math.random() * 2 + 0);
        console.log(random);
        this.groups.forEach(function (groupToClose) {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        this.groups[indexToGo].isVisible = true;
        this.groups[indexToGo].tabIndex = '0';
        this.tabItemContent[indexToGo].style.transition = 'none';
        if (random === 1) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(+' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(-' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        else if (random === 0) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(-' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (var i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(+' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        setTimeout(function () {
            _this.tabItemContent[indexToGo].style.opacity = '1';
            _this.tabItemContent[indexToGo].style.transition = 'transform 0.3s';
            _this.tabItemContent[indexToGo].style.zIndex = '10';
            _this.tabItemContent[indexToGo].style.transform = 'translate(0,0)';
        }, 300);
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-carousel',
                    template: "<!-- A Carousel -->\n<div class=\"carousel\">\n  <!-- Carousel Item List -->\n  <ul role=\"tablist\" class=\"carouselItemList\">\n    <ng-content></ng-content>\n  </ul>\n\n  <!-- Carousel Bullet Points -->\n  <ul class=\"bulletpoint\">\n    <li\n      *ngFor=\"let groupItem of groups; let i = index\"\n      [attr.aria-controls]=\"groupItem.itemID\"\n      role=\"tab\"\n      [attr.aria-selected]=\"groupItem.isVisible\"\n      tabindex=\"{{ groupItem.tabIndex }}\"\n    >\n      <button #bulletPoint aria-label=\"Go to this slide\" (click)=\"goTo(i, groupItem)\"></button>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-carousel .carousel{position:relative;overflow:hidden;width:80%;margin:2.5rem}c3m-carousel .carouselItemList{display:block;overflow:hidden;width:100%;height:20rem;margin:0 auto}c3m-carousel .bulletpoint{display:block;position:absolute;width:100%;bottom:5%;text-align:center;margin:0 auto;z-index:17}c3m-carousel .bulletpoint li{display:inline-block;margin-right:1rem}c3m-carousel .bulletpoint li button{width:1.2rem;height:1.2rem;background-color:var(--text-inv);padding:0;border-radius:1.2rem;opacity:.5}c3m-carousel .bulletpoint li button:hover,c3m-carousel .bulletpoint li[aria-selected=true] button{opacity:1}c3m-carousel .previousCarouselItem::before{display:block;position:absolute;top:1rem;left:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid var(--body-bg);border-left:4px solid var(--body-bg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}c3m-carousel .nextCarouselItem::before{display:block;position:absolute;top:1rem;right:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid #fff;border-right:4px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}c3m-carousel .carousel-item{display:inline-block;height:20rem;width:100%}c3m-carousel .nextCarouselItem:hover,c3m-carousel .previousCarouselItem:hover{opacity:.8}c3m-carousel .carousel-item-content{display:block;position:absolute;left:0;top:3.4rem;width:100%;height:calc(100% - 3.4rem);background-color:var(--main-color);margin:0 auto;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}c3m-carousel .carousel-item-content p{display:block;font-size:4rem;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding-top:5.2rem}c3m-carousel .previousCarouselItem{display:inline-block;position:absolute;top:0;left:0;width:50%;height:3.4rem;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem{display:inline-block;position:absolute;top:0;width:50%;height:3.4rem;left:50%;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem[tabindex='-1'],c3m-carousel .previousCarouselItem[tabindex='-1']{z-index:0;opacity:0}c3m-carousel .nextCarouselItem[tabindex='0'],c3m-carousel .previousCarouselItem[tabindex='0']{z-index:15}@media (min-width:1000px){c3m-carousel .previousCarouselItem::before{width:2rem;height:2rem;top:45%;left:39.7%}c3m-carousel .nextCarouselItem::before{width:2rem;height:2rem;top:45%;right:39.7%}c3m-carousel .previousCarouselItem{display:inline-block;width:11.5%;height:100%;left:0;font-size:3.5rem}c3m-carousel .carouselItemList{width:75%}c3m-carousel .nextCarouselItem{display:inline-block;width:11.5%;height:100%;right:0;left:auto;font-size:3.5rem}c3m-carousel .carousel-item-content{display:block;position:absolute;height:100%;left:0;top:0;margin:0 auto}c3m-carousel .carousel-item-content p{padding-top:6rem}c3m-carousel .bulletpoint{bottom:1rem}}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(carousel) {
        this.carousel = carousel;
        this.isVisible = true;
        this.tabIndex = '-1';
        this.carousel.addGroup(this);
    }
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.itemID = 'item' + this.index;
    };
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.itemID = 'item' + this.index;
    };
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.previousSlide = /**
     * @return {?}
     */
    function () {
        this.carousel.previous(this);
    };
    /**
     * @return {?}
     */
    CarouselItemComponent.prototype.nextSlide = /**
     * @return {?}
     */
    function () {
        this.carousel.next(this);
    };
    CarouselItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-carousel-item',
                    template: "<!-- A Carousel Item-->\n<li\n  class=\"carousel-item\"\n  role=\"tab\"\n  tabindex=\"{{ tabIndex }}\"\n  [attr.aria-selected]=\"isVisible\"\n  [attr.aria-controls]=\"itemID\"\n>\n  <!-- Previous button -->\n  <button\n    class=\"previousCarouselItem\"\n    tabindex=\"{{ tabIndex }}\"\n    (click)=\"previousSlide()\"\n    aria-label=\"Previous slide\"\n  ></button>\n\n  <!-- Carousel item Content -->\n  <div class=\"carousel-item-content\" role=\"tabpanel\" id=\"{{ itemID }}\" [attr.aria-hidden]=\"!isVisible\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Next Button -->\n  <button class=\"nextCarouselItem\" tabindex=\"{{ tabIndex }}\" (click)=\"nextSlide()\" aria-label=\"Next slide\"></button>\n</li>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CarouselItemComponent.ctorParameters = function () { return [
        { type: CarouselComponent }
    ]; };
    CarouselItemComponent.propDecorators = {
        isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        itemID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CarouselItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-checkbox',
                    template: "<p>\n  <input\n    type=\"checkbox\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"this.value\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n  />\n  <label [attr.for]=\"id\">{{ this.title }}</label>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-checkbox label{display:inline-block;padding:0 0 0 .5em}c3m-checkbox.unstressed label{font-family:var(--stack)}c3m-checkbox.custom input[type=checkbox]:checked,c3m-checkbox.custom input[type=checkbox]:not(:checked){position:absolute;left:-9999px}c3m-checkbox.custom input[type=checkbox]:checked+label,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label{position:relative;padding-left:25px}c3m-checkbox.custom input[type=checkbox]:checked+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:before{content:'';position:absolute;left:0;top:-.2em;width:17px;height:17px;border:1px solid var(--n-medium);background:var(--n-light);border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.3)}c3m-checkbox.custom input[type=checkbox]:checked+label:after,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after{content:'\u2714';position:absolute;top:-.2em;left:4px;font-size:16px;color:var(--sec-color);transition:.2s;margin-top:.2rem;margin-left:0}c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0)}c3m-checkbox.custom input[type=checkbox]:checked+label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}c3m-checkbox.custom input[type=checkbox]:checked:focus+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked):focus+label:before{border:1px dotted var(--sec-color)}c3m-checkbox.on-off{position:relative}c3m-checkbox.on-off label{display:inline-block;margin-left:40px;cursor:pointer}c3m-checkbox.on-off input{position:relative;left:15px;opacity:0}c3m-checkbox.on-off label::before{display:block;position:absolute;width:50px;height:25px;top:.5em;left:0;content:'';background-color:var(--n-medium);border-radius:1rem}c3m-checkbox.on-off label::after{display:block;position:absolute;width:20px;height:20px;top:.635em;left:27px;content:'';background-color:var(--n-medium-a);border-radius:20px;transition:1s}c3m-checkbox.on-off input:checked+label::before{background:var(--main-light)}c3m-checkbox.on-off input:checked+label::after{left:2px;background:var(--body-bg)}@media screen and (min-width:750px){c3m-checkbox.custom input[type=checkbox]:checked+label:after,c3m-checkbox.custom input[type=checkbox]:checked+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:before{top:0}}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxButtonComponent = /** @class */ (function () {
    function CheckboxButtonComponent() {
    }
    /**
     * @return {?}
     */
    CheckboxButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CheckboxButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-checkbox-button',
                    template: "<p>\n  <label>\n    <input type=\"checkbox\" [name]=\"this.name\" /><span> {{ this.title }}</span>\n  </label>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-checkbox-button label{display:inline-block;overflow:hidden}c3m-checkbox-button label span{display:inline-block;text-align:center;padding:.6em .5em .5em;border:1px solid var(--n-dark);cursor:pointer}c3m-checkbox-button input:checked+span,c3m-checkbox-button label span:hover{color:var(--text-inv);background-color:var(--main-color);border-color:var(--main-color)}c3m-checkbox-button label input{position:relative;left:-5em}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxButtonComponent.ctorParameters = function () { return []; };
    CheckboxButtonComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CheckboxButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-checkbox-group',
                    template: "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-checkbox-group{margin-bottom:1rem}c3m-checkbox-group legend{font:1em/1 var(--stack-b);padding-bottom:1em}c3m-checkbox-group label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}c3m-checkbox-group-item+c3m-checkbox-group-item li{margin-top:.5em}c3m-checkbox-group.go-along ul{display:flex}c3m-checkbox-group.go-along c3m-checkbox-group-item+c3m-checkbox-group-item li{margin:0 0 0 1em}@media screen and (min-width:750px){c3m-checkbox-group legend{font-size:1.3em}}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxGroupComponent.ctorParameters = function () { return []; };
    CheckboxGroupComponent.propDecorators = {
        legend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CheckboxGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxGroupItemComponent = /** @class */ (function () {
    function CheckboxGroupItemComponent() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    CheckboxGroupItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CheckboxGroupItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-checkbox-group-item',
                    template: "<li>\n  <input type=\"checkbox\" [attr.id]=\"id\" [name]=\"this.name\" [value]=\"this.value\" />\n  <label [attr.for]=\"id\">{{ this.title }}</label>\n</li>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CheckboxGroupItemComponent.ctorParameters = function () { return []; };
    CheckboxGroupItemComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CheckboxGroupItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxLinkComponent = /** @class */ (function () {
    function CheckboxLinkComponent() {
    }
    /**
     * @return {?}
     */
    CheckboxLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CheckboxLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-checkbox-link',
                    template: "<p>\n  <input type=\"checkbox\" [attr.id]=\"id\" [name]=\"this.name\" [value]=\"this.value\" />\n  <label [attr.for]=\"id\"> <ng-content></ng-content> </label>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-checkbox-link label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxLinkComponent.ctorParameters = function () { return []; };
    CheckboxLinkComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return CheckboxLinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        /* INPUTS */
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /* Open / Close the Dropdown */
    /* Open / Close the Dropdown */
    /**
     * @return {?}
     */
    DropdownComponent.prototype.toggleOpen = /* Open / Close the Dropdown */
    /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.isOpen = false;
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        document.querySelector('details').removeAttribute('open');
        this.isOpen = false;
    };
    DropdownComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-dropdown',
                    template: "<details class=\"dropdown\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggleOpen()\" (focusout)=\"close()\">\n  <!-- Dropdown Button -->\n  <summary>{{ this.nameDropdown }}</summary>\n  <!-- Dropdown Content List -->\n  <ul [ngClass]=\"{ open: isOpen }\">\n    <ng-content></ng-content>\n  </ul>\n</details>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["details.dropdown{display:inline-block;position:relative}details.dropdown summary{color:var(--text-inv);background:var(--main-color);padding:.4em 1em .5em .5em;border-radius:.3em;cursor:pointer}details.dropdown summary:focus,details.dropdown summary[open]{border:1px dashed outline;background:var(--main-light)}details.dropdown ul{box-sizing:border-box;position:absolute;overflow:hidden;width:10em;height:1px;list-style-type:none;padding:.5em;border-radius:.3em;box-shadow:1px 1px 3px rgba(0,0,0,.5);opacity:0;transition:1s}details.dropdown.open ul{height:auto;opacity:1;transition:1s}details.dropdown.open li{font-size:1em}details.dropdown a,details.dropdown button,details.dropdown c3m-button button,details.dropdown c3m-button-link a{display:block;width:100%;font:100% var(--stack);text-decoration:none;text-align:center;color:var(--body-text);background-color:var(--body-bg);padding:.5em;border-radius:.3em}details.dropdown button:hover,details.dropdown c3m-button button:hover,details.dropdown c3m-button-link a:hover{color:var(--body-text);background-color:var(--n-light)}c3m-dropdown details.dropdown.open ul{background:#fff}c3m-dropdown details c3m-button button,c3m-dropdown details li a{display:block;padding:.5em;font:100%/1 var(--stack);color:initial;text-decoration:none;text-align:left;background:0 0}c3m-dropdown details li a:focus,c3m-dropdown details li a:hover,c3m-dropdown details li button:focus,c3m-dropdown details li button:hover{text-decoration:underline;color:inherit;background:inherit}"]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    DropdownComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        nameDropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return DropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownItemComponent = /** @class */ (function () {
    function DropdownItemComponent() {
    }
    /**
     * @return {?}
     */
    DropdownItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DropdownItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-dropdown-item',
                    template: "<!-- Item of the Dropdown Content List -->\n<li><ng-content></ng-content></li>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DropdownItemComponent.ctorParameters = function () { return []; };
    DropdownItemComponent.propDecorators = {
        theContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return DropdownItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldsetComponent = /** @class */ (function () {
    function FieldsetComponent() {
    }
    /**
     * @return {?}
     */
    FieldsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    FieldsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-fieldset',
                    template: "<!-- Fieldset -->\n<fieldset>\n  <!-- Legend -->\n  <legend>{{ this.legend }}</legend>\n  <!-- Content -->\n  <ng-content></ng-content>\n</fieldset>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-fieldset fieldset{padding:1rem;border:2px solid var(--main-light)}c3m-fieldset fieldset>legend{text-transform:uppercase;letter-spacing:1.1px;color:var(--main-color);padding:0 .5rem;margin-left:.5rem}"]
                }] }
    ];
    /** @nocollapse */
    FieldsetComponent.ctorParameters = function () { return []; };
    FieldsetComponent.propDecorators = {
        legend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return FieldsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        // Inputs
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
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input',
                    template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"text\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputErrorMsgComponent = /** @class */ (function () {
    function InputErrorMsgComponent() {
    }
    /**
     * @return {?}
     */
    InputErrorMsgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputErrorMsgComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-error-msg',
                    template: "<p>\n  <span>\n    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n      <path\n        d=\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"\n      />\n    </svg>\n    <ng-content></ng-content>\n  </span>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-error-msg p{font-family:var(--stack-b);color:var(--alert-color);margin-bottom:.8rem}c3m-input-error-msg svg{fill:var(--alert-color);vertical-align:-.2em}"]
                }] }
    ];
    /** @nocollapse */
    InputErrorMsgComponent.ctorParameters = function () { return []; };
    return InputErrorMsgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputFloatingComponent = /** @class */ (function () {
    function InputFloatingComponent() {
        this.floating = 'bottom';
    }
    /**
     * @return {?}
     */
    InputFloatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputFloatingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-floating',
                    template: "<p [ngClass]=\"this.floating\">\n  <input type=\"text\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-floating>p{position:relative;overflow:hidden;width:40%;font-size:1rem;min-width:220px}c3m-input-floating input{width:100%;border:2px solid gray;background:0 0;position:relative;top:0;left:0;z-index:1;padding:8px 12px;outline:0;font-family:quicksandregular;box-sizing:border-box}c3m-input-floating input:valid{background:#fff}c3m-input-floating input:focus{border-color:#f06d06}c3m-input-floating input:focus+label{background:#f06d06;color:#fff;font-size:70%;padding:1px 6px;z-index:2;text-transform:uppercase}c3m-input-floating label{transition:background .2s,color .2s,top .2s,bottom .2s,right .2s,left .2s;position:absolute;color:#999;padding:7px 6px}c3m-input-floating p.bottom>input{padding:12px 0}c3m-input-floating p.bottom>label{top:0;bottom:0;left:0;width:100%}c3m-input-floating p.bottom>input:focus{padding:4px 6px 20px}c3m-input-floating p.bottom>input:focus+label{top:100%;margin-top:-16px}c3m-input-floating p.right label{top:2px;right:100%;width:100%;margin-right:-100%;bottom:2px}c3m-input-floating p.right input:focus+label{right:0;margin-right:0;width:40%;padding-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    InputFloatingComponent.ctorParameters = function () { return []; };
    InputFloatingComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        floating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputFloatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputMailComponent = /** @class */ (function () {
    function InputMailComponent() {
        // Inputs
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
    InputMailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputMailComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-mail',
                    template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"email\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    [multiple]=\"multiple\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-mail[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}c3m-input-mail input{width:85%;max-width:22em}"]
                }] }
    ];
    /** @nocollapse */
    InputMailComponent.ctorParameters = function () { return []; };
    InputMailComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputMailComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputMaterialComponent = /** @class */ (function () {
    function InputMaterialComponent() {
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    InputMaterialComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-material',
                    template: "<p class=\"field\">\n  <input type=\"text\" [placeholder]=\"this.placeholder\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-material p.field{display:flex;flex-flow:column-reverse;margin-bottom:1em;width:40%;min-width:220px}c3m-input-material input,c3m-input-material label{transition:.2s;touch-action:manipulation}c3m-input-material input{font-size:1.2em;border:0;border-bottom:1px solid #ccc;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;border-radius:0;padding:0;cursor:text}c3m-input-material input:focus{outline:0;border-bottom:1px solid #666}c3m-input-material label{text-transform:uppercase;letter-spacing:.05em}c3m-input-material input::-webkit-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translate(0,1.825rem) scale(1.3);transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input:-ms-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input::-ms-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input::placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translate(0,1.825rem) scale(1.3);transform:translate(0,1.825rem) scale(1.3)}c3m-input-material ::-webkit-input-placeholder{opacity:0;transition:inherit}c3m-input-material input:focus::-webkit-input-placeholder{opacity:1}c3m-input-material input:focus+label,c3m-input-material input:not(:placeholder-shown)+label{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:translate(0,0) scale(.8);transform:translate(0,0) scale(.8);padding-bottom:0;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    InputMaterialComponent.ctorParameters = function () { return []; };
    InputMaterialComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputMaterialComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputPasswordComponent = /** @class */ (function () {
    function InputPasswordComponent() {
        // Inputs
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
    InputPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputPasswordComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-password',
                    template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"password\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-password[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
                }] }
    ];
    /** @nocollapse */
    InputPasswordComponent.ctorParameters = function () { return []; };
    InputPasswordComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputPasswordComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputSearchComponent = /** @class */ (function () {
    function InputSearchComponent() {
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
    InputSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputSearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-search',
                    template: "<p role=\"search\">\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"search\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n  <button type=\"submit\">\n    <svg width=\"35\" height=\"35\" viewBox=\"0 0 35 35\" aria-labelledby=\"searchTitId\">\n      <title id=\"searchTitId\">Perform search</title>\n      <circle cx=\"17.5\" cy=\"17.5\" r=\"17.5\" />\n      <g>\n        <path\n          d=\"M19.12,19a7,7,0,1,1-.61-10A7.05,7.05,0,0,1,19.12,19ZM9.65,10.59a5.59,5.59,0,1,0,7.89-.49A5.6,5.6,0,0,0,9.65,10.59Z\"\n          style=\"fill: #fff\"\n        />\n        <rect\n          x=\"18.15\"\n          y=\"18.98\"\n          width=\"3.64\"\n          height=\"1.46\"\n          rx=\"0.73\"\n          ry=\"0.73\"\n          transform=\"translate(-8.02 21.63) rotate(-48.54)\"\n          style=\"fill: #fff\"\n        />\n        <rect\n          x=\"23.01\"\n          y=\"18.96\"\n          width=\"2.19\"\n          height=\"8.78\"\n          rx=\"1\"\n          ry=\"1\"\n          transform=\"translate(-9.36 25.96) rotate(-48.54)\"\n          style=\"fill: #fff\"\n        />\n      </g>\n    </svg>\n  </button>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-search button{vertical-align:bottom}c3m-input-search circle{fill:var(--main-color)}c3m-input-search button:focus circle,c3m-input-search button:hover circle{fill:var(--sec-color)}c3m-input-search[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
                }] }
    ];
    /** @nocollapse */
    InputSearchComponent.ctorParameters = function () { return []; };
    InputSearchComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputSearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputTelComponent = /** @class */ (function () {
    function InputTelComponent() {
        // Inputs
        this.id = '';
        this.name = '';
        this.value = '';
        this.autocomplete = 'on';
        this.maxlength = '';
        this.pattern = '';
        this.title = '';
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    InputTelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputTelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-tel',
                    template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"tel\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [pattern]=\"\"\n    [title]=\"\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-tel input{width:85%;max-width:22em}c3m-input-tel[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
                }] }
    ];
    /** @nocollapse */
    InputTelComponent.ctorParameters = function () { return []; };
    InputTelComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputTelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputUrlComponent = /** @class */ (function () {
    function InputUrlComponent() {
        // Inputs
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
    InputUrlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputUrlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-input-url',
                    template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"url\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-input-url input{width:85%;max-width:22em}c3m-input-url[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
                }] }
    ];
    /** @nocollapse */
    InputUrlComponent.ctorParameters = function () { return []; };
    InputUrlComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return InputUrlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListComponent = /** @class */ (function () {
    // Constructor
    function ListComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    ListComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-list',
                    template: "<ul>\n  <li *ngFor=\"let item of listItem\">{{ item.value }}</li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-list ul{list-style-type:disc;margin-left:2rem}c3m-list li+li{margin-top:.5em}"]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    ListComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListDescriptionComponent = /** @class */ (function () {
    // Constructor
    function ListDescriptionComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListDescriptionComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    ListDescriptionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-list-description',
                    template: "<dl *ngFor=\"let item of listItem\">\n  <dt>{{ item.title }}</dt>\n  <dd>{{ item.content }}</dd>\n</dl>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-list-description dl{margin:1rem 0}c3m-list-description dt{font-family:var(--stack-b)}c3m-list-description dd{margin:.25em 0 0 1em}"]
                }] }
    ];
    /** @nocollapse */
    ListDescriptionComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    ListDescriptionComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ListDescriptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListOrderComponent = /** @class */ (function () {
    // Constructor
    function ListOrderComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListOrderComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    ListOrderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-list-order',
                    template: "<ol>\n  <li *ngFor=\"let item of listItem\">{{ item.value }}</li>\n</ol>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-list-order ol{list-style-type:decimal;margin-left:2rem}c3m-list-order li+li{margin-top:.5em}"]
                }] }
    ];
    /** @nocollapse */
    ListOrderComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    ListOrderComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ListOrderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListThumbnailsComponent = /** @class */ (function () {
    // Constructor
    function ListThumbnailsComponent(http) {
        this.http = http;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    ListThumbnailsComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataList.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.listItem = data;
        });
    };
    ListThumbnailsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-list-thumbnails',
                    template: "<ul>\n  <li *ngFor=\"let item of listItem\">\n    <p><img src=\"{{ item.url }}\" alt=\"fake image\" /></p>\n    <div class=\"content\">\n      {{ item.value }}\n    </div>\n  </li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-list-thumbnails li{display:flex;align-items:center;max-width:35em}c3m-list-thumbnails li+li{padding-top:1rem;margin-top:1rem;border-top:1px solid var(--n-medium)}c3m-list-thumbnails li>p{flex-basis:30%;max-width:180px}c3m-list-thumbnails .content{flex-basis:65%;line-height:1.45}"]
                }] }
    ];
    /** @nocollapse */
    ListThumbnailsComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    ListThumbnailsComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ListThumbnailsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        // Inputs
        this.legend = '';
    }
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    RadioComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-radio',
                    template: "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-radio{margin-bottom:1rem}c3m-radio legend{font:1em/1 var(--stack-b);padding-bottom:1em}c3m-radio label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}c3m-radio.go-along ul{display:flex}c3m-radio.go-along c3m-radio-item+c3m-radio-item{margin-left:2em}c3m-radio.switch{display:flex;position:relative}c3m-radio.switch li{display:inline-block}c3m-radio.switch input{position:absolute;width:25px;left:-35px;opacity:0}c3m-radio.switch c3m-radio-item label{display:inline-block;overflow:hidden;font-size:.95rem;text-transform:uppercase;color:var(--n-dark);background:var(--n-medium);padding:.65em .8em .5em;margin-left:-4px;border-bottom:1px solid rgba(0,0,0,.2);transition:.5s;cursor:pointer}c3m-radio.switch c3m-radio-item:first-child label{border-top-left-radius:.3em;border-bottom-left-radius:.3em;margin-left:0}c3m-radio.switch c3m-radio-item:last-child label{border-top-right-radius:.3em;border-bottom-right-radius:.3em}c3m-radio.switch input:checked+label{color:var(--text-inv);background-color:var(--main-color)}@media screen and (min-width:750px){c3m-radio legend{font-size:1.3em}}"]
                }] }
    ];
    /** @nocollapse */
    RadioComponent.ctorParameters = function () { return []; };
    RadioComponent.propDecorators = {
        legend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return RadioComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioItemComponent = /** @class */ (function () {
    function RadioItemComponent() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    RadioItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    RadioItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-radio-item',
                    template: "<li>\n  <input\n    type=\"radio\"\n    id=\"{{ id }}\"\n    [name]=\"this.name\"\n    [value]=\"this.value\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n  />\n  <label for=\"{{ id }}\">{{ this.title }}</label>\n</li>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    RadioItemComponent.ctorParameters = function () { return []; };
    RadioItemComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return RadioItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    // Constructor
    function SelectComponent(http) {
        this.http = http;
        this.id = '';
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataSelect.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allOptions = data;
        });
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-select',
                    template: "<p>\n  <label for=\"{{ id }}\"> {{ this.title }} </label>\n  <select id=\"{{ id }}\" [name]=\"this.name\">\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </select>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-select label{display:block;padding-bottom:.3rem}c3m-select select{display:block;font:100%/1 var(--stack);padding:.5em}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    SelectComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataSelect.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allOptions = data;
        });
        this.myListId = this.list;
        this.myInput.nativeElement.setAttribute('list', this.myListId);
        this.myDataList.nativeElement.setAttribute('id', this.myListId);
    };
    SelectDatalistComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-select-datalist',
                    template: "<p>\n  <label for=\"{{ id }}\"> {{ this.title }}</label>\n  <input #inputList type=\"text\" id=\"{{ id }}\" [name]=\"this.name\" />\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-select-datalist label{display:block;padding-bottom:.3rem}c3m-select-datalist input{display:block;font:100%/1 var(--stack);padding:.5em}"]
                }] }
    ];
    /** @nocollapse */
    SelectDatalistComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    SelectDatalistComponent.propDecorators = {
        myInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['inputList',] }],
        myDataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['dataList',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return SelectDatalistComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataSelect.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-select-datalists',
                    template: "<p>\n  <label for=\"{{ id1 }}\">{{ this.title1 }}</label>\n  <input #inputList1 type=\"text\" id=\"{{ id2 }}\" [name]=\"this.name1\" />\n</p>\n\n<p>\n  <label for=\"{{ id1 }}\">{{ this.title2 }}</label>\n  <input #inputList2 type=\"text\" id=\"{{ id2 }}\" [name]=\"this.name2\" />\n\n  <datalist #dataList>\n    <option *ngFor=\"let option of allOptions\" value=\"{{ option.value }}\"> {{ option.value }} </option>\n  </datalist>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-select-datalists label{display:block;padding-bottom:.3rem}c3m-select-datalists input{display:block;font:100%/1 var(--stack);padding:.5em}"]
                }] }
    ];
    /** @nocollapse */
    SelectDatalistsComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    SelectDatalistsComponent.propDecorators = {
        myInput1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['inputList1',] }],
        myInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['inputList2',] }],
        myDataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['dataList',] }],
        title1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        title2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return SelectDatalistsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SkipComponent = /** @class */ (function () {
    function SkipComponent() {
        this.isHidden = false;
        this.styleClass = '';
    }
    /**
     * @return {?}
     */
    SkipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SkipComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-skip',
                    template: "<a\n  c3mScrollTo\n  routerLink=\"./\"\n  fragment=\"{{ this.target }}\"\n  class=\"{{ this.styleClass }}\"\n  [ngClass]=\"{ hiddenLink: isHidden }\"\n>\n  <ng-content></ng-content>\n</a>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-skip a.hiddenLink{position:absolute;overflow:hidden;width:1px;height:1px;left:-9999px}c3m-skip a.hiddenLink:focus{position:static;overflow:visible;width:auto;height:auto}"]
                }] }
    ];
    /** @nocollapse */
    SkipComponent.ctorParameters = function () { return []; };
    SkipComponent.propDecorators = {
        target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        isHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return SkipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function SliderComponent(myComponent) {
        this.myComponent = myComponent;
        this.offset = 0;
    }
    /* AFTER VIEW INIT */
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngAfterViewInit = /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    function () {
        this.isBubble = this.myComponent.nativeElement.classList.contains('bubble');
        // If contains Bubble class
        if (this.isBubble) {
            this.setPositionBubble();
        }
    };
    /* Resize breakpoint tab */
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    SliderComponent.prototype.onResize = /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isBubble) {
            this.setPositionBubble();
        }
    };
    /* Display value */
    /* Display value */
    /**
     * @return {?}
     */
    SliderComponent.prototype.showValue = /* Display value */
    /**
     * @return {?}
     */
    function () {
        if (this.isBubble) {
            this.setPositionBubble();
        }
        this.output.nativeElement.innerHTML = this.input.nativeElement.value;
    };
    /* Move the output with the slider */
    /* Move the output with the slider */
    /**
     * @return {?}
     */
    SliderComponent.prototype.setPositionBubble = /* Move the output with the slider */
    /**
     * @return {?}
     */
    function () {
        this.width = this.input.nativeElement.getBoundingClientRect().width;
        this.point = (this.input.nativeElement.value - this.min) / (this.max - this.min);
        if (this.point < 0.5) {
            this.offset = this.point * 2 * -12 + 12;
        }
        else if (this.point > 0.5) {
            this.offset = (this.point - 0.5) * 2 * -12;
        }
        this.newPoint = this.width * this.point;
        this.output.nativeElement.style.left = this.newPoint + this.offset + 'px';
    };
    SliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-slider',
                    template: "<!-- Slider Content -->\n<p class=\"slider-content\">\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <!-- Input type RANGE -->\n  <input\n    type=\"range\"\n    #slider\n    id=\"{{ id }}\"\n    [attr.min]=\"min\"\n    [attr.max]=\"max\"\n    [attr.step]=\"step\"\n    [attr.value]=\"value\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (input)=\"showValue()\"\n  />\n  <!-- Output for display change value -->\n  <output for=\"{{ id }}\" #output>{{ this.value }}</output>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-slider .slider-content{position:relative}c3m-slider.bubble .slider-content{margin-bottom:2em}c3m-slider input[type=range]{display:inline-block;width:50%;background-color:rgba(0,0,0,0);padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}c3m-slider input[type=range]:focus{outline:0}c3m-slider input[type=range]::-webkit-slider-runnable-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-webkit-slider-thumb{height:26px;width:26px;background:var(--sec-light);margin-top:-9px;border-radius:26px;-webkit-appearance:none;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}c3m-slider input[type=range]:focus::-webkit-slider-runnable-track{background:#45abbc}c3m-slider input[type=range]::-moz-range-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-moz-range-thumb{height:26px;width:26px;background:var(--sec-light);border:none;border-radius:26px;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}input[type=range]::-ms-track{width:100%;height:8px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}c3m-slider input[type=range]::-ms-fill-lower{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-fill-upper{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-thumb{width:26px;border-radius:12px;background:var(--sec-light);cursor:pointer;height:8.4px}c3m-slider input[type=range]:focus::-ms-fill-lower{background:var(--main-light)}c3m-slider input[type=range]:focus::-ms-fill-upper{background:var(--main-light)}c3m-slider output{position:relative;top:.3em;font:1.2rem var(--stack-b);text-transform:uppercase;color:var(--main-color);margin-left:1rem}c3m-slider.bubble output{position:absolute;display:inline-block;top:auto;bottom:-2.4rem;left:0;width:40px;height:26.2px;text-align:center;color:var(--text-inv);background-color:var(--n-dark);padding-top:.3rem;margin-left:0;border-radius:10px;-webkit-transform:translate(-50%);transform:translate(-50%)}c3m-slider.bubble output:after{content:'';position:absolute;width:0;height:0;border-bottom:10px solid var(--n-dark);border-left:5px solid transparent;border-right:5px solid transparent;bottom:100%;left:50%;margin-left:-5px;margin-top:-1px}"]
                }] }
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    SliderComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slider',] }],
        output: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['output',] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    /**
     * @return {?}
     */
    ProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-progress',
                    template: "<p>\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <progress id=\"{{ id }}\" name=\"name\" [attr.max]=\"max\" [attr.value]=\"value\" disabled=\"disabled\"> </progress>\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProgressComponent.ctorParameters = function () { return []; };
    ProgressComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerProgressComponent = /** @class */ (function () {
    function SpinnerProgressComponent() {
        this.size = 50;
    }
    /**
     * @return {?}
     */
    SpinnerProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SpinnerProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-spinner-progress',
                    template: "<svg [attr.height]=\"size\" [attr.width]=\"size\" viewBox=\"0 0 50 50\">\n  <path\n    fill=\"#45ABBC\"\n    d=\"M25,5A20,20,0,0,1,44.87,22.72,2.52,2.52,0,0,0,47.36,25h0a2.52,2.52,0,0,0,2.48-2.82,25,25,0,0,0-49.68,0A2.52,2.52,0,0,0,2.64,25h0a2.52,2.52,0,0,0,2.49-2.28A20,20,0,0,1,25,5Z\"\n  >\n    <animateTransform\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"0 25 25\"\n      to=\"360 25 25\"\n      dur=\"1s\"\n      repeatCount=\"indefinite\"\n    />\n  </path>\n\n  <path\n    fill=\"#6CBE45\"\n    d=\"M25,36.5A12.07,12.07,0,0,1,13,25.87a1.52,1.52,0,0,0-1.5-1.37h0A1.51,1.51,0,0,0,10,26.19a15.1,15.1,0,0,0,30,0,1.51,1.51,0,0,0-1.5-1.69h0A1.52,1.52,0,0,0,37,25.87,12.07,12.07,0,0,1,25,36.5Z\"\n  >\n    <animateTransform\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"360 25 25\"\n      to=\"0 25 25\"\n      dur=\"1.5s\"\n      repeatCount=\"indefinite\"\n    />\n  </path>\n</svg>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SpinnerProgressComponent.ctorParameters = function () { return []; };
    SpinnerProgressComponent.propDecorators = {
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return SpinnerProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepItemComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function StepItemComponent(step, cdr) {
        this.cdr = cdr;
        this.isActive = false;
        this.isPassed = false;
        this.stepLink = '';
        step.addTab(this); // Add item on Items Tab
    }
    Object.defineProperty(StepItemComponent.prototype, "Past", {
        get: /**
         * @return {?}
         */
        function () {
            return this._past;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._past = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepItemComponent.prototype, "Future", {
        get: /**
         * @return {?}
         */
        function () {
            return this._future;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._future = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StepItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.reference = this.itemRef;
    };
    StepItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-step-item',
                    template: "<!-- Step Item -->\n<li #items [ngClass]=\"{ active: isActive, past: Past, future: Future }\" [c3mStepCurrent]=\"isActive\">\n  <ng-container *ngIf=\"isPassed\">\n    <a href=\"{{ stepLink }}\">{{ title }}</a>\n  </ng-container>\n  <ng-container *ngIf=\"!isPassed\">\n    {{ title }}\n  </ng-container>\n</li>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StepItemComponent.ctorParameters = function () { return [
        { type: StepComponent },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    StepItemComponent.propDecorators = {
        itemRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['items',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        isPassed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        stepLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        indexStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        reference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        Past: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['isPast',] }],
        Future: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['isFuture',] }]
    };
    return StepItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepComponent = /** @class */ (function () {
    /* CONSTRUCTOR */
    function StepComponent(cdr) {
        this.cdr = cdr;
        /* VARIABLES */
        this.itemStepTab = [];
        this.itemsStepTabReference = [];
        this.sizeInit = 0;
        this.StepItemComponentBis = StepItemComponent;
    }
    /* AFTER VIEW INIT */
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    StepComponent.prototype.ngAfterViewInit = /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.itemStepTab.forEach(function (StepItemComponentBis, index) {
            StepItemComponentBis.indexStep = index + 1;
            _this.itemsStepTabReference.push(StepItemComponentBis.reference);
            if (StepItemComponentBis.isActive) {
                _this.theActiveStepItem = StepItemComponentBis.indexStep;
            }
        });
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (var i = 0; i < this.itemsStepTabReference.length - 1; i++) {
            this.sizeInit = this.itemsStepTabReference[i].nativeElement.clientWidth + this.sizeInit;
        }
        if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop !==
            this.itemsStepTabReference[0].nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* AFTER VIEW CHECK */
    /* AFTER VIEW CHECK */
    /**
     * @return {?}
     */
    StepComponent.prototype.ngAfterViewChecked = /* AFTER VIEW CHECK */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* For Each items */
        this.itemStepTab.forEach(function (StepItemComponentBis, index) {
            /* if after the active item, add class future */
            if (index + 1 > _this.theActiveStepItem) {
                StepItemComponentBis.Future = true;
            }
            else {
                StepItemComponentBis.Future = false;
            }
            /* if before the active item, add class past */
            if (index + 1 < _this.theActiveStepItem) {
                StepItemComponentBis.Past = true;
            }
            else {
                StepItemComponentBis.Past = false;
            }
        });
    };
    /* Resize breakpoint tab*/
    /* Resize breakpoint tab*/
    /**
     * @param {?} event
     * @return {?}
     */
    StepComponent.prototype.onResize = /* Resize breakpoint tab*/
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop >
            this.itemsStepTabReference[0].nativeElement.offsetTop) {
            if (this.itemsStepTabReference[this.itemsStepTabReference.length - 1].nativeElement.offsetTop >
                this.itemsStepTabReference[0].nativeElement.offsetTop &&
                this.isOver !== true) {
                this.widthBreak = event.target.innerWidth;
                this.isOver = true;
            }
            if (this.widthBreak) {
                if (event.target.innerWidth > this.widthBreak && this.isOver === true) {
                    this.isOver = false;
                }
            }
            else {
                this.widthBreak = this.sizeInit;
                if (event.target.innerWidth >= this.widthBreak) {
                    this.isOver = false;
                }
            }
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* ADD AN ITEM INTO ITEMS TAB */
    /* ADD AN ITEM INTO ITEMS TAB */
    /**
     * @param {?} stepItem
     * @return {?}
     */
    StepComponent.prototype.addTab = /* ADD AN ITEM INTO ITEMS TAB */
    /**
     * @param {?} stepItem
     * @return {?}
     */
    function (stepItem) {
        stepItem.isActive = false; // And set isActive var to False
        this.itemStepTab.push(stepItem);
    };
    StepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-step',
                    template: "<!-- Items List -->\n<ol #items [ngClass]=\"{ over: isOver }\">\n  <ng-content></ng-content>\n</ol>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-step ol{counter-reset:step}c3m-step ol li{display:inline-block;position:relative;list-style-type:none;font-size:.9em;text-align:center;color:var(--n-dark);background-color:rgba(255,255,255,0);padding:.8em 1em;margin-left:-5px}c3m-step ol li::before{display:block;position:relative;width:1.5em;height:1.5em;line-height:1.5em;font-size:1.2em;content:counter(step);counter-increment:step;text-align:center;color:var(--text-inv);background-color:var(--n-dark);border-radius:1.5em;margin:0 auto .6rem;z-index:2}c3m-step ol li::after{display:block;position:absolute;width:100%;height:5px;top:1.5em;left:0;content:'';background-color:var(--n-dark);z-index:1}c3m-step-item:first-child li::after{width:50%;left:50%}c3m-step-item:last-child li::after{width:50%;left:auto;right:50%}c3m-step ol li.past{color:var(--n-dark);background-color:rgba(255,255,255,0)}c3m-step ol li.past::before{content:'';color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat}c3m-step ol li.past::after{background-color:var(--main-color)}c3m-step ol li.active::before{color:var(--text-inv);background-color:var(--main-color)}c3m-step ol li.active::after{background-color:var(--n-dark);background-image:linear-gradient(90deg,var(--main-color) 50%,var(--n-dark) 50%)}c3m-step ol li.future{color:var(--n-dark);background-color:var(--n-light)}c3m-step ol li.future::before{color:var(--n-light);background-color:var(--n-dark)}c3m-step ol.over li{display:block;width:100%;text-align:left;padding:.5rem}c3m-step ol.over li:before{display:inline-block;margin:0}"]
                }] }
    ];
    /** @nocollapse */
    StepComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    StepComponent.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    return StepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnTableComponent = /** @class */ (function () {
    function ColumnTableComponent() {
    }
    /**
     * @return {?}
     */
    ColumnTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /*const heads = document.querySelectorAll('thead th');
        const titles = [];
        for ( let x = 0; x < heads.length ; x++) {
          titles.push(heads[x].innerHTML);
        }
    
        const bodyTr = document.querySelectorAll('tbody tr');
    
        for ( let i = 0; i < bodyTr.length; i++) {
            const bodyTrTd = bodyTr[i].querySelectorAll('td');
            for ( let j = 0; j < bodyTrTd.length; j++) {
    
                const strong = document.createElement('strong');
                const title = document.createTextNode(titles[j]);
                strong.appendChild(title);
                bodyTrTd[j].insertBefore(strong, bodyTrTd[j].childNodes[0]);
            }
        }*/
    };
    ColumnTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-column-table',
                    template: "<table>\n  <caption>\n    Responsive Table\n  </caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Movie Title</th>\n      <th scope=\"col\">Duration</th>\n      <th scope=\"col\">Year</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Country</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">Inception</th>\n      <td data-header=\"Duration\">148</td>\n      <td data-header=\"Year\">2010</td>\n      <td data-header=\"Category\">SF</td>\n      <td data-header=\"Country\">UK</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">The dark knight</th>\n      <td data-header=\"Duration\">164</td>\n      <td data-header=\"Year\">2012</td>\n      <td data-header=\"Category\">SH</td>\n      <td data-header=\"Country\">USA/UK</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">Pulp Fiction</th>\n      <td data-header=\"Duration\">154</td>\n      <td data-header=\"Year\">1994</td>\n      <td data-header=\"Category\">Gangster</td>\n      <td data-header=\"Country\">USA</td>\n    </tr>\n  </tbody>\n</table>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-column-table table{width:100%;text-align:left}c3m-column-table caption{font:1.5em var(--stack);text-align:left;margin-bottom:.6rem}c3m-column-table td,c3m-column-table th{color:var(--body-text);background-color:var(--body-bg);padding:1rem .5rem}c3m-column-table thead th{font-size:1.3em;border-bottom:2px solid var(--n-dark)}c3m-column-table td{border-bottom:1px solid var(--n-medium)}@media screen and (max-width:1000px){c3m-column-table table{display:block;width:100%;padding:.5rem;border-radius:.3em;border:none}c3m-column-table caption{display:block;font-size:1.5em}c3m-column-table tbody{display:block}c3m-column-table thead{display:none}c3m-column-table tbody tr{display:block;margin-bottom:2rem}c3m-column-table tbody th,c3m-column-table th{background-color:var(--n-light);padding:0 0 .5rem}c3m-column-table td{display:block;background-color:initial;padding:.5rem 0;border:none;border-bottom:1px solid var(--n-medium)}c3m-column-table td::before{display:inline-block;width:45%;content:attr(data-header);padding-right:2rem}c3m-column-table tbody strong{display:inline-block;width:6em;color:#f5f5f5}}"]
                }] }
    ];
    /** @nocollapse */
    ColumnTableComponent.ctorParameters = function () { return []; };
    return ColumnTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleTableComponent = /** @class */ (function () {
    function ToggleTableComponent() {
    }
    /**
     * @return {?}
     */
    ToggleTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ToggleTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-toggle-table',
                    template: "<p>\n  toggle-table works!\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ToggleTableComponent.ctorParameters = function () { return []; };
    return ToggleTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageSwipeTableComponent = /** @class */ (function () {
    function PageSwipeTableComponent() {
    }
    /**
     * @return {?}
     */
    PageSwipeTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    PageSwipeTableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-page-swipe-table',
                    template: "<p>\n  page-swipe-table works!\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PageSwipeTableComponent.ctorParameters = function () { return []; };
    return PageSwipeTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabComponent = /** @class */ (function () {
    /* Constructor Tab Component */
    function TabComponent(tabs) {
        tabs.addTab(this);
        this.idTab = this.randomID();
    }
    /* ID for Accessbility */
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /* ID for Accessbility */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    };
    /* ID for Accessbility */
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterViewInit = /* ID for Accessbility */
    /**
     * @return {?}
     */
    function () {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.randomID = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    };
    TabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-tab',
                    template: "<div class=\"content\" [attr.aria-hidden]=\"!isActive\" [attr.aria-labeledby]=\"tabID\" id=\"{{ panelID }}\">\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabsComponent }
    ]; };
    TabComponent.propDecorators = {
        tabTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        idTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return TabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsComponent = /** @class */ (function () {
    /* constructor tab */
    function TabsComponent(cdr) {
        this.cdr = cdr;
        /* Variables */
        this.tabs = [];
        this.sizeInit = 0;
        this.arrayTmp = [];
        this.startIndexActiv = 0;
        this.TabComponentBis = TabComponent;
    }
    /* Resize breakpoint tab */
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    TabsComponent.prototype.onResize = /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.tabsElement.length === 1 ||
            this.tabsElement.last.nativeElement.offsetTop === this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    /* add tab to tab table and select tab active */
    /* add tab to tab table and select tab active */
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsComponent.prototype.addTab = /* add tab to tab table and select tab active */
    /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (this.tabs.length === this.startIndexActiv) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    };
    /* close tabs et open the active tab */
    /* close tabs et open the active tab */
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsComponent.prototype.selectTab = /* close tabs et open the active tab */
    /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.forEach(function (TabComponentBis) {
            TabComponentBis.isActive = false;
        });
        tab.isActive = true;
    };
    /* breakpoint tab */
    /* breakpoint tab */
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngAfterViewInit = /* breakpoint tab */
    /**
     * @return {?}
     */
    function () {
        this.arrayTmp = this.tabsElement.toArray();
        for (var i = 0; i < this.arrayTmp.length - 1; i++) {
            this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;
        }
        if (this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = true;
        }
        else if (this.tabsElement.length === 1) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    };
    TabsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-tabs',
                    template: "<div class=\"tabsContainer\">\n  <ul>\n    <li #tabs *ngFor=\"let tab of tabs\" [ngClass]=\"{ active: tab.isActive, over: isOver }\">\n      <button\n        id=\"{{ tab.tabID }}\"\n        (click)=\"selectTab(tab)\"\n        [attr.aria-expanded]=\"tab.isActive\"\n        [attr.aria-controls]=\"tab.panelID\"\n        [attr.aria-selected]=\"tab.isActive\"\n      >\n        {{ tab.tabTitle }}\n      </button>\n    </li>\n  </ul>\n\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [".tabsContainer{margin:2rem 0}.tabsContainer>ul li button{width:100%;font-family:var(--stack-b);text-align:left;background-color:var(--n-light);padding:.5em 1em}.tabsContainer>ul li button:focus,.tabsContainer>ul li button:hover,.tabsContainer>ul li.active button{color:var(--text-inv);background-color:var(--main-color)}c3m-tab .content[aria-hidden=false]{background-color:var(--n-light);padding:1rem}c3m-tab .content[aria-hidden=true]{display:none}.tabsContainer>ul li.over{display:inline-block;margin-right:.5rem}.tabsContainer>ul li.over button{background-color:var(--body-bg);border-radius:0}.tabsContainer>ul li.over button:focus,.tabsContainer>ul li.over button:hover,.tabsContainer>ul li.over.active button{color:var(--body-text);background-color:var(--n-light)}@media screen and (min-width:850px){.tabsContainer>ul li{font-size:1.2rem}c3m-tab .content[aria-hidden=false]{padding:2rem}}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    TabsComponent.propDecorators = {
        tabsElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"], args: ['tabs',] }],
        tabComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [TabComponent,] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    return TabsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    // Function getPager (totalItems,  CurrentPage  , PageSize)
    // Function getPager (totalItems,  CurrentPage  , PageSize)
    /**
     * @param {?} totalItems
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @return {?}
     */
    PagerService.prototype.getPager = 
    // Function getPager (totalItems,  CurrentPage  , PageSize)
    /**
     * @param {?} totalItems
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @return {?}
     */
    function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // Calculate total pages
        /** @type {?} */
        var totalPages = Math.ceil(totalItems / pageSize);
        // StartPage and EndPage declaration
        /** @type {?} */
        var startPage;
        /** @type {?} */
        var endPage;
        // Check TotalPages <= 10
        if (totalPages <= 10) {
            startPage = 1; // If Less Than 10 total pages
            endPage = totalPages; // Show All Pages
        }
        else {
            // Check Total Pages > 10
            if (currentPage <= 6) {
                startPage = 1; // StartPage = 1
                endPage = 10; // EndPage = 10
            }
            else if (currentPage + 4 >= totalPages) {
                // Check CurrentPage + 4 >= TotalPages  (Exit TotalPages.length)
                startPage = totalPages - 9; // StartPage = TotalPage - 9
                endPage = totalPages; // EndPage = total pages
            }
            else {
                // Check CurrentPage > 6 && CurrentPage + 4 < total pages
                startPage = currentPage - 5; // StartPage = CurrentPage - 5
                endPage = currentPage + 4; // EndPage = CurrentPage +4
            }
        }
        // StartIndex = currentPage-1 * pageSize
        /** @type {?} */
        var startIndex = (currentPage - 1) * pageSize;
        // EndIndex = min between [startIndex + pageSize-1] AND [totalItems-1]
        /** @type {?} */
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        /** @type {?} */
        var pages = [];
        // Create an array of pages to ng-repeat in the pager control
        for (var i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }
        // Return Pager Properties
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"] }
    ];
    return PagerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    // Constructor
    function PaginationComponent(http, pagerService) {
        this.http = http;
        this.pagerService = pagerService;
        // Inputs
        this.imgFirst = '';
        this.imgBack = '';
        this.imgNext = '';
        this.imgLast = '';
        // Pager Object
        this.pager = {};
        this.pageSelected = 2;
    }
    // On Init
    // On Init
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = 
    // On Init
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get Data of a JSON (or other...)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.get('assets/json/dataPagination.json'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); })) // Specify JSON type
            .subscribe(function (data) {
            // Set items to response Json
            _this.allItems = data;
            // Initialize to page 1
            _this.setPage(1);
        });
    };
    // SetPage
    // SetPage
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.setPage = 
    // SetPage
    /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // check page < 1 or page > totalPages
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // Get pager object from service ( numberOfItems, Page)
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // Get current page of items (copy with slice(start,end))
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // Change aria-page
        /** @type {?} */
        var paginationListe = this.pagination.nativeElement;
        /** @type {?} */
        var eltPagined = paginationListe.children[this.pageSelected];
        /** @type {?} */
        var btnPagined = eltPagined.childNodes[0];
        /** @type {?} */
        var nextEltPagined = page + 2;
        /** @type {?} */
        var eltOn = page + 1;
        btnPagined.removeAttribute('aria-current');
        /** @type {?} */
        var nextButtonPagined = this.pagination.nativeElement.childNodes[nextEltPagined];
        nextButtonPagined.childNodes[0].setAttribute('aria-current', 'page');
        this.pageSelected = eltOn;
    };
    PaginationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-pagination',
                    template: "<!-- Pagination container -->\n<div class=\"paginationContainer\">\n  <!-- All Items -->\n  <ul class=\"paginationItems\">\n    <li *ngFor=\"let item of pagedItems\">{{ item.name }}</li>\n  </ul>\n\n  <!-- Pages -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\" #pagination>\n    <!-- first -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\" class=\"btnFirst\">\n      <button (click)=\"setPage(1)\"><img src=\"{{ imgFirst }}\" alt=\"First Page\" /></button>\n    </li>\n\n    <!-- previous -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\" class=\"btnPrevious\">\n      <button (click)=\"setPage(pager.currentPage - 1)\">\n        <img src=\"{{ imgBack }}\" alt=\"Previous Page\" />\n      </button>\n    </li>\n\n    <!-- pages numbers -->\n    <li\n      *ngFor=\"let page of pager.pages\"\n      [ngClass]=\"{ active: pager.currentPage === page }\"\n      class=\"btnPages\"\n      [c3mPaginationCurrent]=\"pager.currentPage === page\"\n    >\n      <button (click)=\"setPage(page)\">{{ page }}</button>\n    </li>\n\n    <!-- next -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\" class=\"btnNext\">\n      <button (click)=\"setPage(pager.currentPage + 1)\"><img src=\"{{ imgNext }}\" alt=\"Next Page\" /></button>\n    </li>\n\n    <!-- last -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\" class=\"btnLast\">\n      <button (click)=\"setPage(pager.totalPages)\"><img src=\"{{ imgLast }}\" alt=\"Last Page\" /></button>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-pagination .paginationContainer{padding:.5rem}c3m-pagination .paginationItems{display:flex;text-align:center;flex-wrap:wrap}c3m-pagination .paginationItems li{color:#fff;height:5rem;font:1rem quicksandbold,Helvetica,Arial,sans-serif;width:5rem;background-color:#45abbc;margin:.5rem;padding:.5rem}c3m-pagination .pagination{margin-top:2rem;text-align:left}c3m-pagination .pagination li{background-color:#ed9c21;width:1.7rem;display:inline-block;height:1.7rem;margin-right:.3rem;margin-bottom:.6rem}c3m-pagination .pagination li:not(.btnPages){background-color:#6cbe45}c3m-pagination .pagination li.active{background-color:#45abbc}c3m-pagination .pagination button{background-color:transparent;height:100%;width:100%;padding:0;color:#fff;cursor:pointer}c3m-pagination .pagination button img{width:80%;height:80%;margin:0 auto;display:block}c3m-pagination .pagination li:hover{opacity:.8}c3m-pagination .pagination li.disabled{background-color:#b7bdb4}c3m-pagination .pagination li.disabled button{pointer-events:none}c3m-pagination .pagination li.disabled:hover{opacity:1}@media screen and (min-width:1000px){c3m-pagination .pagination li{width:2.4rem;height:2.4rem}}"]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] },
        { type: PagerService }
    ]; };
    PaginationComponent.propDecorators = {
        imgFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        imgBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        imgNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        imgLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        pagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['pagination',] }]
    };
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.topPosition = 0;
        this.leftPosition = 0;
        this.modalWidth = 0;
        this.closeBtnTitle = 'Close dialog';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.dialogTitle = 'modalTitle' + this.randomID();
        this.dialogDescription = 'modalDesc' + this.randomID();
        this.btnCloseLabel = 'Close dialog';
        this.getScreenSize();
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ModalComponent.prototype.getScreenSize = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    };
    /* Open Modal */
    /* Open Modal */
    /**
     * @return {?}
     */
    ModalComponent.prototype.ToggleOpen = /* Open Modal */
    /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this.onShow.emit(this.dialogElement);
            this.modalPosition();
            // Focus on close button
            /** @type {?} */
            var titleModalFocus_1 = this.focusable.nativeElement;
            setTimeout(function () {
                titleModalFocus_1.focus();
            }, 500);
        }
        else if (this.isOpen) {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.modalPosition = /**
     * @return {?}
     */
    function () {
        if (this.screenWidth > 768) {
            if (this.topPosition > 0) {
                this.container.nativeElement.style.top = this.topPosition + 'px';
            }
            else {
                this.container.nativeElement.style.top = '40%';
            }
            if (this.leftPosition > 0) {
                /** @type {?} */
                var widthModal = 100 - this.leftPosition * 2;
                this.container.nativeElement.style.width = widthModal + '%';
                this.container.nativeElement.style.left = this.leftPosition + '%';
            }
            else if (this.modalWidth > 0) {
                /** @type {?} */
                var leftPositionModal = (this.screenWidth - this.modalWidth) / 2;
                this.container.nativeElement.style.left = leftPositionModal + 'px';
                this.container.nativeElement.style.width = this.modalWidth + 'px';
            }
            else {
                this.container.nativeElement.style.width = '50%';
                this.container.nativeElement.style.left = '25%';
            }
        }
        else {
            this.container.nativeElement.style.left = '5%';
            this.container.nativeElement.style.width = '90%';
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.onKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === 'Escape') {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.randomID = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    };
    ModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-modal',
                    template: "<div class=\"dialog\" #dialogElement [attr.aria-hidden]=\"!isOpen\">\n  <div class=\"dialog-overlay\" (click)=\"ToggleOpen()\" tabindex=\"-1\"></div>\n  <div\n    class=\"dialog-content\"\n    #container\n    [ngClass]=\"styleClass\"\n    [attr.aria-labeledby]=\"dialogTitle\"\n    [attr.aria-describedby]=\"dialogDescription\"\n    role=\"dialog\"\n    (keyup)=\"onKey($event)\"\n    c3mModalOut\n  >\n    <h1 id=\"{{ dialogTitle }}\" tabindex=\"0\" #focusable>{{ modaTitle }}</h1>\n    <div id=\"{{ dialogDescription }}\">\n      <ng-content></ng-content>\n    </div>\n\n    <button (click)=\"ToggleOpen()\" class=\"dialog-close\" [attr.aria-label]=\"closeBtnTitle\">\n      &times;\n    </button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [".dialog[aria-hidden=true]{display:none}.dialog-overlay{z-index:10;background-color:rgba(16,15,15,.84);position:fixed;top:0;left:0;bottom:0;right:0}.dialog-content{background-color:#fff;z-index:15;position:fixed;padding:2em;border-radius:2px}.dialog[aria-hidden=false] .dialog-content{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:test;animation-name:test}@-webkit-keyframes test{from{opacity:0}to{opacity:1}}@keyframes test{from{opacity:0}to{opacity:1}}.dialog h1{margin-bottom:1.5rem;font-size:2rem}.dialog p{font-size:1.2rem;margin-bottom:1.5rem}.dialog-close{position:absolute;top:.5em;right:.5em;border:0;padding:0;background-color:transparent;font-weight:700;font-size:1.25em;width:1.2em;height:1.2em;text-align:center;cursor:pointer;transition:.15s}.dialog input{border-radius:2px;border:1px solid gray;height:1.4rem;width:90%;min-width:10em}.dialog label{font-family:quicksanditalic;margin-right:1rem}@media screen and (min-width:700px){.dialog-close{top:1em;right:1em}}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return []; };
    ModalComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['window:resize', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        topPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        leftPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        modalWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        modaTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        closeBtnTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['dialogElement',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['container',] }],
        focusable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['focusable',] }],
        getScreenSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    return ModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalAlertComponent = /** @class */ (function () {
    function ModalAlertComponent() {
    }
    /**
     * @return {?}
     */
    ModalAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ModalAlertComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-modal-alert',
                    template: "<p>\n  modal-alert works!\n</p>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalAlertComponent.ctorParameters = function () { return []; };
    return ModalAlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonLinkComponent = /** @class */ (function () {
    function ButtonLinkComponent() {
    }
    /**
     * @return {?}
     */
    ButtonLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ButtonLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'c3m-button-link',
                    template: "<a [routerLink]=\"this.url\">\n  {{ this.linkText }}\n</a>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    styles: ["c3m-button-link a,c3m-button-link a:visited{background-color:var(--sec-light);padding:.5em;border-radius:.25em;color:#fff;text-decoration:none;transition:background .2s}c3m-button-link a:focus,c3m-button-link a:hover{color:#fff;background:var(--main-light)}"]
                }] }
    ];
    /** @nocollapse */
    ButtonLinkComponent.ctorParameters = function () { return []; };
    ButtonLinkComponent.propDecorators = {
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        linkText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return ButtonLinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** @type {?} */
        var map$$1 = {};
        /** @type {?} */
        var oldElementFocused;
        /** @type {?} */
        var containerModal = this.el.nativeElement;
        this.el.nativeElement.onkeydown = this.el.nativeElement.onkeyup = function (e) {
            /** @type {?} */
            var elementFocused = (/** @type {?} */ (e.target));
            /** @type {?} */
            var typeElementFocused = elementFocused;
            /** @type {?} */
            var nbChild = containerModal.childElementCount;
            /** @type {?} */
            var lastChildElt = containerModal.childNodes[nbChild - 1];
            /** @type {?} */
            var firstChildElt = containerModal.childNodes[0];
            e = e || event; // to deal with IE
            map$$1[e.keyCode] = e.type === 'keydown';
            if (map$$1[16] && map$$1[9]) {
                // Test if we try to focus ahead of modal title
                if (oldElementFocused.nodeName === 'H1') {
                    lastChildElt.focus();
                    e.preventDefault();
                }
            }
            else if (map$$1[9] && !map$$1[16]) {
                // Test if we try to focus after close button
                if (oldElementFocused.nodeName === 'BUTTON' && oldElementFocused.className === 'dialog-close') {
                    firstChildElt.focus();
                    e.preventDefault();
                }
            }
            oldElementFocused = typeElementFocused;
        };
    }
    ModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[c3mModalOut]'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
    ]; };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationDirective = /** @class */ (function () {
    function PaginationDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    PaginationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.liElement = this.el.nativeElement;
        if (this.pager === true) {
            this.liElement.childNodes[0].setAttribute('aria-current', 'page');
        }
    };
    PaginationDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[c3mPaginationCurrent]'
                },] }
    ];
    /** @nocollapse */
    PaginationDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
    ]; };
    PaginationDirective.propDecorators = {
        pager: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['c3mPaginationCurrent',] }]
    };
    return PaginationDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepsDirective = /** @class */ (function () {
    function StepsDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    StepsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var liElement = this.el.nativeElement;
        if (this.activeStep) {
            liElement.setAttribute('aria-current', 'step');
        }
    };
    StepsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[c3mStepCurrent]'
                },] }
    ];
    /** @nocollapse */
    StepsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
    ]; };
    StepsDirective.propDecorators = {
        activeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['c3mStepCurrent',] }]
    };
    return StepsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrolltoDirective = /** @class */ (function () {
    function ScrolltoDirective() {
    }
    /**
     * @param {?} elt
     * @return {?}
     */
    ScrolltoDirective.prototype.onClick = /**
     * @param {?} elt
     * @return {?}
     */
    function (elt) {
        /** @type {?} */
        var target = elt.target;
        /** @type {?} */
        var classToFocus = target.classList[0];
        /** @type {?} */
        var eltToFocus = document.getElementById(classToFocus);
        if (eltToFocus) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(eltToFocus.tagName)) {
                eltToFocus.tabIndex = -1;
            }
            eltToFocus.focus();
        }
    };
    ScrolltoDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[c3mScrollTo]'
                },] }
    ];
    /** @nocollapse */
    ScrolltoDirective.ctorParameters = function () { return []; };
    ScrolltoDirective.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"], args: ['click', ['$event'],] }]
    };
    return ScrolltoDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CreamnglibModule = /** @class */ (function () {
    function CreamnglibModule() {
    }
    CreamnglibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [
                        ButtonComponent,
                        ButtonFileComponent,
                        ButtonIconComponent,
                        ButtonIconOnlyComponent,
                        ButtonSubmitComponent,
                        ToastComponent,
                        InputComponent,
                        CarouselComponent,
                        CarouselItemComponent,
                        InputFloatingComponent,
                        InputMaterialComponent,
                        InputSearchComponent,
                        InputTelComponent,
                        InputUrlComponent,
                        InputPasswordComponent,
                        InputMailComponent,
                        InputErrorMsgComponent,
                        AccordionComponent,
                        AccordionItemComponent,
                        CalendarComponent,
                        CheckboxComponent,
                        CheckboxButtonComponent,
                        CheckboxLinkComponent,
                        CheckboxGroupComponent,
                        CheckboxGroupItemComponent,
                        DropdownComponent,
                        DropdownItemComponent,
                        FieldsetComponent,
                        ListComponent,
                        ListOrderComponent,
                        ListThumbnailsComponent,
                        ListDescriptionComponent,
                        ModalComponent,
                        ModalAlertComponent,
                        RadioComponent,
                        RadioItemComponent,
                        SelectComponent,
                        SelectDatalistComponent,
                        SelectDatalistsComponent,
                        SkipComponent,
                        SliderComponent,
                        ProgressComponent,
                        SpinnerProgressComponent,
                        StepComponent,
                        StepItemComponent,
                        ColumnTableComponent,
                        ToggleTableComponent,
                        PageSwipeTableComponent,
                        TabsComponent,
                        TabComponent,
                        PaginationComponent,
                        ButtonLinkComponent,
                        ModalDirective,
                        PaginationDirective,
                        StepsDirective,
                        ScrolltoDirective
                    ],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
                    exports: [
                        ButtonComponent,
                        ButtonFileComponent,
                        ButtonIconComponent,
                        ButtonIconOnlyComponent,
                        ButtonSubmitComponent,
                        ToastComponent,
                        InputComponent,
                        CarouselComponent,
                        CarouselItemComponent,
                        InputFloatingComponent,
                        InputMaterialComponent,
                        InputSearchComponent,
                        InputTelComponent,
                        InputUrlComponent,
                        InputPasswordComponent,
                        InputMailComponent,
                        InputErrorMsgComponent,
                        AccordionComponent,
                        AccordionItemComponent,
                        CalendarComponent,
                        CheckboxComponent,
                        CheckboxButtonComponent,
                        CheckboxLinkComponent,
                        CheckboxGroupComponent,
                        CheckboxGroupItemComponent,
                        DropdownComponent,
                        DropdownItemComponent,
                        FieldsetComponent,
                        ListComponent,
                        ListOrderComponent,
                        ListThumbnailsComponent,
                        ListDescriptionComponent,
                        ModalComponent,
                        ModalAlertComponent,
                        RadioComponent,
                        RadioItemComponent,
                        SelectComponent,
                        SelectDatalistComponent,
                        SelectDatalistsComponent,
                        SkipComponent,
                        SliderComponent,
                        ProgressComponent,
                        SpinnerProgressComponent,
                        StepComponent,
                        StepItemComponent,
                        ColumnTableComponent,
                        ToggleTableComponent,
                        PageSwipeTableComponent,
                        TabsComponent,
                        TabComponent,
                        PaginationComponent,
                        ButtonLinkComponent,
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                        ModalDirective,
                        PaginationDirective,
                        StepsDirective,
                        ScrolltoDirective
                    ],
                    providers: [PagerService]
                },] }
    ];
    return CreamnglibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=creamlib-ng.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-main id=\"page-body\" (click)=\"CallToggleMenuBurger()\">\n  <app-breadcrumbs [allowBootstrap]=\"true\" [addClass]=\"'custom-crumbs'\"></app-breadcrumbs>\n  <router-outlet></router-outlet>\n</app-main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        // Initialise Code-Prettify
        this.PR = window['PR'];
    }
    // Write snippets into comp pages
    AppComponent.prototype.codeSnippets = function (subComp) {
        var compBlock = document.querySelectorAll('.descriptionComponent');
        var compB = Array.prototype.slice.call(compBlock);
        var mainFolder = compB[0].getAttribute('id');
        var file2Read, tempo;
        var charArray = ['<', '>', '{', '}', "'", ' & ', "'", '`'];
        var entArray = ['&lt;', '&gt;', '&#123;', '&#125;', '&#34;', '&amp;', '&apos;', '&#96;'];
        var _loop_1 = function (i) {
            var compBlockId = compB[i].getAttribute('id');
            /* Find proper block to write to */
            var toWrite2 = compB[i].querySelectorAll('c3m-tabs.snippets c3m-tab');
            var _loop_2 = function (z) {
                tempo = toWrite2[z];
                if (tempo.getAttribute('tabTitle') === 'HTML') {
                    var output_1 = tempo.querySelector('div.content');
                    output_1.insertAdjacentHTML('beforeend', '<div id="' + compBlockId + '-HTML' + '"></div>');
                    output_1 = document.getElementById(compBlockId + '-HTML');
                    file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.html';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                        .subscribe(function (data) {
                        for (var y = 0; y < charArray.length; y++) {
                            var pp = new RegExp(charArray[y], 'g');
                            data = data.replace(pp, entArray[y]);
                        }
                        if (data !== '') {
                            output_1.innerHTML =
                                output_1.innerHTML +
                                    '<p class="pre-code">For <strong>' +
                                    compBlockId +
                                    '.component.html</strong></p><div class="code"><!--?prettify lang=html linenums=true?--><pre class="prettyprint linenums">' +
                                    data +
                                    '</pre></div>';
                        }
                    });
                    if (subComp) {
                        file2Read =
                            'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.html';
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                            .subscribe(function (data) {
                            for (var y = 0; y < charArray.length; y++) {
                                var pp = new RegExp(charArray[y], 'g');
                                data = data.replace(pp, entArray[y]);
                            }
                            if (data !== '') {
                                output_1.insertAdjacentHTML('beforeend', '<p class="pre-code">For <strong>' +
                                    subComp +
                                    '.component.html</strong></p><div class="code"><!--?prettify lang=html linenums=true?--><pre class="prettyprint linenums">' +
                                    data +
                                    '</pre></div>');
                            }
                        });
                    }
                }
                else if (tempo.getAttribute('tabTitle') === 'CSS') {
                    var output_2 = tempo.querySelector('div.content');
                    output_2.insertAdjacentHTML('beforeend', '<div id="' + compBlockId + '-CSS' + '"></div>');
                    output_2 = document.getElementById(compBlockId + '-CSS');
                    file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.css';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                        .subscribe(function (data) {
                        for (var y = 0; y < charArray.length; y++) {
                            var pp = new RegExp(charArray[y], 'g');
                            data = data.replace(pp, entArray[y]);
                        }
                        if (data !== '') {
                            output_2.innerHTML =
                                output_2.innerHTML +
                                    '<p class="pre-code">For <strong>' +
                                    compBlockId +
                                    '.component.css</strong></p><div class="code"><!--?prettify lang=css linenums=true?--><pre class="prettyprint linenums">' +
                                    data +
                                    '</pre></div>';
                        }
                    });
                    if (subComp) {
                        file2Read =
                            'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.css';
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                            .subscribe(function (data) {
                            for (var y = 0; y < charArray.length; y++) {
                                var pp = new RegExp(charArray[y], 'g');
                                data = data.replace(pp, entArray[y]);
                            }
                            if (data !== '') {
                                output_2.insertAdjacentHTML('beforeend', '<p class="pre-code">For <strong>' +
                                    subComp +
                                    '.component.css</strong></p><div class="code"><!--?prettify lang=css linenums=true?--><pre class="prettyprint linenums">' +
                                    data +
                                    '</pre></div>');
                            }
                        });
                    }
                }
                else {
                    var output_3 = tempo.querySelector('div.content');
                    output_3.insertAdjacentHTML('beforeend', '<div id="' + compBlockId + '-TS' + '"></div>');
                    output_3 = document.getElementById(compBlockId + '-TS');
                    file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.ts';
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this_1.http.get(file2Read))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                        .subscribe(function (data) {
                        for (var y = 0; y < charArray.length; y++) {
                            var pp = new RegExp(charArray[y], 'g');
                            data = data.replace(pp, entArray[y]);
                        }
                        if (data !== '') {
                            output_3.innerHTML =
                                output_3.innerHTML +
                                    '<p class="pre-code">For <strong>' +
                                    compBlockId +
                                    '.component.ts</strong></p><div class="code"><!--?prettify lang=js linenums=true?--><pre class="prettyprint linenums">' +
                                    data +
                                    '</pre></div>';
                        }
                    });
                    if (subComp) {
                        file2Read =
                            'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.ts';
                        this_1.http
                            .get(file2Read)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.text(); }))
                            .subscribe(function (data) {
                            for (var y = 0; y < charArray.length; y++) {
                                var pp = new RegExp(charArray[y], 'g');
                                data = data.replace(pp, entArray[y]);
                            }
                            if (data !== '') {
                                output_3.insertAdjacentHTML('beforeend', '<p class="pre-code">For <strong>' +
                                    subComp +
                                    '.component.ts</strong></p><div class="code"><!--?prettify lang=js linenums=true?--><pre class="prettyprint linenums">' +
                                    data +
                                    '</pre></div>');
                            }
                        });
                    }
                }
            };
            for (var z = 0; z < toWrite2.length; z++) {
                _loop_2(z);
            }
        };
        var this_1 = this;
        for (var i = 0; i < compB.length; i++) {
            _loop_1(i);
        }
    };
    // Function create random ID for Accessibility
    AppComponent.prototype.randomID = function () {
        var idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    };
    // After View Checked
    AppComponent.prototype.ngAfterViewChecked = function () {
        // Launch Code-Prettify
        this.PR.prettyPrint();
    };
    AppComponent.prototype.CallToggleMenuBurger = function () {
        this.header.ToggleMenuBurgerMain();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"])
    ], AppComponent.prototype, "header", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-scroll-to */ "./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_scroll_to__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _module_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-breadcrumbs */ "./src/app/module-breadcrumbs.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/accueil/accueil.component */ "./src/app/main/accueil/accueil.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/button-page/button-page.component */ "./src/app/main/button-page/button-page.component.ts");
/* harmony import */ var _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/tabs-page/tabs-page.component */ "./src/app/main/tabs-page/tabs-page.component.ts");
/* harmony import */ var _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/accordion-page/accordion-page.component */ "./src/app/main/accordion-page/accordion-page.component.ts");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var _header_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/menu/menu-item/menu-item.component */ "./src/app/header/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/carousel-page/carousel-page.component */ "./src/app/main/carousel-page/carousel-page.component.ts");
/* harmony import */ var _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/modal-page/modal-page.component */ "./src/app/main/modal-page/modal-page.component.ts");
/* harmony import */ var _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/table-page/table-page.component */ "./src/app/main/table-page/table-page.component.ts");
/* harmony import */ var _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/pagination-page/pagination-page.component */ "./src/app/main/pagination-page/pagination-page.component.ts");
/* harmony import */ var _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/slider-page/slider-page.component */ "./src/app/main/slider-page/slider-page.component.ts");
/* harmony import */ var _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/getting-started/getting-started.component */ "./src/app/main/getting-started/getting-started.component.ts");
/* harmony import */ var _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/step-page/step-page.component */ "./src/app/main/step-page/step-page.component.ts");
/* harmony import */ var _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/calendar-page/calendar-page.component */ "./src/app/main/calendar-page/calendar-page.component.ts");
/* harmony import */ var _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/dropdown-page/dropdown-page.component */ "./src/app/main/dropdown-page/dropdown-page.component.ts");
/* harmony import */ var _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/input-page/input-page.component */ "./src/app/main/input-page/input-page.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-page.component */ "./src/app/main/checkbox-page/checkbox-page.component.ts");
/* harmony import */ var _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main/select-page/select-page.component */ "./src/app/main/select-page/select-page.component.ts");
/* harmony import */ var _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./main/faq/faq.component */ "./src/app/main/faq/faq.component.ts");
/* harmony import */ var _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main/breadcrumbs-page/breadcrumbs-page.component */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts");
/* harmony import */ var _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main/fieldset-page/fieldset-page.component */ "./src/app/main/fieldset-page/fieldset-page.component.ts");
/* harmony import */ var _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main/list-page/list-page.component */ "./src/app/main/list-page/list-page.component.ts");
/* harmony import */ var _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./main/skip-page/skip-page.component */ "./src/app/main/skip-page/skip-page.component.ts");
/* harmony import */ var _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./main/toast-page/toast-page.component */ "./src/app/main/toast-page/toast-page.component.ts");
/* harmony import */ var _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./main/bottom-page/bottom-page.component */ "./src/app/main/bottom-page/bottom-page.component.ts");
/* harmony import */ var _main_bottom_page_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./main/bottom-page/bottom/bottom.component */ "./src/app/main/bottom-page/bottom/bottom.component.ts");
/* harmony import */ var _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./main/radio-page/radio-page.component */ "./src/app/main/radio-page/radio-page.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _main_card_page_card_page_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./main/card-page/card-page.component */ "./src/app/main/card-page/card-page.component.ts");
/* harmony import */ var _main_card_page_card_card_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./main/card-page/card/card.component */ "./src/app/main/card-page/card/card.component.ts");
/* harmony import */ var creamnglib__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! creamnglib */ "./dist/creamnglib/fesm5/creamlib-ng.js");












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_11__["AccueilComponent"],
                _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_13__["ButtonPageComponent"],
                _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_14__["TabsPageComponent"],
                _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_15__["AccordionPageComponent"],
                _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _header_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_17__["MenuItemComponent"],
                _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_18__["CarouselPageComponent"],
                _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_19__["ModalPageComponent"],
                _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_20__["TablePageComponent"],
                _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_21__["PaginationPageComponent"],
                _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_22__["SliderPageComponent"],
                _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_23__["GettingStartedComponent"],
                _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_24__["StepPageComponent"],
                _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_25__["CalendarPageComponent"],
                _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_26__["DropdownPageComponent"],
                _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_27__["InputPageComponent"],
                _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_28__["CheckboxPageComponent"],
                _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_29__["SelectPageComponent"],
                _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_30__["FaqComponent"],
                _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_31__["BreadcrumbsPageComponent"],
                _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_32__["FieldsetPageComponent"],
                _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_33__["ListPageComponent"],
                _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_34__["SkipPageComponent"],
                _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_35__["ToastPageComponent"],
                _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_36__["BottomPageComponent"],
                _main_bottom_page_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_37__["BottomComponent"],
                _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_38__["RadioPageComponent"],
                _main_card_page_card_page_component__WEBPACK_IMPORTED_MODULE_40__["CardPageComponent"],
                _main_card_page_card_card_component__WEBPACK_IMPORTED_MODULE_41__["CardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                ng2_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_39__["appRoutes"], _app_routes__WEBPACK_IMPORTED_MODULE_39__["routerOptions"]),
                _module_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"],
                creamnglib__WEBPACK_IMPORTED_MODULE_42__["CreamnglibModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routerOptions, appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerOptions", function() { return routerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/accueil/accueil.component */ "./src/app/main/accueil/accueil.component.ts");
/* harmony import */ var _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/button-page/button-page.component */ "./src/app/main/button-page/button-page.component.ts");
/* harmony import */ var _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/tabs-page/tabs-page.component */ "./src/app/main/tabs-page/tabs-page.component.ts");
/* harmony import */ var _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/accordion-page/accordion-page.component */ "./src/app/main/accordion-page/accordion-page.component.ts");
/* harmony import */ var _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/modal-page/modal-page.component */ "./src/app/main/modal-page/modal-page.component.ts");
/* harmony import */ var _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/carousel-page/carousel-page.component */ "./src/app/main/carousel-page/carousel-page.component.ts");
/* harmony import */ var _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/table-page/table-page.component */ "./src/app/main/table-page/table-page.component.ts");
/* harmony import */ var _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/pagination-page/pagination-page.component */ "./src/app/main/pagination-page/pagination-page.component.ts");
/* harmony import */ var _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/slider-page/slider-page.component */ "./src/app/main/slider-page/slider-page.component.ts");
/* harmony import */ var _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/getting-started/getting-started.component */ "./src/app/main/getting-started/getting-started.component.ts");
/* harmony import */ var _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/faq/faq.component */ "./src/app/main/faq/faq.component.ts");
/* harmony import */ var _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/step-page/step-page.component */ "./src/app/main/step-page/step-page.component.ts");
/* harmony import */ var _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/calendar-page/calendar-page.component */ "./src/app/main/calendar-page/calendar-page.component.ts");
/* harmony import */ var _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/dropdown-page/dropdown-page.component */ "./src/app/main/dropdown-page/dropdown-page.component.ts");
/* harmony import */ var _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/input-page/input-page.component */ "./src/app/main/input-page/input-page.component.ts");
/* harmony import */ var _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/checkbox-page/checkbox-page.component */ "./src/app/main/checkbox-page/checkbox-page.component.ts");
/* harmony import */ var _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/radio-page/radio-page.component */ "./src/app/main/radio-page/radio-page.component.ts");
/* harmony import */ var _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/select-page/select-page.component */ "./src/app/main/select-page/select-page.component.ts");
/* harmony import */ var _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/fieldset-page/fieldset-page.component */ "./src/app/main/fieldset-page/fieldset-page.component.ts");
/* harmony import */ var _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/skip-page/skip-page.component */ "./src/app/main/skip-page/skip-page.component.ts");
/* harmony import */ var _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/toast-page/toast-page.component */ "./src/app/main/toast-page/toast-page.component.ts");
/* harmony import */ var _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/list-page/list-page.component */ "./src/app/main/list-page/list-page.component.ts");
/* harmony import */ var _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/bottom-page/bottom-page.component */ "./src/app/main/bottom-page/bottom-page.component.ts");
/* harmony import */ var _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main/breadcrumbs-page/breadcrumbs-page.component */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts");
























var routerOptions = {
    useHash: true,
    anchorScrolling: 'enabled'
};
var appRoutes = [
    { path: 'home', component: _main_accueil_accueil_component__WEBPACK_IMPORTED_MODULE_0__["AccueilComponent"], data: { breadcrumb: 'Home' } },
    {
        path: 'button',
        component: _main_button_page_button_page_component__WEBPACK_IMPORTED_MODULE_1__["ButtonPageComponent"],
        data: { breadcrumb: 'Button' }
    },
    { path: 'tabs', component: _main_tabs_page_tabs_page_component__WEBPACK_IMPORTED_MODULE_2__["TabsPageComponent"], data: { breadcrumb: 'Tabs' } },
    {
        path: 'accordion',
        component: _main_accordion_page_accordion_page_component__WEBPACK_IMPORTED_MODULE_3__["AccordionPageComponent"],
        data: { breadcrumb: 'Accordion' }
    },
    {
        path: 'modal',
        component: _main_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_4__["ModalPageComponent"],
        data: { breadcrumb: 'modal' }
    },
    {
        path: 'carousel',
        component: _main_carousel_page_carousel_page_component__WEBPACK_IMPORTED_MODULE_5__["CarouselPageComponent"],
        data: { breadcrumb: 'carousel' }
    },
    {
        path: 'table',
        component: _main_table_page_table_page_component__WEBPACK_IMPORTED_MODULE_6__["TablePageComponent"],
        data: { breadcrumb: 'table' }
    },
    {
        path: 'pagination',
        component: _main_pagination_page_pagination_page_component__WEBPACK_IMPORTED_MODULE_7__["PaginationPageComponent"],
        data: { breadcrumb: 'pagination' }
    },
    {
        path: 'slider',
        component: _main_slider_page_slider_page_component__WEBPACK_IMPORTED_MODULE_8__["SliderPageComponent"],
        data: { breadcrumb: 'slider' }
    },
    {
        path: 'gettingStarted',
        component: _main_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_9__["GettingStartedComponent"],
        data: { breadcrumb: 'GettingStarted' }
    },
    { path: 'faq', component: _main_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"], data: { breadcrumb: 'F.A.Q' } },
    { path: 'step', component: _main_step_page_step_page_component__WEBPACK_IMPORTED_MODULE_11__["StepPageComponent"], data: { breadcrumb: 'Step' } },
    {
        path: 'calendar',
        component: _main_calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_12__["CalendarPageComponent"],
        data: { breadcrumb: 'Calendar' }
    },
    {
        path: 'dropdown',
        component: _main_dropdown_page_dropdown_page_component__WEBPACK_IMPORTED_MODULE_13__["DropdownPageComponent"],
        data: { breadcrumb: 'Dropdown' }
    },
    {
        path: 'input',
        component: _main_input_page_input_page_component__WEBPACK_IMPORTED_MODULE_14__["InputPageComponent"],
        data: { breadcrumb: 'Input' }
    },
    {
        path: 'checkbox',
        component: _main_checkbox_page_checkbox_page_component__WEBPACK_IMPORTED_MODULE_15__["CheckboxPageComponent"],
        data: { breadcrumb: 'Checkbox' }
    },
    {
        path: 'radio',
        component: _main_radio_page_radio_page_component__WEBPACK_IMPORTED_MODULE_16__["RadioPageComponent"],
        data: { breadcrumb: 'Radios' }
    },
    {
        path: 'select',
        component: _main_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_17__["SelectPageComponent"],
        data: { breadcrumb: 'select' }
    },
    {
        path: 'fieldset',
        component: _main_fieldset_page_fieldset_page_component__WEBPACK_IMPORTED_MODULE_18__["FieldsetPageComponent"],
        data: { breadcrumb: 'fieldset' }
    },
    { path: 'skip', component: _main_skip_page_skip_page_component__WEBPACK_IMPORTED_MODULE_19__["SkipPageComponent"], data: { breadcrumb: 'skip' } },
    {
        path: 'toast',
        component: _main_toast_page_toast_page_component__WEBPACK_IMPORTED_MODULE_20__["ToastPageComponent"],
        data: { breadcrumb: 'toast' }
    },
    { path: 'list', component: _main_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_21__["ListPageComponent"], data: { breadcrumb: 'list' } },
    {
        path: 'bottom',
        component: _main_bottom_page_bottom_page_component__WEBPACK_IMPORTED_MODULE_22__["BottomPageComponent"],
        data: { breadcrumb: 'Bottom' }
    },
    {
        path: 'breadcrumbs',
        component: _main_breadcrumbs_page_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_23__["BreadcrumbsPageComponent"],
        data: { breadcrumb: 'Breadcrumbs' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    //  { path: '**', component: PageNotFoundComponent }
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  color: var(--body-text);\n  background-color: var(--n-light);\n  padding: 1rem 5%;\n}\n\nfooter p {\n  font-size: 0.8rem;\n  line-height: 1.45;\n}\n\n@media screen and (min-width: 1000px) {\n  .footerContent p {\n    font-size: 1rem;\n    text-align: right;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0dBQ25CO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBjb2xvcjogdmFyKC0tYm9keS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1saWdodCk7XG4gIHBhZGRpbmc6IDFyZW0gNSU7XG59XG5cbmZvb3RlciBwIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3RlckNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footerContent\">\n  <p>\n    CREAM LIB, <span>Open-Source © 2019</span>, Contributors : Thibault J. -\n    Angela P.R. - Johan B. - Emmanuel D\n  </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HEADER */\n\nheader {\n  background-color: var(--n-dark);\n}\n\nheader h1 {\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  padding: 1.1rem 0 0 45px;\n  margin-left: 5%;\n}\n\nh1 img {\n  max-width: 175px;\n}\n\nheader > button {\n  position: absolute;\n  top: 0;\n  left: 5%;\n  background: initial;\n  padding: 1rem;\n  margin-left: -1rem;\n  transition: -webkit-transform 0.7s;\n  transition: transform 0.7s;\n  transition: transform 0.7s, -webkit-transform 0.7s;\n}\n\nheader > button img {\n  width: 25px;\n  height: 25px;\n}\n\n/* If Burger Menu Open */\n\n.mobileOpen {\n  height: 100%;\n  left: 0;\n  transition: left 0.6s;\n}\n\n/* Else if Burger Menu Close */\n\n.mobileClose {\n  transition: left 0.6s;\n}\n\n/* Rotate Burger Button */\n\n.burgerVertical {\n  -webkit-transform: rotateZ(90deg);\n          transform: rotateZ(90deg);\n}\n\napp-menu {\n  position: absolute;\n  left: -1000px;\n  width: 80%;\n  max-width: 350px;\n  height: auto;\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  transition: left 0.6s;\n  z-index: 999;\n}\n\n@media screen and (min-width: 1000px) {\n  header {\n    height: 100%;\n  }\n  header .logo {\n    display: block;\n    text-align: center;\n    padding: 5vh 0 9vh;\n  }\n  header h1 {\n    padding: 0;\n    margin: 0;\n  }\n  header > button {\n    display: none;\n  }\n  header > p {\n    padding: 0;\n  }\n\n  header .mobileClose,\n  .mobileOpen {\n    left: 0;\n    height: auto;\n    background-color: var(--n-dark);\n  }\n\n  app-menu {\n    display: block;\n    position: static;\n    overflow: hidden;\n    width: auto;\n    height: auto;\n    top: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVo7RUFDRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQTNCLG1EQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQseUJBQXlCOztBQUV6QjtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0JBQXNCO0NBQ3ZCOztBQUVELCtCQUErQjs7QUFFL0I7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBRUQsMEJBQTBCOztBQUUxQjtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFO0lBQ0UsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0UsV0FBVztJQUNYLFVBQVU7R0FDWDtFQUNEO0lBQ0UsY0FBYztHQUNmO0VBQ0Q7SUFDRSxXQUFXO0dBQ1o7O0VBRUQ7O0lBRUUsUUFBUTtJQUNSLGFBQWE7SUFDYixnQ0FBZ0M7R0FDakM7O0VBRUQ7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87R0FDUjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSEVBREVSICovXG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tZGFyayk7XG59XG5cbmhlYWRlciBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW4tZGFyayk7XG4gIHBhZGRpbmc6IDEuMXJlbSAwIDAgNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuaDEgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cblxuaGVhZGVyID4gYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUlO1xuICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogLTFyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzO1xufVxuXG5oZWFkZXIgPiBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLyogSWYgQnVyZ2VyIE1lbnUgT3BlbiAqL1xuXG4ubW9iaWxlT3BlbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzO1xufVxuXG4vKiBFbHNlIGlmIEJ1cmdlciBNZW51IENsb3NlICovXG5cbi5tb2JpbGVDbG9zZSB7XG4gIHRyYW5zaXRpb246IGxlZnQgMC42cztcbn1cblxuLyogUm90YXRlIEJ1cmdlciBCdXR0b24gKi9cblxuLmJ1cmdlclZlcnRpY2FsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcbn1cblxuYXBwLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6IHZhcigtLXRleHQtaW52KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1kYXJrKTtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjZzO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1dmggMCA5dmg7XG4gIH1cbiAgaGVhZGVyIGgxIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBoZWFkZXIgPiBidXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyID4gcCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGhlYWRlciAubW9iaWxlQ2xvc2UsXG4gIC5tb2JpbGVPcGVuIHtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICB9XG5cbiAgYXBwLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdG9wOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header>\n  <!-- Burger Button -->\n  <button [ngClass]=\"{ burgerVertical: menuMobile, burgerHorizontal: !menuMobile }\" (click)=\"ToggleMenuBurger()\">\n    <img src=\"assets/img/burger.svg\" alt=\"Mobile Button (Open Menu)\" />\n  </button>\n\n  <!-- Logo -->\n  <h1>\n    <a routerLink=\"/home\" class=\"logo\" routerLinkActive=\"active\">\n      <picture>\n        <source srcset=\"assets/img/creamNG-logo.svg\" media=\"(min-width: {{ mediumRes }})\" />\n        <img src=\"assets/img/creamNG-logo-sml.svg\" alt=\"Cream-NG, your accessible Angular Lib\" />\n      </picture>\n    </a>\n  </h1>\n\n  <!-- MENU -->\n  <app-menu [ngClass]=\"{ mobileOpen: menuMobile, mobileClose: !menuMobile }\">\n    <!-- GROUP FORM ELEMENTS -->\n    <app-menu-item nameButton=\"Form Elements\" idSvg=\"assets/img/icons.svg#svg1\" [index]=\"1\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/button\" routerLinkActive=\"active\">Buttons &amp; Controls</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/checkbox\" routerLinkActive=\"active\">Checkboxes</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/calendar\" routerLinkActive=\"active\">Datepicker</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/fieldset\" routerLinkActive=\"active\">Fieldset</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/input\" routerLinkActive=\"active\">Inputs</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/radio\" routerLinkActive=\"active\">Radios</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/select\" routerLinkActive=\"active\">Selects &amp; Datalists</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/slider\" routerLinkActive=\"active\">Sliders &amp; Progress</a>\n        </li>\n      </ul>\n    </app-menu-item>\n\n    <!-- NAVIGATION -->\n    <app-menu-item nameButton=\"Navigation\" idSvg=\"assets/img/icons.svg#svg2\" [index]=\"2\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/breadcrumbs\" routerLinkActive=\"active\">Breadcrumbs</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/skip\" routerLinkActive=\"active\">Skip Link</a>\n        </li>\n      </ul>\n    </app-menu-item>\n\n    <!-- GROUP BLOCKS -->\n    <app-menu-item nameButton=\"Blocks\" idSvg=\"assets/img/icons.svg#svg3\" [index]=\"3\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/accordion\" routerLinkActive=\"active\">Accordion</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/carousel\" routerLinkActive=\"active\">Carousel</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/table\" routerLinkActive=\"active\">Data Table</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/list\" routerLinkActive=\"active\">List</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/tabs\" routerLinkActive=\"active\">Tabs</a>\n        </li>\n      </ul>\n    </app-menu-item>\n\n    <!-- STRUCTURE -->\n    <app-menu-item nameButton=\"Page Structure\" idSvg=\"assets/img/icons.svg#svg5\" [index]=\"4\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/bottom\" routerLinkActive=\"active\">Bottom</a>\n        </li>\n      </ul>\n    </app-menu-item>\n\n    <!-- EDITORIAL -->\n    <app-menu-item nameButton=\"Editorial\" idSvg=\"assets/img/icons.svg#svg5\" [index]=\"5\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li></li>\n      </ul>\n    </app-menu-item>\n\n    <!-- GENERAL ELEMENTS -->\n    <app-menu-item nameButton=\"Utilities\" idSvg=\"assets/img/icons.svg#svg5\" [index]=\"6\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/dropdown\" routerLinkActive=\"active\">Dropdown</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/modal\" routerLinkActive=\"active\">Modal</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/pagination\" routerLinkActive=\"active\">Pagination</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/step\" routerLinkActive=\"active\">Steps</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/toast\" routerLinkActive=\"active\">Toast</a>\n        </li>\n      </ul>\n    </app-menu-item>\n    <!-- GROUP HELP -->\n    <app-menu-item nameButton=\"Help\" class=\"help\" idSvg=\"assets/img/icons.svg#svg4\" [index]=\"0\" [isOpen]=\"false\">\n      <ul class=\"contenuMenu\">\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/gettingStarted\" routerLinkActive=\"active\">Getting Started</a>\n        </li>\n        <li (click)=\"ToggleMenuBurger()\">\n          <a routerLink=\"/faq\" routerLinkActive=\"active\">F.A.Q</a>\n        </li>\n      </ul>\n    </app-menu-item>\n  </app-menu>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menuMobile = false;
        this.mediumRes = '1000px';
    }
    /* Action button burger */
    HeaderComponent.prototype.ToggleMenuBurger = function () {
        if (this.menuMobile) {
            this.menuMobile = false;
        }
        else if (!this.menuMobile) {
            this.menuMobile = true;
        }
    };
    HeaderComponent.prototype.ToggleMenuBurgerMain = function () {
        if (this.menuMobile) {
            this.menuMobile = false;
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu-item/menu-item.component.css":
/*!***************************************************************!*\
  !*** ./src/app/header/menu/menu-item/menu-item.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-group.closed .panel-collapse {\n  display: none;\n}\n\napp-menu-item button {\n  position: relative;\n  width: 100%;\n  text-align: left;\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  padding: 1.1rem 1rem 0.8rem;\n  -webkit-transform: perspective(1px) translateZ(0);\n          transform: perspective(1px) translateZ(0);\n  transition: color 0.5s;\n  cursor: pointer;\n}\n\napp-menu-item button::before {\n  position: absolute;\n  content: '';\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--n-light);\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1;\n}\n\napp-menu-item button:hover:before,\napp-menu-item button:focus:before,\napp-menu-item button:active:before {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\napp-menu-item button:hover,\napp-menu-item button:active,\napp-menu-item button:focus {\n  color: var(--n-dark);\n}\n\napp-menu-item button svg {\n  position: relative;\n  top: -3px;\n  width: 24px;\n  height: 29px;\n  fill: var(--n-light);\n  margin-right: 10px;\n  vertical-align: middle;\n  transition: fill 1.5s cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\napp-menu-item.help button {\n  color: var(--main-light);\n}\n\napp-menu-item.help button svg {\n  fill: var(--main-light);\n}\n\napp-menu-item button:hover svg,\napp-menu-item button:active svg,\napp-menu-item button:focus svg {\n  fill: var(--n-dark);\n}\n\napp-menu-item.help button:hover,\napp-menu-item.help button:active,\napp-menu-item.help button:focus {\n  color: var(--main-color);\n}\n\napp-menu-item.help button:hover svg,\napp-menu-item.help button:active svg,\napp-menu-item.help button:focus svg {\n  fill: var(--main-color);\n}\n\n/* Menu Items */\n\n.contenuMenu {\n  margin: 0 0 0.5rem 0.8rem;\n}\n\n.contenuMenu li {\n  padding: 0 0 0.4rem 30px;\n  font: 0.95em/1 var(--stack-l);\n}\n\n.contenuMenu li:first-child {\n  margin-top: 0.5rem;\n}\n\n.contenuMenu li a {\n  display: block;\n  width: 80%;\n  text-decoration: none;\n  color: var(--text-inv);\n  background-color: var(--n-dark);\n  padding: 0.5rem 0 0.5rem 1rem;\n}\n\n.contenuMenu li a.active,\n.contenuMenu li a:hover,\n.contenuMenu li a:active,\n.contenuMenu li a:focus {\n  color: var(--n-dark);\n  background-color: var(--n-light);\n}\n\n/* DESKTOP */\n\n@media screen and (min-width: 1400px) {\n  app-menu-item button {\n    padding: 1.1rem 2rem 0.8rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsa0RBQTBDO1VBQTFDLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQS9CLGtEQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLFlBQVk7Q0FDYjs7QUFFRDs7O0VBR0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixpRUFBaUU7Q0FDbEU7O0FBRUQ7OztFQUdFLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwyREFBMkQ7Q0FDNUQ7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBRUQ7OztFQUdFLG9CQUFvQjtDQUNyQjs7QUFFRDs7O0VBR0UseUJBQXlCO0NBQzFCOztBQUVEOzs7RUFHRSx3QkFBd0I7Q0FDekI7O0FBRUQsZ0JBQWdCOztBQUVoQjtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtDQUMvQjs7QUFFRDs7OztFQUlFLHFCQUFxQjtFQUNyQixpQ0FBaUM7Q0FDbEM7O0FBRUQsYUFBYTs7QUFFYjtFQUNFO0lBQ0UsNEJBQTRCO0dBQzdCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1ncm91cC5jbG9zZWQgLnBhbmVsLWNvbGxhcHNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYXBwLW1lbnUtaXRlbSBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tdGV4dC1pbnYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICBwYWRkaW5nOiAxLjFyZW0gMXJlbSAwLjhyZW07XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFwcC1tZW51LWl0ZW0gYnV0dG9uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW4tbGlnaHQpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB6LWluZGV4OiAtMTtcbn1cblxuYXBwLW1lbnUtaXRlbSBidXR0b246aG92ZXI6YmVmb3JlLFxuYXBwLW1lbnUtaXRlbSBidXR0b246Zm9jdXM6YmVmb3JlLFxuYXBwLW1lbnUtaXRlbSBidXR0b246YWN0aXZlOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTIsIDEuNjQsIDAuMzcsIDAuNjYpO1xufVxuXG5hcHAtbWVudS1pdGVtIGJ1dHRvbjpob3ZlcixcbmFwcC1tZW51LWl0ZW0gYnV0dG9uOmFjdGl2ZSxcbmFwcC1tZW51LWl0ZW0gYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLW4tZGFyayk7XG59XG5cbmFwcC1tZW51LWl0ZW0gYnV0dG9uIHN2ZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBmaWxsOiB2YXIoLS1uLWxpZ2h0KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2l0aW9uOiBmaWxsIDEuNXMgY3ViaWMtYmV6aWVyKDAuNTIsIDEuNjQsIDAuMzcsIDAuNjYpO1xufVxuXG5hcHAtbWVudS1pdGVtLmhlbHAgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQpO1xufVxuXG5hcHAtbWVudS1pdGVtLmhlbHAgYnV0dG9uIHN2ZyB7XG4gIGZpbGw6IHZhcigtLW1haW4tbGlnaHQpO1xufVxuXG5hcHAtbWVudS1pdGVtIGJ1dHRvbjpob3ZlciBzdmcsXG5hcHAtbWVudS1pdGVtIGJ1dHRvbjphY3RpdmUgc3ZnLFxuYXBwLW1lbnUtaXRlbSBidXR0b246Zm9jdXMgc3ZnIHtcbiAgZmlsbDogdmFyKC0tbi1kYXJrKTtcbn1cblxuYXBwLW1lbnUtaXRlbS5oZWxwIGJ1dHRvbjpob3ZlcixcbmFwcC1tZW51LWl0ZW0uaGVscCBidXR0b246YWN0aXZlLFxuYXBwLW1lbnUtaXRlbS5oZWxwIGJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuYXBwLW1lbnUtaXRlbS5oZWxwIGJ1dHRvbjpob3ZlciBzdmcsXG5hcHAtbWVudS1pdGVtLmhlbHAgYnV0dG9uOmFjdGl2ZSBzdmcsXG5hcHAtbWVudS1pdGVtLmhlbHAgYnV0dG9uOmZvY3VzIHN2ZyB7XG4gIGZpbGw6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4vKiBNZW51IEl0ZW1zICovXG5cbi5jb250ZW51TWVudSB7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwLjhyZW07XG59XG5cbi5jb250ZW51TWVudSBsaSB7XG4gIHBhZGRpbmc6IDAgMCAwLjRyZW0gMzBweDtcbiAgZm9udDogMC45NWVtLzEgdmFyKC0tc3RhY2stbCk7XG59XG5cbi5jb250ZW51TWVudSBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmNvbnRlbnVNZW51IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1pbnYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMXJlbTtcbn1cblxuLmNvbnRlbnVNZW51IGxpIGEuYWN0aXZlLFxuLmNvbnRlbnVNZW51IGxpIGE6aG92ZXIsXG4uY29udGVudU1lbnUgbGkgYTphY3RpdmUsXG4uY29udGVudU1lbnUgbGkgYTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uLWxpZ2h0KTtcbn1cblxuLyogREVTS1RPUCAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgYXBwLW1lbnUtaXRlbSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEuMXJlbSAycmVtIDAuOHJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/menu/menu-item/menu-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/header/menu/menu-item/menu-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"menu-group\" [ngClass]=\"{'closed': !isOpen}\">\n\n  <button class=\"panel-heading\" (click)=\"toggleOpen()\" [attr.aria-expanded]=\"isOpen\" [attr.aria-controls]=\"panelID\" id={{tabID}}>\n    <svg>\n      <use [attr.xlink:href]=idSvg></use>\n    </svg>\n    {{nameButton}}\n  </button>\n\n  <div class=\"panel-collapse\" [attr.aria-hidden]=\"!isOpen\" id={{panelID}} [attr.aria-labeledby]=\"tabID\">\n      <ng-content></ng-content>\n  </div>\n\n</li>\n\n"

/***/ }),

/***/ "./src/app/header/menu/menu-item/menu-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/header/menu/menu-item/menu-item.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.component */ "./src/app/header/menu/menu.component.ts");



var MenuItemComponent = /** @class */ (function () {
    /* By default , add item to accordion */
    function MenuItemComponent(menu) {
        this.menu = menu;
        this.menu.addGroup(this);
    }
    /* remove item to accordion*/
    MenuItemComponent.prototype.ngOnDestroy = function () {
        this.menu.removeGroup(this);
    };
    /* changes */
    MenuItemComponent.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                var changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.menu.groups[this.index + 1].toggleOpen();
                }
            }
        }
    };
    /* initialisation */
    MenuItemComponent.prototype.ngOnInit = function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* when view init */
    MenuItemComponent.prototype.ngAfterViewInit = function () {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    };
    /* open accordion'element */
    MenuItemComponent.prototype.toggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this.menu.closeOthers(this);
        }
        else if (this.isOpen) {
            this.menu.closeAll(this);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuItemComponent.prototype, "nameButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuItemComponent.prototype, "idSvg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MenuItemComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MenuItemComponent.prototype, "index", void 0);
    MenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/header/menu/menu-item/menu-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./menu-item.component.css */ "./src/app/header/menu/menu-item/menu-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/header/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <c3m-skip text=\"Jump navigation\" [id]=\"'page-body'\"></c3m-skip>\n  <ul class=\"accordion\">\n    <ng-content></ng-content>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.groups = [];
    }
    MenuComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    MenuComponent.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    MenuComponent.prototype.closeAll = function (openGroup) {
        this.groups.forEach(function (group) {
            group.isOpen = false;
        });
    };
    MenuComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/header/menu/menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/header/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/main/accordion-page/accordion-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWNjb3JkaW9uLXBhZ2UvYWNjb3JkaW9uLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- TITLE TABS COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Accordion</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"accordion\">Normal Accordion</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"accordion\">\n    <h3>Normal Accordion</h3>\n\n    <div class=\"explain\">\n      <p>This component is fully accessible and semantic; it is used for the main navigation of this web site.</p>\n      <p>If you want a specific block to be opened on page load, set \"isOpen\" to \"true\".</p>\n    </div>\n\n    <!-- ACCORDION DEMO -->\n    <div class=\"demo\">\n        <c3m-accordion>\n\n            <c3m-accordion-item nameButton=\"Title 1\" [index]=\"0\" [isOpen]=\"true\">\n              <p>Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo inediae propinquantis aerumnas exitialis horrebant.</p>\n            </c3m-accordion-item>\n            <c3m-accordion-item nameButton=\"Title 2\" [index]=\"1\" [isOpen]=\"false\">\n             <p>Dum haec in oriente aguntur, Arelate hiemem agens Constantius post theatralis ludos atque circenses ambitioso editos apparatu diem sextum idus Octobres, qui imperii eius annum tricensimum terminabat, insolentiae pondera gravius librans, siquid dubium deferebatur aut falsum, pro liquido accipiens et conperto, inter alia excarnificatum Gerontium Magnentianae comitem partis exulari maerore multavit.</p>\n            </c3m-accordion-item>\n            <c3m-accordion-item nameButton=\"Title 3\" [index]=\"2\" [isOpen]=\"false\">\n              <p>\n                Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant. et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi, qui pro muro tuetur accolas circumfusus, augente nocte adulta terrorem quievere paulisper lucem opperientes. arbitrabantur enim nullo inpediente transgressi inopino adcursu adposita quaeque vastare, sed in cassum labores pertulere gravissimos.\n              </p>\n            </c3m-accordion-item>\n            <c3m-accordion-item nameButton=\"Title 4\" [index]=\"3\" [isOpen]=\"false\">\n              <p>\n                Post quorum necem nihilo lenius ferociens\n              </p>\n            </c3m-accordion-item>\n\n          </c3m-accordion>\n      </div>\n\n      <div class=\"explain\">\n        <dl>\n          <div>\n            <dt>nameButton</dt>\n            <dd>Title of the collapse</dd>\n          </div>\n          <div>\n            <dt>Index</dt>\n            <dd>Order of the collapse</dd>\n          </div>\n          <div>\n            <dt>isOpen</dt>\n            <dd>true if the collapse is open by default</dd>\n          </div>\n        </dl>\n      </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-accordion&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title1&#x22;  [index]=0 [isOpen]=false&#x3E;\n        Content 1\n      &#x3C;/c3m-accordion-item&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title 2&#x22;  [index]=1 [isOpen]=false&#x3E;\n        Content 2\n      &#x3C;/c3m-accordion-item&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title3&#x22;  [index]=2 [isOpen]=false&#x3E;\n        Content 3\n      &#x3C;/c3m-accordion-item&#x3E;\n      &#x3C;c3m-accordion-item nameButton=&#x22;Title 4&#x22;  [index]=3 [isOpen]=false&#x3E;\n        Content 4\n      &#x3C;/c3m-accordion-item&#x3E;\n  &#x3C;/c3m-accordion&#x3E;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/accordion-page/accordion-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/accordion-page/accordion-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccordionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPageComponent", function() { return AccordionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var AccordionPageComponent = /** @class */ (function () {
    function AccordionPageComponent(app) {
        this.app = app;
    }
    AccordionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordion-page',
            template: __webpack_require__(/*! ./accordion-page.component.html */ "./src/app/main/accordion-page/accordion-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accordion-page.component.css */ "./src/app/main/accordion-page/accordion-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], AccordionPageComponent);
    return AccordionPageComponent;
}());



/***/ }),

/***/ "./src/app/main/accueil/accueil.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/accueil/accueil.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Welcome Title */\n\n.whyNgCream h2 {\n  display: none;\n  font: 2em var(--stack-b);\n  text-align: center;\n  color: var(--n-dark);\n  margin-bottom: 0.5em;\n}\n\n/* Welcome Paragraph */\n\n.whyNgCream {\n  display: block;\n  padding: 6vh 1rem 7vh;\n  background-color: rgba(249, 249, 249, 0.72);\n  background: url('https://creamlib.github.io/assets/background.1ba0c6f664cf338ab5ea.jpg');\n}\n\n.whyNgCream p {\n  text-align: center;\n  font: calc(1.3em + 0.8vmax) / 1.45 var(--stack-l);\n}\n\n/* Containers with SVG icons */\n\n.ngCreamBecause {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  margin: 0 auto;\n  padding-top: 1rem;\n  background-color: rgba(249, 249, 249, 0.72);\n  padding-bottom: 3rem;\n}\n\n.ngCreamBecause li {\n  margin: 0 auto 2rem;\n}\n\n/* The SVG */\n\n.ngCreamBecause li svg {\n  width: 16vmax;\n  height: 16vmax;\n  max-width: 150px;\n  max-height: 150px;\n  fill: var(--n-dark);\n}\n\n.ngCreamBecause li h3 {\n  font: 1.5rem var(--stack-b);\n  text-transform: uppercase;\n  margin-bottom: 0.8rem;\n}\n\n.ngCreamBecause li p {\n  display: block;\n  width: 70%;\n  max-width: 20em;\n  line-height: 1.45;\n  margin: 0 auto;\n}\n\n.ngCreamBecause li p strong {\n  font-family: var(--stack-b);\n  color: var(--main-color);\n}\n\n/* BREAKPOINT */\n\n@media screen and (min-width: 450px) {\n  .ngCreamBecause li {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 750px) {\n  .ngCreamBecause li {\n    font-size: 1em;\n  }\n}\n\n/* BREAKPOINT */\n\n@media screen and (min-width: 1000px) {\n  .whyNgCream {\n    padding: 12vh 13vw 7vh;\n  }\n\n  .ngCreamBecause {\n    padding-top: 4rem;\n  }\n  .ngCreamBecause li {\n    margin-bottom: 6rem;\n  }\n}\n\n@media screen and (min-width: 1400px) {\n  lottie-animation-view > div {\n    background-color: var(--body-bg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hY2N1ZWlsL2FjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7O0FBRW5CO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtDQUN0Qjs7QUFFRCx1QkFBdUI7O0FBRXZCO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMseUZBQTZEO0NBQzlEOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGtEQUFrRDtDQUNuRDs7QUFFRCwrQkFBK0I7O0FBRS9CO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVELGFBQWE7O0FBRWI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7Q0FDMUI7O0FBRUQsZ0JBQWdCOztBQUVoQjtFQUNFO0lBQ0UsV0FBVztHQUNaO0NBQ0Y7O0FBQ0Q7RUFDRTtJQUNFLGVBQWU7R0FDaEI7Q0FDRjs7QUFFRCxnQkFBZ0I7O0FBRWhCO0VBQ0U7SUFDRSx1QkFBdUI7R0FDeEI7O0VBRUQ7SUFDRSxrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGOztBQUVEO0VBQ0U7SUFDRSxpQ0FBaUM7R0FDbEM7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWNjdWVpbC9hY2N1ZWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXZWxjb21lIFRpdGxlICovXG5cbi53aHlOZ0NyZWFtIGgyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udDogMmVtIHZhcigtLXN0YWNrLWIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1uLWRhcmspO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLyogV2VsY29tZSBQYXJhZ3JhcGggKi9cblxuLndoeU5nQ3JlYW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNnZoIDFyZW0gN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNzIpO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9iYWNrZ3JvdW5kLjFiYTBjNmY2NjRjZjMzOGFiNWVhLmpwZyk7XG59XG5cbi53aHlOZ0NyZWFtIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQ6IGNhbGMoMS4zZW0gKyAwLjh2bWF4KSAvIDEuNDUgdmFyKC0tc3RhY2stbCk7XG59XG5cbi8qIENvbnRhaW5lcnMgd2l0aCBTVkcgaWNvbnMgKi9cblxuLm5nQ3JlYW1CZWNhdXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcyKTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5cbi5uZ0NyZWFtQmVjYXVzZSBsaSB7XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG59XG5cbi8qIFRoZSBTVkcgKi9cblxuLm5nQ3JlYW1CZWNhdXNlIGxpIHN2ZyB7XG4gIHdpZHRoOiAxNnZtYXg7XG4gIGhlaWdodDogMTZ2bWF4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgZmlsbDogdmFyKC0tbi1kYXJrKTtcbn1cblxuLm5nQ3JlYW1CZWNhdXNlIGxpIGgzIHtcbiAgZm9udDogMS41cmVtIHZhcigtLXN0YWNrLWIpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG5cbi5uZ0NyZWFtQmVjYXVzZSBsaSBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogMjBlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubmdDcmVhbUJlY2F1c2UgbGkgcCBzdHJvbmcge1xuICBmb250LWZhbWlseTogdmFyKC0tc3RhY2stYik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLyogQlJFQUtQT0lOVCAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAubmdDcmVhbUJlY2F1c2UgbGkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIC5uZ0NyZWFtQmVjYXVzZSBsaSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cblxuLyogQlJFQUtQT0lOVCAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLndoeU5nQ3JlYW0ge1xuICAgIHBhZGRpbmc6IDEydmggMTN2dyA3dmg7XG4gIH1cblxuICAubmdDcmVhbUJlY2F1c2Uge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICB9XG4gIC5uZ0NyZWFtQmVjYXVzZSBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgbG90dGllLWFuaW1hdGlvbi12aWV3ID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/accueil/accueil.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/accueil/accueil.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"whyNgCream\">\n  <p>Develop accessible Angular applications with our components and patterns.</p>\n  <p>\n    <c3m-button-link url=\"/gettingStarted\" linkText=\"Let's get started !\"></c3m-button-link>\n  </p>\n</div>\n  <ul class=\"ngCreamBecause\">\n  <li>\n      <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n        <use href=\"assets/img/icons.svg#htmIconSvg\"></use>\n      </svg>\n      <h3>Embrace the Web</h3>\n      <p>Each component has been handcrafted with love, with a progressive enhancement approach that\n        respects web standards and <strong>semantics</strong>.</p>\n  </li>\n\n  <li>\n    <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n      <use href=\"assets/img/icons.svg#gitIconSvg\"></use>\n    </svg>\n      <h3>Fork &amp; Contribute</h3>\n      <p>All the components are <strong>open source</strong>.\n        You can <strong><a href=\"https://github.com/CreamLib/Angular_Code\">fork us on Github</a></strong>\n        and propose your own components.</p>\n  </li>\n  <li>\n    <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n      <use href=\"assets/img/icons.svg#responsiveIconSvg\"></use>\n    </svg>\n      <h3>Be Responsive</h3>\n      <p>All components were designed to be fully <strong>responsive</strong> and multi-device.</p>\n  </li>\n  <li>\n    <svg viewBox=\"0 0 24 24\" width=\"200\" height=\"50\">\n      <use href=\"assets/img/icons.svg#a11yIconSvg\"></use>\n    </svg>\n      <h3>Accessibility</h3>\n      <p>We're doing our best to create the most accessible Angular components! It is not a Javascript Framework that will stop us</p>\n  </li>\n\n  </ul>\n"

/***/ }),

/***/ "./src/app/main/accueil/accueil.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/accueil/accueil.component.ts ***!
  \***************************************************/
/*! exports provided: AccueilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilComponent", function() { return AccueilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var AccueilComponent = /** @class */ (function () {
    function AccueilComponent(app) {
        this.app = app;
    }
    AccueilComponent.prototype.ngOnInit = function () { };
    AccueilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil.component.html */ "./src/app/main/accueil/accueil.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./accueil.component.css */ "./src/app/main/accueil/accueil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], AccueilComponent);
    return AccueilComponent;
}());



/***/ }),

/***/ "./src/app/main/bottom-page/bottom-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYm90dG9tLXBhZ2UvYm90dG9tLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE FOOTER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Footer</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"bottom\">Footer(bottom) </a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION FOOTER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"footer\">\n    <h3>\n      Footer(bottom)\n    </h3>\n\n    <p>A simple footer</p>\n\n    <div class=\"demo\">\n      <p>The footer is positioned after the main content of the page</p>\n      <app-bottom copyright=\"©Copyright CreamNG - 2019 - Studio Worldline\">\n        <nav>\n          <ul>\n            <li>Home</li>\n            <li>F.a.q</li>\n            <li>Getting Started</li>\n          </ul>\n        </nav>\n      </app-bottom>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>copyright</dt>\n        <dd>Simple text that displays the copyright of the page</dd>\n      </dl>\n      <dl>\n        <dt>ng-content</dt>\n        <dd>Insert here the code in your footer</dd>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- Footer Component --&gt;\n  &lt;c3m-bottom copyright=&#34;©Copyright CreamNG - 2019 - Studio Worldline&#34;&gt;\n    &lt;nav&gt;\n      &lt;ul&gt;\n        &lt;li&gt;Home&lt;/li&gt;\n        &lt;li&gt;F.a.q&lt;/li&gt;\n        &lt;li&gt;Getting Started&lt;/li&gt;\n      &lt;/ul&gt;\n    &lt;/nav&gt;\n  &lt;/c3m-bottom&gt;\n          </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/bottom-page/bottom-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BottomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomPageComponent", function() { return BottomPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var BottomPageComponent = /** @class */ (function () {
    function BottomPageComponent(app) {
        this.app = app;
    }
    BottomPageComponent.prototype.ngOnInit = function () { };
    BottomPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom-page',
            template: __webpack_require__(/*! ./bottom-page.component.html */ "./src/app/main/bottom-page/bottom-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./bottom-page.component.css */ "./src/app/main/bottom-page/bottom-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], BottomPageComponent);
    return BottomPageComponent;
}());



/***/ }),

/***/ "./src/app/main/bottom-page/bottom/bottom.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom/bottom.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-bottom {\n  margin-top: 3rem;\n  display: block;\n}\n\napp-bottom .contentFooter {\n  background-color: #3e3e3e;\n  color: white;\n  padding: 1.2rem 1.3rem;\n}\n\napp-bottom .copyrightFooter {\n  background-color: #c5c5c5;\n  padding: 0.3rem 1rem;\n  font-size: 0.8rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ib3R0b20tcGFnZS9ib3R0b20vYm90dG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2JvdHRvbS1wYWdlL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYXBwLWJvdHRvbSAuY29udGVudEZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNlM2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS4ycmVtIDEuM3JlbTtcbn1cblxuYXBwLWJvdHRvbSAuY29weXJpZ2h0Rm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom/bottom.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom/bottom.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"contentFooter\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"copyrightFooter\">\n      <p>{{ copyright }}</p>\n    </div>\n"

/***/ }),

/***/ "./src/app/main/bottom-page/bottom/bottom.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/bottom-page/bottom/bottom.component.ts ***!
  \*************************************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BottomComponent.prototype, "copyright", void 0);
    BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom',
            template: __webpack_require__(/*! ./bottom.component.html */ "./src/app/main/bottom-page/bottom/bottom.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./bottom.component.css */ "./src/app/main/bottom-page/bottom/bottom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYnJlYWRjcnVtYnMtcGFnZS9icmVhZGNydW1icy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE STEP COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong> Breadcrumbs </strong> Component</h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"#breadcrumbs\">Simple Breadcrumbs</a>\n    </li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION STEP COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"breadcrumbs\">\n    <h3>Regular Breadcrumbs</h3>\n\n    <!-- Description -->\n    <div class=\"explain\">\n      <p>\n        Display the current page in the app hierarchy where each Item is a page and the last Item is the current page.\n      </p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- BREADCRUMBS -->\n      <app-breadcrumbs></app-breadcrumbs>\n    </div>\n\n    <!-- EXPLAIN -->\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>Model</dt>\n          <dd>\n            <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs/breadcrumbs.model.ts\"\n              >breadcrumbs.model.ts</a\n            >\n          </dd>\n        </div>\n        <div>\n          <dt>Module</dt>\n          <dd>\n            <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs/breadcrumbs.module.ts\"\n              >breadcrumbs.module.ts</a\n            >\n          </dd>\n        </div>\n        <div>\n          <dt>Service</dt>\n          <dd>\n            <a href=\"https://github.com/CreamNG/Components/tree/master/breadcrumbs/breadcrumbs.service.ts\"\n              >breadcrumbs.service.ts</a\n            >\n          </dd>\n        </div>\n      </dl>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n    &lt;!-- BREADCRUMBS --&gt;\n    &lt;c3m-breadcrumbs&gt;&lt;/c3m-breadcrumbs&gt;\n              </pre\n          >\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"Import\">\n        <p class=\"pre-code\">In your App Module</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  import &#123; BreadcrumbsModule &#125; from &apos;./module-breadcrumbs&apos;;\n\n  imports: [\n      RouterModule.forRoot(appRoutes),\n      BreadcrumbsModule\n  ]\n                </pre\n          >\n        </div>\n        <p class=\"pre-code\">The Breadcrumbs module</p>\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component&apos; ;\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service&apos; ;\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model&apos; ;\n  export * from &apos;../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module&apos; ;\n          </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsPageComponent", function() { return BreadcrumbsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var BreadcrumbsPageComponent = /** @class */ (function () {
    function BreadcrumbsPageComponent(app) {
        this.app = app;
    }
    BreadcrumbsPageComponent.prototype.ngOnInit = function () { };
    BreadcrumbsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs-page',
            template: __webpack_require__(/*! ./breadcrumbs-page.component.html */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./breadcrumbs-page.component.css */ "./src/app/main/breadcrumbs-page/breadcrumbs-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], BreadcrumbsPageComponent);
    return BreadcrumbsPageComponent;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-breadcrumbs li {\n  display: inline-block;\n  margin-right: 0.1rem;\n}\n\napp-breadcrumbs li:not(:last-of-type)::after {\n  display: inline-block;\n  content: '>';\n  padding: 0 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9icmVhZGNydW1icy1wYWdlL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2JyZWFkY3J1bWJzLXBhZ2UvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1icmVhZGNydW1icyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XG59XG5cbmFwcC1icmVhZGNydW1icyBsaTpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiAnPic7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n  <li><a href=\"/home\"> Home </a></li>\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\" [ngClass]=\"{ 'list': true, 'active': last }\">\n\n    <a *ngIf=\"!last\" [routerLink]=\"hasParams(breadcrumb)\">\n      {{breadcrumb.label}}\n    </a>\n    <span *ngIf=\"last\">{{ breadcrumb.label }}</span>\n  </li>\n</ol>\n"

/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _breadcrumbs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs.service */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts");






var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(breadcrumbService, activatedRoute, router) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        breadcrumbService.get().subscribe(function (breadcrumbs) {
            _this.breadcrumbs = breadcrumbs;
        });
    }
    BreadcrumbsComponent.prototype.hasParams = function (breadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    };
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        var ROUTE_PARAM_BREADCRUMB = 'breadcrumb';
        var PREFIX_BREADCRUMB = 'prefixBreadcrumb';
        // subscribe to the NavigationEnd event
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.router.events)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            // reset currentBreadcrumbs
            _this.currentBreadcrumbs = [];
            // get the root of the current route
            var currentRoute = _this.activatedRoute.root;
            // set the url to an empty string
            var url = '';
            var _loop_1 = function () {
                var childrenRoutes = currentRoute.children;
                var breadCrumbLabel = '';
                // iterate over each children
                childrenRoutes.forEach(function (route) {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]) {
                        return;
                    }
                    var hasData = route.routeConfig && route.routeConfig.data;
                    var hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);
                    if (hasData || hasDynamicBreadcrumb) {
                        /*
                        Verify the custom data property "breadcrumb"
                        is specified on the route or in its parameters.
          
                        Route parameters take precedence over route data
                        attributes.
                        */
                        if (hasDynamicBreadcrumb) {
                            breadCrumbLabel = route.snapshot.params[ROUTE_PARAM_BREADCRUMB].replace(/_/g, ' ');
                        }
                        else if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                            breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
                        }
                        // Get the route's URL segment
                        var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                        url += "/" + routeURL;
                        // Cannot have parameters on a root route
                        if (routeURL.length === 0) {
                            route.snapshot.params = {};
                        }
                        // Add breadcrumb
                        var breadcrumb = {
                            label: breadCrumbLabel,
                            params: route.snapshot.params,
                            url: url
                        };
                        // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                        if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                            _this.breadcrumbService.storePrefixed(breadcrumb);
                        }
                        else {
                            _this.currentBreadcrumbs.push(breadcrumb);
                        }
                    }
                });
                _this.breadcrumbService.store(_this.currentBreadcrumbs);
            };
            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                _loop_1();
            }
        });
    };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return BreadcrumbsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs.component */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumbs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumbs.service */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts");







var BreadcrumbsModule = /** @class */ (function () {
    function BreadcrumbsModule() {
    }
    BreadcrumbsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"]],
            providers: [_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsService"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            exports: [_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbsModule);
    return BreadcrumbsModule;
}());



/***/ }),

/***/ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts ***!
  \**************************************************************************/
/*! exports provided: BreadcrumbsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsService", function() { return BreadcrumbsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BreadcrumbsService = /** @class */ (function () {
    function BreadcrumbsService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = JSON.parse(localStorage.getItem('prefixedBreadcrumbs'));
        }
    }
    //Store the breadcrumbs of the current route
    BreadcrumbsService.prototype.store = function (breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    // Add a prefixed breadcrumb
    BreadcrumbsService.prototype.storePrefixed = function (breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    //Return the breadcrumbs
    BreadcrumbsService.prototype.get = function () {
        return this.breadcrumbsChanged$;
    };
    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    BreadcrumbsService.prototype.storeIfUnique = function (newBreadcrumb) {
        var isUnique = true;
        for (var _i = 0, _a = this.prefixedBreadcrumbs; _i < _a.length; _i++) {
            var crumb = _a[_i];
            if (newBreadcrumb.url === crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    };
    BreadcrumbsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbsService);
    return BreadcrumbsService;
}());



/***/ }),

/***/ "./src/app/main/button-page/button-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/button-page/button-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYnV0dG9uLXBhZ2UvYnV0dG9uLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/button-page/button-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/button-page/button-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Component Page Title -->\n<div class=\"panelTitle\">\n  <h2><strong>Buttons &amp; Controls</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#button\">General buttons</a></li>\n    <li><a scrollTo href=\"#button-icon\">Button with icons</a></li>\n    <li><a scrollTo href=\"#button-icon-only\">Button with icons only</a></li>\n    <li><a scrollTo href=\"#button-file\">Upload</a></li>\n    <li><a scrollTo href=\"#button-submit\">Submit</a></li>\n  </ul>\n</div>\n\n<!-- Component Title -->\n<div class=\"titleComponent\">\n  <!-- NORMAL BUTTON -->\n  <div class=\"descriptionComponent\" id=\"button\">\n    <h3>General Buttons</h3>\n\n    <!-- Description -->\n    <div class=\"explain\">\n      <p>General action buttons.</p>\n      <blockquote>\"If href has no value, then it is a button.\"</blockquote>\n    </div>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <ul class=\"buttons-bar\">\n        <li><c3m-button (click)=\"alert('general action')\">general action</c3m-button></li>\n        <li><c3m-button (click)=\"alert('submit action')\" ngClass=\"submit\">submit action</c3m-button></li>\n        <li><c3m-button (click)=\"alert('optional action')\" ngClass=\"optional\">optional action</c3m-button></li>\n      </ul>\n    </div>\n\n    <!-- CODE SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <!-- SNIPPETS HTML -->\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                      <code>\n  &lt;!-- Normal Buttons --&gt;\n  &lt;c3m-button&gt;general action&lt;/c3m-button&gt;\n  &lt;c3m-button ngClass=&#34;submit&#34; &gt;submit action&lt;/c3m-button&gt;\n  &lt;c3m-button ngClass=&#34;optional&#34; &gt;optional action&lt;/c3m-button&gt;</code>\n                  </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- ICONS BUTTONS -->\n  <div class=\"descriptionComponent\" id=\"button-icon\">\n    <h3>Icon Buttons</h3>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <ul class=\"buttons-bar\">\n        <li><c3m-button-icon class=\"icon-delete\">Delete</c3m-button-icon></li>\n        <li><c3m-button-icon class=\"icon-edit\">Edit</c3m-button-icon></li>\n        <li><c3m-button-icon class=\"icon-add\">Add</c3m-button-icon></li>\n      </ul>\n    </div>\n\n    <!-- CODE SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <!-- SNIPPETS HTML -->\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                    <code>\n&lt;c3m-button-icon class=&#34;icon-delete&#34;&gt;Delete&lt;/c3m-button-icon&gt;\n&lt;c3m-button-icon class=&#34;icon-edit&#34;&gt;Edit&lt;/c3m-button-icon&gt;\n&lt;c3m-button-icon class=&#34;icon-add&#34;&gt;Add&lt;/c3m-button-icon&gt;\n</code>\n                </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- ICON ONLY BUTTONS -->\n  <div class=\"descriptionComponent\" id=\"button-icon-only\">\n    <h3>Buttons With Icons Only</h3>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <ul class=\"buttons-bar\">\n        <li><c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only></li>\n        <li><c3m-button-icon-only class=\"icon-edit\">Edit</c3m-button-icon-only></li>\n        <li><c3m-button-icon-only class=\"icon-add\">Add</c3m-button-icon-only></li>\n      </ul>\n    </div>\n\n    <!-- CODE SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <!-- SNIPPETS HTML -->\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                    <code>\n&lt;c3m-button-icon-only class=&#34;icon-delete&#34;&gt;Delete&lt;/c3m-button-icon-only&gt;\n&lt;c3m-button-icon-only class=&#34;icon-edit&#34;&gt;Edit&lt;/c3m-button-icon-only&gt;\n&lt;c3m-button-icon-only class=&#34;icon-add&#34;&gt;Add&lt;/c3m-button-icon-only&gt;\n</code>\n                </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- UPLOAD BUTTON -->\n  <div class=\"descriptionComponent\" id=\"button-file\">\n    <h3>Upload Button</h3>\n\n    <div class=\"explain\">\n      <p>Allow the upload of multiple files.</p>\n    </div>\n    <div class=\"demo\">\n      <c3m-button-file>Files to upload</c3m-button-file>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- Button Upload --&gt;\n  &#x3C;c3m-button-file&#x3E;Choose a file&#x3C;/c3m-button-file&#x3E;\n                  </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n\n  <!-- SUBMIT BUTTON -->\n  <div class=\"descriptionComponent\" id=\"button-submit\">\n    <h3>Submit Button</h3>\n\n    <div class=\"explain\">\n      <p>\n        A standard submit input (should appear inside a form or be attached to\n        one).\n      </p>\n    </div>\n    <div class=\"demo\">\n      <c3m-button-submit inputValue=\"submit\"></c3m-button-submit>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n                      <code>\n  &lt;!-- Button Submit --&gt;\n  &#x3C;c3m-button-submit inputValue=&#x22;submit&#x22;&#x3E;&#x3C;/c3m-button-submit&#x3E; </code>\n                  </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/button-page/button-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/button-page/button-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageComponent", function() { return ButtonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonPageComponent = /** @class */ (function () {
    function ButtonPageComponent() {
    }
    ButtonPageComponent.prototype.alert = function (msg) {
        alert(msg);
    };
    ButtonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-page',
            template: __webpack_require__(/*! ./button-page.component.html */ "./src/app/main/button-page/button-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./button-page.component.css */ "./src/app/main/button-page/button-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonPageComponent);
    return ButtonPageComponent;
}());



/***/ }),

/***/ "./src/app/main/calendar-page/calendar-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.a11yExplain {\n  padding: 0.6rem 0;\n  font-size: 1.2rem;\n}\n\ndiv.explain dd {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAuYTExeUV4cGxhaW4ge1xuICBwYWRkaW5nOiAwLjZyZW0gMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmRpdi5leHBsYWluIGRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/calendar-page/calendar-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Component Page Title -->\n<div class=\"panelTitle\">\n  <h2><strong>Datepicker</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"#calendar\">Simple Datepicker</a></li>\n  </ul>\n</div>\n\n<!-- Component Title -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"calendar\">\n    <h3>Simple Datepicker</h3>\n\n    <div class=\"explain\">\n      <p>\n        Notice that most modern browsers today have powerful, native datepickers that are fully accessible and adapted\n        to the device. We suggest you to use it instead of a custom component; to do so, set the attribute\n        <code>type</code> to <em>date</em>.\n      </p>\n    </div>\n\n    <!-- Demo -->\n    <div class=\"demo\">\n      <c3m-calendar id=\"firstCalendar\" type=\"text\"></c3m-calendar>\n    </div>\n\n    <div class=\"explain\">\n      <h4>Accessibility Keys</h4>\n      <dl>\n        <div>\n          <dt><kbd>Up</kbd></dt>\n          <dd>Go back 7 days</dd>\n        </div>\n        <div>\n          <dt><kbd>Down</kbd></dt>\n          <dd>Advance 7 days</dd>\n        </div>\n        <div>\n          <dt><kbd>Left</kbd></dt>\n          <dd>Go back 1 day</dd>\n        </div>\n        <div>\n          <dt><kbd>Right</kbd></dt>\n          <dd>Avance 1 day</dd>\n        </div>\n        <div>\n          <dt><kbd>Page Up</kbd></dt>\n          <dd>Go to the previous Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>Page Down</kbd></dt>\n          <dd>Go to the next Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>Home</kbd></dt>\n          <dd>Go to the first day of Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>End</kbd></dt>\n          <dd>Go to the last day of Month if we are on the Calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>Esc</kbd></dt>\n          <dd>Exit the Calendar component</dd>\n        </div>\n        <div>\n          <dt><kbd>Tab</kbd></dt>\n          <dd>Go to previous button if we are on the calendar</dd>\n          <dd>Go to next button if we are on the previous button</dd>\n          <dd>Go to grid if we are on the next button</dd>\n        </div>\n        <div>\n          <dt><kbd>Shift + Tab</kbd></dt>\n          <dd>Go to previous button if we are on the next button</dd>\n          <dd>Go to next button if we are on the calendar</dd>\n          <dd>Go to grid if we are on the previous button</dd>\n        </div>\n        <div>\n          <dt><kbd>Enter</kbd> Or <kbd>Space</kbd></dt>\n          <dd>Go to next month if we are on the next button</dd>\n          <dd>Go to previous month if we are on the previous button</dd>\n          <dd>Select the focused date if we are on the calendar</dd>\n        </div>\n        <div>\n          <dt><kbd>CTRL + Enter</kbd> Or <kbd>Space</kbd></dt>\n          <dd>Go to next year if we are on the next button</dd>\n          <dd>Go to previous year if we are on the previous button</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n\n&lt;c3m-calendar type=&#34;text&#34;&gt;&lt;/c3m-calendar&gt;\n                    </pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/calendar-page/calendar-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/calendar-page/calendar-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageComponent", function() { return CalendarPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var CalendarPageComponent = /** @class */ (function () {
    function CalendarPageComponent(app) {
        this.app = app;
    }
    CalendarPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-page',
            template: __webpack_require__(/*! ./calendar-page.component.html */ "./src/app/main/calendar-page/calendar-page.component.html"),
            styles: [__webpack_require__(/*! ./calendar-page.component.css */ "./src/app/main/calendar-page/calendar-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], CalendarPageComponent);
    return CalendarPageComponent;
}());



/***/ }),

/***/ "./src/app/main/card-page/card-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/card-page/card-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2FyZC1wYWdlL2NhcmQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/card-page/card-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/card-page/card-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  card-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/card-page/card-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/card-page/card-page.component.ts ***!
  \*******************************************************/
/*! exports provided: CardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageComponent", function() { return CardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPageComponent = /** @class */ (function () {
    function CardPageComponent() {
    }
    CardPageComponent.prototype.ngOnInit = function () { };
    CardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-page',
            template: __webpack_require__(/*! ./card-page.component.html */ "./src/app/main/card-page/card-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./card-page.component.css */ "./src/app/main/card-page/card-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardPageComponent);
    return CardPageComponent;
}());



/***/ }),

/***/ "./src/app/main/card-page/card/card.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/card-page/card/card.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2FyZC1wYWdlL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/card-page/card/card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/card-page/card/card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  card works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/card-page/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/card-page/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/main/card-page/card/card.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/main/card-page/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/main/carousel-page/carousel-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2Fyb3VzZWwtcGFnZS9jYXJvdXNlbC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE CAROUSEL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Carousel</strong> Component</h2>\n  <a routerLink=\"/radio\" routerLinkActive=\"active\">Toaster</a>\n  <ul>\n    <li><a scrollTo href=\"carousel\">Carousel</a></li>\n    <!--<li><a href=\"#\">Automatic Carousel</a></li>\n    <li><a href=\"#\">Images Carousel</a></li>-->\n  </ul>\n</div>\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"carousel\">\n    <h3>Simple Carousel</h3>\n\n    <div class=\"demo\">\n      <!-- CAROUSEL DEMO -->\n      <c3m-carousel>\n        <c3m-carousel-item [index]=\"0\">\n          <p>Slide 1</p>\n        </c3m-carousel-item>\n\n        <c3m-carousel-item [index]=\"1\">\n          <p>Slide 2</p>\n        </c3m-carousel-item>\n\n        <c3m-carousel-item [index]=\"2\">\n          <p>Slide 3</p>\n        </c3m-carousel-item>\n      </c3m-carousel>\n\n      <c3m-carousel>\n        <c3m-carousel-item [index]=\"0\">\n          <p>Slide 1</p>\n        </c3m-carousel-item>\n\n        <c3m-carousel-item [index]=\"1\">\n          <p>Slide 2</p>\n        </c3m-carousel-item>\n\n        <c3m-carousel-item [index]=\"2\">\n          <p>Slide 3</p>\n        </c3m-carousel-item>\n      </c3m-carousel>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>index</dt>\n          <dd>Order of the slides</dd>\n        </div>\n        <div>\n          <dt>p tag</dt>\n          <dd>Write what you want, it's a ng-content tag</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n              <code>\n  &#x3C;c3m-carousel&#x3E;\n\n    &#x3C;c3m-carousel-item [index]=&#x22;0&#x22;&#x3E;\n        &#x3C;p&#x3E;Slide 1&#x3C;/p&#x3E;\n    &#x3C;/c3m-carousel-item&#x3E;\n\n    &#x3C;c3m-carousel-item [index]=&#x22;1&#x22;&#x3E;\n        &#x3C;p&#x3E;Slide 2&#x3C;/p&#x3E;\n    &#x3C;/c3m-carousel-item&#x3E;\n\n    &#x3C;c3m-carousel-item [index]=&#x22;2&#x22;&#x3E;\n        &#x3C;p&#x3E;Slide 3&#x3C;/p&#x3E;\n    &#x3C;/c3m-carousel-item&#x3E;\n\n  &#x3C;/c3m-carousel&#x3E;</code>\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/carousel-page/carousel-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/carousel-page/carousel-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CarouselPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPageComponent", function() { return CarouselPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var CarouselPageComponent = /** @class */ (function () {
    function CarouselPageComponent(app) {
        this.app = app;
    }
    CarouselPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-page',
            template: __webpack_require__(/*! ./carousel-page.component.html */ "./src/app/main/carousel-page/carousel-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./carousel-page.component.css */ "./src/app/main/carousel-page/carousel-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], CarouselPageComponent);
    return CarouselPageComponent;
}());



/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hlY2tib3gtcGFnZS9jaGVja2JveC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Checkboxes</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#checkbox\">Checkboxes</a></li>\n    <li><a scrollTo href=\"#checkbox-group\">Checkbox Group</a></li>\n    <li><a scrollTo href=\"#checkbox-link\">Checkbox with link in label</a></li>\n    <li><a scrollTo href=\"#checkbox-button\">Checkbox button</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION SLIDER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox\">\n    <h3>Checkboxes</h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-checkbox\n        title=\"Do you want check me?\"\n        name=\"checkboxName1\"\n        value=\"checkboxValue1\"\n        [id]=\"'checkbox1'\">\n      </c3m-checkbox>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The label tag</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The most important attribute : Link between Label and Input</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The name of input</dd>\n        </div>\n        <div>\n          <dt>class</dt>\n          <dd>allows to customize checkboxes (optional)</dd>\n        </div>\n        <div>\n          <dt>checked</dt>\n          <dd>if present, checkbox will be checked (optional)</dd>\n        </div>\n        <div>\n          <dt>required</dt>\n          <dd>if present, check will be required on submit (optional)</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>disable the checkbox (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <h4>Custom checkbox (add the <code>custom</code> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-checkbox\n        title=\"Do you want check me?\"\n        name=\"checkboxName2\"\n        value=\"checkboxValue2\"\n        [id]=\"'checkbox2'\"\n        class=\"custom\">\n      </c3m-checkbox>\n    </div>\n\n    <h4>Unstressed labels (add the <code>unstressed</code> class)</h4>\n\n    <div class=\"demo\">\n        <!-- SIMPLE CHECKBOX -->\n        <c3m-checkbox\n          title=\"Do you want check me? This case is suitable for longer labels\"\n          name=\"checkboxName3\"\n          value=\"checkboxValue3\"\n          [id]=\"'checkbox3'\"\n          class=\"unstressed\">\n        </c3m-checkbox>\n    </div>\n\n    <h4>On-Off Button (add the <code>on-off</code> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-checkbox\n        title=\"Do you want check me?\"\n        name=\"checkboxOnOff\"\n        value=\"checked\"\n        [id]=\"'checkboxOnOff'\"\n        class=\"on-off\">\n      </c3m-checkbox>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE CHECKBOX --&gt;\n&lt;c3m-checkbox\n  title=&#34;Do you want check me?&#34;\n  name=&#34;checkboxName1&#34;\n  value=&#34;checkboxValue1&#34;\n  [id]=&#34;&apos;checkbox1&apos;&#34;&gt;\n&lt;/c3m-checkbox&gt;\n\n\n&lt;!-- CUSTOM CSS CHECKBOX --&gt;\n&lt;c3m-checkbox\n  title=&#34;Do you want check me?&#34;\n  name=&#34;checkboxName2&#34;\n  value=&#34;checkboxValue2&#34;\n  [id]=&#34;&apos;checkbox2&apos;&#34;\n  class=&#34;custom&#34;&gt;\n&lt;/c3m-checkbox&gt;\n\n&lt;!-- UNSTRESSED LABELS --&gt;\n&lt;c3m-checkbox\n  title=&#34;Do you want check me?&#34;\n  name=&#34;checkboxName3&#34;\n  value=&#34;checkboxValue3&#34;\n  [id]=&#34;&apos;checkbox3&apos;&#34;\n  class=&#34;unstressed&#34;&gt;\n&lt;/c3m-checkbox&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n\n<!-- CHECKBOX GROUP -->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox-group\">\n    <h3>Checkbox Group</h3>\n\n    <h4>Common List</h4>\n    <div class=\"demo\">\n      <c3m-checkbox-group legend=\"Which conferences would you like to attend?\">\n        <c3m-checkbox-group-item\n          title=\"Smashing Conf\"\n          name=\"conf\"\n          value=\"smash\"\n          [id]=\"'smash'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"An Event Apart\"\n          name=\"conf\"\n          value=\"apart\"\n          [id]=\"'apart'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"Performance Now\"\n          name=\"conf\"\n          value=\"perf\"\n          [id]=\"'perf'\">\n        </c3m-checkbox-group-item>\n      </c3m-checkbox-group>\n    </div>\n\n    <h4>Single Line (add the <em>go-along</em> class)</h4>\n    <div class=\"demo\">\n      <c3m-checkbox-group class=\"go-along\" legend=\"Which subjects are you interested on?\">\n        <c3m-checkbox-group-item\n          title=\"web\"\n          name=\"interest\"\n          value=\"web\"\n          [id]=\"'confWeb'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"mobile\"\n          name=\"interest\"\n          value=\"mobile\"\n          [id]=\"'confMob'\">\n        </c3m-checkbox-group-item>\n        <c3m-checkbox-group-item\n          title=\"cloud\"\n          name=\"interest\"\n          value=\"cloud\"\n          [id]=\"'confCloud'\">\n        </c3m-checkbox-group-item>\n      </c3m-checkbox-group>\n    </div>\n\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-checkbox-group class=&#34;go-along&#34; legend=&#34;Which subjects are you interested on?&#34;&gt;\n    &lt;c3m-checkbox-group-item\n      title=&#34;web&#34;\n      name=&#34;interest&#34;\n      value=&#34;web&#34;\n      [id]=&#34;'confWeb'&#34;&gt;\n    &lt;/c3m-checkbox-group-item&gt;\n    &lt;c3m-checkbox-group-item\n      title=&#34;mobile&#34;\n      name=&#34;interest&#34;\n      value=&#34;mobile&#34;\n      [id]=&#34;'confMob'&#34;&gt;\n    &lt;/c3m-checkbox-group-item&gt;\n    &lt;c3m-checkbox-group-item\n      title=&#34;cloud&#34;\n      name=&#34;interest&#34;\n      value=&#34;cloud&#34;\n      [id]=&#34;'confCloud'&#34;&gt;\n    &lt;/c3m-checkbox-group-item&gt;\n  &lt;/c3m-checkbox-group&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- RADIO GROUP BUTTON -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox-link\">\n    <h3>Checkbox With Link in Label</h3>\n\n    <div class=\"demo\">\n      <c3m-checkbox-link\n        [id]=\"'tofu'\"\n        name=\"tofu\"\n        value=\"ok\">\n        I've read and I agree with the <a href=\"#\">termes of use</a>\n      </c3m-checkbox-link>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-checkbox-link\n  [id]=&#34;'tofu'&#34;\n  name=&#34;tofu&#34;\n  value=&#34;ok&#34;&gt;\n  I've read and I agree with the &lt;a href=&#34;#&#34;&gt;termes of use&lt;/a&gt;\n&lt;/c3m-checkbox-link&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- RADIO CHECK BUTTON-->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"checkbox-button\">\n    <h3>Checkbox Button</h3>\n\n    <div class=\"demo\">\n      <!-- CHECKBOX BUTTON -->\n      <c3m-checkbox-button\n        title=\"Check me!\"\n        name=\"checkboxName3\">\n      </c3m-checkbox-button>\n    </div>\n\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- CHECKBOX BUTTON --&gt;\n&lt;c3m-checkbox-button\n  title=&#34;Check me !&#34;\n  name=&#34;checkboxName3&#34;&gt;\n&lt;/c3m-checkbox-button&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/checkbox-page/checkbox-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/checkbox-page/checkbox-page.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPageComponent", function() { return CheckboxPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var CheckboxPageComponent = /** @class */ (function () {
    function CheckboxPageComponent(app) {
        this.app = app;
    }
    CheckboxPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-page',
            template: __webpack_require__(/*! ./checkbox-page.component.html */ "./src/app/main/checkbox-page/checkbox-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox-page.component.css */ "./src/app/main/checkbox-page/checkbox-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], CheckboxPageComponent);
    return CheckboxPageComponent;
}());



/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZHJvcGRvd24tcGFnZS9kcm9wZG93bi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE MODAL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Dropdown</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"dropdown\">Simple Action Dropdown</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"dropdown\">\n    <h3>Dropdown</h3>\n\n    <div class=\"explain\">\n      <p>\n        The Dropdown component can be combined with \"c3m-button\" or \"c3m-button-link\" components, or directly with a\n        native link or a button.\n      </p>\n    </div>\n\n    <div class=\"demo\">\n      <c3m-dropdown nameDropdown=\"Dropdown\">\n        <c3m-dropdown-item>\n          <c3m-button>Action 1</c3m-button>\n        </c3m-dropdown-item>\n        <c3m-dropdown-item>\n          <c3m-button>Action 2</c3m-button>\n        </c3m-dropdown-item>\n        <c3m-dropdown-item>\n          <c3m-button-link url=\"#\" linkText=\"Action 3\"></c3m-button-link>\n        </c3m-dropdown-item>\n        <c3m-dropdown-item><a href=\"#\">Action 4</a></c3m-dropdown-item>\n      </c3m-dropdown>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;c3m-dropdown nameDropdown=&#34;Dropdown&#34;&gt;\n      &lt;c3m-dropdown-item nameDdItem=&#34;Item1&#34; url=&#34;creamng.github.io&#34;&gt;&lt;/c3m-dropdown-item&gt;\n      &lt;c3m-dropdown-item &gt;\n        &lt;c3m-button&gt;Action 1&lt;/c3m-button&gt;\n      &lt;/c3m-dropdown-item&gt;\n      &lt;c3m-dropdown-item nameDdItem=&#34;Item3&#34;&gt;&lt;/c3m-dropdown-item&gt;\n&lt;/c3m-dropdown&gt;\n              </pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <div class=\"properties\">\n      <h4>Properties</h4>\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>nameDropdown</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Label for the dropdown button</td>\n          </tr>\n          <tr>\n            <td>nameDdItem</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Label for the dropdown item (if using the c3m-dropdown-item component)</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/dropdown-page/dropdown-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/dropdown-page/dropdown-page.component.ts ***!
  \***************************************************************/
/*! exports provided: DropdownPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownPageComponent", function() { return DropdownPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var DropdownPageComponent = /** @class */ (function () {
    function DropdownPageComponent(app) {
        this.app = app;
    }
    DropdownPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdown-page',
            template: __webpack_require__(/*! ./dropdown-page.component.html */ "./src/app/main/dropdown-page/dropdown-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dropdown-page.component.css */ "./src/app/main/dropdown-page/dropdown-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], DropdownPageComponent);
    return DropdownPageComponent;
}());



/***/ }),

/***/ "./src/app/main/faq/faq.component.css":
/*!********************************************!*\
  !*** ./src/app/main/faq/faq.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmFxL2ZhcS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/faq/faq.component.html":
/*!*********************************************!*\
  !*** ./src/app/main/faq/faq.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COMPONENT PAGE HEADER FOR GETTING STARTED-->\n<div class=\"panelTitle\">\n  <h2>\n    <strong> Frequently Asked Questions (F.A.Q) </strong>\n  </h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"#svg\">SVG</a>\n    </li>\n  </ul>\n</div>\n\n<article class=\"post\">\n\n  <!-- ANGULAR 2 INSTALL -->\n  <section>\n    <h3 id=\"svg\">I have a problem with the icons, they do not appear. What should I do?</h3>\n\n    <div class=\"group\">\n      <p>We use the svg &lt;use&gt; tag to display the icons, thanks to an ID that we declare in our index.html.\n        You can find all declared SVG icons <a href=\"https://github.com/CreamNG/Components/_SVG/index.html\">here</a>\n      </p>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/main/faq/faq.component.ts":
/*!*******************************************!*\
  !*** ./src/app/main/faq/faq.component.ts ***!
  \*******************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () { };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/main/faq/faq.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/main/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmllbGRzZXQtcGFnZS9maWVsZHNldC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE MODAL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Fieldset</strong> Component</h2>\n  <ul>\n      <li><a scrollTo href=\"fieldset\">Normal Fieldset </a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"fieldset\">\n      <h3>Fieldset</h3>\n\n      <div class=\"explain\">\n        <p>Fieldset must be a child of a <code>form</code> element. Use it to group fields of the same nature</p>\n\n        <div class=\"tip\">\n          <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n          <div class=\"content\">\n            <p>The <code>legend</code> element is mandatory for fieldsets.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"demo\">\n          <c3m-fieldset legend=\"fieldset\">\n            This is the content of my Fieldset\n          </c3m-fieldset>\n      </div>\n\n      <div class=\"explain\">\n         <dl>\n            <dt>legend</dt>\n            <dd>legend of the fieldset</dd>\n          </dl>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"To call the component\">\n          <div class=\"code\">\n            <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n  &lt;c3m-fieldset legend=&#34;fieldset&#34;&gt;\n    This is the content of my Fieldset\n  &lt;/c3m-fieldset&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n      </c3m-tabs>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/fieldset-page/fieldset-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/fieldset-page/fieldset-page.component.ts ***!
  \***************************************************************/
/*! exports provided: FieldsetPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsetPageComponent", function() { return FieldsetPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var FieldsetPageComponent = /** @class */ (function () {
    function FieldsetPageComponent(app) {
        this.app = app;
    }
    FieldsetPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fieldset-page',
            template: __webpack_require__(/*! ./fieldset-page.component.html */ "./src/app/main/fieldset-page/fieldset-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./fieldset-page.component.css */ "./src/app/main/fieldset-page/fieldset-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], FieldsetPageComponent);
    return FieldsetPageComponent;
}());



/***/ }),

/***/ "./src/app/main/getting-started/getting-started.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/getting-started/getting-started.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/getting-started/getting-started.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/getting-started/getting-started.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- COMPONENT PAGE HEADER FOR GETTING STARTED-->\n<div class=\"panelTitle\">\n    <h2><strong> Getting Started </strong></h2>\n    <ul>\n        <li><a scrollTo href=\"#install\">Install Angular</a></li>\n        <li><a scrollTo href=\"#create\">Create Project</a></li>\n        <li><a scrollTo href=\"#start\">Start Project</a></li>\n        <li><a scrollTo href=\"#creamng\">Import CreamNG</a></li>\n    </ul>\n</div>\n\n\n<article class=\"post\">\n\n  <!-- ANGULAR 2 INSTALL -->\n  <section>\n      <h3 id=\"install\">How to install Angular 2</h3>\n\n      <div class=\"group\">\n        <h4>First Step</h4>\n        <p>The first Step is to download <a href=\"https://nodejs.org/en/\">Node.js</a> to use <strong> npm </strong>.</p>\n        <p>Npm is the <strong>package manager</strong> for JavaScript and the world’s largest software registry.</p>\n      </div>\n\n      <div class=\"group\">\n        <h4>Install NPM</h4>\n        <p>If you don't have the latest version of Npm, you can download it with this command line:</p>\n\n        <div class=\"code-ex\">\n          <code>npm install npm@latest -g</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>Install Angular</h4>\n        <p>The second step is to download <strong>Angular-Cli </strong> with npm.</p>\n        <p>Angular-Cli is a <strong>command line</strong> interface for Angular. It allows you to use:</p>\n        <div class=\"code-ex\">\n          <code>ng new</code>\n          <code>ng generate</code>\n          <code>ng serve</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>Update</h4>\n        <p>To get the latest Andular-Cli version:</p>\n\n        <div class=\"code-ex\">\n          <code>npm install -g angular-cli@latest</code>\n        </div>\n      </div>\n  </section>\n\n  <!-- CREATE A PROJECT -->\n  <section>\n      <h3 id=\"create\">How to create your project</h3>\n\n      <div class=\"group\">\n        <h4>New Project</h4>\n        <p>To create a <strong>new project</strong>, write this command:</p>\n        <div class=\"code-ex\">\n          <code>ng new angular-app-name</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>New Project with SASS</h4>\n        <p>If you want an Angular project that use <strong>SASS</strong>, write this command:</p>\n        <div class=\"code-ex\">\n          <code>ng new angular-app-name --style = scss</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>New Component</h4>\n        <p>To create a component, use:</p>\n        <div class=\"code-ex\">\n          <code>ng generate component my-component-name</code>\n        </div>\n\n        <p>You can use <strong>ng generate</strong> or just <abbr title=\"generate\">ng g</abbr>.</p>\n        <p>The others <strong>ng g</strong> attributes are:</p>\n        <div class=\"code-ex\">\n          <code>ng g component</code>\n          <code>ng g directive</code>\n          <code>ng g pipe</code>\n          <code>ng g service</code>\n          <code>ng g class</code>\n          <code>ng g guard</code>\n          <code>ng g interface</code>\n          <code>ng g enum</code>\n          <code>ng g module</code>\n        </div>\n    </div>\n  </section>\n\n\n  <!-- START ANGULAR 2 PROJECT -->\n  <section>\n    <h3 id=\"start\">How to start your project</h3>\n\n    <div class=\"group\">\n      <h4>Git Import</h4>\n      <p>If you got your project on <a href=\"https://github.com/\">Github</a>, the folder\n        will not contain a <strong>node-modules</strong> folder.</p>\n      <p>To download it, write this command:</p>\n      <div class=\"code-ex\">\n        <code>npm install</code>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <h4>Start Project</h4>\n      <p>To test your project, use:</p>\n      <div class=\"code-ex\">\n        <code>ng serve</code>\n      </div>\n    </div>\n  </section>\n\n\n  <!-- CREAM NG -->\n  <section>\n      <h3 id=\"creamng\">How to import CreamNG into your project</h3>\n\n      <div class=\"group\">\n        <h4>Installation</h4>\n        <p>Install via <a href=\"https://www.npmjs.com/\">npm</a>:</p>\n        <div class=\"code-ex\">\n          <code>npm install creamngnpm</code>\n        </div>\n      </div>\n\n      <div class=\"group\">\n        <h4>Import Me!</h4>\n        <p>Then include the <strong>CreamNG</strong> module in your app root module:</p>\n        <div class=\"code-ex\">\n          <code>import &#123; CreamNgModule &#125; from 'creamngnpm'; </code>\n        </div>\n      </div>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/main/getting-started/getting-started.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/getting-started/getting-started.component.ts ***!
  \*******************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () { };
    GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/main/getting-started/getting-started.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/main/getting-started/getting-started.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/main/input-page/input-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/input-page/input-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5wdXQtcGFnZS9pbnB1dC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/input-page/input-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/input-page/input-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n    <h2><strong>Inputs</strong></h2>\n    <ul>\n      <li><a scrollTo href=\"#input\">Regular Text Input</a></li>\n      <!--li><a scrollTo href=\"#input-floating\">Input Floating Label</a></li>\n      <li><a scrollTo href=\"#input-material\">Input Floating Material</a></li-->\n      <li><a scrollTo href=\"#input-search\">Search Input</a></li>\n      <li><a scrollTo href=\"#input-tel\">Phone Input</a></li>\n      <li><a scrollTo href=\"#input-mail\">E-mail Input</a></li>\n      <li><a scrollTo href=\"#input-url\">URL Input</a></li>\n      <li><a scrollTo href=\"#input-password\">Password Input</a></li>\n      <li><a scrollTo href=\"#input-error-msg\">Contextual Error Message</a></li>\n    </ul>\n</div>\n\n\n  <!-- INPUT REGULAR -->\n  <div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"input\">\n      <h3>Regular Text Input</h3>\n\n      <div class=\"demo\">\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'name1'\"\n          name=\"name1\"\n          placeholder=\"a placeholder\">\n          Enter your name\n        </c3m-input>\n      </div>\n\n      <div class=\"explain\">\n        <dl>\n          <div>\n            <dt>id</dt>\n            <dd>input's identifier</dd>\n          </div>\n          <div>\n            <dt>name</dt>\n            <dd>input's general identifier</dd>\n          </div>\n          <div>\n            <dt>value</dt>\n            <dd>input's current value (optional)</dd>\n          </div>\n          <div>\n            <dt>autocomplete</dt>\n            <dd>defaults to \"on\" (optional)</dd>\n          </div>\n          <div>\n            <dt>maxlength</dt>\n            <dd>the maximum allowed value length (optional)</dd>\n          </div>\n          <div>\n            <dt>required</dt>\n            <dd>when present, the element is required (optional)</dd>\n          </div>\n          <div>\n            <dt>disabled</dt>\n            <dd>when present, the element is disabled/read-only (optional)</dd>\n          </div>\n          <div>\n            <dt>placeholder</dt>\n            <dd>Placeholder value (optional)</dd>\n          </div>\n        </dl>\n\n        <div class=\"tip\">\n          <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n          <div class=\"content\">\n            <p>The <code>id</code> attribute of an input is very important for form accessibility. It allows\n            the user-agent to associate a label to its input.</p>\n            <p><code>Placeholders</code> don't replace labels; they should give hints on how to fill the input.</p>\n          </div>\n        </div>\n      </div>\n\n      <h4>Mandatory field</h4>\n      <div class=\"demo\">\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'name2'\"\n          name=\"name2\"\n          value=\"Peter Parker\"\n          required=\"required\">\n          Enter your name\n        </c3m-input>\n      </div>\n\n      <h4>Disabled field</h4>\n      <div class=\"demo\">\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'name3'\"\n          name=\"name3\"\n          value=\"Peter Parker\"\n          disabled=\"disabled\">\n          Enter your name\n        </c3m-input>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"To call the component\">\n          <div class=\"code\">\n             <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'name1'&#34;\n    name=&#34;name1&#34;\n    placeholder=&#34;a placeholder&#34;&gt;\n    Enter your name\n  &lt;/c3m-input&gt;\n\n&lt;!-- MANDATORY INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'name2'&#34;\n    name=&#34;name2&#34;\n    required=&#34;required&#34;&gt;\n    Enter your name\n  &lt;/c3m-input&gt;\n\n&lt;!-- DISABLED INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'name3'&#34;\n    name=&#34;name3&#34;\n    value=&#34;Peter Parker&#34;\n    disabled=&#34;disabled&#34;&gt;\n    Enter your name\n  &lt;/c3m-input&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n      </c3m-tabs>\n    </div>\n  </div>\n\n\n<!-- INPUT FLOATING LABEL\n<div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"input-floating\">\n      <h3>\n        <svg>\n          <use xlink:href=\"#gitListItem\"></use>\n        </svg>\n        Input Floating Label\n\n        <a href=\"https://github.com/CreamNG/Components/tree/master/input-floating\" class=\"gitBtn\" target=\"_blank\">\n          <svg>\n            <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n          </svg>\n\n          <span>Github</span></a>\n      </h3>\n\n      <p>Input with a floating label <code>bottom</code></p>\n\n      <div class=\"demo\">\n        <c3m-input-floating\n          title=\"Enter your name\"\n          floating=\"bottom\"\n          name=\"name1\"\n          id=\"name1\">\n        </c3m-input-floating>\n      </div>\n\n        <p>Input with a floating label <code>right</code></p>\n\n      <div class=\"demo\">\n          <c3m-input-floating\n            title=\"Enter your name\"\n            floating=\"right\"\n            name=\"name2\"\n            id=\"name2\">\n          </c3m-input-floating>\n      </div>\n\n\n      <div class=\"explain\">\n        <dl>\n          <dt>title</dt>\n          <dd>The label tag</dd>\n        </dl>\n        <dl>\n          <dt>placeholder</dt>\n          <dd>Placeholder value 'bottom', 'right' or 'top' </dd>\n        </dl>\n      </div>\n\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"HTML\">\n          <p class=\"pre-code\">To call the component</p>\n          <div class=\"code\">\n              <pre class=\"prettyprint linenums\">\n&lt;!-- FLOATING BOTTOM INPUT --&gt;\n&lt;c3m-input-floating\ntitle=&#34;Enter your name&#34;\nfloating=&#34;bottom&#34;\nname=&#34;name1&#34;\nid=&#34;name1&#34;&gt;\n&lt;/c3m-input-floating&gt;\n\n&lt;!-- FLOATING RIGHT INPUT --&gt;\n&lt;c3m-input-floating\ntitle=&#34;Enter your name&#34;\nfloating=&#34;right&#34;\nname=&#34;name1&#34;\nid=&#34;name1&#34;&gt;\n&lt;/c3m-input-floating&gt;\n\n              </pre>\n          </div>\n        </c3m-tab>\n\n      </c3m-tabs>\n    </div>\n</div> -->\n\n<!-- INPUT MATERIAL FLOATING LABEL\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-material\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Input Material Floating\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/input-material\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a>\n    </h3>\n    <p>Input Material Like (don't forget to add a <code>form</code> tag). </p>\n    <p>It uses the functionality <code>:placeholder-shown</code> that is not handled by all browsers</p>\n\n    <div class=\"demo\">\n      <c3m-input-material\n        title=\"Enter your name\"\n        placeholder=\"placeholder3\"\n        name=\"name3\"\n        id=\"name3\">\n      </c3m-input-material>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>title</dt>\n        <dd>The label tag</dd>\n      </dl>\n      <dl>\n        <dt>placeholder</dt>\n        <dd>Placeholder value (optional)</dd>\n      </dl>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\">To call the component</p>\n        <div class=\"code\">\n            <pre class=\"prettyprint linenums\">\n&lt;!-- Input Material --&gt;\n&lt;c3m-input-material\ntitle=&#34; Enter your name &#34;\nplaceholder=&#34;placeholder3&#34;\nname=&#34;name3&#34;\nid=&#34;name3&#34;&gt;\n&lt;/c3m-input-material&gt;\n\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div> -->\n\n<!-- INPUT TYPE SEARCH -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-search\">\n    <h3>Search Input</h3>\n\n    <div class=\"demo\">\n      <!-- INPUT SEARCH -->\n      <c3m-input-search\n        [id]=\"'main-search'\"\n        name=\"main-search\">\n        Search the site\n      </c3m-input-search>\n    </div>\n\n    <div class=\"explain\">\n      <p>The input type <code>search</code> will inherit all attributes from the generic <code>input</code> element.</p>\n    </div>\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- INPUT SEARCH --&gt;\n  &lt;c3m-input-search\n    [id]=&#34;'main-search'&#34;\n    name=&#34;main-search&#34;&gt;\n    Search the site\n  &lt;/c3m-input-search&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- INPUT TYPE PHONE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-tel\">\n    <h3>Phone Input</h3>\n\n    <div class=\"demo\">\n      <!-- INPUT PHONE -->\n      <c3m-input-tel\n        [id]=\"'phoneTelId'\"\n        name=\"phoneTelName\"\n        placeholder=\"+xx x.xx.xx.xx.xx\">\n        Enter your phone number\n      </c3m-input-tel>\n    </div>\n\n    <div class=\"explain\">\n      <p>The input type <code>tel</code> will inherit all attributes from the generic <code>input</code> element.\n        In addition, you may use also:</p>\n      <dl>\n        <div>\n          <dt>pattern</dt>\n          <dd>regular expression against which the control's value is to be checked (optional)</dd>\n        </div>\n        <div>\n          <dt>title</dt>\n          <dd>gives description of the pattern (mandatory if <code>pattern</code> is used)</dd>\n        </div>\n      </dl>\n\n      <div class=\"tip\">\n        <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n        <div class=\"content\">\n          <p>If you're using the <code>pattern</code> attribute, you should add a <code>title</code> attribute\n            to give a description of the pattern.</p>\n          <p>For pattern examples, check <a href=\"http://html5pattern.com/\">HTML Pattern</a>.</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n  &lt;!-- INPUT PHONE --&gt;\n  &lt;c3m-input-tel\n    [id]=&#34;'phoneTelId'&#34;\n    name=&#34;phoneTelName&#34;\n    placeholder=&#34;+xx x.xx.xx.xx.xx&#34;&gt;\n    Enter your phone number\n  &lt;/c3m-input-tel&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- URL -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-url\">\n    <h3>URL Input</h3>\n\n    <div class=\"demo\">\n      <div class=\"containerForDemo\">\n        <!-- INPUT URL -->\n        <c3m-input-url\n          id=\"'myUrl'\"\n          name=\"myUrl\"\n          placeholder=\"http://\">\n          URL of your personal site\n        </c3m-input-url>\n      </div>\n    </div>\n    <div class=\"explain\">\n      <p>The input type <code>url</code> will inherit all attributes from the generic <code>input</code> element.</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- INPUT URL --&gt;\n  &lt;c3m-input-url\n    id=&#34;'myUrl'&#34;\n    name=&#34;myUrl&#34;\n    placeholder=&#34;http://&#34;&gt;\n    URL of your personal site\n  &lt;/c3m-input-url&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- Password -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-password\">\n    <h3>Password Input</h3>\n\n    <div class=\"demo\">\n      <div class=\"containerForDemo\">\n        <!-- INPUT PASSWORD -->\n        <c3m-input-password\n          id=\"'myPwd'\"\n          name=\"myPwd\"\n          required=\"required\">\n          Password\n        </c3m-input-password>\n      </div>\n    </div>\n    <div class=\"explain\">\n      <p>The input type <code>password</code> will inherit all attributes from the generic <code>input</code> element.</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;c3m-input-password\n  id=&#34;'myPwd'&#34;\n  name=&#34;myPwd&#34;&gt;\n  required=&#34;required&#34;&gt;\n  Password\n&lt;/c3m-input-password&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- INPUT TYPE MAIL -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-mail\">\n    <h3>E-mail Input</h3>\n\n    <div class=\"demo\">\n      <!-- INPUT MAIL -->\n      <c3m-input-mail\n        [id]=\"'mailId'\"\n        name=\"mailName\"\n        placeholder=\"peter-parker@dailybugle.com\">\n        Enter your e-mail adress\n      </c3m-input-mail>\n    </div>\n\n    <div class=\"explain\">\n      <p>The input type <code>email</code> will inherit all attributes from the generic <code>input</code> element.\n        In addition, you may use also:</p>\n      <dl>\n        <div>\n          <dt>multiple</dt>\n          <dd>If present, allows the user to enter more than one value (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n  &lt;!-- INPUT MAIL --&gt;\n    &lt;c3m-input-mail\n      [id]=&#34;'mailId'&#34;\n      name=&#34;mailName&#34;\n      placeholder=&#34;peter-parker@dailybugle.com&#34;&gt;\n      Enter your e-mail adress\n  &lt;/c3m-input-mail&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- ERROR MESSAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"input-error-msg\">\n    <h3>Input Error Message</h3>\n    <div class=\"explain\">\n      <p>Contextual Input Error Message.</p>\n      <div class=\"tip\">\n        <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n         <p>Always place error messages before the associated field, so it can be read by screen-readers before\n         the field presenting the error.</p>\n      </div>\n    </div>\n\n    <div class=\"demo\">\n      <div class=\"containerForDemo\">\n        <!-- INPUT ERROR MESSAGE -->\n        <c3m-input-error-msg>\n          The field is not correct\n        </c3m-input-error-msg>\n\n        <!-- SIMPLE INPUT -->\n        <c3m-input\n          [id]=\"'nameBeforeError'\"\n          name=\"nameBeforeError\"\n          placeholder=\"oh, my!\">\n          Enter a name\n        </c3m-input>\n      </div>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- INPUT ERROR MESSAGE --&gt;\n  &lt;c3m-input-error-msg&gt;\n    The field is not correct\n  &lt;/c3m-input-error-msg&gt;\n\n  &lt;!-- SIMPLE INPUT --&gt;\n  &lt;c3m-input\n    [id]=&#34;'aField'&#34;\n    name=&#34;aField&#34;\n    placeholder=&#34;oh, my!&#34;&gt;\n    Enter a name\n  &lt;/c3m-input&gt;\n\n            </pre>\n        </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/input-page/input-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/input-page/input-page.component.ts ***!
  \*********************************************************/
/*! exports provided: InputPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageComponent", function() { return InputPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var InputPageComponent = /** @class */ (function () {
    function InputPageComponent(app) {
        this.app = app;
    }
    InputPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-page',
            template: __webpack_require__(/*! ./input-page.component.html */ "./src/app/main/input-page/input-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./input-page.component.css */ "./src/app/main/input-page/input-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], InputPageComponent);
    return InputPageComponent;
}());



/***/ }),

/***/ "./src/app/main/list-page/list-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/list-page/list-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbGlzdC1wYWdlL2xpc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/list-page/list-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/list-page/list-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panelTitle\">\n  <h2>\n    <strong>List</strong> Component</h2>\n  <ul>\n    <li>\n      <a scrollTo href=\"#list\">Regular List</a>\n    </li>\n    <li>\n      <a scrollTo href=\"#list-order\">Ordered List</a>\n    </li>\n    <li>\n      <a scrollTo href=\"#list-thumbnails\">List with thumbnails</a>\n    </li>\n    <li>\n        <a scrollTo href=\"#list-description\">Description list</a>\n      </li>\n  </ul>\n</div>\n\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"list\">\n    <h3>Regular List</h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE LIST -->\n      <c3m-list>\n      </c3m-list>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <dt>dataList</dt>\n        <dd>The data in the list comes from a JSON file</dd>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- SIMPLE LIST --&gt;\n  &lt;c3m-list&gt;\n  &lt;/c3m-list&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n\n      <c3m-tab tabTitle=\"JSON\">\n          <p class=\"pre-code\"> dataList.json</p>\n          <div class=\"code\">\n            <!--?prettify lang=js linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n[\n  &#123;\n      &#34;value&#34;: &#34;List Item 1&#34;,\n  &#125;,\n  &#123;\n      &#34;value&#34;: &#34;List Item 2&#34;,\n  &#125;,\n  &#123;\n      &#34;value&#34;: &#34;List Item 3&#34;,\n  &#125;,\n  &#123;\n      &#34;value&#34;: &#34;List Item 4&#34;,\n  &#125;\n]\n              </pre>\n          </div>\n      </c3m-tab>\n\n    </c3m-tabs>\n  </div>\n</div>\n\n\n<div class=\"titleComponent\">\n    <div class=\"descriptionComponent\" id=\"list-order\">\n      <h3>Ordered List</h3>\n\n      <div class=\"demo\">\n        <!-- SIMPLE LIST -->\n        <c3m-list-order>\n        </c3m-list-order>\n      </div>\n\n      <div class=\"explain\">\n        <dl>\n          <dt>dataList</dt>\n          <dd>The data in the list comes from a JSON file</dd>\n        </dl>\n      </div>\n\n      <!-- TABS SNIPPETS -->\n      <c3m-tabs class=\"snippets\">\n        <c3m-tab tabTitle=\"To call the component\">\n          <div class=\"code\">\n            <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n    &lt;!-- SIMPLE LIST --&gt;\n    &lt;c3m-list-order&gt;\n    &lt;/c3m-list-order&gt;\n              </pre>\n          </div>\n        </c3m-tab>\n\n        <c3m-tab tabTitle=\"JSON\">\n            <p class=\"pre-code\"> dataList.json</p>\n            <div class=\"code\">\n              <!--?prettify lang=js linenums=true?-->\n                <pre class=\"prettyprint linenums\">\n[\n    &#123;\n        &#34;value&#34;: &#34;List Item 1&#34;,\n    &#125;,\n    &#123;\n        &#34;value&#34;: &#34;List Item 2&#34;,\n    &#125;,\n    &#123;\n        &#34;value&#34;: &#34;List Item 3&#34;,\n    &#125;,\n    &#123;\n        &#34;value&#34;: &#34;List Item 4&#34;,\n    &#125;\n]\n                </pre>\n            </div>\n        </c3m-tab>\n      </c3m-tabs>\n    </div>\n  </div>\n\n\n\n  <div class=\"titleComponent\">\n      <div class=\"descriptionComponent\" id=\"list-thumbnails\">\n        <h3>List with thumbnails</h3>\n\n        <div class=\"demo\">\n          <!-- SIMPLE LIST -->\n          <c3m-list-thumbnails>\n          </c3m-list-thumbnails>\n        </div>\n\n        <div class=\"explain\">\n          <dl>\n            <div>\n              <dt>dataList</dt>\n              <dd>The data in the list comes from a JSON file</dd>\n            </div>\n            <div>\n              <dt>placeholder.com</dt>\n              <dd>Fake image with a specific size</dd>\n              </div>\n            </dl>\n        </div>\n\n        <!-- TABS SNIPPETS -->\n        <c3m-tabs class=\"snippets\">\n          <c3m-tab tabTitle=\"To call the component\">\n            <div class=\"code\">\n              <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n      &lt;!-- SIMPLE LIST --&gt;\n      &lt;c3m-list-thumbnails&gt;\n      &lt;/c3m-list-thumbnails&gt;\n                </pre>\n            </div>\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"JSON\">\n              <p class=\"pre-code\"> dataList.json</p>\n              <div class=\"code\">\n                <!--?prettify lang=js linenums=true?-->\n                  <pre class=\"prettyprint linenums\">\n  [\n      &#123;\n          &#34;value&#34;: &#34;List Item 1&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;,\n      &#123;\n          &#34;value&#34;: &#34;List Item 2&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;,\n      &#123;\n          &#34;value&#34;: &#34;List Item 3&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;,\n      &#123;\n          &#34;value&#34;: &#34;List Item 4&#34;,\n          &#34;url&#34;: &#34;http://via.placeholder.com/150x150&#34;,\n      &#125;\n  ]\n                  </pre>\n              </div>\n          </c3m-tab>\n        </c3m-tabs>\n      </div>\n    </div>\n\n\n  <div class=\"titleComponent\">\n      <div class=\"descriptionComponent\" id=\"list-description\">\n        <h3>Description List</h3>\n\n        <div class=\"demo\">\n          <!-- SIMPLE LIST -->\n          <c3m-list-description>\n          </c3m-list-description>\n        </div>\n\n        <div class=\"explain\">\n          <dl>\n            <dt>dataList</dt>\n            <dd>The data in the list comes from a JSON file</dd>\n          </dl>\n        </div>\n\n        <!-- TABS SNIPPETS -->\n        <c3m-tabs class=\"snippets\">\n          <c3m-tab tabTitle=\"To call the component\">\n            <div class=\"code\">\n              <!--?prettify lang=html linenums=true?-->\n              <pre class=\"prettyprint linenums\">\n      &lt;!-- SIMPLE LIST --&gt;\n      &lt;c3m-list-description&gt;\n      &lt;/c3m-list-description&gt;\n                </pre>\n            </div>\n          </c3m-tab>\n\n          <c3m-tab tabTitle=\"JSON\">\n              <p class=\"pre-code\"> dataList.json</p>\n              <div class=\"code\">\n                <!--?prettify lang=js linenums=true?-->\n                  <pre class=\"prettyprint linenums\">\n  [\n      &#123;\n          &#34;title&#34;: &#34;List Title 1&#34;,\n          &#34;content&#34;: &#34;List Content 1&#34;\n      &#125;,\n      &#123;\n          &#34;title&#34;: &#34;List Title 2&#34;,\n          &#34;content&#34;: &#34;List Content 2&#34;\n      &#125;,\n      &#123;\n          &#34;title&#34;: &#34;List Title 3&#34;,\n          &#34;content&#34;: &#34;List Content 3&#34;\n      &#125;,\n      &#123;\n          &#34;title&#34;: &#34;List Title 4&#34;,\n          &#34;content&#34;: &#34;List Content 4&#34;\n      &#125;\n  ]\n                  </pre>\n              </div>\n          </c3m-tab>\n\n        </c3m-tabs>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/main/list-page/list-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/list-page/list-page.component.ts ***!
  \*******************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var ListPageComponent = /** @class */ (function () {
    function ListPageComponent(app) {
        this.app = app;
    }
    ListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "./src/app/main/list-page/list-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./list-page.component.css */ "./src/app/main/list-page/list-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\n <!-- MAIN CONTENT -->\n  <div class=\"contentMain\">\n    <ng-content></ng-content>\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var svgxuse_svgxuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svgxuse/svgxuse.js */ "./node_modules/svgxuse/svgxuse.js");
/* harmony import */ var svgxuse_svgxuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svgxuse_svgxuse_js__WEBPACK_IMPORTED_MODULE_2__);



var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        // test if the browser support shadow for svg use
        function supports_shadow() {
            if (document.head.attachShadow) {
                return true;
            }
            else {
                return false;
            }
        }
        //if not use svgxuse function
        if (!supports_shadow()) {
            svgxuse_svgxuse_js__WEBPACK_IMPORTED_MODULE_2__();
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/modal-page/modal-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/modal-page/modal-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-button {\n  margin-right: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tb2RhbC1wYWdlL21vZGFsLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kYWwtcGFnZS9tb2RhbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjM20tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/modal-page/modal-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/modal-page/modal-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE MODAL COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Modal</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"modal\">Dialog Modal</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION ACCORDION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"modal\">\n    <h3>Dialog Modal</h3>\n\n    <div class=\"explain\">\n      <p>Opens a dialog modal with focus set on the modal title. Focus loops inside the modal.</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- MODAL DEMO -->\n      <c3m-button ngClass=\"info\" (click)=\"OpenModal(modal1)\">Open Modal 1</c3m-button>\n      <c3m-modal\n        modaTitle=\"Modal exemple 1\"\n        (onShow)=\"modalOpened($event)\"\n        (onHide)=\"modalClosed($event)\"\n        topPosition=\"100\"\n        modalWidth=\"700\"\n        #modal1\n      >\n        <p>\n          Cyprum itidem insulam procul a continenti discretam et portuosam inter municipia crebra urbes duae faciunt\n          claram Salamis et Paphus, altera Iovis delubris altera Veneris templo insignis. tanta autem tamque multiplici\n          fertilitate abundat rerum omnium eadem Cyprus ut nullius externi indigens adminiculi indigenis viribus a\n          fundamento ipso carinae ad supremos usque carbasos aedificet onerariam navem omnibusque armamentis instructam\n          mari committat.\n        </p>\n        <p>\n          Haec et huius modi quaedam innumerabilia ultrix facinorum impiorum bonorumque praemiatrix aliquotiens operatur\n          Adrastia atque utinam semper quam vocabulo duplici etiam Nemesim appellamus: ius quoddam sublime numinis\n          efficacis, humanarum mentium opinione lunari circulo superpositum, vel ut definiunt alii, substantialis tutela\n          generali potentia partilibus praesidens fatis, quam theologi veteres fingentes Iustitiae filiam ex abdita\n          quadam aeternitate tradunt omnia despectare terrena.\n        </p>\n        <p>\n          <a href=\"#\">Need more ?</a>\n        </p>\n      </c3m-modal>\n\n      <c3m-button ngClass=\"info\" (click)=\"OpenModal(modal2)\">Open Modal 2</c3m-button>\n      <c3m-modal\n        modaTitle=\"Modal exemple 2\"\n        (onShow)=\"modalOpened($event)\"\n        (onHide)=\"modalClosed($event)\"\n        topPosition=\"100\"\n        modalWidth=\"700\"\n        #modal2\n      >\n        <p>\n          Cyprum itidem insulam procul a continenti discretam et portuosam inter municipia crebra urbes duae faciunt\n          claram Salamis et Paphus, altera Iovis delubris altera Veneris templo insignis. tanta autem tamque multiplici\n          fertilitate abundat rerum omnium eadem Cyprus ut nullius externi indigens adminiculi indigenis viribus a\n          fundamento ipso carinae ad supremos usque carbasos aedificet onerariam navem omnibusque armamentis instructam\n          mari committat.\n        </p>\n      </c3m-modal>\n\n      <c3m-toast #toast1 delay=\"5000\"> Modal1 is opened ! </c3m-toast>\n      <c3m-toast #toast2 delay=\"5000\"> Modal1 is closed ! </c3m-toast>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-button (click)=&#x22;OpenModal()&#x22;&#x3E;Open Modal&#x3C;/c3m-button&#x3E;\n  &#x3C;c3m-modal&#x3E;&#x3C;/c3m-modal&#x3E;\n                    </pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <div class=\"properties\">\n      <h4>Properties</h4>\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>modaTitle</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Title of the modal</td>\n          </tr>\n          <tr>\n            <td>styleClass</td>\n            <td>string</td>\n            <td>null</td>\n            <td>Class for the component</td>\n          </tr>\n          <tr>\n            <td>topPosition</td>\n            <td>number</td>\n            <td>null</td>\n            <td>Top coordinate of the modal</td>\n          </tr>\n          <tr>\n            <td>leftPosition</td>\n            <td>number</td>\n            <td>null</td>\n            <td>Left coordinate of the modal. It will be interpretate in percentage (for responsive)</td>\n          </tr>\n          <tr>\n            <td>modalWidth</td>\n            <td>number</td>\n            <td>null</td>\n            <td>Width of the modal. No useful if leftPosition is set.</td>\n          </tr>\n          <tr>\n            <td>closeBtnTitle</td>\n            <td>string</td>\n            <td>null</td>\n            <td>Aria-label for close button</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"properties\">\n      <h4>Events</h4>\n\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Parameter</th>\n          <th>Description</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>onShow</td>\n            <td>event: Modal object</td>\n            <td>Callback to invoke when dialog is shown.</td>\n          </tr>\n          <tr>\n            <td>onHide</td>\n            <td>event: Modal object</td>\n            <td>Callback to invoke when dialog is shown.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modal-page/modal-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/modal-page/modal-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageComponent", function() { return ModalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var creamnglib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! creamnglib */ "./dist/creamnglib/fesm5/creamlib-ng.js");




var ModalPageComponent = /** @class */ (function () {
    function ModalPageComponent(app) {
        this.app = app;
    }
    ModalPageComponent.prototype.OpenModal = function (eventM) {
        console.log('Open the modal');
        console.log(this.modal1);
        eventM.ToggleOpen();
    };
    ModalPageComponent.prototype.modalOpened = function (event) {
        console.log('Event launched when modal is opened :');
        console.log(event);
        this.toast1.toggle();
    };
    ModalPageComponent.prototype.modalClosed = function (event) {
        console.log('Event launched when modal is closed :');
        console.log(event);
        this.toast2.toggle();
    };
    ModalPageComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(creamnglib__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", creamnglib__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"])
    ], ModalPageComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalPageComponent.prototype, "modal1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalPageComponent.prototype, "modal2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toast1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalPageComponent.prototype, "toast1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toast2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalPageComponent.prototype, "toast2", void 0);
    ModalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-page',
            template: __webpack_require__(/*! ./modal-page.component.html */ "./src/app/main/modal-page/modal-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./modal-page.component.css */ "./src/app/main/modal-page/modal-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ModalPageComponent);
    return ModalPageComponent;
}());



/***/ }),

/***/ "./src/app/main/pagination-page/pagination-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFnaW5hdGlvbi1wYWdlL3BhZ2luYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/pagination-page/pagination-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE PAGINATION COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Pagination</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"pagination\">Pagination</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION PAGINATION COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"pagination\">\n    <h3>\n      Pagination\n    </h3>\n\n    <p>A simple page pagination.</p>\n\n    <div class=\"demo\">\n      <!-- Pagination Demo -->\n      <c3m-pagination\n        imgFirst=\"/assets/img/first.svg\"\n        imgBack=\"/assets/img/previous.svg\"\n        imgNext=\"/assets/img/next.svg\"\n        imgLast=\"/assets/img/last.svg\"\n      >\n      </c3m-pagination>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-pagination imgFirst=\"/assets/img/first.svg\" imgBack=\"/assets/img/previous.svg\" imgNext=\"/assets/img/next.svg\"\n  imgLast=\"/assets/img/last.svg\"&#x3E;&#x3C;/c3m-pagination&#x3E;\n                    </pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <div class=\"properties\">\n      <h4>Properties</h4>\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>pageSize</td>\n            <td>number</td>\n            <td>Null</td>\n            <td>\n              allows you to change the value of items per page (You will need to download\n              <em\n                ><a href=\"https://github.com/CreamNG/Components/blob/master/pagination/pager.service.ts\" target=\"_blank\"\n                  >pager.service.ts</a\n                ></em\n              >\n            </td>\n          </tr>\n          <tr>\n            <td>imgFirst</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Image for the return to first page button</td>\n          </tr>\n          <tr>\n            <td>imgBack</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Image for the previous button</td>\n          </tr>\n          <tr>\n            <td>imgNext</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Image for the next button</td>\n          </tr>\n          <tr>\n            <td>imgLast</td>\n            <td>string</td>\n            <td>Not null</td>\n            <td>Image for the go to last page button</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/pagination-page/pagination-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/pagination-page/pagination-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaginationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPageComponent", function() { return PaginationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var PaginationPageComponent = /** @class */ (function () {
    function PaginationPageComponent(app) {
        this.app = app;
    }
    PaginationPageComponent.prototype.ngOnInit = function () { };
    PaginationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination-page',
            template: __webpack_require__(/*! ./pagination-page.component.html */ "./src/app/main/pagination-page/pagination-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pagination-page.component.css */ "./src/app/main/pagination-page/pagination-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], PaginationPageComponent);
    return PaginationPageComponent;
}());



/***/ }),

/***/ "./src/app/main/radio-page/radio-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/radio-page/radio-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmFkaW8tcGFnZS9yYWRpby1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/radio-page/radio-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/radio-page/radio-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Radio</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"#radio\">Radios</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION SLIDER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"radio\">\n    <h3>Radios</h3>\n\n    <div class=\"explain\">\n      <p>Rememeber that all radios from the same group must share the same <code>name</code> attribute value.</p>\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The label description</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The value of the <code>name</code> attribute</dd>\n        </div>\n        <div>\n          <dt>value</dt>\n          <dd>The value of the input <code>value</code> attribute</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The value of the <code>id</code> attribute</dd>\n        </div>\n        <div>\n          <dt>checked</dt>\n          <dd>if present, checkbox will be checked (optional)</dd>\n        </div>\n        <div>\n          <dt>required</dt>\n          <dd>if present, check will be required on submit (optional)</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>disable the checkbox (optional)</dd>\n        </div>\n        <div>\n          <dt>classes (optional)</dt>\n          <dd><em>go-along</em>, <em>switch</em></dd>\n        </div>\n      </dl>\n\n      <div class=\"tip\">\n        <svg width=\"40\" height=\"40\"><use href=\"assets/img/icons.svg#tip\" /></svg>\n        <p>The <code>id</code> attribute of an input is very important for form accessibility. It allows\n        the user-agent to associate a label to its input.</p>\n      </div>\n    </div>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-radio legend=\"Which star do you prefer?\">\n        <c3m-radio-item\n          title=\"Star Wars\"\n          [id]=\"'series1'\"\n          name=\"series\"\n          value=\"series1\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Star Trek\"\n          [id]=\"'series2'\"\n          name=\"series\"\n          value=\"series2\"\n          checked=\"checked\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Star Gate\"\n          [id]=\"'series3'\"\n          name=\"series\"\n          value=\"series3\">\n        </c3m-radio-item>\n      </c3m-radio>\n    </div>\n\n    <h4>Single line radios (add the <em>go-along</em> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SIMPLE CHECKBOX -->\n      <c3m-radio class=\"go-along\" legend=\"Star Trek is the best?\">\n        <c3m-radio-item\n          title=\"Yes\"\n          name=\"startrekisbest\"\n          value=\"startrek\"\n          [id]=\"'best1'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"No\"\n          name=\"startrekisbest\"\n          value=\"other\"\n          [id]=\"'best2'\">\n        </c3m-radio-item>\n      </c3m-radio>\n    </div>\n\n    <h4>Switch radios (add the <em>switch</em> class)</h4>\n\n    <div class=\"demo\">\n      <!-- SWITCH -->\n      <c3m-radio class=\"switch\" legend=\"Check the best star\">\n        <c3m-radio-item\n          title=\"Wars\"\n          name=\"starS\"\n          value=\"star1\"\n          [id]=\"'star1'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Trek\"\n          name=\"starS\"\n          value=\"star2\"\n          checked=\"checked\"\n          [id]=\"'star2'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Gate\"\n          name=\"starS\"\n          value=\"star3\"\n          [id]=\"'star3'\">\n        </c3m-radio-item>\n        <c3m-radio-item\n          title=\"Dust\"\n          name=\"starS\"\n          value=\"star5\"\n          [id]=\"'star5'\">\n        </c3m-radio-item>\n      </c3m-radio>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n&lt;!-- RADIOS --&gt;\n&lt;c3m-radio legend=&#34;Which star do you prefer?&#34;&gt;\n  &lt;c3m-radio-item\n    title=&#34;Star Wars&#34;\n    name=&#34;series&#34;\n    value=&#34;series1&#34;\n    [id]=&#34;'series1'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n  &lt;c3m-radio-item\n    title=&#34;Star Trek&#34;\n    name=&#34;series&#34;\n    value=&#34;series2&#34;\n    [id]=&#34;'series2'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n  &lt;c3m-radio-item\n    title=&#34;Star Gate&#34;\n    name=&#34;series&#34;\n    value=&#34;series3&#34;\n    [id]=&#34;'series3'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n&lt;/c3m-radio&gt;\n\n&lt;!-- RADIOS IN-LINE --&gt;\n&lt;c3m-radio class=&#34;go-along&#34; legend=&#34;Star Trek is the best?&#34;&gt;\n  &lt;c3m-radio-item\n    title=&#34;Yes&#34;\n    name=&#34;startrekisbest&#34;\n    value=&#34;startrek&#34;\n    [id]=&#34;'best1'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n  &lt;c3m-radio-item\n    title=&#34;No&#34;\n    name=&#34;startrekisbest&#34;\n    value=&#34;other&#34;\n    [id]=&#34;'best2'&#34;&gt;\n  &lt;/c3m-radio-item&gt;\n&lt;/c3m-radio&gt;\n\n&lt;!-- SWITCH --&gt;\n  &lt;c3m-radio class=&#34;switch&#34; legend=&#34;Check the star&#34;&gt;\n    &lt;c3m-radio-item\n      title=&#34;Wars&#34;\n      name=&#34;starS&#34;\n      value=&#34;star1&#34;\n      [id]=&#34;'star1'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n    &lt;c3m-radio-item\n      title=&#34;Trek&#34;\n      name=&#34;starS&#34;\n      value=&#34;star2&#34;\n      checked=&#34;checked&#34;\n      [id]=&#34;'star2'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n    &lt;c3m-radio-item\n      title=&#34;Gate&#34;\n      name=&#34;starS&#34;\n      value=&#34;star3&#34;\n      [id]=&#34;'star3'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n    &lt;c3m-radio-item\n      title=&#34;Dust&#34;\n      name=&#34;starS&#34;\n      value=&#34;star5&#34;\n      [id]=&#34;'star5'&#34;&gt;\n    &lt;/c3m-radio-item&gt;\n  &lt;/c3m-radio&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/radio-page/radio-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/radio-page/radio-page.component.ts ***!
  \*********************************************************/
/*! exports provided: RadioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPageComponent", function() { return RadioPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var RadioPageComponent = /** @class */ (function () {
    function RadioPageComponent(app) {
        this.app = app;
    }
    RadioPageComponent.prototype.ngOnInit = function () {
        var subComp = ['radio-item'];
    };
    RadioPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-page',
            template: __webpack_require__(/*! ./radio-page.component.html */ "./src/app/main/radio-page/radio-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./radio-page.component.css */ "./src/app/main/radio-page/radio-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], RadioPageComponent);
    return RadioPageComponent;
}());



/***/ }),

/***/ "./src/app/main/select-page/select-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/select-page/select-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2VsZWN0LXBhZ2Uvc2VsZWN0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/select-page/select-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/select-page/select-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panelTitle\">\n  <h2>\n    <strong>Selects &amp; Datalists</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#select\">Regular Select</a></li>\n    <li><a scrollTo href=\"#select-datalist\">Datalist</a></li>\n    <li><a scrollTo href=\"#select-datalists\">Combined Datalists</a></li>\n  </ul>\n</div>\n\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"select\">\n    <h3>Regular Select</h3>\n\n    <div class=\"explain\">\n      <p>Regular select component with JSON input for options.</p>\n    </div>\n\n    <div class=\"demo\" lang=\"en\">\n      <!-- SIMPLE SELECT -->\n      <c3m-select title=\"Choose an answer\" name=\"choice\" [id]=\"'choice'\">\n      </c3m-select>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The Label of the Input</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The name of the Input</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The id of the Input and the \"for\" Label Attribute</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- Select --&gt;\n&lt;c3m-select\n  title=&#34;Choose something&#34;\n  name=&#34;Choose Something&#34;\n  [id]=&#34;&apos;choice-something&apos;&#34;&gt;\n&lt;/c3m-select&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n\n\n<!-- ************************************* -->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"select-datalist\">\n    <h3>Datalist</h3>\n\n    <div class=\"explain\">\n      <p>Integrates native auto-completion system, with JSON source input.</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- Datalist Select -->\n      <c3m-select-datalist title=\"Choose an answer\" name=\"Choose Me\" list=\"mylist1\" [id]=\"'choose-me'\">\n      </c3m-select-datalist>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title</dt>\n          <dd>The Label of the Input</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>The name of the Input</dd>\n        </div>\n        <div>\n          <dt>list</dt>\n          <dd>Link between input and datalist</dd>\n        </div>\n        <div>\n          <dt>id</dt>\n          <dd>The id of the Input and the \"for\" Label Attribute</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- Datalist Select --&gt;\n&lt;c3m-select-datalist\n  title=&#34;Choose Me&#34;\n  name=&#34;Choose Me&#34;\n  list=&#34;mylist1&#34;\n  [id]=&#34;&apos;choice-me&apos;&#34;&gt;\n&lt;/c3m-select-datalist&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n\n<!-- ************************************* -->\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"select-datalists\">\n    <h3>Combined Datalists</h3>\n\n    <div class=\"explain\">\n      <p>You can associate two inputs to the same datalist.\n        Both datalists integrate the auto-completion system\n        (JSON).</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- Datalists Select -->\n      <c3m-select-datalists title1=\"Choose Me Please\" title2=\"Choose Me To\" name1=\"Choose Me1 \" name2=\"Choose Me2\" list=\"mylist2\"\n        [id1]=\"'choice-me1'\" [id2]=\"'choice-me2'\">\n      </c3m-select-datalists>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title1</dt>\n          <dd>Label of the first Input</dd>\n        </div>\n        <div>\n          <dt>title2</dt>\n          <dd>Label of the Second Input</dd>\n        </div>\n        <div>\n          <dt>name1</dt>\n          <dd>Name of the first Input</dd>\n        </div>\n        <div>\n          <dt>name2</dt>\n          <dd>Name of the first Input</dd>\n        </div>\n        <div>\n          <dt>title1</dt>\n          <dd>Label of the first Input</dd>\n        </div>\n        <div>\n          <dt>id1</dt>\n          <dd>ID of the first Input and \"for\" label attribute</dd>\n        </div>\n        <div>\n          <dt>id2</dt>\n          <dd>ID of the Second Input and \"for\" label attribute</dd>\n        </div>\n        <div>\n          <dt>list</dt>\n          <dd>Link between the DataList ID and the \"list\" attributes of the two lists</dd>\n        </div>\n      </dl>\n\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- Datalists Select --&gt;\n&lt;c3m-select-datalists\n  title1=&#34;Choose Me Please&#34;\n  title2=&#34;Choose Me To&#34;\n  name1=&#34;Choose Me1 &#34;\n  name2=&#34;Choose Me2&#34;\n  list=&#34;mylist2&#34;\n  [id1]=&#34;&apos;choice-me1&apos;&#34;\n  [id2]=&#34;&apos;choice-me2&apos;&#34;&gt;\n&lt;/c3m-select-datalists&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/select-page/select-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/select-page/select-page.component.ts ***!
  \***********************************************************/
/*! exports provided: SelectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageComponent", function() { return SelectPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var SelectPageComponent = /** @class */ (function () {
    function SelectPageComponent(app) {
        this.app = app;
    }
    SelectPageComponent.prototype.ngOnInit = function () { };
    SelectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-page',
            template: __webpack_require__(/*! ./select-page.component.html */ "./src/app/main/select-page/select-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./select-page.component.css */ "./src/app/main/select-page/select-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SelectPageComponent);
    return SelectPageComponent;
}());



/***/ }),

/***/ "./src/app/main/skip-page/skip-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/skip-page/skip-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2tpcC1wYWdlL3NraXAtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/skip-page/skip-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/skip-page/skip-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Skip Link</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"#skip1\">Skip link (invisible) </a></li>\n    <li><a scrollTo href=\"#skip2\">Skip link </a></li>\n  </ul>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\">\n    <h3>Require</h3>\n    <p>Before using anchor, you have to add some configurations to your routing system.</p>\n    <p>In your app.route file, add :</p>\n    <div class=\"code\">\n      <!--?prettify lang=html linenums=true?-->\n      <pre class=\"prettyprint linenums\">\nexport const routerOptions: ExtraOptions = &#123;\n  useHash: true,\n  anchorScrolling: &apos;enabled&apos;\n&#125;;\n      </pre>\n    </div>\n\n    <p>In your app.module file, add :</p>\n    <div class=\"code\">\n      <!--?prettify lang=html linenums=true?-->\n      <pre class=\"prettyprint linenums\">\nRouterModule.forRoot(appRoutes, routerOptions),\n      </pre>\n    </div>\n  </div>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"skip1\">\n    <h3>Skip Link (invisible)</h3>\n\n    <div class=\"explain\">\n      <p>\n        This link allows a screen-reader or keyboard user to skip big chunks of navigation links. The link is displayed\n        only when it gets focus with keyboard.\n      </p>\n    </div>\n    <div class=\"demo\">\n      <!-- SKIP LINK -->\n      <p class=\"explain\">Put focus on it to show it</p>\n      <c3m-skip [target]=\"'goTotheBottom1'\" isHidden=\"true\">Go to the main content </c3m-skip>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;c3m-skip [target]=&#34;&apos;goTotheBottom1&apos;&#34; isHidden=&#34;true&#34;&gt;Go to the main content&lt;/c3m-skip&gt;</pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <p id=\"goTotheBottom1\">I am the target of <strong>c3m-link</strong></p>\n  </div>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"skip2\">\n    <h3>Skip Link</h3>\n\n    <div class=\"demo\">\n      <!-- SKIP LINK -->\n      <c3m-skip [target]=\"'goTotheBottom2'\">Go to the main content</c3m-skip>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;c3m-skip [target]=&#34;&apos;goTotheBottom2&apos;&#34;&gt;Go to the main content&lt;/c3m-skip&gt;</pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <p id=\"goTotheBottom2\">I am the target of <strong>c3m-link</strong></p>\n  </div>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"properties\">\n    <h4>Properties</h4>\n    <table>\n      <thead>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>target</td>\n          <td>string</td>\n          <td>Not null</td>\n          <td>Id of targeted section</td>\n        </tr>\n        <tr>\n          <td>isHidden</td>\n          <td>boolean</td>\n          <td>false</td>\n          <td>Set to true if you want to hide the link</td>\n        </tr>\n        <tr>\n          <td>styleClass</td>\n          <td>string</td>\n          <td>Null</td>\n          <td>Class for the component</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/skip-page/skip-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/skip-page/skip-page.component.ts ***!
  \*******************************************************/
/*! exports provided: SkipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipPageComponent", function() { return SkipPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var SkipPageComponent = /** @class */ (function () {
    function SkipPageComponent(app) {
        this.app = app;
    }
    SkipPageComponent.prototype.ngOnInit = function () { };
    SkipPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skip-page',
            template: __webpack_require__(/*! ./skip-page.component.html */ "./src/app/main/skip-page/skip-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./skip-page.component.css */ "./src/app/main/skip-page/skip-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SkipPageComponent);
    return SkipPageComponent;
}());



/***/ }),

/***/ "./src/app/main/slider-page/slider-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/slider-page/slider-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2xpZGVyLXBhZ2Uvc2xpZGVyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/slider-page/slider-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/slider-page/slider-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE SLIDER COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Sliders &amp; Progress</strong></h2>\n  <ul>\n    <li><a scrollTo href=\"#slider\">Slider</a></li>\n    <li><a scrollTo href=\"#progress\">Progress Bar</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION SLIDER COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"slider\">\n    <h3>Slider</h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE SLIDER -->\n      <c3m-slider [id]=\"'slider1'\" name=\"checkboxName1\" min=\"0\" max=\"50\" value=\"45\" step=\"1\">\n        Choose a value\n      </c3m-slider>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>id</dt>\n          <dd>single field identifier</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>general field identifier</dd>\n        </div>\n        <div>\n          <dt>min</dt>\n          <dd>minimum slider value</dd>\n        </div>\n        <div>\n          <dt>max</dt>\n          <dd>maximum slider value</dd>\n        </div>\n        <div>\n          <dt>value</dt>\n          <dd>default value</dd>\n        </div>\n        <div>\n          <dt>step</dt>\n          <dd>steps value (integer or float)</dd>\n        </div>\n        <div>\n          <dt>class (optional)</dt>\n          <dd><em>bubble</em></dd>\n        </div>\n      </dl>\n    </div>\n\n    <h4>Tooltip Slider</h4>\n    <div class=\"explain\">\n      <p>The current value is displayed in a sliding tooltip.</p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- SLIDER WITH BUBBLE -->\n      <c3m-slider [id]=\"'slider2'\" min=\"0\" max=\"100\" value=\"30\" step=\"1\" class=\"bubble\">\n        Slider with Bubble\n      </c3m-slider>\n    </div>\n\n    <div class=\"explain\">\n      <p>Just add the class <em>bubble</em> when calling the <code>c3m-slider</code> component\n        to display the <code>output</code> element as a tooltip.</p>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE SLIDER --&gt;\n  &lt;c3m-slider\n    [id]=&#34;'slider1'&#34;\n    name=&#34;checkboxName1&#34;\n    min=&#34;0&#34;\n    max=&#34;50&#34;\n    value=&#34;45&#34;\n    step=&#34;1&#34;&gt;\n    Choose a value\n&lt;/c3m-slider&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"progress\">\n    <h3>Progress Bar</h3>\n\n    <div class=\"demo\">\n      <!-- SIMPLE PROGRESS BAR -->\n      <c3m-progress [id]=\"'prog1'\" name=\"prog1\" max=\"100\" value=\"30\">\n        Progress\n      </c3m-progress>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>id</dt>\n          <dd>single field identifier</dd>\n        </div>\n        <div>\n          <dt>name</dt>\n          <dd>general field identifier</dd>\n        </div>\n        <div>\n          <dt>value</dt>\n          <dd>indicates progress (floating between 0 and <code>max</code>)</dd>\n        </div>\n        <div>\n          <dt>max</dt>\n          <dd>maximum progress value, defaults to 1 (optional)</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>when present, the element is disabled/read-only (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n&lt;!-- SIMPLE PROGRESS BAR --&gt;\n  &lt;c3m-progress\n    [id]=&#34;'prog1'&#34;\n    name=&#34;prog1&#34;\n    title=&#34;Progress&#34;\n    max=&#34;100&#34;\n    value=&#34;30&#34;&gt;\n    Progress\n  &lt;/c3m-progress&gt;\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"spinner-progress\">\n    <h3>Progress Spinner</h3>\n\n    <div class=\"demo\">\n      <!-- SPINNER PROGRESS -->\n      <c3m-spinner-progress></c3m-spinner-progress>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>size</dt>\n          <dd>size of the spinner, defaults to 50px</dd>\n        </div>\n        <div>\n          <dt>disabled</dt>\n          <dd>when present, the element is disabled/read-only (optional)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n    &lt;!-- PROGRESS SPINNER --&gt;\n      &lt;c3m-spinner-progress size=&#34;50&#34;&gt;&lt;/c3m-progress&gt;\n                </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/slider-page/slider-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/slider-page/slider-page.component.ts ***!
  \***********************************************************/
/*! exports provided: SliderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageComponent", function() { return SliderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var SliderPageComponent = /** @class */ (function () {
    function SliderPageComponent(app) {
        this.app = app;
    }
    SliderPageComponent.prototype.ngOnInit = function () { };
    SliderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-page',
            template: __webpack_require__(/*! ./slider-page.component.html */ "./src/app/main/slider-page/slider-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./slider-page.component.css */ "./src/app/main/slider-page/slider-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], SliderPageComponent);
    return SliderPageComponent;
}());



/***/ }),

/***/ "./src/app/main/step-page/step-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/step-page/step-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc3RlcC1wYWdlL3N0ZXAtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/step-page/step-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/step-page/step-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE STEP COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong> Step </strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"#step\">Multiple Steps</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION STEP COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"step\">\n    <h3>\n      <svg>\n        <use xlink:href=\"#gitListItem\"></use>\n      </svg>\n      Multiple Steps\n\n      <a href=\"https://github.com/CreamNG/Components/tree/master/step\" class=\"gitBtn\" target=\"_blank\">\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#gitSvg\"></use>\n        </svg>\n\n        <span>Github</span></a\n      >\n    </h3>\n\n    <div class=\"explain\">\n      <p>\n        This component displays the different steps of a form if divided in different pages/containers. It will\n        automatically detect the previous and next steps.\n      </p>\n    </div>\n\n    <div class=\"demo\">\n      <!-- STEP -->\n      <c3m-step>\n        <!-- STEP ITEMS -->\n        <c3m-step-item isPassed=\"true\" stepLink=\"#\" title=\"Title Of Past Step\"></c3m-step-item>\n        <c3m-step-item isActive=\"true\" title=\"Title Of Active Step\"></c3m-step-item>\n        <c3m-step-item title=\"Title Of Future Step\"></c3m-step-item>\n        <c3m-step-item title=\"Title Of Future Step\"></c3m-step-item>\n        <c3m-step-item title=\"Title Of Future Step\"></c3m-step-item>\n      </c3m-step>\n    </div>\n\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &lt;!-- STEP --&gt;\n  &lt;c3m-step&gt;\n    &lt;!-- STEP ITEMS --&gt;\n    &lt;c3m-step-item isPassed=&#34;true&#34; stepLink=&#34;#&#34; title=&#34;Title Of Past Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item isActive=&#34;true&#34; title=&#34;Title Of Active Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item title=&#34;Title Of Future Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item title=&#34;Title Of Future Step&#34;&gt;&lt;/c3m-step-item&gt;\n    &lt;c3m-step-item title=&#34;Title Of Future Step&#34;&gt;&lt;/c3m-step-item&gt;\n  &lt;/c3m-step&gt;\n            </pre\n          >\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <div class=\"properties\">\n      <h4>Properties</h4>\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>isPassed</td>\n            <td>boolean</td>\n            <td>null</td>\n            <td>Define if a step is valid</td>\n          </tr>\n          <tr>\n            <td>stepLink</td>\n            <td>string</td>\n            <td>null</td>\n            <td>Link to go back to a step (only is a step is passed)</td>\n          </tr>\n          <tr>\n            <td>isActive</td>\n            <td>boolean</td>\n            <td>null</td>\n            <td>Define the active step</td>\n          </tr>\n          <tr>\n            <td>title</td>\n            <td>string</td>\n            <td>null</td>\n            <td>Label of the step</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/step-page/step-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/step-page/step-page.component.ts ***!
  \*******************************************************/
/*! exports provided: StepPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepPageComponent", function() { return StepPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var StepPageComponent = /** @class */ (function () {
    function StepPageComponent(app) {
        this.app = app;
    }
    StepPageComponent.prototype.ngOnInit = function () {
        var subComp = ['step-item'];
    };
    StepPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step-page',
            template: __webpack_require__(/*! ./step-page.component.html */ "./src/app/main/step-page/step-page.component.html"),
            styles: [__webpack_require__(/*! ./step-page.component.css */ "./src/app/main/step-page/step-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], StepPageComponent);
    return StepPageComponent;
}());



/***/ }),

/***/ "./src/app/main/table-page/table-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/table-page/table-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdGFibGUtcGFnZS90YWJsZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/table-page/table-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/table-page/table-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE TABLE COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong>Table</strong> Component</h2>\n  <ul>\n    <li><a scrollTo href=\"table\">Responsive row</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION TABLE COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"table\">\n    <h3>Responsive | Row Table</h3>\n\n    <div class=\"explain\">\n      <p>A fully responsive table suitable for when it makes sense to consult rows independently.</p>\n      <p>Please, note that this component uses <code>max-width</code> breakpoint; this makes the \"transformation\"\n        of the data easier and less verbose.</p>\n    </div>\n\n    <div class=\"demo\">\n        <!-- TABLE DEMO -->\n        <c3m-column-table></c3m-column-table>\n    </div>\n\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>title class</dt>\n          <dd>Necessary to make the table responsive</dd>\n        </div>\n        <div>\n          <dt>col scope</dt>\n          <dd>Necessary to make the table responsive</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n  &#x3C;c3m-column-table&#x3E;&#x3C;/c3m-column-table&#x3E;\n          </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/table-page/table-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/table-page/table-page.component.ts ***!
  \*********************************************************/
/*! exports provided: TablePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageComponent", function() { return TablePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var TablePageComponent = /** @class */ (function () {
    function TablePageComponent(app) {
        this.app = app;
    }
    TablePageComponent.prototype.ngOnInit = function () { };
    TablePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-page',
            template: __webpack_require__(/*! ./table-page.component.html */ "./src/app/main/table-page/table-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./table-page.component.css */ "./src/app/main/table-page/table-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], TablePageComponent);
    return TablePageComponent;
}());



/***/ }),

/***/ "./src/app/main/tabs-page/tabs-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/tabs-page/tabs-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "c3m-tabs.presentationTabV .tabsContainer {\n  margin: 0;\n}\n\ndiv.demo {\n  background-color: var(--n-medium);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi90YWJzLXBhZ2UvdGFicy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxrQ0FBa0M7Q0FDbkMiLCJmaWxlIjoic3JjL2FwcC9tYWluL3RhYnMtcGFnZS90YWJzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImMzbS10YWJzLnByZXNlbnRhdGlvblRhYlYgLnRhYnNDb250YWluZXIge1xuICBtYXJnaW46IDA7XG59XG5cbmRpdi5kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbi1tZWRpdW0pO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/tabs-page/tabs-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- TITLE TABS COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2> <strong> Tabs </strong> Component </h2>\n  <ul>\n    <li><a href=\"#tabs\">Normal Tabs</a></li>\n  </ul>\n</div>\n\n\n<!-- DESCRIPTION TABS COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"tabs\">\n\n      <h3>Normal Tabs</h3>\n\n      <div class=\"explain\">\n          <p>The tab component is composed by two different components: one\n            for the tab container (<code>TabsComponent</code>) and the other one for the tab content (<code>TabComponent</code>).</p>\n      </div>\n\n    <div class=\"demo\">\n      <!-- TABS DEMO -->\n      <c3m-tabs class=\"presentationTabV\">\n        <c3m-tab tabTitle=\"Title1\">\n          Content 1\n        </c3m-tab>\n        <c3m-tab tabTitle=\"Title2\">\n          Content 2\n        </c3m-tab>\n        <c3m-tab tabTitle=\"Title3\">\n          Content 3\n        </c3m-tab>\n        <c3m-tab tabTitle=\"Title4\">\n          Content 4\n        </c3m-tab>\n      </c3m-tabs>\n    </div>\n    <div class=\"explain\">\n      <dl>\n        <div>\n          <dt>tabTitle</dt>\n          <dd>title of the tab</dd>\n        </div>\n        <div>\n          <dt>Content text</dt>\n          <dd>Content of the tab (ng-content)</dd>\n        </div>\n      </dl>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"HTML\">\n        <p class=\"pre-code\"> To call the component </p>\n        <div class=\"code\">\n           <!--?prettify lang=html linenums=true?-->\n            <pre class=\"prettyprint linenums\">\n              <code>\n                  &#x3C;c3m-tabs &#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title1&#x22;&#x3E;\n                          Content 1\n                      &#x3C;/c3m-tab&#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title2&#x22;&#x3E;\n                          Content 2\n                      &#x3C;/c3m-tab&#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title3&#x22;&#x3E;\n                          Content 3\n                      &#x3C;/c3m-tab&#x3E;\n                      &#x3C;c3m-tab tabTitle=&#x22;Title4&#x22;&#x3E;\n                          Content 4\n                      &#x3C;/c3m-tab&#x3E;\n                  &#x3C;/c3m-tabs&#x3E;\n              </code>\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/tabs-page/tabs-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/tabs-page/tabs-page.component.ts ***!
  \*******************************************************/
/*! exports provided: TabsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageComponent", function() { return TabsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");



var TabsPageComponent = /** @class */ (function () {
    function TabsPageComponent(app) {
        this.app = app;
    }
    TabsPageComponent.prototype.ngOnInit = function () {
        var subComp = ['tabs-item'];
    };
    TabsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs-page',
            template: __webpack_require__(/*! ./tabs-page.component.html */ "./src/app/main/tabs-page/tabs-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tabs-page.component.css */ "./src/app/main/tabs-page/tabs-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], TabsPageComponent);
    return TabsPageComponent;
}());



/***/ }),

/***/ "./src/app/main/toast-page/toast-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/toast-page/toast-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdG9hc3QtcGFnZS90b2FzdC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/toast-page/toast-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/toast-page/toast-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TITLE TOAST COMPONENT PAGE -->\n<div class=\"panelTitle\">\n  <h2><strong> Toast </strong> Component</h2>\n  <ul>\n    <li><a href=\"#toast\">Floating Toast</a></li>\n  </ul>\n</div>\n\n<!-- DESCRIPTION TOAST COMPONENT PAGE -->\n<div class=\"titleComponent\">\n  <div class=\"descriptionComponent\" id=\"toast\">\n    <h3>Floating Toast</h3>\n\n    <div class=\"explain\">\n      <p>\n        Change the <strong>active</strong> value with a click event (use <code>ViewChild</code> on <code>#Toast)</code>\n      </p>\n    </div>\n\n    <div class=\"demo\">\n      <c3m-button (click)=\"openToast()\" ngClass=\"info\">\n        Display Toast\n      </c3m-button>\n      <!-- TOAST DEMO -->\n      <c3m-toast #toast styleClass=\"alert\" position=\"bottom-right\" closeBtn=\"true\" closeBtnTitle=\"Close alert\">\n        I'm a toast !\n      </c3m-toast>\n    </div>\n\n    <!-- TABS SNIPPETS -->\n    <c3m-tabs class=\"snippets\">\n      <c3m-tab tabTitle=\"To call the component\">\n        <div class=\"code\">\n          <!--?prettify lang=html linenums=true?-->\n          <pre class=\"prettyprint linenums\">\n              <code>\n                  &lt;c3m-toast #toast styleClass=&#34;alert&#34; position=&#34;bottom-right&#34; closeBtn=&#34;true&#34; closeBtnTitle=&#34;Close alert&#34;&gt; \n                    I&apos;m a toast !\n                &lt;/c3m-toast&gt;\n              </code>\n            </pre>\n        </div>\n      </c3m-tab>\n    </c3m-tabs>\n\n    <div class=\"properties\">\n      <h4>Properties</h4>\n      <table>\n        <thead>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>active</td>\n            <td>boolean</td>\n            <td>null</td>\n            <td>display the toast</td>\n          </tr>\n          <tr>\n            <td>delay</td>\n            <td>number</td>\n            <td>Not null</td>\n            <td>delay before toast dissapears</td>\n          </tr>\n          <tr>\n            <td>styleClass</td>\n            <td>string</td>\n            <td>Null</td>\n            <td>Style class of the component</td>\n          </tr>\n          <tr>\n            <td>position</td>\n            <td>string</td>\n            <td>top-right</td>\n            <td>\n              Toast position :\n              <ul>\n                <li>top-right</li>\n                <li>top-left</li>\n                <li>bottom-left</li>\n                <li>bottom-right</li>\n              </ul>\n            </td>\n          </tr>\n          <tr>\n            <td>closeBtn</td>\n            <td>boolean</td>\n            <td>false</td>\n            <td>Add a close button</td>\n          </tr>\n          <tr>\n            <td>imgCloseBtn</td>\n            <td>string</td>\n            <td>White 'X'</td>\n            <td>URL for the close button img</td>\n          </tr>\n          <tr>\n            <td>closeBtnTitle</td>\n            <td>string</td>\n            <td>Close</td>\n            <td>Label for the close button img</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/toast-page/toast-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/toast-page/toast-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ToastPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPageComponent", function() { return ToastPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToastPageComponent = /** @class */ (function () {
    function ToastPageComponent() {
    }
    ToastPageComponent.prototype.openToast = function () {
        this.toast.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toast'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToastPageComponent.prototype, "toast", void 0);
    ToastPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast-page',
            template: __webpack_require__(/*! ./toast-page.component.html */ "./src/app/main/toast-page/toast-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./toast-page.component.css */ "./src/app/main/toast-page/toast-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToastPageComponent);
    return ToastPageComponent;
}());



/***/ }),

/***/ "./src/app/module-breadcrumbs.js":
/*!***************************************!*\
  !*** ./src/app/module-breadcrumbs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbsComponent"]; });

/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsService", function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsService"]; });

/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.model.ts");
/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__) if(["BreadcrumbsComponent","BreadcrumbsService","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_model__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module */ "./src/app/main/breadcrumbs-page/breadcrumbs/breadcrumbs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return _app_main_breadcrumbs_page_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"]; });







/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");





Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_4__["default"])({
    include: 'style',
    onlyLegacy: true,
    watch: true,
    onComplete: function (cssText, styleNode, cssVariables) {
        console.log(cssText);
    }
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/circleci/project/master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map