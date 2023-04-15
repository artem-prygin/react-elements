import '../styles/link.scss';
import { LinkInterface } from '../interfaces/link.interface';
import Link from './Link';
import '../styles/sidebar.scss';

const links: LinkInterface[] = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
];

const Sidebar = () => {
    const renderedLinks = links.map((link, index) => {
        return <Link key={index}
                     activeClassName="active-link"
                     to={link.path}>{link.label}</Link>;
    });

    return <div className="sidebar">{renderedLinks}</div>;
};

export default Sidebar;
