"use client"
import { useGitHubRepos } from "app/hooks/useGithubRepos";
import { ProjectCard } from "./ProjectCard";
import { repoImages } from "app/utils/repoImages";
import { githubPagesHomepages } from "app/utils/githubPagesHomepages";

export const Projects = () => {
    const { repos, repoLanguages } = useGitHubRepos('amandalimon');
    console.log(repos)
    return (
        <section className='flex flex-col justify-center items-center my-24 px-6 md:px-12 lg:px-24 xl:px-32'>
            <h2 className='text-5xl font-nova mb-12'>
                Mis Proyectos
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {repos.map(repo => (
                    repo.name !== "amandalimon" && (
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
                    )
                ))}
            </div>
        </section>
    );
}