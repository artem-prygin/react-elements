import classnames from 'classnames';
import '../styles/link.scss';
import { NavigationContextInterface } from '../interfaces/navigation-context.interface';
import useNavigation from '../hooks/use-navigation';
import { LinkPropsInterface } from '../interfaces/link-props.interface';

const Link = ({ to, children, className, activeClassName }: LinkPropsInterface) => {
    const { navigate, currentPath }: NavigationContextInterface = useNavigation();

    const classes = classnames('link', className, currentPath === to && activeClassName);

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();
        navigate(to);
    };

    return <a href={to}
              className={classes}
              onClick={handleClick}>{children}</a>;
};

export default Link;
