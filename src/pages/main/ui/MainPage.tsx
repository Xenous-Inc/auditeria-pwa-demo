import { useTranslation } from 'react-i18next';
import AuditeriaGreyLogo from 'shared/assets/auditeria-grey-logo.svg';
import BookCoverExample from 'shared/assets/book-cover-example.png';
import BookmarkIcon from 'shared/assets/bookmark-icon.svg';
import FacebookIcon from 'shared/assets/facebook-icon.svg';
import InstagramIcon from 'shared/assets/instagram-icon.svg';
import VkIcon from 'shared/assets/vk-icon.svg';
import YoutubeIcon from 'shared/assets/youtube-icon.svg';
import { Header } from 'widgets/header/index';

const MainPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className='w-screen min-h-screen flex flex-col font-Ubuntu'>
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
                <div className={'h-[340px] mt-2 overflow-hidden  rounded-3xl'}>
                    <img src={BookCoverExample} className={'object-cover'} />
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
                <div className={'flex flex-row justify-center mt-24'}>
                    <img src={AuditeriaGreyLogo} />
                </div>
                <div className={'flex flex-col mt-5 items-center bg-bg-app gap-y-8 text-light-grey'}>
                    <p>© 2022, «Аудитерия». Все права защищены.</p>
                    <div className={'flex flex-row items-center text-light'}>
                        <p className={'underline'}>Политика конфиденциальности</p>
                        <p>|</p>
                        <p className={'underline'}>Лицензионное соглашение</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
