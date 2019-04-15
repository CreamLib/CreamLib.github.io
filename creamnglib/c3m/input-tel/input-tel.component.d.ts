import { OnInit } from '@angular/core';
export declare class InputTelComponent implements OnInit {
    id: string;
    name: string;
    value: string;
    autocomplete: string;
    maxlength: string;
    pattern: string;
    title: string;
    required: boolean;
    disabled: boolean;
    placeholder: string;
    constructor();
    ngOnInit(): void;
}
