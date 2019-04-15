/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagerService } from './pager.service';
export class PaginationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3JlYW1saWIvbmcvIiwic291cmNlcyI6WyJjM20vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsSUFBSSxFQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0MsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRTlCLFlBQW9CLElBQVUsRUFBVSxZQUEwQjtRQUE5QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7O1FBTXpELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7O1FBTXRCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFJaEIsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFuQm9ELENBQUM7Ozs7O0lBc0J0RSxRQUFRO1FBQ04sbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBR0QsT0FBTyxDQUFDLElBQVk7UUFDbEIsc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDNUMsT0FBTztTQUNSO1FBQ0QsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEUseURBQXlEO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztjQUdoRixlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztjQUMvQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOztjQUN4RCxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2NBQ3JDLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQzs7Y0FDekIsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7O2NBQ3JDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDbEYsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwraURBQTBDO2dCQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFWUSxJQUFJO1lBR0osWUFBWTs7O3VCQWdCbEIsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFHTCxTQUFTLFNBQUMsWUFBWTs7Ozs7OztJQVR2Qix1Q0FBd0I7O0lBR3hCLHVDQUF1Qjs7SUFDdkIsc0NBQXNCOztJQUN0QixzQ0FBc0I7O0lBQ3RCLHNDQUFzQjs7SUFHdEIseUNBQWdEOztJQUdoRCxvQ0FBZ0I7O0lBR2hCLHlDQUFrQjs7SUFDbEIsMkNBQWlCOzs7OztJQW5CTCxtQ0FBa0I7Ozs7O0lBQUUsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VyU2VydmljZSB9IGZyb20gJy4vcGFnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MzbS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHBhZ2VyU2VydmljZTogUGFnZXJTZXJ2aWNlKSB7fVxuXG4gIC8vIEFycmF5IG9mIGFsbCBpdGVtcyB0byBiZSBwYWdlZFxuICBwcml2YXRlIGFsbEl0ZW1zOiBhbnlbXTtcblxuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgaW1nRmlyc3QgPSAnJztcbiAgQElucHV0KCkgaW1nQmFjayA9ICcnO1xuICBASW5wdXQoKSBpbWdOZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGltZ0xhc3QgPSAnJztcblxuICAvLyBWaWV3Q2hpbGRcbiAgQFZpZXdDaGlsZCgncGFnaW5hdGlvbicpIHBhZ2luYXRpb246IEVsZW1lbnRSZWY7XG5cbiAgLy8gUGFnZXIgT2JqZWN0XG4gIHBhZ2VyOiBhbnkgPSB7fTtcblxuICAvLyBQYWdlZCBJdGVtc1xuICBwYWdlZEl0ZW1zOiBhbnlbXTtcbiAgcGFnZVNlbGVjdGVkID0gMjtcblxuICAvLyBPbiBJbml0XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEdldCBEYXRhIG9mIGEgSlNPTiAob3Igb3RoZXIuLi4pXG4gICAgZnJvbSh0aGlzLmh0dHAuZ2V0KCdhc3NldHMvanNvbi9kYXRhUGFnaW5hdGlvbi5qc29uJykpXG4gICAgICAucGlwZShtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSkgLy8gU3BlY2lmeSBKU09OIHR5cGVcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIC8vIFNldCBpdGVtcyB0byByZXNwb25zZSBKc29uXG4gICAgICAgIHRoaXMuYWxsSXRlbXMgPSBkYXRhO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdG8gcGFnZSAxXG4gICAgICAgIHRoaXMuc2V0UGFnZSgxKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gU2V0UGFnZVxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIC8vIGNoZWNrIHBhZ2UgPCAxIG9yIHBhZ2UgPiB0b3RhbFBhZ2VzXG4gICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLnBhZ2VyLnRvdGFsUGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IHBhZ2VyIG9iamVjdCBmcm9tIHNlcnZpY2UgKCBudW1iZXJPZkl0ZW1zLCBQYWdlKVxuICAgIHRoaXMucGFnZXIgPSB0aGlzLnBhZ2VyU2VydmljZS5nZXRQYWdlcih0aGlzLmFsbEl0ZW1zLmxlbmd0aCwgcGFnZSk7XG5cbiAgICAvLyBHZXQgY3VycmVudCBwYWdlIG9mIGl0ZW1zIChjb3B5IHdpdGggc2xpY2Uoc3RhcnQsZW5kKSlcbiAgICB0aGlzLnBhZ2VkSXRlbXMgPSB0aGlzLmFsbEl0ZW1zLnNsaWNlKHRoaXMucGFnZXIuc3RhcnRJbmRleCwgdGhpcy5wYWdlci5lbmRJbmRleCArIDEpO1xuXG4gICAgLy8gQ2hhbmdlIGFyaWEtcGFnZVxuICAgIGNvbnN0IHBhZ2luYXRpb25MaXN0ZSA9IHRoaXMucGFnaW5hdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGVsdFBhZ2luZWQgPSBwYWdpbmF0aW9uTGlzdGUuY2hpbGRyZW5bdGhpcy5wYWdlU2VsZWN0ZWRdO1xuICAgIGNvbnN0IGJ0blBhZ2luZWQgPSBlbHRQYWdpbmVkLmNoaWxkTm9kZXNbMF07XG4gICAgY29uc3QgbmV4dEVsdFBhZ2luZWQgPSBwYWdlICsgMjtcbiAgICBjb25zdCBlbHRPbiA9IHBhZ2UgKyAxO1xuICAgIGJ0blBhZ2luZWQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKTtcbiAgICBjb25zdCBuZXh0QnV0dG9uUGFnaW5lZCA9IHRoaXMucGFnaW5hdGlvbi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbbmV4dEVsdFBhZ2luZWRdO1xuICAgIG5leHRCdXR0b25QYWdpbmVkLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAncGFnZScpO1xuICAgIHRoaXMucGFnZVNlbGVjdGVkID0gZWx0T247XG4gIH1cbn1cbiJdfQ==