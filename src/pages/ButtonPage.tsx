import { GoDesktopDownload } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
    const handleOnClick = () => {
    };

    const handleOnMouseEnter = () => {
    };

    return (
        <div>
            <Button variation="plain"
                    onClick={handleOnClick}
                    className="mb-10"><GoDesktopDownload/>Click here</Button>
            <Button variation="primary"
                    onMouseEnter={handleOnMouseEnter}
                    rounded>Click here</Button>
            <Button variation="danger"
                    rounded>Click 2</Button>
            <Button variation="secondary"
                    rounded>Click 2</Button>
            <Button variation="warning"
                    rounded>Click 2</Button>
            <Button variation="success">Click 2</Button>
        </div>
    );
};

export default ButtonPage;
