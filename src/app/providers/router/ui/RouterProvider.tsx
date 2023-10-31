import { RouterProvider as Provider } from 'react-router-dom';
import { router } from '../config/router';

export const RouterProvider: React.FC = () => {
    return <Provider router={router} />;
};
