/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
export class ColumnTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixnQkFBZSxDQUFDOzs7O0lBRWhCLGVBQWU7UUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FpQkc7SUFDTCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHluQ0FBcUM7Z0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWNvbHVtbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8qY29uc3QgaGVhZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0aGVhZCB0aCcpO1xuICAgIGNvbnN0IHRpdGxlcyA9IFtdO1xuICAgIGZvciAoIGxldCB4ID0gMDsgeCA8IGhlYWRzLmxlbmd0aCA7IHgrKykge1xuICAgICAgdGl0bGVzLnB1c2goaGVhZHNbeF0uaW5uZXJIVE1MKTtcbiAgICB9XG5cbiAgICBjb25zdCBib2R5VHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYm9keVRyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJvZHlUclRkID0gYm9keVRyW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICAgIGZvciAoIGxldCBqID0gMDsgaiA8IGJvZHlUclRkLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZXNbal0pO1xuICAgICAgICAgICAgc3Ryb25nLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIGJvZHlUclRkW2pdLmluc2VydEJlZm9yZShzdHJvbmcsIGJvZHlUclRkW2pdLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG4gICAgfSovXG4gIH1cbn1cbiJdfQ==