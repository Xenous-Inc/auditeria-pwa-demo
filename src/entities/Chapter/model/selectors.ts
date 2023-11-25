import { createSelector, type EntityId } from '@reduxjs/toolkit';
import { type RootState } from 'app/providers/StoreProvider';

const selectChaptersSlice = (store: RootState) => store.chapters;

export const selectChaptersStatus = createSelector(selectChaptersSlice, slice => slice.status);

export const selectChaptersError = createSelector(selectChaptersSlice, slice => slice.error);

export const selectChapterIds = createSelector(selectChaptersSlice, slice => slice.ids);

export const selectChapterEntities = createSelector(selectChaptersSlice, slice => slice.entities);

export const selectChapterByIndex = createSelector(
    selectChapterEntities,
    (_: any, index: EntityId) => index,
    (entities, index) => entities[index]
);

export const selectSelectedChapterIndex = createSelector(selectChaptersSlice, slice => slice.selectedIndex);

export const selectSelectedChapter = createSelector(
    selectChapterEntities,
    selectSelectedChapterIndex,
    (entities, index) => (index !== undefined ? entities[index] : undefined)
);
