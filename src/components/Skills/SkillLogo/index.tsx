import Image from "next/image";

export interface SkillProps {
    src: string;
    alt: string;
    name: string;
}

export const SkillLogo = ({ src, alt, name }: SkillProps) => (
    <div className="font-arsenal font-semibold w-32 h-32 relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 bg-slate-200 transition duration-300 ease-out border-4 border-airblue shadow-lg group">

        <span className="absolute inset-x-0 h-1/4 bottom-0 bg-airblue text-white flex items-start justify-center duration-300 transform translate-y-full group-hover:translate-y-0 ease z-10">
            {name}
        </span>

        <Image src={`/svg/${src}.svg`} alt={alt} width={120} height={120} className="relative transition-all duration-300 transform group-hover:-translate-y-4 ease z-0" />

        <span className="absolute right-0 w-8 h-full -my-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    </div>
);