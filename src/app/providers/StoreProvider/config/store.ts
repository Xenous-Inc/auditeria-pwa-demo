import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { chaptersSlice } from 'entities/Chapter';
import { REDUX_PERSIST_STORAGE_KEY } from 'shared/lib';
import { logMiddleware } from './middleware';

const persistConfig = {
    key: REDUX_PERSIST_STORAGE_KEY,
    storage,
    whitelist: [chaptersSlice.name],
    blacklist: [],
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
