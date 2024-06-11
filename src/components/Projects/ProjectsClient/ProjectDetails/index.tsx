import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ProjectDetailsProps {
    selectedProject: 'future-tech-nextjs' | 'ecommerce-practice-react-vite-tailwind' | 'react-redux-pokedex' | 'TodoMachine';
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = (props) => {
    const t = useTranslations('ProjectsSection')

    const projectData = {
        "future-tech-nextjs": {
            "title": "Future Tech",
            "description": t("FutureTechDesc"),
            "imageSrc": "/images/projects/futuretech.png",
            "features": t("FutureTechFeat"),
            "technologies": ["React.js", "Next.js", "Typescript", "Sass", "GraphQL"]
        },
        "ecommerce-practice-react-vite-tailwind": {
            "title": "Shopi",
            "description": t("ShopiDesc"),
            "imageSrc": "/images/projects/shopi.png",
            "features": t("ShopiFeat"),
            "technologies": ["React.js", "Vite.js", "Tailwind CSS"]
        },
        "react-redux-pokedex": {
            "title": "Redux Pokedex",
            "description": t("ReduxPokedexDesc"),
            "imageSrc": "/images/projects/pokedex.png",
            "features": t("ReduxPokedexFeat"),
            "technologies": ["React.js", "Redux.js", "Redux Toolkit", "Axios"]
        },
        "TodoMachine": {
            "title": "TO DO Machine",
            "description": t("ToDoMachineDesc"),
            "imageSrc": "/images/projects/todomachine.png",
            "features": t("ToDoMachineFeat"),
            "technologies": ["React.js", "React Router", "CSS", "HTML"]
        }
    }

    const { selectedProject } = props;

    if (!selectedProject || !projectData[selectedProject]) return null;

    const project = projectData[selectedProject];

    const featuresArray = project.features.split('|')

    return (
        <figure className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
            <section className="col-span-1">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={750}
                    height={750}            
                    />
                <div className="flex flex-col gap-4 py-4 px-6">
                    <h1 className="font-nova text-2xl">{project.title}</h1>
                    <div className="w-1/12 mb-6 border-2 border-violet"></div>
                    <p>{project.description}</p>
                </div>
            </section>

            <section className="col-span-1 flex flex-col gap-8 py-6 px-8 bg-whitesmoke">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-6 bg-violet"></div>
                        <h2 className="font-nova text-lg h-8">{t("featuresTitle")}</h2>
                    </div>
                    <ul className="list-disc ml-9 m-1">
                        {featuresArray.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-6 bg-violet"></div>
                        <h2 className="font-nova text-lg">{t("technologiesTitle")}</h2>
                    </div>
                    <p className="ml-5">{project.technologies.join(', ')}</p>
                </div>
            </section>
        </figure>
    );
}