import { Context } from 'react';

export interface NavigationContextInterface extends Context<any> {
    navigate?: (to: string) => void;
    currentPath?: string;
}
