/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
        { type: Injectable }
    ];
    return PagerService;
}());
export { PagerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9wYWdpbmF0aW9uL3BhZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQXdEQSxDQUFDO0lBdERDLDJEQUEyRDs7Ozs7Ozs7SUFDM0QsK0JBQVE7Ozs7Ozs7O0lBQVIsVUFBUyxVQUFrQixFQUFFLFdBQXVCLEVBQUUsUUFBcUI7UUFBOUMsNEJBQUEsRUFBQSxlQUF1QjtRQUFFLHlCQUFBLEVBQUEsYUFBcUI7OztZQUVuRSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDOzs7WUFHL0MsU0FBaUI7O1lBQUUsT0FBZTtRQUV0Qyx5QkFBeUI7UUFDekIsSUFBSSxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyw4QkFBOEI7WUFDN0MsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLGlCQUFpQjtTQUN4QzthQUFNO1lBQ0wseUJBQXlCO1lBQ3pCLElBQUksV0FBVyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtnQkFDL0IsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWU7YUFDOUI7aUJBQU0sSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDeEMsZ0VBQWdFO2dCQUNoRSxTQUFTLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtnQkFDeEQsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLHdCQUF3QjthQUMvQztpQkFBTTtnQkFDTCx5REFBeUQ7Z0JBQ3pELFNBQVMsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsOEJBQThCO2dCQUMzRCxPQUFPLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjthQUN2RDtTQUNGOzs7WUFHSyxVQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUTs7O1lBR3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7O1lBRTlELEtBQUssR0FBYSxFQUFFO1FBRTFCLDZEQUE2RDtRQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCwwQkFBMEI7UUFDMUIsT0FBTztZQUNMLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQztJQUNKLENBQUM7O2dCQXZERixVQUFVOztJQXdEWCxtQkFBQztDQUFBLEFBeERELElBd0RDO1NBdkRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlclNlcnZpY2Uge1xuICAvLyBGdW5jdGlvbiBnZXRQYWdlciAodG90YWxJdGVtcywgIEN1cnJlbnRQYWdlICAsIFBhZ2VTaXplKVxuICBnZXRQYWdlcih0b3RhbEl0ZW1zOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxLCBwYWdlU2l6ZTogbnVtYmVyID0gMTApIHtcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgcGFnZXNcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBwYWdlU2l6ZSk7XG5cbiAgICAvLyBTdGFydFBhZ2UgYW5kIEVuZFBhZ2UgZGVjbGFyYXRpb25cbiAgICBsZXQgc3RhcnRQYWdlOiBudW1iZXIsIGVuZFBhZ2U6IG51bWJlcjtcblxuICAgIC8vIENoZWNrIFRvdGFsUGFnZXMgPD0gMTBcbiAgICBpZiAodG90YWxQYWdlcyA8PSAxMCkge1xuICAgICAgc3RhcnRQYWdlID0gMTsgLy8gSWYgTGVzcyBUaGFuIDEwIHRvdGFsIHBhZ2VzXG4gICAgICBlbmRQYWdlID0gdG90YWxQYWdlczsgLy8gU2hvdyBBbGwgUGFnZXNcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2hlY2sgVG90YWwgUGFnZXMgPiAxMFxuICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDYpIHtcbiAgICAgICAgc3RhcnRQYWdlID0gMTsgLy8gU3RhcnRQYWdlID0gMVxuICAgICAgICBlbmRQYWdlID0gMTA7IC8vIEVuZFBhZ2UgPSAxMFxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSArIDQgPj0gdG90YWxQYWdlcykge1xuICAgICAgICAvLyBDaGVjayBDdXJyZW50UGFnZSArIDQgPj0gVG90YWxQYWdlcyAgKEV4aXQgVG90YWxQYWdlcy5sZW5ndGgpXG4gICAgICAgIHN0YXJ0UGFnZSA9IHRvdGFsUGFnZXMgLSA5OyAvLyBTdGFydFBhZ2UgPSBUb3RhbFBhZ2UgLSA5XG4gICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzOyAvLyBFbmRQYWdlID0gdG90YWwgcGFnZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENoZWNrIEN1cnJlbnRQYWdlID4gNiAmJiBDdXJyZW50UGFnZSArIDQgPCB0b3RhbCBwYWdlc1xuICAgICAgICBzdGFydFBhZ2UgPSBjdXJyZW50UGFnZSAtIDU7IC8vIFN0YXJ0UGFnZSA9IEN1cnJlbnRQYWdlIC0gNVxuICAgICAgICBlbmRQYWdlID0gY3VycmVudFBhZ2UgKyA0OyAvLyBFbmRQYWdlID0gQ3VycmVudFBhZ2UgKzRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGFydEluZGV4ID0gY3VycmVudFBhZ2UtMSAqIHBhZ2VTaXplXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XG5cbiAgICAvLyBFbmRJbmRleCA9IG1pbiBiZXR3ZWVuIFtzdGFydEluZGV4ICsgcGFnZVNpemUtMV0gQU5EIFt0b3RhbEl0ZW1zLTFdXG4gICAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUgLSAxLCB0b3RhbEl0ZW1zIC0gMSk7XG5cbiAgICBjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcblxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBwYWdlcyB0byBuZy1yZXBlYXQgaW4gdGhlIHBhZ2VyIGNvbnRyb2xcbiAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDwgZW5kUGFnZSArIDE7IGkrKykge1xuICAgICAgcGFnZXMucHVzaChpKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gUGFnZXIgUHJvcGVydGllc1xuICAgIHJldHVybiB7XG4gICAgICB0b3RhbEl0ZW1zOiB0b3RhbEl0ZW1zLFxuICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcbiAgICAgIHN0YXJ0UGFnZTogc3RhcnRQYWdlLFxuICAgICAgZW5kUGFnZTogZW5kUGFnZSxcbiAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXG4gICAgICBlbmRJbmRleDogZW5kSW5kZXgsXG4gICAgICBwYWdlczogcGFnZXNcbiAgICB9O1xuICB9XG59XG4iXX0=