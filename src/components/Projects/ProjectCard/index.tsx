import Image from "next/image";
import { useState } from "react";
import { Modal } from "app/components/Modal";
import { FaCrown, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    repoUrl: string;
    name: string;
    image?: string | '';
    languages?: string[];
    appUrl: string;
    githubPagesUrl: string;
}

export const ProjectCard = ({ repoUrl, name, image, languages, appUrl, githubPagesUrl }: ProjectCardProps) => {

    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
        setOpenModal(prevState => !prevState);
    }
    const topProjects = ["ecommerce-practice-react-vite-tailwind", "future-tech-nextjs", "react-redux-pokedex", "TodoMachine"]

    const renderLink = (url: string, label: string) => (
        <a className="flex justify-center items-center rounded-md px-1 w-24 border-2" href={url} target="_blank" rel="noopener noreferrer">
            {label}
            <FaExternalLinkAlt className="ml-1 w-3" />
        </a>
    );

    return (
        <figure className="flex flex-col justify-between h-full rounded-md font-arsenal bg-whitesmoke text-black">
            {topProjects.includes(name) &&
                <button onClick={toggleModal} className="absolute bg-peach flex justify-start items-center gap-2 px-2 py-1 rounded-tl" aria-label="Ver detalles del proyecto">
                    <FaCrown />Ver detalles
                </button>
            }
            {image && (
                <Image
                    src={image}
                    alt={name}
                    width={600}
                    height={500}
                    className="object-cover rounded-t-md"
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
            {openModal && <Modal show={openModal} onClose={toggleModal} />}
        </figure >
    );
};