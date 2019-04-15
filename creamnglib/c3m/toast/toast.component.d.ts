import { OnInit, ElementRef } from '@angular/core';
export declare class ToastComponent implements OnInit {
    delay: number;
    active: boolean;
    styleClass: string;
    position: string;
    closeBtn: boolean;
    closeBtnTitle: string;
    imgCloseBtn: string;
    toast: ElementRef;
    positionElt: string;
    constructor();
    ngOnInit(): void;
    toggle(): void;
    closeToast(): void;
}
