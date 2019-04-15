import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
export declare class CarouselComponent implements OnInit, AfterViewInit {
    private eRef;
    sizeLi: number;
    tabItemContent: any;
    groups: Array<CarouselItemComponent>;
    constructor(eRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    addGroup(group: CarouselItemComponent): void;
    next(group: CarouselItemComponent): void;
    previous(group: CarouselItemComponent): void;
    goTo(indexToGo: number, group: CarouselItemComponent): void;
}
