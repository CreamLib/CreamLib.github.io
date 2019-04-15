import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { StepItemComponent } from './step-item/step-item.component';
export declare class StepComponent implements AfterViewInit, AfterViewChecked {
    private cdr;
    itemStepTab: StepItemComponent[];
    theActiveStepItem: number;
    isOver: boolean;
    widthBreak: number;
    itemsStepTabReference: ElementRef[];
    sizeInit: number;
    StepItemComponentBis: typeof StepItemComponent;
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onResize(event: any): void;
    addTab(stepItem: StepItemComponent): void;
}
