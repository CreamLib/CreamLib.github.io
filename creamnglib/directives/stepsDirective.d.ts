import { ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class StepsDirective implements OnInit {
    private el;
    private renderer;
    activeStep: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
