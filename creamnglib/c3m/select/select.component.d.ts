import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
export declare class SelectComponent implements OnInit {
    private http;
    title: any;
    name: any;
    id: string;
    constructor(http: Http);
    allOptions: any[];
    ngOnInit(): void;
}
