import axios from 'axios';

const URL = 'https://aud.labamnus.ru/chapter';

export interface AudioResponse {
    audio: string;
    text: string;
}

export const fetchChapter = async (query: string): Promise<AudioResponse> => {
    const { data } = await axios.get(URL, {
        params: {
            number: query,
        },
    });

    return data;
};
