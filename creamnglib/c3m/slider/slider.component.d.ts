import { ElementRef, AfterViewInit } from '@angular/core';
export declare class SliderComponent implements AfterViewInit {
    private myComponent;
    id: string;
    name: string;
    value: string;
    min: any;
    max: any;
    step: string;
    required: boolean;
    disabled: boolean;
    input: ElementRef;
    output: ElementRef;
    isBubble: boolean;
    width: number;
    point: number;
    offset: number;
    newPoint: any;
    constructor(myComponent: ElementRef);
    ngAfterViewInit(): void;
    onResize(event: any): void;
    showValue(): void;
    setPositionBubble(): void;
}
