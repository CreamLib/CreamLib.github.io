export declare class PagerService {
    getPager(totalItems: number, currentPage?: number, pageSize?: number): {
        totalItems: number;
        currentPage: number;
        pageSize: number;
        totalPages: number;
        startPage: number;
        endPage: number;
        startIndex: number;
        endIndex: number;
        pages: number[];
    };
}
