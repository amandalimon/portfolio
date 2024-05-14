import { SkillProps, SkillLogo } from "../SkillLogo";

interface SkillSectionProps {
    title: string;
    skills: SkillProps[];
}

export const SkillSection = ({ title, skills }: SkillSectionProps) => (
    <section className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-2">{title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
            {skills.map((skill) => (
                <SkillLogo key={skill.src} {...skill} />
            ))}
        </div>
    </section>
);