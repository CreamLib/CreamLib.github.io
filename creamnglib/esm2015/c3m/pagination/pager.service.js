/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class PagerService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9wYWdpbmF0aW9uL3BhZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7O0lBRXZCLFFBQVEsQ0FBQyxVQUFrQixFQUFFLGNBQXNCLENBQUMsRUFBRSxXQUFtQixFQUFFOzs7Y0FFbkUsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQzs7O1lBRy9DLFNBQWlCOztZQUFFLE9BQWU7UUFFdEMseUJBQXlCO1FBQ3pCLElBQUksVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNwQixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsOEJBQThCO1lBQzdDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxpQkFBaUI7U0FDeEM7YUFBTTtZQUNMLHlCQUF5QjtZQUN6QixJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQy9CLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxlQUFlO2FBQzlCO2lCQUFNLElBQUksV0FBVyxHQUFHLENBQUMsSUFBSSxVQUFVLEVBQUU7Z0JBQ3hDLGdFQUFnRTtnQkFDaEUsU0FBUyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7Z0JBQ3hELE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyx3QkFBd0I7YUFDL0M7aUJBQU07Z0JBQ0wseURBQXlEO2dCQUN6RCxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtnQkFDM0QsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7YUFDdkQ7U0FDRjs7O2NBR0ssVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVE7OztjQUd6QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDOztjQUU5RCxLQUFLLEdBQWEsRUFBRTtRQUUxQiw2REFBNkQ7UUFDN0QsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO1FBRUQsMEJBQTBCO1FBQzFCLE9BQU87WUFDTCxVQUFVLEVBQUUsVUFBVTtZQUN0QixXQUFXLEVBQUUsV0FBVztZQUN4QixRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVBQUUsVUFBVTtZQUN0QixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsT0FBTztZQUNoQixVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7SUFDSixDQUFDOzs7WUF2REYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2VyU2VydmljZSB7XG4gIC8vIEZ1bmN0aW9uIGdldFBhZ2VyICh0b3RhbEl0ZW1zLCAgQ3VycmVudFBhZ2UgICwgUGFnZVNpemUpXG4gIGdldFBhZ2VyKHRvdGFsSXRlbXM6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlciA9IDEsIHBhZ2VTaXplOiBudW1iZXIgPSAxMCkge1xuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBwYWdlc1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIHBhZ2VTaXplKTtcblxuICAgIC8vIFN0YXJ0UGFnZSBhbmQgRW5kUGFnZSBkZWNsYXJhdGlvblxuICAgIGxldCBzdGFydFBhZ2U6IG51bWJlciwgZW5kUGFnZTogbnVtYmVyO1xuXG4gICAgLy8gQ2hlY2sgVG90YWxQYWdlcyA8PSAxMFxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IDEwKSB7XG4gICAgICBzdGFydFBhZ2UgPSAxOyAvLyBJZiBMZXNzIFRoYW4gMTAgdG90YWwgcGFnZXNcbiAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzOyAvLyBTaG93IEFsbCBQYWdlc1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDaGVjayBUb3RhbCBQYWdlcyA+IDEwXG4gICAgICBpZiAoY3VycmVudFBhZ2UgPD0gNikge1xuICAgICAgICBzdGFydFBhZ2UgPSAxOyAvLyBTdGFydFBhZ2UgPSAxXG4gICAgICAgIGVuZFBhZ2UgPSAxMDsgLy8gRW5kUGFnZSA9IDEwXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlICsgNCA+PSB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIC8vIENoZWNrIEN1cnJlbnRQYWdlICsgNCA+PSBUb3RhbFBhZ2VzICAoRXhpdCBUb3RhbFBhZ2VzLmxlbmd0aClcbiAgICAgICAgc3RhcnRQYWdlID0gdG90YWxQYWdlcyAtIDk7IC8vIFN0YXJ0UGFnZSA9IFRvdGFsUGFnZSAtIDlcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7IC8vIEVuZFBhZ2UgPSB0b3RhbCBwYWdlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlY2sgQ3VycmVudFBhZ2UgPiA2ICYmIEN1cnJlbnRQYWdlICsgNCA8IHRvdGFsIHBhZ2VzXG4gICAgICAgIHN0YXJ0UGFnZSA9IGN1cnJlbnRQYWdlIC0gNTsgLy8gU3RhcnRQYWdlID0gQ3VycmVudFBhZ2UgLSA1XG4gICAgICAgIGVuZFBhZ2UgPSBjdXJyZW50UGFnZSArIDQ7IC8vIEVuZFBhZ2UgPSBDdXJyZW50UGFnZSArNFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0YXJ0SW5kZXggPSBjdXJyZW50UGFnZS0xICogcGFnZVNpemVcbiAgICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZTtcblxuICAgIC8vIEVuZEluZGV4ID0gbWluIGJldHdlZW4gW3N0YXJ0SW5kZXggKyBwYWdlU2l6ZS0xXSBBTkQgW3RvdGFsSXRlbXMtMV1cbiAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSAtIDEsIHRvdGFsSXRlbXMgLSAxKTtcblxuICAgIGNvbnN0IHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHBhZ2VzIHRvIG5nLXJlcGVhdCBpbiB0aGUgcGFnZXIgY29udHJvbFxuICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPCBlbmRQYWdlICsgMTsgaSsrKSB7XG4gICAgICBwYWdlcy5wdXNoKGkpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBQYWdlciBQcm9wZXJ0aWVzXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsSXRlbXM6IHRvdGFsSXRlbXMsXG4gICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxuICAgICAgc3RhcnRQYWdlOiBzdGFydFBhZ2UsXG4gICAgICBlbmRQYWdlOiBlbmRQYWdlLFxuICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcbiAgICAgIGVuZEluZGV4OiBlbmRJbmRleCxcbiAgICAgIHBhZ2VzOiBwYWdlc1xuICAgIH07XG4gIH1cbn1cbiJdfQ==