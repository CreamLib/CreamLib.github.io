import { OnInit } from '@angular/core';
export declare class InputComponent implements OnInit {
    id: string;
    name: string;
    value: string;
    autocomplete: string;
    maxlength: string;
    required: boolean;
    disabled: boolean;
    placeholder: string;
    constructor();
    ngOnInit(): void;
}
