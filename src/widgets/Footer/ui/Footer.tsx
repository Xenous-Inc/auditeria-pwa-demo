import AuditeriaGrayscaleLogo from 'shared/assets/auditeria-grey-logo.svg';
import MastercardIcon from 'shared/assets/mastercard-logo.svg';
import VisaIcon from 'shared/assets/visa-logo.svg';

export const Footer: React.FC = () => {
    return (
        <div className={'w-full flex flex-col items-center gap-y-6 mt-20'}>
            <AuditeriaGrayscaleLogo className={'w-44'} />
            <div className={'flex flex-col items-center bg-bg-app text-light-grey text-xs gap-y-2'}>
                <span>© 2022, «Аудитерия». Все права защищены.</span>
                <div className={'flex flex-row items-center text-xs gap-x-1'}>
                    <span className={'underline'}>Политика конфиденциальности</span>
                    <div className={'w-px self-stretch bg-light-grey my-1 opacity-80'} />
                    <span className={'underline'}>Лицензионное соглашение</span>
                </div>
            </div>
            <div className={'flex flex-row items-center gap-x-2.5'}>
                <VisaIcon className={'h-6'} />
                <MastercardIcon className={'h-8'} />
            </div>
        </div>
    );
};
