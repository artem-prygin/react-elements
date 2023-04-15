import React, { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { DropdownInterface } from '../interfaces/dropdown.interface';
import { DropdownItemInterface } from '../interfaces/dropdown-item.interface';
import '../styles/dropdown.scss';

const Dropdown = ({ options, value, handleChange }: DropdownInterface) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl: React.RefObject<HTMLInputElement> = useRef();

    const handleClick = (option: DropdownItemInterface) => {
        setIsOpen(false);
        handleChange(option);
    };

    const handler = (event) => {
        if (divEl?.current && !divEl.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const generatedOptions = <ul className="dropdown-list">
        {options.map((option, index) => {
            return <li className="dropdown-item p-5 pointer"
                       onClick={() => handleClick(option)}
                       key={index}>{option.label}</li>;
        })}</ul>;

    return <div className="dropdown"
                ref={divEl}>
        <div className="d-flex justify-between dropdown-label p-5 pointer align-center"
             onClick={() => setIsOpen(!isOpen)}>
            {value?.label || 'Select...'}
            <GoChevronDown/>
        </div>
        {isOpen && generatedOptions}
    </div>;
};

export default Dropdown;
