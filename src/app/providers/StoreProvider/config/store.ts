import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { chaptersSlice, chaptersSliceFilter } from 'entities/Chapter';
import { REDUX_PERSIST_DB_NAME, REDUX_PERSIST_KEY, REDUX_PERSIST_STORE_NAME } from 'shared/lib';
import { logMiddleware } from './middleware';

const persistConfig = {
    key: REDUX_PERSIST_KEY,
    storage: createIdbStorage({ name: REDUX_PERSIST_DB_NAME, storeName: REDUX_PERSIST_STORE_NAME }),
    whitelist: [chaptersSlice.name],
    blacklist: [],
    transforms: [chaptersSliceFilter],
};

const rootReducer = combineReducers({
    [chaptersSlice.name]: chaptersSlice.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const persistor = persistStore(store);
