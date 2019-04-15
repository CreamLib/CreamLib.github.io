import { trigger, state, transition, animate, style, AUTO_STYLE } from '@angular/animations';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, ViewEncapsulation, Input, ElementRef, ViewChild, Renderer2, HostListener, ChangeDetectorRef, ViewChildren, ContentChildren, Injectable, Output, EventEmitter, Directive, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button',
                template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button button{color:var(--text-inv);background:var(--main-color)}c3m-button button:hover{opacity:.8}c3m-button.optional button{background-color:var(--n-dark)}c3m-button.submit button{background-color:var(--hot-color)}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonFileComponent {
    /* OnChange method */
    /**
     * @param {?} files
     * @return {?}
     */
    onChange(files) {
        this.files = files;
    }
}
ButtonFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-file',
                template: "<!-- Label -->\n<label for=\"fileToUpload\"><ng-content></ng-content></label>\n\n<!-- USE \"input\" type file  -->\n<input (change)=\"onChange(file.files)\" type=\"file\" name=\"fileToUpload\" #file id=\"fileToUpload\" multiple />\n\n<!-- File name list -->\n<ul>\n  <li *ngFor=\"let f of files\">\n    <span>{{ f.name }}</span> <c3m-button-icon-only class=\"icon-delete\">Delete</c3m-button-icon-only>\n  </li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-file label{display:inline-block;color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) .5em -242px no-repeat;padding:.5rem 1rem .5rem 2rem;border-radius:.3em;cursor:pointer}c3m-button-file label:hover{opacity:.8}c3m-button-file input[type=file]{position:absolute;left:-9999px}c3m-button-file ul{max-width:350px;padding-left:.5em;margin:.5rem 0 0 1em;border-left:3px solid var(--main-color)}c3m-button-file li{display:flex;justify-content:space-between;align-items:center;font:95% var(--stack-i);padding:.3em 0 .3em .5em;border-bottom:1px solid var(--n-medium)}c3m-button-file li:last-of-type{border:none}c3m-button-file span{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:20em;white-space:nowrap;margin-right:1rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonIconComponent {
    constructor() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ButtonIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-icon',
                template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=\"this.class\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-icon[class*=icon-] button{color:var(--text-inv);background-color:var(--main-color);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem .5rem 2rem}c3m-button-icon button:hover{opacity:.8}.icon-delete button{background-position:.5em 5px}.icon-edit button{background-position:.5em -78px}.icon-download button{background-position:.5em -176px}.icon-add button{background-position:.5em -242px}"]
            }] }
];
/** @nocollapse */
ButtonIconComponent.ctorParameters = () => [];
ButtonIconComponent.propDecorators = {
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonIconOnlyComponent {
    constructor() {
        // Inputs
        this.class = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ButtonIconOnlyComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-icon-only',
                template: "<!-- USE \"BUTTON\" Tag -->\n<button type=\"button\" [class]=\"this.class\">\n  <!-- ng-content contains the button text -->\n  <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-icon-only{position:relative}c3m-button-icon-only[class*=icon-] button{overflow:hidden;text-indent:-50em;color:var(--text-inv);background-color:var(--n-dark);background-image:url(/assets/img/sprite.svg);background-repeat:no-repeat;padding:.5rem 1rem}c3m-button-icon-only button:hover{opacity:.8}span.tooltip{display:none;position:absolute;top:50px;width:8em;height:auto;max-width:8em;overflow-wrap:break-word;font:9px/1 var(--stack-m);text-align:center;color:#fff;background:var(--n-s-dark);padding:.7em 1em;border:1px solid var(--n-s-dark);box-shadow:0 1px 2px rgba(0,0,0,.5);opacity:1;z-index:10000}span.tooltip::before{position:absolute;top:-5px;left:50%;display:block;width:10px;height:10px;content:'';background:var(--n-s-dark);margin-left:-5px;border-top:1px solid var(--n-s-dark);border-left:1px solid var(--n-s-dark);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon-delete button{background-position:7px 5px}.icon-edit button{background-position:7px -78px}.icon-download button{background-position:7px -176px}.icon-add button{background-position:7px -242px}"]
            }] }
];
/** @nocollapse */
ButtonIconOnlyComponent.ctorParameters = () => [];
ButtonIconOnlyComponent.propDecorators = {
    class: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonSubmitComponent {
    constructor() { }
}
ButtonSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-submit',
                template: "<!-- USE \"Input\" type submit -->\n<input type=\"submit\" [attr.value]=\"inputValue\" />\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-submit input{color:var(--text-inv);background:var(--hot-color);border:none;cursor:pointer}c3m-button-submit input:hover{opacity:.8}"]
            }] }
];
/** @nocollapse */
ButtonSubmitComponent.ctorParameters = () => [];
ButtonSubmitComponent.propDecorators = {
    inputValue: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent {
    constructor() {
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
    ngOnInit() {
        // Positioning the toast
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            /** @type {?} */
            const toastElt = this.toast.nativeElement;
            this.positionElt = '110%';
            toastElt.style.bottom = this.positionElt;
        }
        else {
            /** @type {?} */
            const toastElt = this.toast.nativeElement;
            /** @type {?} */
            const HeightElt = toastElt.clientHeight;
            this.positionElt = '-' + (HeightElt + 50) + 'px';
            toastElt.style.top = this.positionElt;
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        const toastElement = this.toast.nativeElement;
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
                setTimeout(() => {
                    this.closeToast();
                }, this.delay);
            }
        }
    }
    /**
     * @return {?}
     */
    closeToast() {
        /** @type {?} */
        const toastElement = this.toast.nativeElement;
        this.active = false;
        if (this.position === 'bottom-left' || this.position === 'bottom-right') {
            toastElement.style.bottom = this.positionElt;
        }
        else {
            toastElement.style.top = this.positionElt;
        }
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-toast',
                template: "<!-- Toast -->\n<p\n  #toast\n  role=\"alert\"\n  aria-live=\"assertive\"\n  [ngClass]=\"{\n    active: active,\n    inactive: !active,\n    topRight: position === 'top-right',\n    topLeft: position === 'top-left',\n    bottomRight: position === 'bottom-right',\n    bottomLeft: position === 'bottom-left'\n  }\"\n  class=\"{{ styleClass }}\"\n>\n  <!-- Your Content -->\n  <span class=\"close\" *ngIf=\"closeBtn\"\n    ><button class=\"ico-close\" (click)=\"closeToast()\"><img src=\"{{ imgCloseBtn }}\" alt=\"{{ closeBtnTitle }}\" /></button>\n  </span>\n  <ng-content></ng-content>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-toast .close{display:flex;justify-content:flex-end;margin-bottom:.5em}c3m-toast .close button{display:block;width:.5em;height:.5em;padding:0;background:0 0}c3m-toast p{position:fixed;padding:.5rem 1rem;background-color:#d769a8;color:#fff;border-radius:3px;z-index:5000}c3m-toast p.bottomRight,c3m-toast p.topRight{right:1em}c3m-toast p.bottomLeft,c3m-toast p.topLeft{left:1em}c3m-toast p.topLeft.active,c3m-toast p.topRight.active{transition:top 1s cubic-bezier(.43,1.18,.99,.98);top:1rem}c3m-toast p.bottomLeft.active,c3m-toast p.bottomRight.active{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98);bottom:1rem}c3m-toast p.inactive{transition:top 1s cubic-bezier(.43,1.18,.99,.98)}c3m-toast p.bottomLeft.inactive,c3m-toast p.bottomRight.inactive{transition:bottom 1s cubic-bezier(.43,1.18,.99,.98)}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [];
ToastComponent.propDecorators = {
    delay: [{ type: Input }],
    active: [{ type: Input }],
    styleClass: [{ type: Input }],
    position: [{ type: Input }],
    closeBtn: [{ type: Input }],
    closeBtnTitle: [{ type: Input }],
    imgCloseBtn: [{ type: Input }],
    toast: [{ type: ViewChild, args: ['toast',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionComponent {
    constructor() {
        this.groups = [];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        this.groups.push(group);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeOthers(openGroup) {
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeAll(openGroup) {
        this.groups.forEach((group) => {
            group.isOpen = false;
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    removeGroup(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-accordion',
                template: "<ul class=\"accordion\">\n  <ng-content></ng-content>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionItemComponent {
    /* By default , add item to accordion */
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        this.accordion = accordion;
        this.accordion.addGroup(this);
    }
    /* remove item to accordion*/
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /* changes */
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const change in changes) {
            if (changes.hasOwnProperty(change)) {
                /** @type {?} */
                const changedProp = changes[change];
                if (!changedProp.isFirstChange()) {
                    this.accordion.groups[this.index + 1].toggleOpen();
                }
            }
        }
    }
    /* initialisation */
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    }
    /* when view init */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.tabID = 'tab' + this.index;
        this.panelID = 'panel' + this.index;
    }
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
    toggleOpen() {
        this.isOpen = !this.isOpen;
        this.accordion.closeOthers(this);
    }
}
AccordionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-accordion-item',
                template: "<li class=\"accordion-group\">\n  <button\n    class=\"panel-heading\"\n    (click)=\"toggleOpen()\"\n    [attr.aria-expanded]=\"isOpen\"\n    [attr.aria-controls]=\"panelID\"\n    id=\"{{ tabID }}\"\n  >\n    {{ nameButton }}\n\n    <svg>\n      <use xlink:href=\"/assets/img/icons.svg#arrowDownSvg\"></use>\n    </svg>\n  </button>\n\n  <div\n    class=\"panel-collapse\"\n    [@openClose]=\"isOpen ? 'open' : 'closed'\"\n    [attr.aria-hidden]=\"!isOpen\"\n    id=\"{{ panelID }}\"\n    [attr.aria-labeledby]=\"tabID\"\n  >\n    <ng-content></ng-content>\n  </div>\n</li>\n",
                animations: [
                    trigger('openClose', [
                        state('open', style({
                            height: AUTO_STYLE,
                            padding: '1em'
                        })),
                        state('closed', style({
                            display: 'none',
                            height: 0,
                            padding: '0 1em'
                        })),
                        transition('open => closed', [animate('0.2s ease-in')]),
                        transition('closed => open', [animate('0.2s ease-in')])
                    ])
                ],
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-accordion>ul{width:80%;padding:1rem}c3m-accordion-item>li{position:relative;color:var(--body-text);background-color:var(--body-bg);border:none;z-index:5}c3m-accordion-item>li.closed{color:var(--text-inv);background-color:var(--main-color);border-bottom:1px solid var(--body-bg)}c3m-accordion-item:last-child>li.closed{border:none}c3m-accordion-item>li>.panel-collapse{overflow:hidden;padding:0}c3m-accordion-item>li>button{position:relative;width:100%;height:100%;line-height:1.7rem;text-align:left;color:var(--text-inv);background-color:var(--main-color);background-size:2.1rem;padding:.5rem 2.5rem .5rem .5rem;border-radius:0;cursor:pointer;z-index:10}c3m-accordion-item>li>button svg{position:absolute;width:24px;height:24px;right:1rem;fill:#fff;transition:.3s;-webkit-transform:rotate(0);transform:rotate(0);z-index:1}c3m-accordion-item>li>button[aria-expanded=true] svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}"]
            }] }
];
/** @nocollapse */
AccordionItemComponent.ctorParameters = () => [
    { type: AccordionComponent }
];
AccordionItemComponent.propDecorators = {
    nameButton: [{ type: Input }],
    urlImage: [{ type: Input }],
    isOpen: [{ type: Input }],
    index: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
    /* ********* CONSTRUCTOR ********* */
    /**
     * @param {?} eRef
     * @param {?} renderer
     */
    constructor(eRef, renderer) {
        this.eRef = eRef;
        this.renderer = renderer;
        this.targetString = ' ';
        this.type = 'text';
        this.keys = {};
    }
    /* ************ ON INIT *********** */
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datepicker(true);
        if (this.type === 'date') {
            if (this.checkDateInput()) {
                this.renderer.setStyle(this.buttonShow.nativeElement, 'display', 'none');
            }
        }
    }
    /* ************** MAIN FUNCTION ************** */
    /**
     * @param {?} modal
     * @return {?}
     */
    datepicker(modal) {
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
        const today = this.grid.querySelector('.today');
        this.grid.setAttribute('aria-activedescendant', today.getAttribute('id'));
        // Call all events listener
        this.bindHandlers();
    }
    /* ************ CHECK IF TYPE DATE IS SUPPORTED ******** */
    /**
     * @return {?}
     */
    checkDateInput() {
        /** @type {?} */
        const input = document.createElement('input');
        input.setAttribute('type', 'date');
        /** @type {?} */
        const notADateValue = 'not-a-date';
        input.setAttribute('value', notADateValue);
        return input.value !== notADateValue;
    }
    /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
    /**
     * @return {?}
     */
    bindHandlers() {
        /** @type {?} */
        const thisobj = this;
        /* ---------------------------------------------- */
        thisobj.renderer.listen(this.grid, 'keydown', e => {
            return thisobj.handleGridKeyDown(e);
        });
        thisobj.renderer.listen(this.grid, 'keypress', e => {
            return thisobj.handleGridKeyDown(e);
        });
        thisobj.renderer.listen(this.grid, 'focus', () => {
            return thisobj.handleGridFocus();
        });
        thisobj.renderer.listen(this.grid, 'blur', () => {
            return thisobj.handleGridBlur();
        });
        /* ---------------------------------------------- */
        this.addEventListenerList(thisobj);
    }
    /* ************************** HANDLE GRID BLUR ********************** */
    /**
     * @return {?}
     */
    handleGridBlur() {
        if (this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'))) {
            /** @type {?} */
            const idActiveDescendant = this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'));
            idActiveDescendant.classList.remove('focus');
            idActiveDescendant.setAttribute('aria-selected', 'false');
        }
        return true;
    }
    /* ************************** HANDLE GRID FOCUS ********************** */
    /**
     * @return {?}
     */
    handleGridFocus() {
        /** @type {?} */
        const active = this.grid.getAttribute('aria-activedescendant');
        if (this.eRef.nativeElement.querySelector('#' + active).getAttribute('id') === undefined) {
            /** @type {?} */
            const lastDay = 'day' + this.calcNumDays(this.year, this.month);
            this.eRef.nativeElement.querySelector('#' + lastDay).classList.add('focus');
            this.eRef.nativeElement.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
        }
        else {
            this.eRef.nativeElement.querySelector('#' + active).classList.add('focus');
            this.eRef.nativeElement.querySelector('#' + active).setAttribute('aria-selected', 'true');
        }
        return true;
    }
    /* ************************** HANDLE KEY PRESS ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleGridKeyPress(e) {
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
    }
    /* ************************** HANDLE GRID CLICK ********************** */
    /**
     * @param {?} id
     * @param {?} e
     * @return {?}
     */
    handleGridClick(id, e) {
        /** @type {?} */
        const cell = id;
        // If Cell is empty
        if (cell.classList.contains('empty')) {
            return true;
        }
        // Get Focus Cell
        /** @type {?} */
        const tmpCell = this.grid.querySelector('.focus');
        tmpCell.classList.remove('focus');
        tmpCell.setAttribute('aria-selected', 'false');
        // Add New Focus Cell
        cell.classList.add('focus');
        cell.setAttribute('aria-selected', 'true');
        // Change Grid ActiveDescendant to the newCellId
        this.grid.setAttribute('aria-activedescendant', cell.getAttribute('id'));
        // Get the new Click Cell
        /** @type {?} */
        const curDay = this.eRef.nativeElement.querySelector(`#${this.grid.getAttribute('aria-activedescendant')}`);
        // Change the targetString to represente the new current date
        /** @type {?} */
        const x = curDay.firstChild.nodeValue;
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
    }
    /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
    /**
     * @param {?} thisobj
     * @return {?}
     */
    addEventListenerList(thisobj) {
        /** @type {?} */
        const list = this.grid.querySelectorAll('td');
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const len = list.length;
        for (i = 0; i < len; i++) {
            /** @type {?} */
            const itemList = list[i];
            /*itemList.addEventListener('click', function(e){
                return thisobj.handleGridClick(this, e);
              });*/
            thisobj.renderer.listen(itemList, 'click', e => {
                return thisobj.handleGridClick(itemList, e);
            });
        }
    }
    /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handlePrevClick(e) {
        /** @type {?} */
        const active = this.grid.getAttribute('aria-activedescendant');
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
    }
    /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleNextClick(e) {
        /** @type {?} */
        const active = this.grid.getAttribute('aria-activedescendant');
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
    }
    /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handlePrevKeyDown(e) {
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
    }
    /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleNextKeyDown(e) {
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
    }
    /* ************************** SHOW DIALOG ********************** */
    /**
     * @return {?}
     */
    showDlg() {
        /** @type {?} */
        const thisObj = this;
        // Bind Event Listener
        thisObj.renderer.listen(this.eRef.nativeElement, 'click', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mousedown', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mouseup', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mousemove', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mouseover', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.dp.setAttribute('aria-hidden', 'false');
        this.grid.focus();
    }
    /* ************************** ShowDialog Modal Method ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    showDialogMethod(e) {
        this.grid.focus();
        e.stopPropagation();
        return false;
    }
    /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleGridKeyDown(e) {
        /** @type {?} */
        const rows = this.grid.querySelectorAll('tbody tr');
        /** @type {?} */
        const curDay = this.eRef.nativeElement.querySelector(`#${this.grid.getAttribute('aria-activedescendant')}`);
        /** @type {?} */
        let days = this.grid.querySelectorAll('td:not(.empty)');
        /** @type {?} */
        const curRow = curDay.parentElement;
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
                const dayIndex = days.indexOf(curDay) - 1;
                /** @type {?} */
                let prevDay = null;
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
                const dayIndex = days.indexOf(curDay) + 1;
                /** @type {?} */
                let nextDay = null;
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
                let dayIndex = days.indexOf(curDay) - 7;
                /** @type {?} */
                let prevDay = null;
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
                let dayIndex = days.indexOf(curDay) + 7;
                /** @type {?} */
                let nextDay = null;
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
                const active = this.grid.getAttribute('aria-activedescendant');
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
                    const lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.preventDefault();
                return false;
            }
            // PAGE DOWN
            case this.keys.pagedown: {
                /** @type {?} */
                const active = this.grid.getAttribute('aria-activedescendant');
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
                    const lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + active);
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
                const lastDay = 'day' + this.calcNumDays(this.year, this.month);
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
    }
    /* ****************** Hide modal on click outiside ******************* */
    /**
     * @param {?} event
     * @return {?}
     */
    clickedOutside(event) {
        // here you can hide your menu
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.hideDlg();
        }
    }
    /* ************************** HIDE MODAL DIALOG ********************** */
    /**
     * @return {?}
     */
    hideDlg() {
        /** @type {?} */
        const thisObj = this;
        thisObj.renderer.destroy();
        thisObj.dp.setAttribute('aria-hidden', 'true');
        this.target.focus();
    }
    /* ************************** SHOW PREVIOUS MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    showPrevMonth(offset) {
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
            const numDays = this.calcNumDays(this.year, this.month);
            /** @type {?} */
            const day = 'day' + (numDays - offset);
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    }
    /* ************************** SHOW NEXT MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    showNextMonth(offset) {
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
            const day = 'day' + offset;
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    }
    /* ************************** SHOW PREVIOUS YEAR ********************** */
    /**
     * @return {?}
     */
    showPrevYear() {
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
    }
    /* ************************** SHOW NEXT YEAR ********************** */
    /**
     * @return {?}
     */
    showNextYear() {
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
    }
    /* ************************** FILL THE GRID ********************** */
    /**
     * @return {?}
     */
    fillGrid() {
        /** @type {?} */
        const numDays = this.calcNumDays(this.year, this.month);
        /** @type {?} */
        const startWeekDay = this.calcStarWeekDay(this.year, this.month);
        /** @type {?} */
        let weekDay = 0;
        /** @type {?} */
        let curDay = 1;
        /** @type {?} */
        let rowCount = 1;
        this.tbody = this.grid.querySelector('tbody');
        /** @type {?} */
        let gridCells = '\t<tr id="row0">\n';
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
    }
    /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    calcNumDays(year, month) {
        return 32 - new Date(year, month, 32).getDate();
    }
    /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    calcStarWeekDay(year, month) {
        return new Date(year, month, 1).getDay();
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-calendar',
                template: "<div role=\"application\">\n  <p>\n    <label for=\"date\">Date</label>\n    <input [attr.type]=\"type\" value=\"{{ targetString }}\" #date />\n    <button (click)=\"showDlg()\" #showDP>Select Date</button>\n  </p>\n\n  <div class=\"datepicker\" aria-hidden=\"true\" #dp>\n    <div class=\"month-wrap\">\n      <button\n        (click)=\"handlePrevClick($event)\"\n        (keydown)=\"handlePrevKeyDown($event)\"\n        role=\"button\"\n        aria-label=\"Mois ou Ann\u00E9e pr\u00E9c\u00E9dent(e)\"\n        aria-labelledby=\"bn_prev-label\"\n        tabindex=\"0\"\n        #prev\n      >\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#leftCalendarSvg\"></use>\n        </svg>\n      </button>\n      <strong role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthString }}</strong>\n      <button\n        (click)=\"handleNextClick($event)\"\n        (keydown)=\"handleNextKeyDown($event)\"\n        role=\"button\"\n        aria-label=\"Mois ou Ann\u00E9e suivant(e)\"\n        aria-labelledby=\"bn_next-label\"\n        tabindex=\"0\"\n        #next\n      >\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#rightCalendarSvg\"></use>\n        </svg>\n      </button>\n    </div>\n\n    <table aria-activedescendant=\"errMsg\" aria-labelledby=\"month\" tabindex=\"0\" #cal>\n      <thead>\n        <tr id=\"weekdays\">\n          <th scope=\"col\"><abbr title=\"Sunday\">Su</abbr></th>\n          <th scope=\"col\"><abbr title=\"Monday\">Mo</abbr></th>\n          <th scope=\"col\"><abbr title=\"Tuesday\">Tu</abbr></th>\n          <th scope=\"col\"><abbr title=\"Wednesday\">We</abbr></th>\n          <th scope=\"col\"><abbr title=\"Thursday\">Th</abbr></th>\n          <th scope=\"col\"><abbr title=\"Friday\">Fr</abbr></th>\n          <th scope=\"col\"><abbr title=\"Saturday\">Sa</abbr></th>\n        </tr>\n      </thead>\n\n      <tbody #tbody>\n        <tr>\n          <td id=\"errMsg\" colspan=\"7\">Javascript must be enabled</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <button id=\"bn_prev-label\" class=\"offscreen\">Go to previous month</button>\n    <button id=\"bn_next-label\" class=\"offscreen\">Go to next month</button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-calendar div>input{max-width:9em}c3m-calendar p button{color:var(--text-inv);background-color:var(--n-dark)}c3m-calendar button:hover{opacity:.8}c3m-calendar .datepicker{position:absolute;width:250px;background-color:var(--body-bg);margin:.5rem;border:none;border-radius:.3rem;box-shadow:0 3px 7px rgba(0,0,0,.5)}.month-wrap{display:flex;justify-content:space-between;align-items:center;color:var(--text-inv);background-color:var(--main-color);padding:.5em}.month-wrap strong{display:inline-block}.month-wrap button{background-color:var(--main-color);padding:0}c3m-calendar table thead{margin-top:2rem;line-height:2.2rem}c3m-calendar button svg{height:1.2rem;width:1.7rem;fill:var(--text-inv)}c3m-calendar div#month{float:left;padding-top:6px;width:199px;height:24px;text-align:center;font-weight:700;font-size:1.2em}c3m-calendar tbody#cal{width:261px;font-size:1.2em;text-align:center}c3m-calendar table{color:var(--text-inv);background-color:var(--main-color);width:100%;border-collapse:collapse;border-spacing:1px}c3m-calendar table td,c3m-calendar table th{width:35px;height:35px;line-height:2em;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding:0}c3m-calendar table th{font:var(--stack-l);text-transform:uppercase}c3m-calendar table th abbr{text-decoration:none}c3m-calendar table td.today,c3m-calendar table td.today.focus{background-color:var(--hot-color-sec)}c3m-calendar table td.empty,c3m-calendar table td.empty:hover{background-color:var(--main-color);cursor:initial}c3m-calendar table td.focus,c3m-calendar table td:hover{background-color:rgba(255,255,255,.15);cursor:pointer}c3m-calendar .offscreen{position:absolute;left:-200em;top:-100em}c3m-calendar [aria-hidden=true]{display:none}"]
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CalendarComponent.propDecorators = {
    monthString: [{ type: Input }],
    targetString: [{ type: Input }],
    type: [{ type: Input }],
    dp: [{ type: ViewChild, args: ['dp',] }],
    prev: [{ type: ViewChild, args: ['prev',] }],
    next: [{ type: ViewChild, args: ['next',] }],
    grid: [{ type: ViewChild, args: ['cal',] }],
    buttonShow: [{ type: ViewChild, args: ['showDP',] }],
    target: [{ type: ViewChild, args: ['date',] }],
    clickedOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.sizeLi = 0;
        this.groups = [];
    }
    // After View Init
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Select All Carousel Item Content
        this.tabItemContent = this.eRef.nativeElement.querySelectorAll('.carousel-item-content');
        // Calcul Size of all Carousel Item
        for (let i = 0; i < this.tabItemContent.length; i++) {
            this.sizeLi = this.sizeLi + this.tabItemContent[i].getBoundingClientRect().width;
        }
        // Opacity 0 for All Carousel Item
        for (let i = 0; i < this.tabItemContent.length; i++) {
            this.tabItemContent[i].style.opacity = '0';
        }
        // Opacity 1 for the first Carousel Item
        this.tabItemContent[0].style.opacity = '1';
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // For the visible Carousel Item, change the Aria Attributes and Tab Index
        this.groups[0].isVisible = true;
        this.groups[0].tabIndex = '0';
    }
    // Add a Carousel Item to the group of Carousel Item
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        this.groups.push(group);
    }
    // Click on Next Button
    /**
     * @param {?} group
     * @return {?}
     */
    next(group) {
        // "index" is the index of the carousel item in the group
        /** @type {?} */
        const index = this.groups.indexOf(group);
        // "lengthGroup" is the length of the Carousel Item Group
        /** @type {?} */
        const lengthGroup = this.groups.length;
        // For the vanish Carousel Items, change the Aria Attributes and Tab Index
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        // If click next button with the last Slide (go to the first slide)
        if (index + 1 > lengthGroup - 1) {
            this.groups[0].isVisible = true;
            this.groups[0].tabIndex = '0';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[lengthGroup - 1].style.opacity = '1';
            this.tabItemContent[0].style.transition = 'none';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[0].style.opacity = '1';
                this.tabItemContent[0].style.transition = 'transform 0.3s';
                this.tabItemContent[0].style.zIndex = '10';
                this.tabItemContent[0].style.transform = 'translate(0,0)';
            }, 0);
        }
        else {
            this.groups[index + 1].isVisible = true;
            this.groups[index + 1].tabIndex = '0';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[index].style.opacity = '1';
            this.tabItemContent[index + 1].style.transition = 'none';
            this.tabItemContent[index + 1].style.transform =
                'translate(+' + this.tabItemContent[index + 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[index].style.transform =
                'translate(-' + this.tabItemContent[index].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[index + 1].style.opacity = '1';
                this.tabItemContent[index + 1].style.transition = 'transform 0.3s';
                this.tabItemContent[index + 1].style.zIndex = '10';
                this.tabItemContent[index + 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    }
    /* Click on a previous button  */
    /**
     * @param {?} group
     * @return {?}
     */
    previous(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        /** @type {?} */
        const lengthGroup = this.groups.length;
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        if (index - 1 < 0) {
            this.groups[lengthGroup - 1].isVisible = true;
            this.groups[lengthGroup - 1].tabIndex = '0';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.opacity = '0';
            }
            this.tabItemContent[0].style.opacity = '1';
            this.tabItemContent[lengthGroup - 1].style.transition = 'none';
            this.tabItemContent[lengthGroup - 1].style.transform =
                'translate(-' + this.tabItemContent[lengthGroup - 1].getBoundingClientRect().width + 'px, 0)';
            this.tabItemContent[0].style.transform =
                'translate(+' + this.tabItemContent[0].getBoundingClientRect().width + 'px, 0)';
            setTimeout(() => {
                this.tabItemContent[lengthGroup - 1].style.opacity = '1';
                this.tabItemContent[lengthGroup - 1].style.transition = 'transform 0.3s';
                this.tabItemContent[lengthGroup - 1].style.zIndex = '10';
                this.tabItemContent[lengthGroup - 1].style.transform = 'translate(0,0)';
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
            setTimeout(() => {
                this.tabItemContent[index - 1].style.opacity = '1';
                this.tabItemContent[index - 1].style.transition = 'transform 0.3s';
                this.tabItemContent[index - 1].style.zIndex = '10';
                this.tabItemContent[index - 1].style.transform = 'translate(0,0)';
            }, 0);
        }
    }
    /* Function to go on a specific item with Bullepoint Click Event */
    /**
     * @param {?} indexToGo
     * @param {?} group
     * @return {?}
     */
    goTo(indexToGo, group) {
        /** @type {?} */
        const random = Math.floor(Math.random() * 2 + 0);
        console.log(random);
        this.groups.forEach((groupToClose) => {
            groupToClose.isVisible = false;
            groupToClose.tabIndex = '-1';
        });
        this.groups[indexToGo].isVisible = true;
        this.groups[indexToGo].tabIndex = '0';
        this.tabItemContent[indexToGo].style.transition = 'none';
        if (random === 1) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(+' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(-' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        else if (random === 0) {
            this.tabItemContent[indexToGo].style.transform =
                'translate(-' + this.tabItemContent[indexToGo].getBoundingClientRect().width + 'px, 0)';
            for (let i = 0; i < this.tabItemContent.length; i++) {
                this.tabItemContent[i].style.transform =
                    'translate(+' + this.tabItemContent[i].getBoundingClientRect().width + 'px, 0)';
            }
        }
        setTimeout(() => {
            this.tabItemContent[indexToGo].style.opacity = '1';
            this.tabItemContent[indexToGo].style.transition = 'transform 0.3s';
            this.tabItemContent[indexToGo].style.zIndex = '10';
            this.tabItemContent[indexToGo].style.transform = 'translate(0,0)';
        }, 300);
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-carousel',
                template: "<!-- A Carousel -->\n<div class=\"carousel\">\n  <!-- Carousel Item List -->\n  <ul role=\"tablist\" class=\"carouselItemList\">\n    <ng-content></ng-content>\n  </ul>\n\n  <!-- Carousel Bullet Points -->\n  <ul class=\"bulletpoint\">\n    <li\n      *ngFor=\"let groupItem of groups; let i = index\"\n      [attr.aria-controls]=\"groupItem.itemID\"\n      role=\"tab\"\n      [attr.aria-selected]=\"groupItem.isVisible\"\n      tabindex=\"{{ groupItem.tabIndex }}\"\n    >\n      <button #bulletPoint aria-label=\"Go to this slide\" (click)=\"goTo(i, groupItem)\"></button>\n    </li>\n  </ul>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-carousel .carousel{position:relative;overflow:hidden;width:80%;margin:2.5rem}c3m-carousel .carouselItemList{display:block;overflow:hidden;width:100%;height:20rem;margin:0 auto}c3m-carousel .bulletpoint{display:block;position:absolute;width:100%;bottom:5%;text-align:center;margin:0 auto;z-index:17}c3m-carousel .bulletpoint li{display:inline-block;margin-right:1rem}c3m-carousel .bulletpoint li button{width:1.2rem;height:1.2rem;background-color:var(--text-inv);padding:0;border-radius:1.2rem;opacity:.5}c3m-carousel .bulletpoint li button:hover,c3m-carousel .bulletpoint li[aria-selected=true] button{opacity:1}c3m-carousel .previousCarouselItem::before{display:block;position:absolute;top:1rem;left:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid var(--body-bg);border-left:4px solid var(--body-bg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}c3m-carousel .nextCarouselItem::before{display:block;position:absolute;top:1rem;right:50%;width:1rem;height:1rem;content:'';border-bottom:4px solid #fff;border-right:4px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}c3m-carousel .carousel-item{display:inline-block;height:20rem;width:100%}c3m-carousel .nextCarouselItem:hover,c3m-carousel .previousCarouselItem:hover{opacity:.8}c3m-carousel .carousel-item-content{display:block;position:absolute;left:0;top:3.4rem;width:100%;height:calc(100% - 3.4rem);background-color:var(--main-color);margin:0 auto;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}c3m-carousel .carousel-item-content p{display:block;font-size:4rem;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding-top:5.2rem}c3m-carousel .previousCarouselItem{display:inline-block;position:absolute;top:0;left:0;width:50%;height:3.4rem;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem{display:inline-block;position:absolute;top:0;width:50%;height:3.4rem;left:50%;background-color:var(--hot-color-sec);border-radius:0;cursor:pointer}c3m-carousel .nextCarouselItem[tabindex='-1'],c3m-carousel .previousCarouselItem[tabindex='-1']{z-index:0;opacity:0}c3m-carousel .nextCarouselItem[tabindex='0'],c3m-carousel .previousCarouselItem[tabindex='0']{z-index:15}@media (min-width:1000px){c3m-carousel .previousCarouselItem::before{width:2rem;height:2rem;top:45%;left:39.7%}c3m-carousel .nextCarouselItem::before{width:2rem;height:2rem;top:45%;right:39.7%}c3m-carousel .previousCarouselItem{display:inline-block;width:11.5%;height:100%;left:0;font-size:3.5rem}c3m-carousel .carouselItemList{width:75%}c3m-carousel .nextCarouselItem{display:inline-block;width:11.5%;height:100%;right:0;left:auto;font-size:3.5rem}c3m-carousel .carousel-item-content{display:block;position:absolute;height:100%;left:0;top:0;margin:0 auto}c3m-carousel .carousel-item-content p{padding-top:6rem}c3m-carousel .bulletpoint{bottom:1rem}}"]
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselItemComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.carousel = carousel;
        this.isVisible = true;
        this.tabIndex = '-1';
        this.carousel.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.itemID = 'item' + this.index;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.itemID = 'item' + this.index;
    }
    /**
     * @return {?}
     */
    previousSlide() {
        this.carousel.previous(this);
    }
    /**
     * @return {?}
     */
    nextSlide() {
        this.carousel.next(this);
    }
}
CarouselItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-carousel-item',
                template: "<!-- A Carousel Item-->\n<li\n  class=\"carousel-item\"\n  role=\"tab\"\n  tabindex=\"{{ tabIndex }}\"\n  [attr.aria-selected]=\"isVisible\"\n  [attr.aria-controls]=\"itemID\"\n>\n  <!-- Previous button -->\n  <button\n    class=\"previousCarouselItem\"\n    tabindex=\"{{ tabIndex }}\"\n    (click)=\"previousSlide()\"\n    aria-label=\"Previous slide\"\n  ></button>\n\n  <!-- Carousel item Content -->\n  <div class=\"carousel-item-content\" role=\"tabpanel\" id=\"{{ itemID }}\" [attr.aria-hidden]=\"!isVisible\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Next Button -->\n  <button class=\"nextCarouselItem\" tabindex=\"{{ tabIndex }}\" (click)=\"nextSlide()\" aria-label=\"Next slide\"></button>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
CarouselItemComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
CarouselItemComponent.propDecorators = {
    isVisible: [{ type: Input }],
    index: [{ type: Input }],
    tabIndex: [{ type: Input }],
    itemID: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-checkbox',
                template: "<p>\n  <input\n    type=\"checkbox\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"this.value\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n  />\n  <label [attr.for]=\"id\">{{ this.title }}</label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-checkbox label{display:inline-block;padding:0 0 0 .5em}c3m-checkbox.unstressed label{font-family:var(--stack)}c3m-checkbox.custom input[type=checkbox]:checked,c3m-checkbox.custom input[type=checkbox]:not(:checked){position:absolute;left:-9999px}c3m-checkbox.custom input[type=checkbox]:checked+label,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label{position:relative;padding-left:25px}c3m-checkbox.custom input[type=checkbox]:checked+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:before{content:'';position:absolute;left:0;top:-.2em;width:17px;height:17px;border:1px solid var(--n-medium);background:var(--n-light);border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.3)}c3m-checkbox.custom input[type=checkbox]:checked+label:after,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after{content:'\u2714';position:absolute;top:-.2em;left:4px;font-size:16px;color:var(--sec-color);transition:.2s;margin-top:.2rem;margin-left:0}c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0)}c3m-checkbox.custom input[type=checkbox]:checked+label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}c3m-checkbox.custom input[type=checkbox]:checked:focus+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked):focus+label:before{border:1px dotted var(--sec-color)}c3m-checkbox.on-off{position:relative}c3m-checkbox.on-off label{display:inline-block;margin-left:40px;cursor:pointer}c3m-checkbox.on-off input{position:relative;left:15px;opacity:0}c3m-checkbox.on-off label::before{display:block;position:absolute;width:50px;height:25px;top:.5em;left:0;content:'';background-color:var(--n-medium);border-radius:1rem}c3m-checkbox.on-off label::after{display:block;position:absolute;width:20px;height:20px;top:.635em;left:27px;content:'';background-color:var(--n-medium-a);border-radius:20px;transition:1s}c3m-checkbox.on-off input:checked+label::before{background:var(--main-light)}c3m-checkbox.on-off input:checked+label::after{left:2px;background:var(--body-bg)}@media screen and (min-width:750px){c3m-checkbox.custom input[type=checkbox]:checked+label:after,c3m-checkbox.custom input[type=checkbox]:checked+label:before,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:after,c3m-checkbox.custom input[type=checkbox]:not(:checked)+label:before{top:0}}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    title: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-checkbox-button',
                template: "<p>\n  <label>\n    <input type=\"checkbox\" [name]=\"this.name\" /><span> {{ this.title }}</span>\n  </label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-checkbox-button label{display:inline-block;overflow:hidden}c3m-checkbox-button label span{display:inline-block;text-align:center;padding:.6em .5em .5em;border:1px solid var(--n-dark);cursor:pointer}c3m-checkbox-button input:checked+span,c3m-checkbox-button label span:hover{color:var(--text-inv);background-color:var(--main-color);border-color:var(--main-color)}c3m-checkbox-button label input{position:relative;left:-5em}"]
            }] }
];
/** @nocollapse */
CheckboxButtonComponent.ctorParameters = () => [];
CheckboxButtonComponent.propDecorators = {
    title: [{ type: Input }],
    name: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxGroupComponent {
    constructor() {
        // Inputs
        this.legend = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-checkbox-group',
                template: "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-checkbox-group{margin-bottom:1rem}c3m-checkbox-group legend{font:1em/1 var(--stack-b);padding-bottom:1em}c3m-checkbox-group label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}c3m-checkbox-group-item+c3m-checkbox-group-item li{margin-top:.5em}c3m-checkbox-group.go-along ul{display:flex}c3m-checkbox-group.go-along c3m-checkbox-group-item+c3m-checkbox-group-item li{margin:0 0 0 1em}@media screen and (min-width:750px){c3m-checkbox-group legend{font-size:1.3em}}"]
            }] }
];
/** @nocollapse */
CheckboxGroupComponent.ctorParameters = () => [];
CheckboxGroupComponent.propDecorators = {
    legend: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxGroupItemComponent {
    constructor() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxGroupItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-checkbox-group-item',
                template: "<li>\n  <input type=\"checkbox\" [attr.id]=\"id\" [name]=\"this.name\" [value]=\"this.value\" />\n  <label [attr.for]=\"id\">{{ this.title }}</label>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
CheckboxGroupItemComponent.ctorParameters = () => [];
CheckboxGroupItemComponent.propDecorators = {
    title: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    id: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxLinkComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-checkbox-link',
                template: "<p>\n  <input type=\"checkbox\" [attr.id]=\"id\" [name]=\"this.name\" [value]=\"this.value\" />\n  <label [attr.for]=\"id\"> <ng-content></ng-content> </label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-checkbox-link label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}"]
            }] }
];
/** @nocollapse */
CheckboxLinkComponent.ctorParameters = () => [];
CheckboxLinkComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownComponent {
    constructor() {
        /* INPUTS */
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /* Open / Close the Dropdown */
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.isOpen = false;
        }
    }
    /**
     * @return {?}
     */
    close() {
        document.querySelector('details').removeAttribute('open');
        this.isOpen = false;
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-dropdown',
                template: "<details class=\"dropdown\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggleOpen()\" (focusout)=\"close()\">\n  <!-- Dropdown Button -->\n  <summary>{{ this.nameDropdown }}</summary>\n  <!-- Dropdown Content List -->\n  <ul [ngClass]=\"{ open: isOpen }\">\n    <ng-content></ng-content>\n  </ul>\n</details>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["details.dropdown{display:inline-block;position:relative}details.dropdown summary{color:var(--text-inv);background:var(--main-color);padding:.4em 1em .5em .5em;border-radius:.3em;cursor:pointer}details.dropdown summary:focus,details.dropdown summary[open]{border:1px dashed outline;background:var(--main-light)}details.dropdown ul{box-sizing:border-box;position:absolute;overflow:hidden;width:10em;height:1px;list-style-type:none;padding:.5em;border-radius:.3em;box-shadow:1px 1px 3px rgba(0,0,0,.5);opacity:0;transition:1s}details.dropdown.open ul{height:auto;opacity:1;transition:1s}details.dropdown.open li{font-size:1em}details.dropdown a,details.dropdown button,details.dropdown c3m-button button,details.dropdown c3m-button-link a{display:block;width:100%;font:100% var(--stack);text-decoration:none;text-align:center;color:var(--body-text);background-color:var(--body-bg);padding:.5em;border-radius:.3em}details.dropdown button:hover,details.dropdown c3m-button button:hover,details.dropdown c3m-button-link a:hover{color:var(--body-text);background-color:var(--n-light)}c3m-dropdown details.dropdown.open ul{background:#fff}c3m-dropdown details c3m-button button,c3m-dropdown details li a{display:block;padding:.5em;font:100%/1 var(--stack);color:initial;text-decoration:none;text-align:left;background:0 0}c3m-dropdown details li a:focus,c3m-dropdown details li a:hover,c3m-dropdown details li button:focus,c3m-dropdown details li button:hover{text-decoration:underline;color:inherit;background:inherit}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [];
DropdownComponent.propDecorators = {
    isOpen: [{ type: Input }],
    nameDropdown: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownItemComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DropdownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-dropdown-item',
                template: "<!-- Item of the Dropdown Content List -->\n<li><ng-content></ng-content></li>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
DropdownItemComponent.ctorParameters = () => [];
DropdownItemComponent.propDecorators = {
    theContent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldsetComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
FieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-fieldset',
                template: "<!-- Fieldset -->\n<fieldset>\n  <!-- Legend -->\n  <legend>{{ this.legend }}</legend>\n  <!-- Content -->\n  <ng-content></ng-content>\n</fieldset>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-fieldset fieldset{padding:1rem;border:2px solid var(--main-light)}c3m-fieldset fieldset>legend{text-transform:uppercase;letter-spacing:1.1px;color:var(--main-color);padding:0 .5rem;margin-left:.5rem}"]
            }] }
];
/** @nocollapse */
FieldsetComponent.ctorParameters = () => [];
FieldsetComponent.propDecorators = {
    legend: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() {
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
    ngOnInit() { }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"text\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputErrorMsgComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputErrorMsgComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-error-msg',
                template: "<p>\n  <span>\n    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n      <path\n        d=\"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"\n      />\n    </svg>\n    <ng-content></ng-content>\n  </span>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-error-msg p{font-family:var(--stack-b);color:var(--alert-color);margin-bottom:.8rem}c3m-input-error-msg svg{fill:var(--alert-color);vertical-align:-.2em}"]
            }] }
];
/** @nocollapse */
InputErrorMsgComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputFloatingComponent {
    constructor() {
        this.floating = 'bottom';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputFloatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-floating',
                template: "<p [ngClass]=\"this.floating\">\n  <input type=\"text\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-floating>p{position:relative;overflow:hidden;width:40%;font-size:1rem;min-width:220px}c3m-input-floating input{width:100%;border:2px solid gray;background:0 0;position:relative;top:0;left:0;z-index:1;padding:8px 12px;outline:0;font-family:quicksandregular;box-sizing:border-box}c3m-input-floating input:valid{background:#fff}c3m-input-floating input:focus{border-color:#f06d06}c3m-input-floating input:focus+label{background:#f06d06;color:#fff;font-size:70%;padding:1px 6px;z-index:2;text-transform:uppercase}c3m-input-floating label{transition:background .2s,color .2s,top .2s,bottom .2s,right .2s,left .2s;position:absolute;color:#999;padding:7px 6px}c3m-input-floating p.bottom>input{padding:12px 0}c3m-input-floating p.bottom>label{top:0;bottom:0;left:0;width:100%}c3m-input-floating p.bottom>input:focus{padding:4px 6px 20px}c3m-input-floating p.bottom>input:focus+label{top:100%;margin-top:-16px}c3m-input-floating p.right label{top:2px;right:100%;width:100%;margin-right:-100%;bottom:2px}c3m-input-floating p.right input:focus+label{right:0;margin-right:0;width:40%;padding-top:5px}"]
            }] }
];
/** @nocollapse */
InputFloatingComponent.ctorParameters = () => [];
InputFloatingComponent.propDecorators = {
    title: [{ type: Input }],
    floating: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputMailComponent {
    constructor() {
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
    ngOnInit() { }
}
InputMailComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-mail',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"email\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    [multiple]=\"multiple\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-mail[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}c3m-input-mail input{width:85%;max-width:22em}"]
            }] }
];
/** @nocollapse */
InputMailComponent.ctorParameters = () => [];
InputMailComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    multiple: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputMaterialComponent {
    constructor() {
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputMaterialComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-material',
                template: "<p class=\"field\">\n  <input type=\"text\" [placeholder]=\"this.placeholder\" [id]=\"this.id\" [name]=\"this.name\" />\n  <label [for]=\"this.id\">{{ this.title }}</label>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-material p.field{display:flex;flex-flow:column-reverse;margin-bottom:1em;width:40%;min-width:220px}c3m-input-material input,c3m-input-material label{transition:.2s;touch-action:manipulation}c3m-input-material input{font-size:1.2em;border:0;border-bottom:1px solid #ccc;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;border-radius:0;padding:0;cursor:text}c3m-input-material input:focus{outline:0;border-bottom:1px solid #666}c3m-input-material label{text-transform:uppercase;letter-spacing:.05em}c3m-input-material input::-webkit-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translate(0,1.825rem) scale(1.3);transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input:-ms-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input::-ms-input-placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transform-origin:left bottom;transform:translate(0,1.825rem) scale(1.3)}c3m-input-material input::placeholder-shown+label{cursor:text;padding-bottom:.4rem;max-width:66.66%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translate(0,1.825rem) scale(1.3);transform:translate(0,1.825rem) scale(1.3)}c3m-input-material ::-webkit-input-placeholder{opacity:0;transition:inherit}c3m-input-material input:focus::-webkit-input-placeholder{opacity:1}c3m-input-material input:focus+label,c3m-input-material input:not(:placeholder-shown)+label{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:translate(0,0) scale(.8);transform:translate(0,0) scale(.8);padding-bottom:0;cursor:pointer}"]
            }] }
];
/** @nocollapse */
InputMaterialComponent.ctorParameters = () => [];
InputMaterialComponent.propDecorators = {
    title: [{ type: Input }],
    placeholder: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputPasswordComponent {
    constructor() {
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
    ngOnInit() { }
}
InputPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-password',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"password\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-password[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputPasswordComponent.ctorParameters = () => [];
InputPasswordComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputSearchComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputTelComponent {
    constructor() {
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
    ngOnInit() { }
}
InputTelComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-tel',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"tel\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [pattern]=\"\"\n    [title]=\"\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-tel input{width:85%;max-width:22em}c3m-input-tel[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputTelComponent.ctorParameters = () => [];
InputTelComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    pattern: [{ type: Input }],
    title: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputUrlComponent {
    constructor() {
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
    ngOnInit() { }
}
InputUrlComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-input-url',
                template: "<p>\n  <label [attr.for]=\"id\"><ng-content></ng-content></label>\n  <input\n    type=\"url\"\n    [attr.id]=\"id\"\n    [name]=\"this.name\"\n    [value]=\"value\"\n    [autocomplete]=\"autocomplete\"\n    maxlength=\"maxlength\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n  />\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-input-url input{width:85%;max-width:22em}c3m-input-url[required] label{background-image:url(/assets/img/mandatory.svg);background-repeat:no-repeat;padding-left:20px}"]
            }] }
];
/** @nocollapse */
InputUrlComponent.ctorParameters = () => [];
InputUrlComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    autocomplete: [{ type: Input }],
    maxlength: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataList.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.listItem = data;
        });
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list',
                template: "<ul>\n  <li *ngFor=\"let item of listItem\">{{ item.value }}</li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list ul{list-style-type:disc;margin-left:2rem}c3m-list li+li{margin-top:.5em}"]
            }] }
];
/** @nocollapse */
ListComponent.ctorParameters = () => [
    { type: Http }
];
ListComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListDescriptionComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataList.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.listItem = data;
        });
    }
}
ListDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-description',
                template: "<dl *ngFor=\"let item of listItem\">\n  <dt>{{ item.title }}</dt>\n  <dd>{{ item.content }}</dd>\n</dl>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-description dl{margin:1rem 0}c3m-list-description dt{font-family:var(--stack-b)}c3m-list-description dd{margin:.25em 0 0 1em}"]
            }] }
];
/** @nocollapse */
ListDescriptionComponent.ctorParameters = () => [
    { type: Http }
];
ListDescriptionComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListOrderComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataList.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.listItem = data;
        });
    }
}
ListOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-order',
                template: "<ol>\n  <li *ngFor=\"let item of listItem\">{{ item.value }}</li>\n</ol>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-order ol{list-style-type:decimal;margin-left:2rem}c3m-list-order li+li{margin-top:.5em}"]
            }] }
];
/** @nocollapse */
ListOrderComponent.ctorParameters = () => [
    { type: Http }
];
ListOrderComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListThumbnailsComponent {
    // Constructor
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    // On Init
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataList.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.listItem = data;
        });
    }
}
ListThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-list-thumbnails',
                template: "<ul>\n  <li *ngFor=\"let item of listItem\">\n    <p><img src=\"{{ item.url }}\" alt=\"fake image\" /></p>\n    <div class=\"content\">\n      {{ item.value }}\n    </div>\n  </li>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-list-thumbnails li{display:flex;align-items:center;max-width:35em}c3m-list-thumbnails li+li{padding-top:1rem;margin-top:1rem;border-top:1px solid var(--n-medium)}c3m-list-thumbnails li>p{flex-basis:30%;max-width:180px}c3m-list-thumbnails .content{flex-basis:65%;line-height:1.45}"]
            }] }
];
/** @nocollapse */
ListThumbnailsComponent.ctorParameters = () => [
    { type: Http }
];
ListThumbnailsComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent {
    constructor() {
        // Inputs
        this.legend = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-radio',
                template: "<fieldset>\n  <legend>{{ this.legend }}</legend>\n  <ul>\n    <ng-content></ng-content>\n  </ul>\n</fieldset>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-radio{margin-bottom:1rem}c3m-radio legend{font:1em/1 var(--stack-b);padding-bottom:1em}c3m-radio label{display:inline-block;font-family:var(--stack);padding:0 0 0 .5em}c3m-radio.go-along ul{display:flex}c3m-radio.go-along c3m-radio-item+c3m-radio-item{margin-left:2em}c3m-radio.switch{display:flex;position:relative}c3m-radio.switch li{display:inline-block}c3m-radio.switch input{position:absolute;width:25px;left:-35px;opacity:0}c3m-radio.switch c3m-radio-item label{display:inline-block;overflow:hidden;font-size:.95rem;text-transform:uppercase;color:var(--n-dark);background:var(--n-medium);padding:.65em .8em .5em;margin-left:-4px;border-bottom:1px solid rgba(0,0,0,.2);transition:.5s;cursor:pointer}c3m-radio.switch c3m-radio-item:first-child label{border-top-left-radius:.3em;border-bottom-left-radius:.3em;margin-left:0}c3m-radio.switch c3m-radio-item:last-child label{border-top-right-radius:.3em;border-bottom-right-radius:.3em}c3m-radio.switch input:checked+label{color:var(--text-inv);background-color:var(--main-color)}@media screen and (min-width:750px){c3m-radio legend{font-size:1.3em}}"]
            }] }
];
/** @nocollapse */
RadioComponent.ctorParameters = () => [];
RadioComponent.propDecorators = {
    legend: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioItemComponent {
    constructor() {
        // Inputs
        this.title = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
RadioItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-radio-item',
                template: "<li>\n  <input\n    type=\"radio\"\n    id=\"{{ id }}\"\n    [name]=\"this.name\"\n    [value]=\"this.value\"\n    [checked]=\"checked\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n  />\n  <label for=\"{{ id }}\">{{ this.title }}</label>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
RadioItemComponent.ctorParameters = () => [];
RadioItemComponent.propDecorators = {
    title: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectDatalistComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectDatalistsComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkipComponent {
    constructor() {
        this.isHidden = false;
        this.styleClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SkipComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-skip',
                template: "<a\n  c3mScrollTo\n  routerLink=\"./\"\n  fragment=\"{{ this.target }}\"\n  class=\"{{ this.styleClass }}\"\n  [ngClass]=\"{ hiddenLink: isHidden }\"\n>\n  <ng-content></ng-content>\n</a>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-skip a.hiddenLink{position:absolute;overflow:hidden;width:1px;height:1px;left:-9999px}c3m-skip a.hiddenLink:focus{position:static;overflow:visible;width:auto;height:auto}"]
            }] }
];
/** @nocollapse */
SkipComponent.ctorParameters = () => [];
SkipComponent.propDecorators = {
    target: [{ type: Input }],
    isHidden: [{ type: Input }],
    styleClass: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SliderComponent {
    /* CONSTRUCTOR */
    /**
     * @param {?} myComponent
     */
    constructor(myComponent) {
        this.myComponent = myComponent;
        this.offset = 0;
    }
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isBubble = this.myComponent.nativeElement.classList.contains('bubble');
        // If contains Bubble class
        if (this.isBubble) {
            this.setPositionBubble();
        }
    }
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.isBubble) {
            this.setPositionBubble();
        }
    }
    /* Display value */
    /**
     * @return {?}
     */
    showValue() {
        if (this.isBubble) {
            this.setPositionBubble();
        }
        this.output.nativeElement.innerHTML = this.input.nativeElement.value;
    }
    /* Move the output with the slider */
    /**
     * @return {?}
     */
    setPositionBubble() {
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
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-slider',
                template: "<!-- Slider Content -->\n<p class=\"slider-content\">\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <!-- Input type RANGE -->\n  <input\n    type=\"range\"\n    #slider\n    id=\"{{ id }}\"\n    [attr.min]=\"min\"\n    [attr.max]=\"max\"\n    [attr.step]=\"step\"\n    [attr.value]=\"value\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    (input)=\"showValue()\"\n  />\n  <!-- Output for display change value -->\n  <output for=\"{{ id }}\" #output>{{ this.value }}</output>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-slider .slider-content{position:relative}c3m-slider.bubble .slider-content{margin-bottom:2em}c3m-slider input[type=range]{display:inline-block;width:50%;background-color:rgba(0,0,0,0);padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}c3m-slider input[type=range]:focus{outline:0}c3m-slider input[type=range]::-webkit-slider-runnable-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-webkit-slider-thumb{height:26px;width:26px;background:var(--sec-light);margin-top:-9px;border-radius:26px;-webkit-appearance:none;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}c3m-slider input[type=range]:focus::-webkit-slider-runnable-track{background:#45abbc}c3m-slider input[type=range]::-moz-range-track{width:100%;height:8px;background:var(--main-light);border-radius:8px;box-shadow:none;cursor:pointer}c3m-slider input[type=range]::-moz-range-thumb{height:26px;width:26px;background:var(--sec-light);border:none;border-radius:26px;box-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:pointer}input[type=range]::-ms-track{width:100%;height:8px;cursor:pointer;background:0 0;border-color:transparent;color:transparent}c3m-slider input[type=range]::-ms-fill-lower{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-fill-upper{background:var(--main-light);border:.2px solid var(--n-medium);border-radius:2.6px;box-shadow:none}c3m-slider input[type=range]::-ms-thumb{width:26px;border-radius:12px;background:var(--sec-light);cursor:pointer;height:8.4px}c3m-slider input[type=range]:focus::-ms-fill-lower{background:var(--main-light)}c3m-slider input[type=range]:focus::-ms-fill-upper{background:var(--main-light)}c3m-slider output{position:relative;top:.3em;font:1.2rem var(--stack-b);text-transform:uppercase;color:var(--main-color);margin-left:1rem}c3m-slider.bubble output{position:absolute;display:inline-block;top:auto;bottom:-2.4rem;left:0;width:40px;height:26.2px;text-align:center;color:var(--text-inv);background-color:var(--n-dark);padding-top:.3rem;margin-left:0;border-radius:10px;-webkit-transform:translate(-50%);transform:translate(-50%)}c3m-slider.bubble output:after{content:'';position:absolute;width:0;height:0;border-bottom:10px solid var(--n-dark);border-left:5px solid transparent;border-right:5px solid transparent;bottom:100%;left:50%;margin-left:-5px;margin-top:-1px}"]
            }] }
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    input: [{ type: ViewChild, args: ['slider',] }],
    output: [{ type: ViewChild, args: ['output',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-progress',
                template: "<p>\n  <label for=\"{{ id }}\"><ng-content></ng-content></label>\n  <progress id=\"{{ id }}\" name=\"name\" [attr.max]=\"max\" [attr.value]=\"value\" disabled=\"disabled\"> </progress>\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    max: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerProgressComponent {
    constructor() {
        this.size = 50;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SpinnerProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-spinner-progress',
                template: "<svg [attr.height]=\"size\" [attr.width]=\"size\" viewBox=\"0 0 50 50\">\n  <path\n    fill=\"#45ABBC\"\n    d=\"M25,5A20,20,0,0,1,44.87,22.72,2.52,2.52,0,0,0,47.36,25h0a2.52,2.52,0,0,0,2.48-2.82,25,25,0,0,0-49.68,0A2.52,2.52,0,0,0,2.64,25h0a2.52,2.52,0,0,0,2.49-2.28A20,20,0,0,1,25,5Z\"\n  >\n    <animateTransform\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"0 25 25\"\n      to=\"360 25 25\"\n      dur=\"1s\"\n      repeatCount=\"indefinite\"\n    />\n  </path>\n\n  <path\n    fill=\"#6CBE45\"\n    d=\"M25,36.5A12.07,12.07,0,0,1,13,25.87a1.52,1.52,0,0,0-1.5-1.37h0A1.51,1.51,0,0,0,10,26.19a15.1,15.1,0,0,0,30,0,1.51,1.51,0,0,0-1.5-1.69h0A1.52,1.52,0,0,0,37,25.87,12.07,12.07,0,0,1,25,36.5Z\"\n  >\n    <animateTransform\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"360 25 25\"\n      to=\"0 25 25\"\n      dur=\"1.5s\"\n      repeatCount=\"indefinite\"\n    />\n  </path>\n</svg>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
SpinnerProgressComponent.ctorParameters = () => [];
SpinnerProgressComponent.propDecorators = {
    size: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepItemComponent {
    /* CONSTRUCTOR */
    /**
     * @param {?} step
     * @param {?} cdr
     */
    constructor(step, cdr) {
        this.cdr = cdr;
        this.isActive = false;
        this.isPassed = false;
        this.stepLink = '';
        step.addTab(this); // Add item on Items Tab
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Past(value) {
        this._past = value;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    get Past() {
        return this._past;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set Future(value) {
        this._future = value;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    get Future() {
        return this._future;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.reference = this.itemRef;
    }
}
StepItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-step-item',
                template: "<!-- Step Item -->\n<li #items [ngClass]=\"{ active: isActive, past: Past, future: Future }\" [c3mStepCurrent]=\"isActive\">\n  <ng-container *ngIf=\"isPassed\">\n    <a href=\"{{ stepLink }}\">{{ title }}</a>\n  </ng-container>\n  <ng-container *ngIf=\"!isPassed\">\n    {{ title }}\n  </ng-container>\n</li>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
StepItemComponent.ctorParameters = () => [
    { type: StepComponent },
    { type: ChangeDetectorRef }
];
StepItemComponent.propDecorators = {
    itemRef: [{ type: ViewChild, args: ['items',] }],
    title: [{ type: Input }],
    isActive: [{ type: Input }],
    isPassed: [{ type: Input }],
    stepLink: [{ type: Input }],
    indexStep: [{ type: Input }],
    reference: [{ type: Input }],
    Past: [{ type: Input, args: ['isPast',] }],
    Future: [{ type: Input, args: ['isFuture',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepComponent {
    /* CONSTRUCTOR */
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        /* VARIABLES */
        this.itemStepTab = [];
        this.itemsStepTabReference = [];
        this.sizeInit = 0;
        this.StepItemComponentBis = StepItemComponent;
    }
    /* AFTER VIEW INIT */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.itemStepTab.forEach((StepItemComponentBis, index) => {
            StepItemComponentBis.indexStep = index + 1;
            this.itemsStepTabReference.push(StepItemComponentBis.reference);
            if (StepItemComponentBis.isActive) {
                this.theActiveStepItem = StepItemComponentBis.indexStep;
            }
        });
        /* CALCUL BREAKPOINT ON PAGE LOAD */
        for (let i = 0; i < this.itemsStepTabReference.length - 1; i++) {
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
    }
    /* AFTER VIEW CHECK */
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /* For Each items */
        this.itemStepTab.forEach((StepItemComponentBis, index) => {
            /* if after the active item, add class future */
            if (index + 1 > this.theActiveStepItem) {
                StepItemComponentBis.Future = true;
            }
            else {
                StepItemComponentBis.Future = false;
            }
            /* if before the active item, add class past */
            if (index + 1 < this.theActiveStepItem) {
                StepItemComponentBis.Past = true;
            }
            else {
                StepItemComponentBis.Past = false;
            }
        });
    }
    /* Resize breakpoint tab*/
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
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
    }
    /* ADD AN ITEM INTO ITEMS TAB */
    /**
     * @param {?} stepItem
     * @return {?}
     */
    addTab(stepItem) {
        stepItem.isActive = false; // And set isActive var to False
        this.itemStepTab.push(stepItem);
    }
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-step',
                template: "<!-- Items List -->\n<ol #items [ngClass]=\"{ over: isOver }\">\n  <ng-content></ng-content>\n</ol>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-step ol{counter-reset:step}c3m-step ol li{display:inline-block;position:relative;list-style-type:none;font-size:.9em;text-align:center;color:var(--n-dark);background-color:rgba(255,255,255,0);padding:.8em 1em;margin-left:-5px}c3m-step ol li::before{display:block;position:relative;width:1.5em;height:1.5em;line-height:1.5em;font-size:1.2em;content:counter(step);counter-increment:step;text-align:center;color:var(--text-inv);background-color:var(--n-dark);border-radius:1.5em;margin:0 auto .6rem;z-index:2}c3m-step ol li::after{display:block;position:absolute;width:100%;height:5px;top:1.5em;left:0;content:'';background-color:var(--n-dark);z-index:1}c3m-step-item:first-child li::after{width:50%;left:50%}c3m-step-item:last-child li::after{width:50%;left:auto;right:50%}c3m-step ol li.past{color:var(--n-dark);background-color:rgba(255,255,255,0)}c3m-step ol li.past::before{content:'';color:var(--text-inv);background:var(--main-color) url(/assets/img/sprite.svg) 3px -429px no-repeat}c3m-step ol li.past::after{background-color:var(--main-color)}c3m-step ol li.active::before{color:var(--text-inv);background-color:var(--main-color)}c3m-step ol li.active::after{background-color:var(--n-dark);background-image:linear-gradient(90deg,var(--main-color) 50%,var(--n-dark) 50%)}c3m-step ol li.future{color:var(--n-dark);background-color:var(--n-light)}c3m-step ol li.future::before{color:var(--n-light);background-color:var(--n-dark)}c3m-step ol.over li{display:block;width:100%;text-align:left;padding:.5rem}c3m-step ol.over li:before{display:inline-block;margin:0}"]
            }] }
];
/** @nocollapse */
StepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StepComponent.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
}
ColumnTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-column-table',
                template: "<table>\n  <caption>\n    Responsive Table\n  </caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Movie Title</th>\n      <th scope=\"col\">Duration</th>\n      <th scope=\"col\">Year</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Country</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">Inception</th>\n      <td data-header=\"Duration\">148</td>\n      <td data-header=\"Year\">2010</td>\n      <td data-header=\"Category\">SF</td>\n      <td data-header=\"Country\">UK</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">The dark knight</th>\n      <td data-header=\"Duration\">164</td>\n      <td data-header=\"Year\">2012</td>\n      <td data-header=\"Category\">SH</td>\n      <td data-header=\"Country\">USA/UK</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">Pulp Fiction</th>\n      <td data-header=\"Duration\">154</td>\n      <td data-header=\"Year\">1994</td>\n      <td data-header=\"Category\">Gangster</td>\n      <td data-header=\"Country\">USA</td>\n    </tr>\n  </tbody>\n</table>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-column-table table{width:100%;text-align:left}c3m-column-table caption{font:1.5em var(--stack);text-align:left;margin-bottom:.6rem}c3m-column-table td,c3m-column-table th{color:var(--body-text);background-color:var(--body-bg);padding:1rem .5rem}c3m-column-table thead th{font-size:1.3em;border-bottom:2px solid var(--n-dark)}c3m-column-table td{border-bottom:1px solid var(--n-medium)}@media screen and (max-width:1000px){c3m-column-table table{display:block;width:100%;padding:.5rem;border-radius:.3em;border:none}c3m-column-table caption{display:block;font-size:1.5em}c3m-column-table tbody{display:block}c3m-column-table thead{display:none}c3m-column-table tbody tr{display:block;margin-bottom:2rem}c3m-column-table tbody th,c3m-column-table th{background-color:var(--n-light);padding:0 0 .5rem}c3m-column-table td{display:block;background-color:initial;padding:.5rem 0;border:none;border-bottom:1px solid var(--n-medium)}c3m-column-table td::before{display:inline-block;width:45%;content:attr(data-header);padding-right:2rem}c3m-column-table tbody strong{display:inline-block;width:6em;color:#f5f5f5}}"]
            }] }
];
/** @nocollapse */
ColumnTableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ToggleTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-toggle-table',
                template: "<p>\n  toggle-table works!\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ToggleTableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageSwipeTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PageSwipeTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-page-swipe-table',
                template: "<p>\n  page-swipe-table works!\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
PageSwipeTableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabComponent {
    /* Constructor Tab Component */
    /**
     * @param {?} tabs
     */
    constructor(tabs) {
        tabs.addTab(this);
        this.idTab = this.randomID();
    }
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    }
    /* ID for Accessbility */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.tabID = 'tab' + this.idTab;
        this.panelID = 'panel' + this.idTab;
    }
    /**
     * @return {?}
     */
    randomID() {
        /** @type {?} */
        const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-tab',
                template: "<div class=\"content\" [attr.aria-hidden]=\"!isActive\" [attr.aria-labeledby]=\"tabID\" id=\"{{ panelID }}\">\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabsComponent }
];
TabComponent.propDecorators = {
    tabTitle: [{ type: Input }],
    isActive: [{ type: Input }],
    idTab: [{ type: Input }],
    isDisabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsComponent {
    /* constructor tab */
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        /* Variables */
        this.tabs = [];
        this.sizeInit = 0;
        this.arrayTmp = [];
        this.startIndexActiv = 0;
        this.TabComponentBis = TabComponent;
    }
    /* Resize breakpoint tab */
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        if (this.tabsElement.length === 1 ||
            this.tabsElement.last.nativeElement.offsetTop === this.tabsElement.first.nativeElement.offsetTop) {
            this.isOver = true;
        }
        else {
            this.isOver = false;
        }
        this.cdr.detectChanges();
    }
    /* add tab to tab table and select tab active */
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        if (this.tabs.length === this.startIndexActiv) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    }
    /* close tabs et open the active tab */
    /**
     * @param {?} tab
     * @return {?}
     */
    selectTab(tab) {
        this.tabs.forEach(TabComponentBis => {
            TabComponentBis.isActive = false;
        });
        tab.isActive = true;
    }
    /* breakpoint tab */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.arrayTmp = this.tabsElement.toArray();
        for (let i = 0; i < this.arrayTmp.length - 1; i++) {
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
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-tabs',
                template: "<div class=\"tabsContainer\">\n  <ul>\n    <li #tabs *ngFor=\"let tab of tabs\" [ngClass]=\"{ active: tab.isActive, over: isOver }\">\n      <button\n        id=\"{{ tab.tabID }}\"\n        (click)=\"selectTab(tab)\"\n        [attr.aria-expanded]=\"tab.isActive\"\n        [attr.aria-controls]=\"tab.panelID\"\n        [attr.aria-selected]=\"tab.isActive\"\n      >\n        {{ tab.tabTitle }}\n      </button>\n    </li>\n  </ul>\n\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".tabsContainer{margin:2rem 0}.tabsContainer>ul li button{width:100%;font-family:var(--stack-b);text-align:left;background-color:var(--n-light);padding:.5em 1em}.tabsContainer>ul li button:focus,.tabsContainer>ul li button:hover,.tabsContainer>ul li.active button{color:var(--text-inv);background-color:var(--main-color)}c3m-tab .content[aria-hidden=false]{background-color:var(--n-light);padding:1rem}c3m-tab .content[aria-hidden=true]{display:none}.tabsContainer>ul li.over{display:inline-block;margin-right:.5rem}.tabsContainer>ul li.over button{background-color:var(--body-bg);border-radius:0}.tabsContainer>ul li.over button:focus,.tabsContainer>ul li.over button:hover,.tabsContainer>ul li.over.active button{color:var(--body-text);background-color:var(--n-light)}@media screen and (min-width:850px){.tabsContainer>ul li{font-size:1.2rem}c3m-tab .content[aria-hidden=false]{padding:2rem}}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    tabsElement: [{ type: ViewChildren, args: ['tabs',] }],
    tabComponents: [{ type: ContentChildren, args: [TabComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagerService {
    // Function getPager (totalItems,  CurrentPage  , PageSize)
    /**
     * @param {?} totalItems
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @return {?}
     */
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        // Calculate total pages
        /** @type {?} */
        const totalPages = Math.ceil(totalItems / pageSize);
        // StartPage and EndPage declaration
        /** @type {?} */
        let startPage;
        /** @type {?} */
        let endPage;
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
        const startIndex = (currentPage - 1) * pageSize;
        // EndIndex = min between [startIndex + pageSize-1] AND [totalItems-1]
        /** @type {?} */
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        /** @type {?} */
        const pages = [];
        // Create an array of pages to ng-repeat in the pager control
        for (let i = startPage; i < endPage + 1; i++) {
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
    }
}
PagerService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationComponent {
    // Constructor
    /**
     * @param {?} http
     * @param {?} pagerService
     */
    constructor(http, pagerService) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get Data of a JSON (or other...)
        from(this.http.get('assets/json/dataPagination.json'))
            .pipe(map((response) => response.json())) // Specify JSON type
            .subscribe(data => {
            // Set items to response Json
            this.allItems = data;
            // Initialize to page 1
            this.setPage(1);
        });
    }
    // SetPage
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
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
        const paginationListe = this.pagination.nativeElement;
        /** @type {?} */
        const eltPagined = paginationListe.children[this.pageSelected];
        /** @type {?} */
        const btnPagined = eltPagined.childNodes[0];
        /** @type {?} */
        const nextEltPagined = page + 2;
        /** @type {?} */
        const eltOn = page + 1;
        btnPagined.removeAttribute('aria-current');
        /** @type {?} */
        const nextButtonPagined = this.pagination.nativeElement.childNodes[nextEltPagined];
        nextButtonPagined.childNodes[0].setAttribute('aria-current', 'page');
        this.pageSelected = eltOn;
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-pagination',
                template: "<!-- Pagination container -->\n<div class=\"paginationContainer\">\n  <!-- All Items -->\n  <ul class=\"paginationItems\">\n    <li *ngFor=\"let item of pagedItems\">{{ item.name }}</li>\n  </ul>\n\n  <!-- Pages -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\" #pagination>\n    <!-- first -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\" class=\"btnFirst\">\n      <button (click)=\"setPage(1)\"><img src=\"{{ imgFirst }}\" alt=\"First Page\" /></button>\n    </li>\n\n    <!-- previous -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\" class=\"btnPrevious\">\n      <button (click)=\"setPage(pager.currentPage - 1)\">\n        <img src=\"{{ imgBack }}\" alt=\"Previous Page\" />\n      </button>\n    </li>\n\n    <!-- pages numbers -->\n    <li\n      *ngFor=\"let page of pager.pages\"\n      [ngClass]=\"{ active: pager.currentPage === page }\"\n      class=\"btnPages\"\n      [c3mPaginationCurrent]=\"pager.currentPage === page\"\n    >\n      <button (click)=\"setPage(page)\">{{ page }}</button>\n    </li>\n\n    <!-- next -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\" class=\"btnNext\">\n      <button (click)=\"setPage(pager.currentPage + 1)\"><img src=\"{{ imgNext }}\" alt=\"Next Page\" /></button>\n    </li>\n\n    <!-- last -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\" class=\"btnLast\">\n      <button (click)=\"setPage(pager.totalPages)\"><img src=\"{{ imgLast }}\" alt=\"Last Page\" /></button>\n    </li>\n  </ul>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-pagination .paginationContainer{padding:.5rem}c3m-pagination .paginationItems{display:flex;text-align:center;flex-wrap:wrap}c3m-pagination .paginationItems li{color:#fff;height:5rem;font:1rem quicksandbold,Helvetica,Arial,sans-serif;width:5rem;background-color:#45abbc;margin:.5rem;padding:.5rem}c3m-pagination .pagination{margin-top:2rem;text-align:left}c3m-pagination .pagination li{background-color:#ed9c21;width:1.7rem;display:inline-block;height:1.7rem;margin-right:.3rem;margin-bottom:.6rem}c3m-pagination .pagination li:not(.btnPages){background-color:#6cbe45}c3m-pagination .pagination li.active{background-color:#45abbc}c3m-pagination .pagination button{background-color:transparent;height:100%;width:100%;padding:0;color:#fff;cursor:pointer}c3m-pagination .pagination button img{width:80%;height:80%;margin:0 auto;display:block}c3m-pagination .pagination li:hover{opacity:.8}c3m-pagination .pagination li.disabled{background-color:#b7bdb4}c3m-pagination .pagination li.disabled button{pointer-events:none}c3m-pagination .pagination li.disabled:hover{opacity:1}@media screen and (min-width:1000px){c3m-pagination .pagination li{width:2.4rem;height:2.4rem}}"]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: Http },
    { type: PagerService }
];
PaginationComponent.propDecorators = {
    imgFirst: [{ type: Input }],
    imgBack: [{ type: Input }],
    imgNext: [{ type: Input }],
    imgLast: [{ type: Input }],
    pagination: [{ type: ViewChild, args: ['pagination',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    constructor() {
        this.topPosition = 0;
        this.leftPosition = 0;
        this.modalWidth = 0;
        this.closeBtnTitle = 'Close dialog';
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.dialogTitle = 'modalTitle' + this.randomID();
        this.dialogDescription = 'modalDesc' + this.randomID();
        this.btnCloseLabel = 'Close dialog';
        this.getScreenSize();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isOpen = false;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }
    /* Open Modal */
    /**
     * @return {?}
     */
    ToggleOpen() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.onShow.emit(this.dialogElement);
            this.modalPosition();
            // Focus on close button
            /** @type {?} */
            const titleModalFocus = this.focusable.nativeElement;
            setTimeout(function () {
                titleModalFocus.focus();
            }, 500);
        }
        else if (this.isOpen) {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    }
    /**
     * @return {?}
     */
    modalPosition() {
        if (this.screenWidth > 768) {
            if (this.topPosition > 0) {
                this.container.nativeElement.style.top = this.topPosition + 'px';
            }
            else {
                this.container.nativeElement.style.top = '40%';
            }
            if (this.leftPosition > 0) {
                /** @type {?} */
                const widthModal = 100 - this.leftPosition * 2;
                this.container.nativeElement.style.width = widthModal + '%';
                this.container.nativeElement.style.left = this.leftPosition + '%';
            }
            else if (this.modalWidth > 0) {
                /** @type {?} */
                const leftPositionModal = (this.screenWidth - this.modalWidth) / 2;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (event.key === 'Escape') {
            this.isOpen = false;
            this.onHide.emit(this.dialogElement);
        }
    }
    /**
     * @return {?}
     */
    randomID() {
        /** @type {?} */
        const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
        return idRandom;
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-modal',
                template: "<div class=\"dialog\" #dialogElement [attr.aria-hidden]=\"!isOpen\">\n  <div class=\"dialog-overlay\" (click)=\"ToggleOpen()\" tabindex=\"-1\"></div>\n  <div\n    class=\"dialog-content\"\n    #container\n    [ngClass]=\"styleClass\"\n    [attr.aria-labeledby]=\"dialogTitle\"\n    [attr.aria-describedby]=\"dialogDescription\"\n    role=\"dialog\"\n    (keyup)=\"onKey($event)\"\n    c3mModalOut\n  >\n    <h1 id=\"{{ dialogTitle }}\" tabindex=\"0\" #focusable>{{ modaTitle }}</h1>\n    <div id=\"{{ dialogDescription }}\">\n      <ng-content></ng-content>\n    </div>\n\n    <button (click)=\"ToggleOpen()\" class=\"dialog-close\" [attr.aria-label]=\"closeBtnTitle\">\n      &times;\n    </button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".dialog[aria-hidden=true]{display:none}.dialog-overlay{z-index:10;background-color:rgba(16,15,15,.84);position:fixed;top:0;left:0;bottom:0;right:0}.dialog-content{background-color:#fff;z-index:15;position:fixed;padding:2em;border-radius:2px}.dialog[aria-hidden=false] .dialog-content{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:test;animation-name:test}@-webkit-keyframes test{from{opacity:0}to{opacity:1}}@keyframes test{from{opacity:0}to{opacity:1}}.dialog h1{margin-bottom:1.5rem;font-size:2rem}.dialog p{font-size:1.2rem;margin-bottom:1.5rem}.dialog-close{position:absolute;top:.5em;right:.5em;border:0;padding:0;background-color:transparent;font-weight:700;font-size:1.25em;width:1.2em;height:1.2em;text-align:center;cursor:pointer;transition:.15s}.dialog input{border-radius:2px;border:1px solid gray;height:1.4rem;width:90%;min-width:10em}.dialog label{font-family:quicksanditalic;margin-right:1rem}@media screen and (min-width:700px){.dialog-close{top:1em;right:1em}}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [];
ModalComponent.propDecorators = {
    isOpen: [{ type: HostListener, args: ['window:resize', ['$event'],] }, { type: Input }],
    styleClass: [{ type: Input }],
    topPosition: [{ type: Input }],
    leftPosition: [{ type: Input }],
    modalWidth: [{ type: Input }],
    modaTitle: [{ type: Input }],
    closeBtnTitle: [{ type: Input }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    dialogElement: [{ type: ViewChild, args: ['dialogElement',] }],
    container: [{ type: ViewChild, args: ['container',] }],
    focusable: [{ type: ViewChild, args: ['focusable',] }],
    getScreenSize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalAlertComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ModalAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-modal-alert',
                template: "<p>\n  modal-alert works!\n</p>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
ModalAlertComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonLinkComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ButtonLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-button-link',
                template: "<a [routerLink]=\"this.url\">\n  {{ this.linkText }}\n</a>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-button-link a,c3m-button-link a:visited{background-color:var(--sec-light);padding:.5em;border-radius:.25em;color:#fff;text-decoration:none;transition:background .2s}c3m-button-link a:focus,c3m-button-link a:hover{color:#fff;background:var(--main-light)}"]
            }] }
];
/** @nocollapse */
ButtonLinkComponent.ctorParameters = () => [];
ButtonLinkComponent.propDecorators = {
    url: [{ type: Input }],
    linkText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** @type {?} */
        const map$$1 = {};
        /** @type {?} */
        let oldElementFocused;
        /** @type {?} */
        const containerModal = this.el.nativeElement;
        this.el.nativeElement.onkeydown = this.el.nativeElement.onkeyup = function (e) {
            /** @type {?} */
            const elementFocused = (/** @type {?} */ (e.target));
            /** @type {?} */
            const typeElementFocused = elementFocused;
            /** @type {?} */
            const nbChild = containerModal.childElementCount;
            /** @type {?} */
            const lastChildElt = containerModal.childNodes[nbChild - 1];
            /** @type {?} */
            const firstChildElt = containerModal.childNodes[0];
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
}
ModalDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mModalOut]'
            },] }
];
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.liElement = this.el.nativeElement;
        if (this.pager === true) {
            this.liElement.childNodes[0].setAttribute('aria-current', 'page');
        }
    }
}
PaginationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mPaginationCurrent]'
            },] }
];
/** @nocollapse */
PaginationDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
PaginationDirective.propDecorators = {
    pager: [{ type: Input, args: ['c3mPaginationCurrent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepsDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const liElement = this.el.nativeElement;
        if (this.activeStep) {
            liElement.setAttribute('aria-current', 'step');
        }
    }
}
StepsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mStepCurrent]'
            },] }
];
/** @nocollapse */
StepsDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
StepsDirective.propDecorators = {
    activeStep: [{ type: Input, args: ['c3mStepCurrent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrolltoDirective {
    constructor() { }
    /**
     * @param {?} elt
     * @return {?}
     */
    onClick(elt) {
        /** @type {?} */
        const target = elt.target;
        /** @type {?} */
        const classToFocus = target.classList[0];
        /** @type {?} */
        const eltToFocus = document.getElementById(classToFocus);
        if (eltToFocus) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(eltToFocus.tagName)) {
                eltToFocus.tabIndex = -1;
            }
            eltToFocus.focus();
        }
    }
}
ScrolltoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[c3mScrollTo]'
            },] }
];
/** @nocollapse */
ScrolltoDirective.ctorParameters = () => [];
ScrolltoDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CreamnglibModule {
}
CreamnglibModule.decorators = [
    { type: NgModule, args: [{
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
                imports: [BrowserModule, RouterModule],
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
                    RouterModule,
                    ModalDirective,
                    PaginationDirective,
                    StepsDirective,
                    ScrolltoDirective
                ],
                providers: [PagerService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ButtonComponent, ButtonFileComponent, ButtonIconComponent, ButtonIconOnlyComponent, ButtonSubmitComponent, ToastComponent, AccordionComponent, AccordionItemComponent, CalendarComponent, CarouselComponent, CarouselItemComponent, CheckboxComponent, CheckboxButtonComponent, CheckboxGroupComponent, CheckboxGroupItemComponent, CheckboxLinkComponent, DropdownComponent, DropdownItemComponent, FieldsetComponent, InputComponent, InputErrorMsgComponent, InputFloatingComponent, InputMailComponent, InputMaterialComponent, InputPasswordComponent, InputSearchComponent, InputTelComponent, InputUrlComponent, ListComponent, ListDescriptionComponent, ListOrderComponent, ListThumbnailsComponent, RadioComponent, RadioItemComponent, SelectComponent, SelectDatalistComponent, SelectDatalistsComponent, SkipComponent, SliderComponent, ProgressComponent, SpinnerProgressComponent, StepComponent, StepItemComponent, ColumnTableComponent, ToggleTableComponent, PageSwipeTableComponent, TabsComponent, TabComponent, PaginationComponent, ModalComponent, ModalAlertComponent, ButtonLinkComponent, ModalDirective, PaginationDirective, StepsDirective, ScrolltoDirective, CreamnglibModule, PagerService as ɵa };

//# sourceMappingURL=creamlib-ng.js.map