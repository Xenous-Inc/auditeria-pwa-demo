import axios from 'axios';

const URL = 'http://80.90.188.237:8080/chapter';

interface AudioResponse {
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
