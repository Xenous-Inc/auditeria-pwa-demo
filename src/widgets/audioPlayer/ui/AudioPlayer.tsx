import cn from 'classnames';
import React, { useState, type ElementRef, useRef, useEffect } from 'react';
import backTo15Icon from 'shared/assets/back-to-15-icon.svg';
import forwartTo15Icon from 'shared/assets/forward-to-15-icon.svg';
import PauseIcon from 'shared/assets/pause-icon.svg';
import PlayIcon from 'shared/assets/play-icon.svg';
import { formattedTime } from '../model/formattedTime';
import styles from '../styles/AudioPlayer.module.css';

interface AudioPlayerProps {
    audio: string | null;
}

// const AudioPlayer: React.FC<AudioPlayerProps> = props => {
//     const { audio } = props;
//
//     // state
//     const [isPlaying, setIsPlaying] = useState<Boolean>(false);
//     const [duration, setDuration] = useState<number>(0);
//     const [currentTime, setCurrentTime] = useState<number>(0);
//
//     // references
//     const audioPlayer = useRef<ElementRef<'audio'>>(null); // reference our audio component
//     const progressBar = useRef<ElementRef<'input'>>(null); // reference our progress bar
//     const animationRef = useRef<number>(); // reference the animation
//
//     useEffect(() => {
//         if (audio) {
//             setIsPlaying(false);
//             setDuration(0);
//             setCurrentTime(0);
//             // setFlag(false);
//             void togglePlayPause();
//         }
//     }, [audio]);
//
//     const calculateTime = (secs: number) => {
//         const minutes = Math.floor(secs / 60);
//         const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//         const seconds = Math.floor(secs % 60);
//         const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//         return `${returnedMinutes}:${returnedSeconds}`;
//     };
//
//     async function togglePlayPause() {
//         if (audio) {
//             console.log('audio');
//             const seconds = Math.floor(audioPlayer.current?.duration ?? 0);
//             setDuration(seconds);
//             // @ts-expect-error
//             progressBar.current.max = seconds.toString();
//             const prevValue = isPlaying;
//             setIsPlaying(!prevValue);
//             if (!prevValue) {
//                 void audioPlayer?.current?.play();
//                 animationRef.current = requestAnimationFrame(whilePlaying);
//             } else {
//                 void audioPlayer?.current?.pause();
//                 cancelAnimationFrame(animationRef?.current ?? 0);
//             }
//         }
//     }
//
//     const whilePlaying = () => {
//         progressBar.current!.value = audioPlayer.current?.currentTime.toString() ?? '';
//         changePlayerCurrentTime();
//         animationRef.current = requestAnimationFrame(whilePlaying);
//     };
//
//     const changeRange = () => {
//         audioPlayer.current!.currentTime = +(progressBar.current?.value ?? 0);
//         changePlayerCurrentTime();
//     };
//
//     const changePlayerCurrentTime = () => {
//         progressBar?.current?.style.setProperty(
//             '--seek-before-width',
//             // @ts-expect-error
//             `${(progressBar.current.value / duration) * 100}%`
//         );
//         setCurrentTime(+(progressBar.current?.value ?? 0));
//     };
//
//     const backThirty = () => {
//         progressBar.current!.value = (+(progressBar.current?.value ?? 0) - 30).toString();
//         changeRange();
//     };
//
//     const forwardThirty = () => {
//         progressBar.current!.value = (+(progressBar.current?.value ?? 0) + 30).toString();
//         changeRange();
//     };
//
//     return (
//         <div>
//             <div className={'w-full bg-player-bg rounded-xl px-4'}>
//                 <audio
//                     controls={true}
//                     ref={ref => {
//                         // @ts-expect-error
//                         audioPlayer.current = ref;
//                     }}
//                     preload='metadata'
//                 >
//                     <source src={`data:audio/mp3;base64,${audio}`} />
//                 </audio>
//                 <div className={'w-full flex flex-row justify-between items-center'}>
//                     <button onClick={backThirty}>
//                         <img src={backTo15Icon} />
//                     </button>
//                     <button onClick={togglePlayPause} className={styles.playPause}>
//                         <img src={isPlaying ? PauseIcon : PlayIcon} />
//                     </button>
//                     <button onClick={forwardThirty}>
//                         <img src={forwartTo15Icon} />
//                     </button>
//
//                     {/* current time */}
//                     <div className={'text-orange font-Ubuntu px-2'}>{calculateTime(currentTime)}</div>
//
//                     {/* progress bar */}
//                     <div>
//                         <input
//                             type='range'
//                             className={styles.progressBar}
//                             defaultValue='0'
//                             ref={progressBar}
//                             onChange={changeRange}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoaded, setIsLoaded] = useState(!!audio);

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
        setIsLoaded(false);
        audioPlayer.current?.load();
    }, [audio]);

    useEffect(() => {
        progressBar.current && !isSliderFocused.current && (progressBar.current.value = `${currentTime}`);
    }, [currentTime]);

    useEffect(() => {
        progressBar.current && (progressBar.current.max = `${duration}`);
    }, [duration]);

    return (
        <div>
            <div className={'w-full bg-player-bg rounded-xl px-4'}>
                <audio
                    ref={audioPlayer}
                    onCanPlayThrough={event => {
                        setDuration(event.currentTarget.duration);
                        setIsLoaded(!!audio);
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
                    <source src={`data:audio/mp3;base64,${audio}`} />
                </audio>
                <div className={'w-full flex flex-row justify-between items-center'}>
                    <button onClick={fastBackward} className={cn(!isLoaded && 'opacity-50')} disabled={!isLoaded}>
                        <img src={backTo15Icon} />
                    </button>
                    <button
                        onClick={togglePlay}
                        className={cn(styles.playPause, !isLoaded && 'opacity-50')}
                        disabled={!isLoaded}
                    >
                        <img src={isPlaying ? PauseIcon : PlayIcon} />
                    </button>
                    <button onClick={fastForward} className={cn(!isLoaded && 'opacity-50')} disabled={!isLoaded}>
                        <img src={forwartTo15Icon} />
                    </button>

                    {/* current time */}
                    <span className={'text-orange font-Ubuntu px-2'}>{formattedTime(currentTime)}</span>

                    {/* progress bar */}
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
        </div>
    );
};

export { AudioPlayer };
