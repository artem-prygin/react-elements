import { DOMAttributes, HTMLAttributes } from 'react';

export interface ModalInterface extends DOMAttributes<any>, HTMLAttributes<any> {
    actionBar: string | number | JSX.Element;
    onClose?: (value: any) => void;
}
