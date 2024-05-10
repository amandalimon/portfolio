"use client"
import { useGitHubRepos } from "app/hooks/useGithubRepos";
import { ProjectCard } from "./ProjectCard";
import { repoImages } from "app/utils/repoImages";
import { githubPagesHomepages } from "app/utils/githubPagesHomepages";

export const Projects = () => {
    const { repos, repoLanguages } = useGitHubRepos('amandalimon');
    console.log(repos)
    return (
        <section className='flex flex-col items-center justify-center font-arsenal px-4 md:px-8 lg:px-16 xl:px-24'>
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono mb-4'>
                My GitHub Repositories
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>
                {repos.map(repo => (
                    <ProjectCard
                        key={repo.id}
                        image={repoImages[repo.name.toLowerCase()]}
                        name={repo.name}
                        languages={repoLanguages[repo.name]}
                        repoUrl={repo.html_url}
                        appUrl={repo.homepage}
                        githubPagesUrl={githubPagesHomepages[repo.name.toLowerCase()]}
                    />
                ))}
            </div>
        </section>
    );
}