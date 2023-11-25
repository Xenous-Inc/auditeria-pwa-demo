import { Suspense, lazy } from 'react';
import { Loader } from 'features/Loader';

const MainPageAsync = lazy(async () => await import('./MainPage'));

export const MainPage: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <MainPageAsync />
        </Suspense>
    );
};
