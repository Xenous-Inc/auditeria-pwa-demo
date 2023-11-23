import axios from 'axios';

const URL = 'https://aud.labamnus.ru/chapter';

export interface AudioResponse {
    audio: string;
    text: string;
}

export const fetchChapter = async (query: string, signal: any | null): Promise<AudioResponse | null> => {
    const { data } = await axios.get(URL, {
        signal: AbortSignal.timeout(8000),
        params: {
            number: query,
        },
    });

    return data;
};
