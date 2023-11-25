import { type EntityState, type SerializedError } from '@reduxjs/toolkit';
import { type ObjectValues } from '../lib';

export const Status = {
    Idle: 'idle',
    Pending: 'pending',
    Success: 'success',
    Error: 'error',
} as const;

export type StatusType = ObjectValues<typeof Status>;

export type ApiState<P, E = any> =
    | {
          status: typeof Status.Idle;
          data: never;
          error: never;
      }
    | {
          status: typeof Status.Pending;
          data?: P;
          error: never;
      }
    | {
          status: typeof Status.Success;
          data: P;
          error: never;
      }
    | {
          status: typeof Status.Error;
          data?: P;
          error: E;
      };

export type ApiNormalizedState<P, E extends SerializedError = SerializedError> = EntityState<P> &
    (
        | {
              status: Exclude<StatusType, typeof Status.Error>;
              error: undefined;
          }
        | {
              status: typeof Status.Error;
              error: E;
          }
    );
