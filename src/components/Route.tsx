import useNavigation from '../hooks/use-navigation';
import { NavigationContextInterface } from '../interfaces/navigation-context.interface';

const Route = ({ path, children }) => {
    const { currentPath }: NavigationContextInterface = useNavigation();

    if (path === currentPath) {
        return children;
    }

    return null;
};

export default Route;
