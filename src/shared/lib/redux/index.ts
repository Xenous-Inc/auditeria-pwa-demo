import { type TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { type Dispatch, type RootState } from 'app/providers/StoreProvider';

export const useAppDispatch: () => Dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
