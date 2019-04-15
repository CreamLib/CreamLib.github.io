import { ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class PaginationDirective implements OnInit {
    private el;
    private renderer;
    pager: boolean;
    liElement: any;
    buttonElement: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
