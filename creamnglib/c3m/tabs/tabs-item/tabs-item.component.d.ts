import { OnInit, AfterViewInit } from '@angular/core';
import { TabsComponent } from '../tabs.component';
export declare class TabComponent implements OnInit, AfterViewInit {
    tabTitle: string;
    active: boolean;
    idTab: number;
    isDisabled: boolean;
    tabID: string;
    panelID: string;
    constructor(tabs: TabsComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    randomID(): number;
}
