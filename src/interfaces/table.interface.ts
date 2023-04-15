import { DOMAttributes, HTMLAttributes } from 'react';

export interface TableInterface extends DOMAttributes<any>, HTMLAttributes<any> {
    data: any;
    config: any;
    keyFn: (value: any) => string | number;
}
