import { DOMAttributes, HTMLAttributes } from 'react';
import { DropdownItemInterface } from './dropdown-item.interface';

export interface DropdownInterface extends DOMAttributes<any>, HTMLAttributes<any> {
    options: DropdownItemInterface[];
    value: DropdownItemInterface;
    handleChange: (option: DropdownItemInterface) => void;
}
