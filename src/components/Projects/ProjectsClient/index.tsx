"use client"
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useGitHubRepos } from "app/hooks/useGithubRepos";
import { ProjectCard } from "./ProjectCard";
import { repoImages } from "app/utils/repoImages";

export const ProjectsClient = () => {
    const t = useTranslations('ProjectsSection');

    const { repos, repoLanguages, error } = useGitHubRepos('amandalimon');

    const allLanguages = Array.from(new Set(Object.values(repoLanguages).flat()));

    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const filterByLanguage = (language: string) => {
        setSelectedLanguage(language === selectedLanguage ? null : language);
    };

    return (
        <section id="projects" className='gap-6 bg-lightnavy flex flex-col justify-center py-20 px-10 md:px-20'>
            <h1 className='text-5xl font-nova'>{t('title')}</h1>
            <div className="w-1/12 mb-8 border-2 border-orchid"></div>
            <p className="font-mono text-lg">{t('description')}</p>

            {error && (
                <p className="text-powderblue font-bold mt-8">{t('errorText')}</p>
            )}

            <div className='flex flex-wrap justify-start my-8'>
                {allLanguages.map(language => (
                    <button
                        key={language}
                        className={`mr-2 mt-2 px-4 py-2 rounded-md font-mono ${selectedLanguage === language ? 'bg-airblue text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => filterByLanguage(language)}
                    >
                        {language}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {repos
                    .filter(repo => repo.name !== "amandalimon" && repo.name !== "portfolio" && (!selectedLanguage || (repoLanguages[repo.name] && repoLanguages[repo.name].includes(selectedLanguage))))
                    .map(repo => (
                        <div key={repo.id} className="flex flex-col">
                            <ProjectCard
                                image={repoImages[repo.name.toLowerCase()] || '/images/projects/default.png'}
                                name={repo.name}
                                languages={repoLanguages[repo.name]}
                                repoUrl={repo.html_url}
                                appUrl={repo.homepage}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
}