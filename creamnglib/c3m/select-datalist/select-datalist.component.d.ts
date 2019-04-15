import { OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
export declare class SelectDatalistComponent implements OnInit {
    private http;
    myInput: ElementRef;
    myDataList: ElementRef;
    title: any;
    name: any;
    id: string;
    list: any;
    private myListId;
    constructor(http: Http);
    allOptions: any[];
    ngOnInit(): void;
}
