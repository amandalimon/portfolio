import { SkillProps, SkillLogo } from "../SkillLogo";

interface SkillSectionProps {
    title: string;
    skills: SkillProps[];
}

export const SkillSection = ({ title, skills }: SkillSectionProps) => (
    <section className="flex flex-col justify-center items-center">
        <h2 className="font-mono text-xl mb-3">{title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-3">
            {skills.map((skill) => (
                <SkillLogo key={skill.src} {...skill} />
            ))}
        </div>
    </section>
);