import { AfterViewInit, ChangeDetectorRef, ElementRef, QueryList, OnInit } from '@angular/core';
import { StepItem } from '../../step-item';
export declare class StepComponent implements OnInit, AfterViewInit {
    private cdr;
    activeStep: string;
    stepLink: string;
    indexNum: number;
    isOver: boolean;
    stepLiReference: QueryList<ElementRef>;
    stepLi: Array<ElementRef>;
    steps: StepItem[];
    sizeInit: number;
    widthBreak: number;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onResize(event: any): void;
}
