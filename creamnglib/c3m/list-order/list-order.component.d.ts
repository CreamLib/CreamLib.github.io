import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
export declare class ListOrderComponent implements OnInit {
    private http;
    title: any;
    constructor(http: Http);
    listItem: any[];
    ngOnInit(): void;
}