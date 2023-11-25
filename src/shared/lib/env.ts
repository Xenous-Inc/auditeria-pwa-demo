// @ts-expect-error
export const IS_DEV = __IS_DEV__ as boolean;
export const API_BASE_URL = process.env.API_BASE_URL;
export const API_CHAPTERS_COUNT = parseInt(process.env.API_CHAPTERS_COUNT ?? '0');
export const REDUX_PERSIST_STORAGE_KEY = process.env.REDUX_PERSIST_STORAGE_KEY ?? 'redux-persist-storage-key';
