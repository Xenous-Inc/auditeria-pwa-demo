import { StoreProvider } from './StoreProvider';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <StoreProvider>{children}</StoreProvider>;
};
