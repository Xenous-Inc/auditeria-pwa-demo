import AuditeriaLogo from 'shared/assets/auditeria-logo.svg';
import IconMenu from 'shared/assets/icon-menu.svg';

export const Header: React.FC = () => {
    return (
        <div className={'w-full h-20 flex flex-row justify-between items-center bg-black px-4 py-3'}>
            <AuditeriaLogo className={'w-48 mt-2'} />
            <div className={'flex flex-row gap-x-8'}>
                <IconMenu className={'w-8'} />
            </div>
        </div>
    );
};
