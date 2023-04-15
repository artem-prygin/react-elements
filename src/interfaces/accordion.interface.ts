import { DOMAttributes, HTMLAttributes } from 'react';
import { AccordionItemInterface } from './accordion-item.interface';

export interface AccordionInterface extends DOMAttributes<any>, HTMLAttributes<any> {
    items: AccordionItemInterface[];
}
