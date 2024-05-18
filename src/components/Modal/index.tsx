import { MouseEventHandler } from "react"
import { TopProjects } from "../Projects/TopProjects";

interface ModalProps {
    show: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
}

export const Modal = ({ show, onClose }: ModalProps) => {
    if (!show) { return null }
    return (
        <>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white m-auto w-2/3 h-2/3">
                    <div className="flex flex-col items-center">
                        <h3>Modal content</h3>
                        <br />
                        <button className="" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}