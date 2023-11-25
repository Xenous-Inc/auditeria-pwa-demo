import LoaderImage from 'shared/assets/loader.svg';

export const Loader: React.FC = () => {
    return (
        <div className={'w-full min-h-screen flex flex-col justify-center items-center bg-bg-app'}>
            <LoaderImage className={'w-20'} />
        </div>
    );
};
