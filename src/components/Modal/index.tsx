import { MouseEventHandler } from "react"
import { ProjectDetails, projectData } from "../Projects/ProjectDetails";

interface ModalProps {
    show: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
    selectedProject: 'future-tech-nextjs' | 'ecommerce-practice-react-vite-tailwind' | 'react-redux-pokedex' | 'TodoMachine';
}

export const Modal = ({ show, onClose, selectedProject }: ModalProps) => {
    if (!show) { return null }
    const project = projectData[selectedProject];
    if (!project) return null;

    return (
        <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-50 backdrop-blur flex justify-center items-center p-4">
            <div className="w-11/12 h-5/6 sm:w-2/3 sm:h-3/4 overflow-y-auto bg-white shadow-2xl">
                <div className="relative">
                    <button onClick={onClose} className="absolute right-0 top-0 mr-3 text-3xl text-purple bg-whitesmoke rounded-full w-5 h-5 m-2 flex items-center justify-center">&times;</button>
                </div>
                <ProjectDetails {...project} />
            </div>
        </div>
    );
}