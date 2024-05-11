import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    repoUrl: string;
    name: string;
    image?: string | '';
    languages?: string[];
    appUrl: string;
    githubPagesUrl: string;
}

export const ProjectCard = ({ repoUrl, name, image, languages, appUrl, githubPagesUrl }: ProjectCardProps) => {

    const renderAppLink = (url: string) => (
        <a className="flex justify-center items-center rounded-md px-1 w-24 bg-peach" href={url}>App
            <FaExternalLinkAlt className="ml-1 w-3" />
        </a>
    );

    return (
        <figure className="flex flex-col justify-between h-full rounded-md font-arsenal bg-whitesmoke text-black">
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
                    <a className="flex justify-center items-center rounded-md px-1 w-24 border-2" href={repoUrl}>Repo
                        <FaExternalLinkAlt className="ml-1 w-3" />
                    </a>
                    {appUrl && renderAppLink(appUrl)}
                    {githubPagesUrl && renderAppLink(githubPagesUrl)}
                </div>
            </section>
        </figure >
    );
};