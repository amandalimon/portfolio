import { MouseEventHandler } from "react";

interface ModalProps {
    show: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export const Modal = ({ show, onClose, children }: ModalProps) => {
    if (!show) return null;

    return (
        <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-50 backdrop-blur flex justify-center items-center p-4">
            <div className="h-5/6 w-11/12 sm:h-3/4 sm:w-4/5 md:w-3/4 lg:w-2/3 overflow-y-auto bg-white shadow-2xl">
                <div className="relative">
                    <button onClick={onClose} className="absolute right-0 top-0 mr-3 text-3xl text-purple bg-whitesmoke rounded-full w-5 h-5 m-2 flex items-center justify-center">&times;</button>
                </div>
                {children}
            </div>
        </div>
    );
}