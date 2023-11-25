import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface ImagePopupProps {
    isShown: boolean;
    setIsShown: (shown: boolean) => void;
    image: string;
}

const ImagePopup: React.FC<ImagePopupProps> = props => {
    const { isShown, setIsShown, image } = { ...props };

    return (
        <Transition appear show={isShown} as={Fragment}>
            <Dialog
                as={'div'}
                className={'fixed w-auto h-auto inset-0 z-50'}
                onClose={() => {
                    setIsShown(false);
                }}
            >
                <div className={'flex items-center min-h-full z-50'}>
                    <Dialog.Overlay className={'fixed w-auto h-auto opacity-0 inset-0'} />
                    <Transition.Child
                        as={Fragment}
                        enter={'ease-out duration-300'}
                        enterFrom={'opacity-0'}
                        enterTo={'opacity-100'}
                        leave={'ease-in duration-200'}
                        leaveFrom={'opacity-100'}
                        leaveTo={'opacity-0'}
                    >
                        <div className={'fixed w-auto h-auto bg-black bg-opacity-40 inset-0'} />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter={'ease-out duration-300'}
                        enterFrom={'opacity-0 scale-90'}
                        enterTo={'opacity-100 scale-100'}
                        leave={'ease-in duration-200'}
                        leaveFrom={'opacity-100 scale-100'}
                        leaveTo={'opacity-0 scale-90'}
                    >
                        <Dialog.Panel className={'flex flex-col items-center rounded-40 mx-auto p-5 overflow-hidden'}>
                            <img src={image} className={'w-full h-full object-contain'} />
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export { ImagePopup };
