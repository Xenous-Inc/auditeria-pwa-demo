import { useState } from 'react';
import BookCoverImage from 'shared/assets/book-cover-example.png';
import { ImagePopup } from './ImagePopup';

export const Materials: React.FC = () => {
    const [isPopupShown, setPopupShown] = useState<boolean>(false);
    const [popupImage, setPopupImage] = useState<string | undefined>(undefined);

    return (
        <>
            <ImagePopup isShown={isPopupShown} image={popupImage ?? ''} setIsShown={setPopupShown} />
            <div className={'w-full h-full flex flex-col text-white px-8 gap-y-3'}>
                <span className={'font-medium text-3xl'}>Дополнительные материалы</span>
                <div
                    className={'flex flex-row gap-x-7 items-center'}
                    onClick={() => {
                        setPopupImage(BookCoverImage);
                        setPopupShown(true);
                    }}
                >
                    <img src={BookCoverImage} className={'w-28 h-24 rounded-xl object-cover cursor-pointer'} />
                    <span className={'text-2xl leading-7'}>Постер с героями фильма</span>
                </div>
                <div
                    className={'flex flex-row gap-x-7 items-center'}
                    onClick={() => {
                        setPopupImage(BookCoverImage);
                        setPopupShown(true);
                    }}
                >
                    <img src={BookCoverImage} className={'w-28 h-24 rounded-xl object-cover cursor-pointer'} />
                    <span className={'text-2xl leading-7'}>Блокнот с главными героями</span>
                </div>
            </div>
        </>
    );
};
