import { Chapter } from 'entities/Chapter';
import { API_CHAPTERS_COUNT } from 'shared/lib';

export const Chapters: React.FC = () => {
    return (
        <div className={'w-full flex flex-col gap-y-2'}>
            <span className={'text-white text-3xl font-medium'}>Содержание книги</span>
            <span className={'text-grey'}>18 частей / 23 часа 15 минут</span>
            <div className={'flex flex-col gap-y-6'}>
                {Array.from({ length: API_CHAPTERS_COUNT }, (_, index) => index).map(index => (
                    <Chapter key={index} index={index} />
                ))}
            </div>
        </div>
    );
};
