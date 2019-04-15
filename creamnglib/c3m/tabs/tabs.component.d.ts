import { ElementRef, AfterViewInit, QueryList, ChangeDetectorRef } from '@angular/core';
import { TabComponent } from './tabs-item/tabs-item.component';
export declare class TabsComponent implements AfterViewInit {
    private cdr;
    tabsElement: QueryList<ElementRef>;
    tabComponents: QueryList<TabComponent>;
    tabs: TabComponent[];
    isOver: boolean;
    widthBreak: number;
    sizeInit: number;
    arrayTmp: ElementRef[];
    startIndexActiv: number;
    TabComponentBis: typeof TabComponent;
    onResize(event: any): void;
    addTab(tab: TabComponent): void;
    selectTab(tab: TabComponent): void;
    ngAfterViewInit(): void;
    constructor(cdr: ChangeDetectorRef);
}
