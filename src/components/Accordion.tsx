import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import classnames from 'classnames';
import '../styles/accordion.scss';
import { AccordionInterface } from '../interfaces/accordion.interface';

const Accordion = ({ items }: AccordionInterface) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
            return;
        }

        setExpandedIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const icon = <span>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>;

        return (
            <div key={index}
                 onClick={() => handleClick(index)}>
                <div className="accordion-label d-flex align-center justify-between pointer p-5">{item.label}{icon}</div>
                {isExpanded && <div className="p-5 accordion-content">{item.content}</div>}
            </div>
        );
    });

    return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
