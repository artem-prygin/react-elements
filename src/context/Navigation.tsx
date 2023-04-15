import { createContext, useEffect, useState } from 'react';
import { NavigationContextInterface } from '../interfaces/navigation-context.interface';

const NavigationContext: NavigationContextInterface = createContext(null);

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return <NavigationContext.Provider value={{ navigate, currentPath }}>
        {children}
    </NavigationContext.Provider>;
};

export { NavigationProvider };
export default NavigationContext;
