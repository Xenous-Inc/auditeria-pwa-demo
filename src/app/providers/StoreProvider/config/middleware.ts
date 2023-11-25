import { type Action, type Dispatch } from '@reduxjs/toolkit';
import { logger } from 'shared/lib';

export const logMiddleware = () => (next: Dispatch) => (action: Action) => {
    logger.redux.debug(`Dispatch ${action.type}`);
    return next(action);
};
