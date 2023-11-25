import { Actions } from 'features/Actions/ui/Actions';
import { Breadcrumb } from 'features/Breadcrumb';
import { Cover } from 'features/Cover';
import { Rating } from 'features/Rating';
import { AudioPlayer } from 'widgets/AudioPlayer';
import { Chapters } from 'widgets/Chapters';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header/index';

const MainPage: React.FC = () => {
    // const [isPopupShown, setPopupShown] = useState<boolean>(false);
    // const [popupImage, setPopupImage] = useState<string | undefined>(undefined);

    return (
        <div className={'min-w-fit w-full min-h-screen flex flex-col bg-bg-app font-ubuntu'}>
            {/* <ImagePopup isShown={isPopupShown} image={popupImage ?? ''} setIsShown={setPopupShown} /> */}
            <Header />
            <div className={'flex flex-col p-8 gap-y-6'}>
                <Breadcrumb />
                <Cover />
                <Rating />
                <Actions />
                <AudioPlayer />
                <Chapters />
                <Footer />
            </div>
            {/* <div className='w-full h-full bg-bg-app px-8 pt-8'> */}
            {/*     <div className={'flex flex-col gap-y-3 mt-12 text-white'}> */}
            {/*         <p className={'font-medium text-3xl'}>Дополнительные материалы</p> */}
            {/*         <div */}
            {/*             className={'flex flex-row gap-x-7 items-center'} */}
            {/*             onClick={() => { */}
            {/*                 setPopupImage(BookCoverExample); */}
            {/*                 setPopupShown(true); */}
            {/*             }} */}
            {/*         > */}
            {/*             <img src={BookCoverExample} className={'w-28 h-24 object-cover rounded-xl'} /> */}
            {/*             <p className={'text-2xl'}>Постер с героями фильма</p> */}
            {/*         </div> */}
            {/*         <div */}
            {/*             className={'flex flex-row gap-x-7 items-center'} */}
            {/*             onClick={() => { */}
            {/*                 setPopupImage(BookCoverExample); */}
            {/*                 setPopupShown(true); */}
            {/*             }} */}
            {/*         > */}
            {/*             <img src={BookCoverExample} className={'w-28 h-24 object-cover rounded-xl'} /> */}
            {/*             <p className={'text-2xl'}>Блокнот с главными героями</p> */}
            {/*         </div> */}
            {/*     </div> */}
            {/* </div> */}
        </div>
    );
};

export default MainPage;
