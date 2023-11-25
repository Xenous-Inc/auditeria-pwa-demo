// @ts-expect-error
export const IS_DEV = __IS_DEV__ as boolean;
export const API_BASE_URL = process.env.API_BASE_URL;
export const API_CHAPTERS_COUNT = parseInt(process.env.API_CHAPTERS_COUNT ?? '0');
export const REDUX_PERSIST_KEY = process.env.REDUX_PERSIST_KEY ?? 'webpack-redux-persist-key';
export const REDUX_PERSIST_DB_NAME = process.env.REDUX_PERSIST_DB_NAME ?? 'webpack-redux-persist-db';
export const REDUX_PERSIST_STORE_NAME = process.env.REDUX_PERSIST_STORE_NAME ?? 'webpack-redux-persist-store';
