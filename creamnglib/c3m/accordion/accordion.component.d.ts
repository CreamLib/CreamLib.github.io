import { AccordionItemComponent } from './accordion-item/accordion-item.component';
export declare class AccordionComponent {
    groups: Array<AccordionItemComponent>;
    addGroup(group: AccordionItemComponent): void;
    closeOthers(openGroup: AccordionItemComponent): void;
    closeAll(openGroup: AccordionItemComponent): void;
    removeGroup(group: AccordionItemComponent): void;
}
