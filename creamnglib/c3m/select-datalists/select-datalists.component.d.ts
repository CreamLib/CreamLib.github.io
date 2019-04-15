import { OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
export declare class SelectDatalistsComponent implements OnInit {
    private http;
    myInput1: ElementRef;
    myInput2: ElementRef;
    myDataList: ElementRef;
    title1: any;
    title2: any;
    name1: any;
    name2: any;
    id1: string;
    id2: string;
    list: any;
    private myListId;
    constructor(http: Http);
    allOptions: any[];
    ngOnInit(): void;
}
