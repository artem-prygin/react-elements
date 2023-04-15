import { useState } from 'react';
import './App.scss';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import { DropdownItemInterface } from './interfaces/dropdown-item.interface';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';


function App(): JSX.Element {
    const [selection, setSelection]: [DropdownItemInterface, (selection: DropdownItemInterface) => void] = useState(null);

    const handleSelect = (option: DropdownItemInterface) => {
        setSelection(option);
    };

    const options: DropdownItemInterface[] = [
        {
            label: 'Red',
            value: 'red',
        },
        {
            label: 'Green',
            value: 'green',
        },
        {
            label: 'Blue',
            value: 'blue',
        },
    ];

    return <div className="content">
        <Sidebar/>

        <div className="w-100 p-10">
            <Route path="/accordion">
                <AccordionPage/>
            </Route>

            <Route path="/">
                <DropdownPage/>
            </Route>

            <Route path="/buttons">
                <ButtonPage/>
            </Route>

            <Route path="/modal">
                <ModalPage/>
            </Route>

            <Route path="/table">
                <TablePage/>
            </Route>
        </div>
    </div>;
}

export default App;
