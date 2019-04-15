import { AfterViewInit, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel.component';
export declare class CarouselItemComponent implements OnInit, AfterViewInit {
    private carousel;
    isVisible: boolean;
    index: number;
    tabIndex: string;
    itemID: string;
    constructor(carousel: CarouselComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    previousSlide(): void;
    nextSlide(): void;
}
