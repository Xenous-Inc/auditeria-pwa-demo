export const Breadcrumb: React.FC = () => {
    return (
        <div className={'flex flex-row gap-x-1 text-xs'}>
            <span className={'text-light-grey underline'}>Главная страница</span>
            <span className={'text-grey'}>/</span>
            <span className={'text-grey'}>Гарри Поттер и орден Феникса</span>
        </div>
    );
};
