import '../styles/accordion.scss';
import Accordion from '../components/Accordion';
import { AccordionItemInterface } from '../interfaces/accordion-item.interface';

const AccordionPage = () => {
    const items: AccordionItemInterface[] = [
        {
            label: 'test',
            content: 'body',
        },
        {
            label: 'test',
            content: 'body2',
        },
        {
            label: 'test',
            content: 'body3',
        },
    ];

    return <Accordion items={items}/>;
};

export default AccordionPage;
