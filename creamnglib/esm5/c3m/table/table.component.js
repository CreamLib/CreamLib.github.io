/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'c3m-column-table',
                    template: "<table>\n  <caption>\n    Responsive Table\n  </caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Movie Title</th>\n      <th scope=\"col\">Duration</th>\n      <th scope=\"col\">Year</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Country</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">Inception</th>\n      <td data-header=\"Duration\">148</td>\n      <td data-header=\"Year\">2010</td>\n      <td data-header=\"Category\">SF</td>\n      <td data-header=\"Country\">UK</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">The dark knight</th>\n      <td data-header=\"Duration\">164</td>\n      <td data-header=\"Year\">2012</td>\n      <td data-header=\"Category\">SH</td>\n      <td data-header=\"Country\">USA/UK</td>\n    </tr>\n    <tr>\n      <th scope=\"row\" data-header=\"Movie Title\">Pulp Fiction</th>\n      <td data-header=\"Duration\">154</td>\n      <td data-header=\"Year\">1994</td>\n      <td data-header=\"Category\">Gangster</td>\n      <td data-header=\"Country\">USA</td>\n    </tr>\n  </tbody>\n</table>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-column-table table{width:100%;text-align:left}c3m-column-table caption{font:1.5em var(--stack);text-align:left;margin-bottom:.6rem}c3m-column-table td,c3m-column-table th{color:var(--body-text);background-color:var(--body-bg);padding:1rem .5rem}c3m-column-table thead th{font-size:1.3em;border-bottom:2px solid var(--n-dark)}c3m-column-table td{border-bottom:1px solid var(--n-medium)}@media screen and (max-width:1000px){c3m-column-table table{display:block;width:100%;padding:.5rem;border-radius:.3em;border:none}c3m-column-table caption{display:block;font-size:1.5em}c3m-column-table tbody{display:block}c3m-column-table thead{display:none}c3m-column-table tbody tr{display:block;margin-bottom:2rem}c3m-column-table tbody th,c3m-column-table th{background-color:var(--n-light);padding:0 0 .5rem}c3m-column-table td{display:block;background-color:initial;padding:.5rem 0;border:none;border-bottom:1px solid var(--n-medium)}c3m-column-table td::before{display:inline-block;width:45%;content:attr(data-header);padding-right:2rem}c3m-column-table tbody strong{display:inline-block;width:6em;color:#f5f5f5}}"]
                }] }
    ];
    /** @nocollapse */
    ColumnTableComponent.ctorParameters = function () { return []; };
    return ColumnTableComponent;
}());
export { ColumnTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFPRTtJQUFlLENBQUM7Ozs7SUFFaEIsOENBQWU7OztJQUFmO1FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBaUJHO0lBQ0wsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix5bkNBQXFDO29CQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O0lBd0JELDJCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F2Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tY29sdW1uLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtblRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLypjb25zdCBoZWFkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RoZWFkIHRoJyk7XG4gICAgY29uc3QgdGl0bGVzID0gW107XG4gICAgZm9yICggbGV0IHggPSAwOyB4IDwgaGVhZHMubGVuZ3RoIDsgeCsrKSB7XG4gICAgICB0aXRsZXMucHVzaChoZWFkc1t4XS5pbm5lckhUTUwpO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHlUciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBib2R5VHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYm9keVRyVGQgPSBib2R5VHJbaV0ucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgYm9keVRyVGQubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgY29uc3Qgc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlc1tqXSk7XG4gICAgICAgICAgICBzdHJvbmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgYm9keVRyVGRbal0uaW5zZXJ0QmVmb3JlKHN0cm9uZywgYm9keVRyVGRbal0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH1cbiAgICB9Ki9cbiAgfVxufVxuIl19