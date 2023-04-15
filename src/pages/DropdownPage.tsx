import { DropdownItemInterface } from '../interfaces/dropdown-item.interface';
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
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

    return <Dropdown options={options}
                     handleChange={handleSelect}
                     value={selection}/>;
};

export default DropdownPage;
