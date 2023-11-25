export interface ChapterSchema {
    index: number;
    audio: string;
    text: string;
}

export interface QueryChapterRequest {
    number: number;
}

export interface QueryChapterResponse {
    audio: string;
    text: string;
}
