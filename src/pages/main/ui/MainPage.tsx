import { useState } from 'react';
import { ImagePopup } from 'features/imagePopup';
import AuditeriaGreyLogo from 'shared/assets/auditeria-grey-logo.svg';
import BookCoverExample from 'shared/assets/book-cover-example.png';
import BookmarkIcon from 'shared/assets/bookmark-icon.svg';
import FacebookIcon from 'shared/assets/facebook-icon.svg';
import InstagramIcon from 'shared/assets/instagram-icon.svg';
import MastercardLogo from 'shared/assets/mastercard-logo.svg';
import VisaLogo from 'shared/assets/visa-logo.svg';
import VkIcon from 'shared/assets/vk-icon.svg';
import YoutubeIcon from 'shared/assets/youtube-icon.svg';
import { AudioPlayer } from 'widgets/audioPlayer/index';
import { Header } from 'widgets/header/index';

const MainPage: React.FC = () => {
    const [isPopupShown, setPopupShown] = useState<boolean>(false);
    const [popupImage, setPopupImage] = useState<string | undefined>(undefined);

    return (
        <div className='w-screen min-h-screen flex flex-col font-Ubuntu overflow-x-hidden'>
            <ImagePopup isShown={isPopupShown} image={popupImage ?? ''} setIsShown={setPopupShown} />
            <Header />
            <div className='w-full h-full bg-bg-app px-8 pt-8'>
                <div className='flex flex-row gap-x-1'>
                    <p className={'text-light-grey text-xs underline'}>Главная страница </p>
                    <p className={'text-grey text-xs'}>/ Гарри Поттер и орден Феникса</p>
                </div>
                <p className={'text-4xl mt-6 text-white font-bold'}>Гарри Поттер и Орден Феникса</p>
                <div className='flex flex-col text-light-grey gap-x-1 mt-2'>
                    <div className={'flex flex-row gap-x-1'}>
                        <p>Автор: </p>
                        <p className={'underline'}>Маргарет Митчелл, Сандр Бондрос</p>
                    </div>
                    <div className={'flex flex-row gap-x-1'}>
                        <p>Читает: </p>
                        <p className={'underline'}>Алексей Сквозной</p>
                    </div>
                </div>
                <div className={'h-[340px] mt-2 overflow-hidden rounded-3xl'}>
                    <img src={BookCoverExample} className={'object-cover'} />
                </div>
                <div className={'mt-4'}>
                    <AudioPlayer chapter='0' />
                </div>
                <div className={'flex flex-row justify-between mt-6 gap-x-2'}>
                    <div className={'flex flex-row gap-x-2 items-center'}>
                        <p className={'text-5xl text-red font-bold'}>2,8</p>
                        <div className={'flex flex-col'}>
                            <p className={'text-white text-xs font-medium'}>Рейтинг аудитерии</p>
                            <p className={'text-white text-xs font-extralight'}>35 784 оценок</p>
                        </div>
                    </div>
                    <div className={'flex flex-row gap-x-4 items-center'}>
                        <div className={'bg-orange text-white rounded-xl font-bold p-1.5'}>
                            <p>18+</p>
                        </div>
                        <img src={BookmarkIcon} />
                    </div>
                </div>
                <div className={'flex flex-row justify-between mt-6'}>
                    <button className={'text-orange rounded-full text-xs border-orange border-2 py-4 px-3 font-bold'}>
                        Отправить на рабочий стол
                    </button>
                    <div className={'flex flex-row gap-x-4'}>
                        <img src={VkIcon} />
                        <img src={InstagramIcon} />
                        <img src={FacebookIcon} />
                        <img src={YoutubeIcon} />
                    </div>
                </div>
                <div className={'flex flex-col gap-y-3 mt-12 text-white'}>
                    <p className={'font-medium text-3xl'}>Дополнительные материалы</p>
                    <div
                        className={'flex flex-row gap-x-7 items-center'}
                        onClick={() => {
                            setPopupImage(BookCoverExample);
                            setPopupShown(true);
                        }}
                    >
                        <img src={BookCoverExample} className={'w-28 h-24 object-cover rounded-xl'} />
                        <p className={'text-2xl'}>Постер с героями фильма</p>
                    </div>
                    <div
                        className={'flex flex-row gap-x-7 items-center'}
                        onClick={() => {
                            setPopupImage(BookCoverExample);
                            setPopupShown(true);
                        }}
                    >
                        <img src={BookCoverExample} className={'w-28 h-24 object-cover rounded-xl'} />
                        <p className={'text-2xl'}>Блокнот с главными героями</p>
                    </div>
                </div>
                <div className={'flex flex-col mt-20'}>
                    <p className={'text-white text-3xl font-medium'}>Содержание книги</p>
                    <p className={'text-grey py-1'}>18 частей / 23 часа 15 минут</p>
                    <div className={'flex flex-col gap-y-4'}>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold mt-3'}>
                            <p>Трек 02. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='1' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold mt-3'}>
                            <p>Трек 02. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='2' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 03. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='3' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='4' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='5' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='6' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='7' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='8' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='9' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='10' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='11' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='12' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='13' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='14' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='15' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='16' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='17' />
                        </div>
                        <div className={'flex flex-col gap-y-1 text-white font-semibold'}>
                            <p>Трек 04. § 1. Россия и Европа в конце семнадцатого века.mp3</p>
                            <AudioPlayer chapter='18' />
                        </div>
                    </div>
                </div>
                <div className={'flex flex-row justify-center mt-24'}>
                    <img src={AuditeriaGreyLogo} />
                </div>
                <div className={'flex flex-col mt-5 items-center bg-bg-app gap-y-1.5 text-light-grey text-xs'}>
                    <p>© 2022, «Аудитерия». Все права защищены.</p>
                    <div className={'flex flex-row items-center text-xs'}>
                        <p className={'underline pr-1'}>Политика конфиденциальности</p>
                        <p className={'underline pr-1'}>|</p>
                        <p className={'underline'}>Лицензионное соглашение</p>
                    </div>
                </div>
                <div className={'flex flex-row justify-center mt-10 gap-x-2.5 mb-12'}>
                    <img src={VisaLogo} />
                    <img src={MastercardLogo} />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
