import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class ModalComponent implements OnInit {
    isOpen: boolean;
    styleClass: string;
    topPosition: number;
    leftPosition: number;
    modalWidth: number;
    modaTitle: string;
    closeBtnTitle: string;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    dialogElement: ElementRef;
    container: ElementRef;
    focusable: ElementRef;
    dialogTitle: string;
    dialogDescription: string;
    btnCloseLabel: string;
    screenHeight: any;
    screenWidth: any;
    constructor();
    ngOnInit(): void;
    getScreenSize(event?: any): void;
    ToggleOpen(): void;
    modalPosition(): void;
    onKey(event: any): void;
    randomID(): number;
}
