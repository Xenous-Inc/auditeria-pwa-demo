import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from 'features/Loader';
import { persistor, store } from '../config/store';

export const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
