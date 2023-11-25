import BookmarkIcon from 'shared/assets/bookmark-icon.svg';

export const Rating: React.FC = () => {
    return (
        <div className={'flex flex-row justify-between gap-x-2'}>
            <div className={'flex flex-row gap-x-2 items-center'}>
                <span className={'text-5xl text-rating-green font-bold'}>8,6</span>
                <div className={'flex flex-col text-white text-xs '}>
                    <span className={'font-medium'}>Рейтинг аудитерии</span>
                    <span className={'font-extralight'}>35 784 оценок</span>
                </div>
            </div>
            <div className={'flex flex-row gap-x-4 items-center'}>
                <span className={'bg-orange text-white font-bold rounded-xl p-1.5'}>18+</span>
                <BookmarkIcon className={'w-6'} />
            </div>
        </div>
    );
};
