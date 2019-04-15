import { OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from './pager.service';
export declare class PaginationComponent implements OnInit {
    private http;
    private pagerService;
    constructor(http: Http, pagerService: PagerService);
    private allItems;
    imgFirst: string;
    imgBack: string;
    imgNext: string;
    imgLast: string;
    pagination: ElementRef;
    pager: any;
    pagedItems: any[];
    pageSelected: number;
    ngOnInit(): void;
    setPage(page: number): void;
}
