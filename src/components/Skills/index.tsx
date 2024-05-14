import { GrCertificate } from "react-icons/gr";
import { SkillSection } from "./SkillSection";

export const Skills = () => (
    <section className="flex flex-col justify-center items-center gap-4 md:gap-8 py-24">
        <h2 className="font-nova text-5xl mb-2">Habilidades</h2>
        <SkillSection
            title="Lenguajes de Programación"
            skills={[
                { src: "html", alt: "HTML", name: "HTML" },
                { src: "javascript", alt: "Javascript", name: "Javascript" },
                { src: "css", alt: "CSS", name: "CSS" },
                { src: "typescript", alt: "Typescript", name: "Typescript" },
            ]}
        />
        <SkillSection
            title="Hosting/SaaS"
            skills={[
                { src: "vercel", alt: "Vercel", name: "Vercel" },
                { src: "github", alt: "GithubPages", name: "GithubPages" },
            ]}
        />
        <SkillSection
            title="Frameworks, Plataformas y Librerías"
            skills={[
                { src: "react", alt: "React", name: "React" },
                { src: "next", alt: "Next", name: "Next" },
                { src: "vite", alt: "Vite", name: "Vite" },
                { src: "redux", alt: "Redux", name: "Redux" },
                { src: "node", alt: "Node", name: "NodeJS" },
                { src: "tailwind", alt: "Tailwind", name: "Tailwind" },
                { src: "sass", alt: "Sass", name: "Sass" },
            ]}
        />
        <a
            className="relative flex items-center justify-start overflow-hidden transition-all bg-airblue rounded hover:bg-purple group py-1.5 px-2.5 mt-10"
            href="https://drive.google.com/drive/folders/18xkhvQdke5YWDUhYWzV2o_UMH1Qwu-Hj?usp=sharing"
        >
            <span className="w-full h-48 rounded bg-violet absolute bottom-0 left-0 translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:mb-0 group-hover:ml-0"></span>
            <span className="relative flex items-center justify-center gap-2 font-nova text-xl w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-whitesmoke">
                <GrCertificate />
                Ver mis certificados
            </span>
        </a>
    </section>
);