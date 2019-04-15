import { OnChanges, SimpleChanges, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion.component';
export declare class AccordionItemComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {
    private accordion;
    nameButton: string;
    urlImage: string;
    isOpen: boolean;
    index: number;
    tabID: string;
    panelID: string;
    constructor(accordion: AccordionComponent);
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggleOpen(): void;
}
