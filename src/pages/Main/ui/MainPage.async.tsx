import { Suspense, lazy } from 'react';

const MainPageAsync = lazy(async () => await import('./MainPage'));

export const MainPage: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <MainPageAsync />
        </Suspense>
    );
};
