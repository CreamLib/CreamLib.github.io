import { QueryList, AfterContentInit, ChangeDetectorRef, ElementRef, AfterViewInit } from '@angular/core';
import { TabComponent } from './tabs-item/tabs-item.component';
export declare class TabsComponent implements AfterViewInit, AfterContentInit {
    private cdr;
    tabs: QueryList<TabComponent>;
    tabsElement: QueryList<ElementRef>;
    container: ElementRef;
    isOver: boolean;
    widthBreak: number;
    sizeInit: number;
    marginInit: any;
    arrayTmp: ElementRef[];
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    onResize(event: any): void;
    selectTab(tab: TabComponent): void;
    constructor(cdr: ChangeDetectorRef);
}
