import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib';
import { selectChapterByIndex } from '../model/selectors';
import { createSelectChapterAction } from '../model/slice';

interface ChapterProps {
    index: number;
}

export const Chapter: React.FC<ChapterProps> = ({ index }) => {
    const dispatch = useAppDispatch();
    const chapter = useSelector(store => selectChapterByIndex(store, index));

    return (
        <div className={'flex flex-col text-white font-semibold gap-y-3'} key={index}>
            <span>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</span>
            <button
                className={cn('w-full text-white rounded-full py-3.5', chapter ? 'bg-orange' : 'bg-grey')}
                onClick={() => {
                    dispatch(createSelectChapterAction(index));
                }}
                disabled={!chapter}
            >
                Включить главу {index + 1}
            </button>
        </div>
    );
};
