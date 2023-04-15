import classnames from 'classnames';
import { ButtonInterface } from '../interfaces/button.interface';
import '../styles/button.scss';

const Button = ({ children, variation, rounded, ...rest }: ButtonInterface): JSX.Element => {
    const className = classnames(rest.className, {
        rounded,
        [variation]: variation,
    });

    return <button {...rest} className={className}>{children}</button>;
};

export default Button;
