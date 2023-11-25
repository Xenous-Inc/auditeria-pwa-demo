import { api } from 'shared/api';
import { type QueryChapterResponse, type QueryChapterRequest, type ChapterSchema } from './schema';

export const queryChapter = async (params: QueryChapterRequest) => {
    const { data } = await api.get<QueryChapterResponse>('/chapter', { params });
    return { ...data, index: params.number } satisfies ChapterSchema;
};
