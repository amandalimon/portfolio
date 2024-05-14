"use client"
import { useState } from 'react';
import { useGitHubRepos } from "app/hooks/useGithubRepos";
import { ProjectCard } from "./ProjectCard";
import { repoImages } from "app/utils/repoImages";
import { githubPagesHomepages } from "app/utils/githubPagesHomepages";

export const Projects = () => {
    const { repos, repoLanguages } = useGitHubRepos('amandalimon');
    const allLanguages = Array.from(new Set(Object.values(repoLanguages).flat()));

    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const filterByLanguage = (language: string) => {
        setSelectedLanguage(language === selectedLanguage ? null : language);
    };

    return (
        <section className='bg-navy flex flex-col justify-center items-center py-24 px-6 md:px-12 lg:px-24 xl:px-32'>
            <h2 className='text-5xl font-nova mb-12'>
                Mis Proyectos
            </h2>
            <div className='flex mb-6'>
                {allLanguages.map(language => (
                    <button
                        key={language}
                        className={`mr-2 px-4 py-2 rounded-md font-mono ${selectedLanguage === language ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => filterByLanguage(language)}
                    >
                        {language}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {repos
                    .filter(repo => repo.name !== "amandalimon" && (!selectedLanguage || (repoLanguages[repo.name] && repoLanguages[repo.name].includes(selectedLanguage))))
                    .map(repo => (
                        <div key={repo.id} className="flex flex-col">
                            <ProjectCard
                                image={repoImages[repo.name.toLowerCase()]}
                                name={repo.name}
                                languages={repoLanguages[repo.name]}
                                repoUrl={repo.html_url}
                                appUrl={repo.homepage}
                                githubPagesUrl={githubPagesHomepages[repo.name.toLowerCase()]}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
}
