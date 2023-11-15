import React, { useState, type ElementRef, useRef, useEffect } from 'react';
import { fetchChapter } from 'pages/main/api/fetchChapter';
import backTo15Icon from 'shared/assets/back-to-15-icon.svg';
import forwartTo15Icon from 'shared/assets/forward-to-15-icon.svg';
import PauseIcon from 'shared/assets/pause-icon.svg';
import PlayIcon from 'shared/assets/play-icon.svg';
import styles from '../styles/AudioPlayer.module.css';

interface AudioPlayerProps {
    chapter: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = props => {
    const { chapter } = { ...props };
    const [audio, setAudio] = useState<string | null>(null);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>(`Скачать главу ${+chapter + 1}`);

    const fetchAudio = async () => {
        if (!isLoading) {
            const data = await fetchChapter(chapter);
            return data.audio;
        }
    };

    // state
    const [isPlaying, setIsPlaying] = useState<Boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);

    // references
    const audioPlayer = useRef<ElementRef<'audio'>>(null); // reference our audio component
    const progressBar = useRef<ElementRef<'input'>>(null); // reference our progress bar
    const animationRef = useRef<number>(); // reference the animation

    useEffect(() => {}, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    async function togglePlayPause() {
        const seconds = Math.floor(audioPlayer?.current?.duration ?? 0);
        setDuration(seconds);
        progressBar.current.max = seconds.toString();
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            await audioPlayer?.current?.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            void audioPlayer?.current?.pause();
            cancelAnimationFrame(animationRef?.current ?? 0);
        }
    }

    const whilePlaying = () => {
        progressBar.current!.value = audioPlayer?.current?.currentTime.toString() ?? '';
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const changeRange = () => {
        audioPlayer.current!.currentTime = +(progressBar?.current?.value ?? 0);
        changePlayerCurrentTime();
    };

    const changePlayerCurrentTime = () => {
        progressBar?.current?.style.setProperty(
            '--seek-before-width',
            // @ts-expect-error
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(+(progressBar?.current?.value ?? 0));
    };

    const backThirty = () => {
        progressBar.current!.value = (+(progressBar?.current?.value ?? 0) - 30).toString();
        changeRange();
    };

    const forwardThirty = () => {
        progressBar.current!.value = (+(progressBar?.current?.value ?? 0) + 30).toString();
        changeRange();
    };

    return (
        <div>
            {!isLoaded && (
                <button
                    className={'bg-orange rounded-full py-4 mt-2 text-white w-full'}
                    onClick={() => {
                        setButtonText('Загрузка...  ');
                        setLoading(true);
                        void fetchAudio()
                            .then(data => {
                                if (data) {
                                    setAudio(data);
                                    setLoaded(true);
                                }
                            })
                            .catch();
                    }}
                >
                    {buttonText}
                </button>
            )}
            {audio && (
                <div className={'w-full bg-player-bg rounded-xl px-4'}>
                    <audio ref={audioPlayer} preload='metadata'>
                        <source src={`data:audio/mp3;base64,${audio}`} />
                    </audio>
                    <div className={'w-full flex flex-row justify-between items-center'}>
                        <button onClick={backThirty}>
                            <img src={backTo15Icon} />
                        </button>
                        <button onClick={togglePlayPause} className={styles.playPause}>
                            {isPlaying ? <img src={PauseIcon} /> : <img src={PlayIcon} />}
                        </button>
                        <button onClick={forwardThirty}>
                            <img src={forwartTo15Icon} />
                        </button>

                        {/* current time */}
                        <div className={'text-orange font-Ubuntu px-2'}>{calculateTime(currentTime)}</div>

                        {/* progress bar */}
                        <div>
                            <input
                                type='range'
                                className={styles.progressBar}
                                defaultValue='0'
                                ref={progressBar}
                                onChange={changeRange}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { AudioPlayer };
