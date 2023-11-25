import styles from 'ansi-styles';
import { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { logger } from '../lib';

export interface ExtendedInternalAxiosRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
    withToken?: boolean;
    isSent?: boolean;
}

export const loggingRequestInterceptorHandlers = [
    (config: ExtendedInternalAxiosRequestConfig) => {
        logger.api.debug(`Fetching ${config.method} ${config.url}`);

        return config;
    },
] as const;

export const loggingResponseInterceptorHandlers = [
    (response: AxiosResponse) => {
        logger.api.debug(
            `${styles.green.open}Succeed ${response.config.method} ${response.config.url} with ${styles.green.close}`,
            response
        );

        return response;
    },
    async (error?: AxiosError) => {
        logger.api.debug(
            `${styles.red.open}Failed ${error?.config?.method} ${error?.config?.url} with ${styles.red.close}`,
            error
        );

        return await Promise.reject(error);
    },
] as const;
