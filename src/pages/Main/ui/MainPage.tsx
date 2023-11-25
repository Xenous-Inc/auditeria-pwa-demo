import { Actions } from 'features/Actions/ui/Actions';
import { Breadcrumb } from 'features/Breadcrumb';
import { Cover } from 'features/Cover';
import { Materials } from 'features/Materials';
import { Rating } from 'features/Rating';
import { AudioPlayer } from 'widgets/AudioPlayer';
import { Chapters } from 'widgets/Chapters';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header/index';

const MainPage: React.FC = () => {
    return (
        <div className={'min-w-fit w-full min-h-screen flex flex-col bg-bg-app font-ubuntu'}>
            <Header />
            <div className={'flex flex-col p-8 gap-y-6'}>
                <Breadcrumb />
                <Cover />
                <Rating />
                <Actions />
                <Materials />
                <AudioPlayer />
                <Chapters />
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
