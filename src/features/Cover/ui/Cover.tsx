import BookCoverImage from 'shared/assets/book-cover-example.png';

export const Cover: React.FC = () => {
    return (
        <>
            <div className={'flex flex-col gap-y-2'}>
                <span className={'text-4xl text-white font-bold'}>Гарри Поттер и Орден Феникса</span>
                <div className={'flex flex-col text-light-grey'}>
                    <div className={'flex flex-row gap-x-1'}>
                        <span>Автор: </span>
                        <span className={'underline'}>Маргарет Митчелл, Сандр Бондрос</span>
                    </div>
                    <div className={'flex flex-row gap-x-1'}>
                        <span>Читает: </span>
                        <span className={'underline'}>Алексей Сквозной</span>
                    </div>
                </div>
                <div className={'w-72 aspect-square rounded-3xl overflow-hidden'}>
                    <img src={BookCoverImage} className={'object-cover'} />
                </div>
            </div>
        </>
    );
};
