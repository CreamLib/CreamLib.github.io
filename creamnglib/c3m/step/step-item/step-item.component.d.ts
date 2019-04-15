import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { StepComponent } from '../step.component';
export declare class StepItemComponent implements AfterViewInit {
    private cdr;
    itemRef: ElementRef;
    title: any;
    isActive: boolean;
    isPassed: boolean;
    stepLink: string;
    indexStep: number;
    reference: ElementRef;
    _past: boolean;
    Past: boolean;
    _future: boolean;
    Future: boolean;
    constructor(step: StepComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
