import { useState } from 'react';
import { fetchChapter } from 'pages/main/api/fetchChapter';

interface DownloadButtonProps {
    chapter: string;
}

const donwloadPdfBook = (base64String: string) => {
    if (base64String) {
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });

        // Create a URL for the Blob and download it
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'text.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

const DownloadButton: React.FC<DownloadButtonProps> = props => {
    const { chapter } = { ...props };
    const [isLoading, setLoading] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>(`Скачать pdf - главу ${+chapter + 1}`);
    return (
        <button
            className={'bg-orange rounded-full py-4 mt-2 text-white w-full'}
            onClick={() => {
                setButtonText('Загрузка...  ');
                setLoading(true);
                void fetchChapter(chapter)
                    .then(data => {
                        if (data) {
                            donwloadPdfBook(data.text);
                            setButtonText('Глава установлена!');
                        }
                    })
                    .catch();
            }}
        >
            {buttonText}
        </button>
    );
};

export default DownloadButton;
