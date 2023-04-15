import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import './index.scss';
import App from './App';
import { NavigationProvider } from './context/Navigation';


const root: Root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavigationProvider>
        <App/>
    </NavigationProvider>,
);
