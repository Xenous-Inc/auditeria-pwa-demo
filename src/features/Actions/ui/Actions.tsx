import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { createGetChapterAction, selectChapterIds, selectChaptersStatus } from 'entities/Chapter';
import { Status } from 'shared/api';
import FacebookIcon from 'shared/assets/facebook-icon.svg';
import InstagramIcon from 'shared/assets/instagram-icon.svg';
import VkIcon from 'shared/assets/vk-icon.svg';
import YoutubeIcon from 'shared/assets/youtube-icon.svg';
import { API_CHAPTERS_COUNT, useAppDispatch } from 'shared/lib';

export const Actions: React.FC = () => {
    const dispatch = useAppDispatch();

    const status = useSelector(selectChaptersStatus);
    const ids = useSelector(selectChapterIds);

    const onDownload = useCallback(async () => {
        for (let i = 0; i < API_CHAPTERS_COUNT; i++) {
            if (ids.includes(i)) continue;

            await dispatch(createGetChapterAction({ number: i }));
        }
    }, [ids]);

    return (
        <>
            <div className={'flex flex-row justify-between gap-x-8'}>
                <button
                    className={'w-full text-orange text-xs font-bold border-2 border-orange rounded-full px-2 py-4'}
                    onClick={onDownload}
                >
                    {status === Status.Pending ? 'Загрузка...' : 'Скачать книгу'}
                </button>
                <div className={'flex flex-row gap-x-4'}>
                    <VkIcon className={'w-6'} />
                    <InstagramIcon className={'w-6'} />
                    <FacebookIcon className={'w-6'} />
                    <YoutubeIcon className={'w-6'} />
                </div>
            </div>
        </>
    );
};
