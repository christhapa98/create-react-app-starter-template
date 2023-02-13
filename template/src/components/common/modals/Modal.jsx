import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export default function Modal({ title, children, show, onSuccess, successButtonTitle, onCancel }) {
    const [open, setOpen] = useState < boolean > (show);

    const cancelButtonRef = useRef(null);

    useEffect(() => { setOpen(show) }, [show])

    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog static as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => { setOpen(false); onCancel() }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                                <ModalBody title={title} children={children} onSuccess={onSuccess} onCancel={onCancel} setOpen={setOpen} />
                                {/* <ModalFooter onSuccess={onSuccess} onCancel={onCancel} setOpen={setOpen} cancelButtonRef={cancelButtonRef} successButtonTitle={successButtonTitle} /> */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root >
    )
}

const ModalBody = ({ children, title, onSuccess: success, setOpen, onCancel: cancel }) => {

    const onCancel = () => {
        cancel();
        setOpen(false)
    }

    return <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className='flex items-center justify-between pb-2 mb-5 border-b border-no border-slate-400'> <Dialog.Title as="h3" className="py-2 text-xl font-medium leading-6 text-gray-900">{title}</Dialog.Title>
                <div onClick={onCancel}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="mt-2">{children}</div>
        </div>
    </div>
}

const ModalFooter = ({ onSuccess: success, setOpen, successButtonTitle, onCancel: cancel, cancelButtonRef }) => {
    const onSuccess = () => {
        success();
        setOpen(false);
    }

    const onCancel = () => {
        cancel();
        setOpen(false)
    }

    return <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
        <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onSuccess}
        >
            {successButtonTitle}
        </button>
        <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            ref={cancelButtonRef}
            onClick={onCancel}
        >
            Close
        </button>
    </div>
}