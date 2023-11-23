import { useState } from 'react';

interface DownloadButtonProps {
    chapter: string;
    disabled: boolean;
    onClick: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = props => {
    const { chapter, disabled, onClick } = { ...props };
    const [buttonText, setButtonText] = useState<string>(`Включить главу ${+chapter + 1}`);
    return (
        <button
            className={`${disabled ? 'bg-grey' : 'bg-orange'} rounded-full py-4 mt-2 text-white w-full`}
            onClick={() => {
                if (!disabled) {
                    onClick();
                }
            }}
        >
            {buttonText}
        </button>
    );
};

export default DownloadButton;
