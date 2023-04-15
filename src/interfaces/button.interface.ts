import { DOMAttributes, HTMLAttributes } from 'react';

export interface ButtonInterface extends DOMAttributes<any>, HTMLAttributes<any> {
    variation?: 'plain' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success';
    rounded?: boolean;
}
