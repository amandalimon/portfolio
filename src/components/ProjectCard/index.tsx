"use client"
import Image from "next/image";

interface ProjectCardProps {
    url: string;
    name: string;
    image: string | '';
    languages: string[] | [];
}

export const ProjectCard = ({ url, name, image, languages }: ProjectCardProps) => {
    return (
        <figure className="flex flex-col p-4 rounded-sm bg-whitesmoke text-black">
            {image && (
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={200}
                    className="rounded-sm"
                />
            )}
            <h1 className="font-bold">{name}</h1>
            <p>Lenguajes utilizados: {languages.join(', ')}</p>

            <section className="flex justify-between">
                <a
                    className="border-2 rounded-md p-1"
                    href={url}
                >Repo</a>
                <a
                    className="border-2 rounded-md p-1"
                    href={url}
                >App
                </a>
            </section>
        </figure>
    );
};