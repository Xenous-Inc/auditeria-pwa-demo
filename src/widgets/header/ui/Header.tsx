import AuditeriaLogo from 'shared/assets/auditeria-logo.svg';
import IconFind from 'shared/assets/icon-find.svg';
import IconMenu from 'shared/assets/icon-menu.svg';

export const Header: React.FC = () => {
    return (
        <div className={'flex flex-row justify-between w-full bg-black px-7 pt-9 pb-6'}>
            <img src={AuditeriaLogo} />
            <div className={'flex flex-row gap-x-8'}>
                <img src={IconMenu} />
                <img src={IconFind} />
            </div>
        </div>
    );
};
