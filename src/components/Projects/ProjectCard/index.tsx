import Image from "next/image";
import { useState } from "react";
import { FaCrown, FaExternalLinkAlt } from "react-icons/fa";
import { TbListDetails, TbExternalLink } from "react-icons/tb";

import { Modal } from "app/components/Modal";

interface ProjectCardProps {
    repoUrl: string;
    name: string;
    image?: string | '';
    languages?: string[];
    appUrl: string;
    githubPagesUrl: string;
}

type topProjects = 'future-tech-nextjs' | 'ecommerce-practice-react-vite-tailwind' | 'react-redux-pokedex' | 'TodoMachine'

export const ProjectCard = ({ repoUrl, name, image, languages, appUrl, githubPagesUrl }: ProjectCardProps) => {
    const [selectedProject, setSelectedProject] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setSelectedProject(name);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject('');
    };

    const topProjects = ["ecommerce-practice-react-vite-tailwind", "future-tech-nextjs", "react-redux-pokedex", "TodoMachine"]

    const renderLink = (url: string, label: string) => (
        <a className="flex justify-center items-center rounded-md px-1 w-24 border-2" href={url}>
            {label}<TbExternalLink className="ml-1 w-4 h-4" />
        </a>
    );

    return (
        <figure className="relative flex flex-col justify-between h-full rounded font-arsenal bg-whitesmoke text-black">
            {topProjects.includes(name) && (
                <button onClick={openModal} className="absolute rounded-tl px-4 py-1 overflow-hidden group bg-mustard hover:bg-gradient-to-r hover:from-maize hover:to-mustard transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative flex items-center justify-center gap-2">
                        <TbListDetails className="w-4 h-4" />Ver detalles
                    </span>
                </button>
            )}
            {image && (
                <Image
                    src={image}
                    alt={name}
                    width={600}
                    height={500}
                    className="object-cover rounded"
                />
            )}
            <section className="flex flex-col flex-grow p-2">
                <div className="flex-grow">
                    <h1 className="text-lg font-bold leading-5 mb-4">{name}</h1>
                    <p className="mb-4 leading-5">Lenguajes utilizados: {languages?.join(', ')}</p>
                </div>
                <div className="flex justify-between items-center">
                    {renderLink(repoUrl, "Repo")}
                    {appUrl && renderLink(appUrl, "App")}
                    {githubPagesUrl && renderLink(githubPagesUrl, "App")}
                </div>
            </section>
            {isModalOpen && (<Modal
                show={isModalOpen}
                onClose={closeModal}
                selectedProject={selectedProject as topProjects}
            />
            )}
        </figure >
    );
};