import axios from 'axios';
import { API_BASE_URL } from '../lib';
import { loggingRequestInterceptorHandlers, loggingResponseInterceptorHandlers } from './interceptors';

export const api = axios.create({
    baseURL: API_BASE_URL,
    validateStatus: status => status >= 200 && status <= 302,
});

api.interceptors.request.use(...loggingRequestInterceptorHandlers);

api.interceptors.response.use(...loggingResponseInterceptorHandlers);
