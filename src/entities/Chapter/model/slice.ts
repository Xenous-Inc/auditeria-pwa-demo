import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
    type EntityId,
    type PayloadAction,
} from '@reduxjs/toolkit';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import { type ApiNormalizedState, Status } from 'shared/api';
import { queryChapter } from './query';
import { type QueryChapterRequest, type ChapterSchema } from './schema';

type ChaptersState = ApiNormalizedState<ChapterSchema> & { selectedIndex: EntityId | undefined };

const adapter = createEntityAdapter<ChapterSchema>({
    selectId: entity => entity.index,
    sortComparer: (a, b) => Math.sign(a.index - b.index),
});

const initialState = adapter.getInitialState({
    status: Status.Idle,
    selectedIndex: undefined,
    error: undefined,
}) as ChaptersState;

export const chaptersSlice = createSlice({
    name: 'chapters',
    initialState,
    reducers: {
        createSelectChapterAction: (state, action: PayloadAction<EntityId>) => {
            state.selectedIndex = action.payload;
        },
        createDeselectChapterAction: state => {
            state.selectedIndex = undefined;
        },
    },
    extraReducers: builder => {
        builder.addCase(createGetChapterAction.pending, state => {
            state.status = Status.Pending;
            state.error = undefined;
        });
        builder.addCase(createGetChapterAction.rejected, (state, action) => {
            state.status = Status.Error;
            state.error = action.error;
        });
        builder.addCase(createGetChapterAction.fulfilled, (state, action) => {
            state.status = Status.Success;
            state.error = undefined;
            adapter.upsertOne(state, action.payload);
        });
    },
});

export const chaptersSliceFilter = createBlacklistFilter(chaptersSlice.name, ['status', 'error', 'selectedIndex']);

export const { createSelectChapterAction, createDeselectChapterAction } = chaptersSlice.actions;

export const createGetChapterAction = createAsyncThunk(
    `${chaptersSlice.name}/createGetChapterAction`,
    async (params: QueryChapterRequest) => await queryChapter(params)
);
