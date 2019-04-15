/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagerService } from './pager.service';
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
        from(this.http.get('assets/json/dataPagination.json'))
            .pipe(map(function (response) { return response.json(); })) // Specify JSON type
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
        { type: Component, args: [{
                    selector: 'c3m-pagination',
                    template: "<!-- Pagination container -->\n<div class=\"paginationContainer\">\n  <!-- All Items -->\n  <ul class=\"paginationItems\">\n    <li *ngFor=\"let item of pagedItems\">{{ item.name }}</li>\n  </ul>\n\n  <!-- Pages -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\" #pagination>\n    <!-- first -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\" class=\"btnFirst\">\n      <button (click)=\"setPage(1)\"><img src=\"{{ imgFirst }}\" alt=\"First Page\" /></button>\n    </li>\n\n    <!-- previous -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\" class=\"btnPrevious\">\n      <button (click)=\"setPage(pager.currentPage - 1)\">\n        <img src=\"{{ imgBack }}\" alt=\"Previous Page\" />\n      </button>\n    </li>\n\n    <!-- pages numbers -->\n    <li\n      *ngFor=\"let page of pager.pages\"\n      [ngClass]=\"{ active: pager.currentPage === page }\"\n      class=\"btnPages\"\n      [c3mPaginationCurrent]=\"pager.currentPage === page\"\n    >\n      <button (click)=\"setPage(page)\">{{ page }}</button>\n    </li>\n\n    <!-- next -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\" class=\"btnNext\">\n      <button (click)=\"setPage(pager.currentPage + 1)\"><img src=\"{{ imgNext }}\" alt=\"Next Page\" /></button>\n    </li>\n\n    <!-- last -->\n    <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\" class=\"btnLast\">\n      <button (click)=\"setPage(pager.totalPages)\"><img src=\"{{ imgLast }}\" alt=\"Last Page\" /></button>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["c3m-pagination .paginationContainer{padding:.5rem}c3m-pagination .paginationItems{display:flex;text-align:center;flex-wrap:wrap}c3m-pagination .paginationItems li{color:#fff;height:5rem;font:1rem quicksandbold,Helvetica,Arial,sans-serif;width:5rem;background-color:#45abbc;margin:.5rem;padding:.5rem}c3m-pagination .pagination{margin-top:2rem;text-align:left}c3m-pagination .pagination li{background-color:#ed9c21;width:1.7rem;display:inline-block;height:1.7rem;margin-right:.3rem;margin-bottom:.6rem}c3m-pagination .pagination li:not(.btnPages){background-color:#6cbe45}c3m-pagination .pagination li.active{background-color:#45abbc}c3m-pagination .pagination button{background-color:transparent;height:100%;width:100%;padding:0;color:#fff;cursor:pointer}c3m-pagination .pagination button img{width:80%;height:80%;margin:0 auto;display:block}c3m-pagination .pagination li:hover{opacity:.8}c3m-pagination .pagination li.disabled{background-color:#b7bdb4}c3m-pagination .pagination li.disabled button{pointer-events:none}c3m-pagination .pagination li.disabled:hover{opacity:1}@media screen and (min-width:1000px){c3m-pagination .pagination li{width:2.4rem;height:2.4rem}}"]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: Http },
        { type: PagerService }
    ]; };
    PaginationComponent.propDecorators = {
        imgFirst: [{ type: Input }],
        imgBack: [{ type: Input }],
        imgNext: [{ type: Input }],
        imgLast: [{ type: Input }],
        pagination: [{ type: ViewChild, args: ['pagination',] }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.allItems;
    /** @type {?} */
    PaginationComponent.prototype.imgFirst;
    /** @type {?} */
    PaginationComponent.prototype.imgBack;
    /** @type {?} */
    PaginationComponent.prototype.imgNext;
    /** @type {?} */
    PaginationComponent.prototype.imgLast;
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.pager;
    /** @type {?} */
    PaginationComponent.prototype.pagedItems;
    /** @type {?} */
    PaginationComponent.prototype.pageSelected;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.pagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsSUFBSSxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFPRSxjQUFjO0lBQ2QsNkJBQW9CLElBQVUsRUFBVSxZQUEwQjtRQUE5QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7O1FBTXpELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7O1FBTXRCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFJaEIsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFuQm9ELENBQUM7SUFxQnRFLFVBQVU7Ozs7O0lBQ1Ysc0NBQVE7Ozs7O0lBQVI7UUFBQSxpQkFXQztRQVZDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2RSxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsNkJBQTZCO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLHVCQUF1QjtZQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVU7Ozs7OztJQUNWLHFDQUFPOzs7Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDNUMsT0FBTztTQUNSO1FBQ0QsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEUseURBQXlEO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztZQUdoRixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztZQUMvQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOztZQUN4RCxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O1lBQ3JDLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQzs7WUFDekIsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7O1lBQ3JDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDbEYsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwraURBQTBDO29CQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVZRLElBQUk7Z0JBR0osWUFBWTs7OzJCQWdCbEIsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFHTCxTQUFTLFNBQUMsWUFBWTs7SUE4Q3pCLDBCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E1RFksbUJBQW1COzs7Ozs7SUFLOUIsdUNBQXdCOztJQUd4Qix1Q0FBdUI7O0lBQ3ZCLHNDQUFzQjs7SUFDdEIsc0NBQXNCOztJQUN0QixzQ0FBc0I7O0lBR3RCLHlDQUFnRDs7SUFHaEQsb0NBQWdCOztJQUdoQix5Q0FBa0I7O0lBQ2xCLDJDQUFpQjs7Ozs7SUFuQkwsbUNBQWtCOzs7OztJQUFFLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlclNlcnZpY2UgfSBmcm9tICcuL3BhZ2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjM20tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIENvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBwYWdlclNlcnZpY2U6IFBhZ2VyU2VydmljZSkge31cblxuICAvLyBBcnJheSBvZiBhbGwgaXRlbXMgdG8gYmUgcGFnZWRcbiAgcHJpdmF0ZSBhbGxJdGVtczogYW55W107XG5cbiAgLy8gSW5wdXRzXG4gIEBJbnB1dCgpIGltZ0ZpcnN0ID0gJyc7XG4gIEBJbnB1dCgpIGltZ0JhY2sgPSAnJztcbiAgQElucHV0KCkgaW1nTmV4dCA9ICcnO1xuICBASW5wdXQoKSBpbWdMYXN0ID0gJyc7XG5cbiAgLy8gVmlld0NoaWxkXG4gIEBWaWV3Q2hpbGQoJ3BhZ2luYXRpb24nKSBwYWdpbmF0aW9uOiBFbGVtZW50UmVmO1xuXG4gIC8vIFBhZ2VyIE9iamVjdFxuICBwYWdlcjogYW55ID0ge307XG5cbiAgLy8gUGFnZWQgSXRlbXNcbiAgcGFnZWRJdGVtczogYW55W107XG4gIHBhZ2VTZWxlY3RlZCA9IDI7XG5cbiAgLy8gT24gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBHZXQgRGF0YSBvZiBhIEpTT04gKG9yIG90aGVyLi4uKVxuICAgIGZyb20odGhpcy5odHRwLmdldCgnYXNzZXRzL2pzb24vZGF0YVBhZ2luYXRpb24uanNvbicpKVxuICAgICAgLnBpcGUobWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpIC8vIFNwZWNpZnkgSlNPTiB0eXBlXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyBTZXQgaXRlbXMgdG8gcmVzcG9uc2UgSnNvblxuICAgICAgICB0aGlzLmFsbEl0ZW1zID0gZGF0YTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRvIHBhZ2UgMVxuICAgICAgICB0aGlzLnNldFBhZ2UoMSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIFNldFBhZ2VcbiAgc2V0UGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAvLyBjaGVjayBwYWdlIDwgMSBvciBwYWdlID4gdG90YWxQYWdlc1xuICAgIGlmIChwYWdlIDwgMSB8fCBwYWdlID4gdGhpcy5wYWdlci50b3RhbFBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEdldCBwYWdlciBvYmplY3QgZnJvbSBzZXJ2aWNlICggbnVtYmVyT2ZJdGVtcywgUGFnZSlcbiAgICB0aGlzLnBhZ2VyID0gdGhpcy5wYWdlclNlcnZpY2UuZ2V0UGFnZXIodGhpcy5hbGxJdGVtcy5sZW5ndGgsIHBhZ2UpO1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgcGFnZSBvZiBpdGVtcyAoY29weSB3aXRoIHNsaWNlKHN0YXJ0LGVuZCkpXG4gICAgdGhpcy5wYWdlZEl0ZW1zID0gdGhpcy5hbGxJdGVtcy5zbGljZSh0aGlzLnBhZ2VyLnN0YXJ0SW5kZXgsIHRoaXMucGFnZXIuZW5kSW5kZXggKyAxKTtcblxuICAgIC8vIENoYW5nZSBhcmlhLXBhZ2VcbiAgICBjb25zdCBwYWdpbmF0aW9uTGlzdGUgPSB0aGlzLnBhZ2luYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBlbHRQYWdpbmVkID0gcGFnaW5hdGlvbkxpc3RlLmNoaWxkcmVuW3RoaXMucGFnZVNlbGVjdGVkXTtcbiAgICBjb25zdCBidG5QYWdpbmVkID0gZWx0UGFnaW5lZC5jaGlsZE5vZGVzWzBdO1xuICAgIGNvbnN0IG5leHRFbHRQYWdpbmVkID0gcGFnZSArIDI7XG4gICAgY29uc3QgZWx0T24gPSBwYWdlICsgMTtcbiAgICBidG5QYWdpbmVkLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgY29uc3QgbmV4dEJ1dHRvblBhZ2luZWQgPSB0aGlzLnBhZ2luYXRpb24ubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzW25leHRFbHRQYWdpbmVkXTtcbiAgICBuZXh0QnV0dG9uUGFnaW5lZC5jaGlsZE5vZGVzWzBdLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKTtcbiAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IGVsdE9uO1xuICB9XG59XG4iXX0=