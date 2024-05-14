import Image from "next/image";

export interface SkillProps {
    src: string;
    alt: string;
    name: string;
}

export const SkillLogo = ({ src, alt, name }: SkillProps) => (
    <div className="group relative flex items-center justify-center">
        <Image src={`/svg/${src}.svg`} alt={alt} width={120} height={120} className="bg-whitesmoke shadow-lg py-2 px-4 rounded transition-transform duration-500 group-hover:-scale-x-100" />
        <div className="absolute inset-0 flex items-center justify-center bg-grey bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white font-extrabold text-xl transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                {name}
            </span>
        </div>
    </div>
);