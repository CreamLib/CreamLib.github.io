import { OnInit } from '@angular/core';
export declare class DropdownComponent implements OnInit {
    constructor();
    isOpen: boolean;
    nameDropdown: string;
    ngOnInit(): void;
    toggleOpen(): void;
    close(): void;
}
