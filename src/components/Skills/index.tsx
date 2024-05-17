import { GrCertificate } from "react-icons/gr";
import { SkillSection } from "./SkillSection";

export const Skills = () => (
    <section id="skills" className="flex flex-col justify-center items-center gap-6 px-2 py-12 md:py-14 lg:py-18 xl:py-22">
        <h1 className='text-4xl font-nova'>Habilidades</h1>
        <div className="w-1/12 mb-8 border-2 border-orchid"></div>

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
        <a
            href="https://drive.google.com/drive/folders/18xkhvQdke5YWDUhYWzV2o_UMH1Qwu-Hj?usp=sharing" className="font-arsenal font-semibold text-lg mt-12 relative rounded px-5 py-2.5 overflow-hidden group bg-airblue hover:bg-gradient-to-r hover:from-airblue hover:to-powderblue text-white hover:ring-2 hover:ring-offset-2 ring-offset-lightnavy hover:ring-airblue transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex items-center justify-center gap-2">
                <GrCertificate className="w-5 h-5" />
                Ver mis Certificados
            </span>
        </a>
    </section >
);