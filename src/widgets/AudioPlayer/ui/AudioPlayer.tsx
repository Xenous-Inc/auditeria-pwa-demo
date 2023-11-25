import cn from 'classnames';
import React, { useState, type ElementRef, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedChapter } from 'entities/Chapter';
import FastBackwardIcon from 'shared/assets/back-to-15-icon.svg';
import FastForwardIcon from 'shared/assets/forward-to-15-icon.svg';
import PauseIcon from 'shared/assets/pause-icon.svg';
import PlayIcon from 'shared/assets/play-icon.svg';
import { formattedTime } from '../helpers/formattedTime';
import styles from './AudioPlayer.module.css';

const AudioPlayer: React.FC = () => {
    const selectedChapter = useSelector(selectSelectedChapter);

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const audioPlayer = useRef<ElementRef<'audio'>>(null);
    const progressBar = useRef<ElementRef<'input'>>(null);
    const isSliderFocused = useRef(false);

    const fastBackward = () => {
        audioPlayer.current && (audioPlayer.current.currentTime -= 30);
    };
    const fastForward = () => {
        audioPlayer.current && (audioPlayer.current.currentTime += 30);
    };
    const togglePlay = () => {
        if (isPlaying) audioPlayer.current?.pause();
        else void audioPlayer.current?.play();
    };

    useEffect(() => {
        if (selectedChapter) {
            setIsLoaded(false);
            audioPlayer.current?.load();
        }
    }, [selectedChapter]);

    useEffect(() => {
        progressBar.current && !isSliderFocused.current && (progressBar.current.value = `${currentTime}`);
    }, [currentTime]);

    useEffect(() => {
        progressBar.current && (progressBar.current.max = `${duration}`);
    }, [duration]);

    return (
        <div className={'w-full bg-player-bg rounded-xl px-4'}>
            <audio
                ref={audioPlayer}
                onCanPlayThrough={event => {
                    setDuration(event.currentTarget.duration);
                    setIsLoaded(true);
                    void audioPlayer.current?.play();
                }}
                onPlay={() => {
                    setIsPlaying(true);
                }}
                onPause={() => {
                    setIsPlaying(false);
                }}
                onEnded={() => {
                    setIsPlaying(false);
                }}
                onTimeUpdate={event => {
                    setCurrentTime(event.currentTarget.currentTime);
                }}
            >
                {selectedChapter && <source src={`data:audio/mp3;base64,${selectedChapter.audio}`} />}
            </audio>
            <div className={'w-full flex flex-row justify-between items-center gap-x-2'}>
                <button onClick={fastBackward} className={cn(!isLoaded && 'opacity-50')} disabled={!isLoaded}>
                    <FastBackwardIcon className={'w-6'} />
                </button>
                <button
                    onClick={togglePlay}
                    className={cn(styles.playPause, !isLoaded && 'opacity-50')}
                    disabled={!isLoaded}
                >
                    {isPlaying ? <PauseIcon className={'w-6'} /> : <PlayIcon className={'w-8'} />}
                </button>
                <button onClick={fastForward} className={cn(!isLoaded && 'opacity-50')} disabled={!isLoaded}>
                    <FastForwardIcon className={'w-6'} />
                </button>
                <span className={'text-orange font-Ubuntu px-2'}>{formattedTime(currentTime)}</span>
                <div>
                    <input
                        type={'range'}
                        className={styles.progressBar}
                        defaultValue={0}
                        ref={progressBar}
                        onFocus={() => {
                            isSliderFocused.current = true;
                        }}
                        onBlur={() => {
                            isSliderFocused.current = false;
                        }}
                        onPointerUp={event => {
                            audioPlayer.current &&
                                (audioPlayer.current.currentTime = parseInt(event.currentTarget.value));
                            progressBar.current?.blur();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export { AudioPlayer };
