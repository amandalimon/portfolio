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
                { src: "github", alt: "GithubPages", name: "Pages" },
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
        <a href="https://drive.google.com/drive/folders/18xkhvQdke5YWDUhYWzV2o_UMH1Qwu-Hj?usp=sharing"
            className="mt-12 shadow-xl font-arsenal font-semibold box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 overflow-hidden text-white transition-all duration-300 bg-payne rounded-md cursor-pointer group ring-offset-2 ring-1 ring-payne ring-offset-powderblue hover:ring-offset-airblue ease focus:outline-none">

            <span className="absolute bottom-0 right-0 w-8 h-24 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>

            <span className="absolute top-0 left-0 w-24 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center">
                <GrCertificate className="relative w-5 h-5 mr-2 text-white" />
                Ver mis Certificados</span>
        </a>
    </section>
);