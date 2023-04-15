import { DOMAttributes, HTMLAttributes } from 'react';

export interface LinkPropsInterface extends DOMAttributes<any>, HTMLAttributes<any> {
    to: string;
    className?: string;
    activeClassName?: string;
}
