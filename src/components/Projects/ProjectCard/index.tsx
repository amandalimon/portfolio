import Image from "next/image";

interface ProjectCardProps {
    repoUrl: string;
    name: string;
    image: string | '';
    languages: string[] | [];
    appUrl: string;
    githubPagesUrl: string;
}

export const ProjectCard = ({ repoUrl, name, image, languages, appUrl, githubPagesUrl }: ProjectCardProps) => {
    return (
        <figure className="flex flex-col p-4 rounded-sm bg-whitesmoke text-black">
            {image && (
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={100}
                    className="rounded-sm"
                />
            )}
            <h1 className="font-bold">{name}</h1>
            <p>Lenguajes utilizados: {languages?.join(', ')}</p>

            <section className="flex justify-between">
                <a
                    className="border-2 rounded-md p-1"
                    href={repoUrl}
                >Repo</a>

                {appUrl &&
                    <a
                        className="border-2 rounded-md p-1"
                        href={appUrl}
                    >App
                    </a>
                }
                {githubPagesUrl &&
                    <a
                        className="border-2 rounded-md p-1"
                        href={githubPagesUrl}
                    >App
                    </a>}
            </section>
        </figure>
    );
};