"use client"
import { useEffect, useState } from 'react';
import { fetchGitHubRepos } from 'app/services/github/repos';
import { repoImages } from 'app/utils/repoImages';
import { ProjectCard } from '../ProjectCard';
import { Repo } from '../../types';

interface RepoLanguages {
    [repoName: string]: string[];
}

const GitHubRepos = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [repoLanguages, setRepoLanguages] = useState<RepoLanguages>({})

    useEffect(() => {
        fetchGitHubRepos('amandalimon')
            .then((data: Repo[]) => {
                setRepos(data);
                const repoLanguagesPromises = data.map(repo => {
                    return fetch(repo.languages_url)
                        .then(response => response.json())
                        .then(languages => {
                            const languagesData = Object.keys(languages);
                            return { repoName: repo.name, languages: languagesData };
                        })
                        .catch(error => {
                            console.error('Error fetching languages:', error);
                            return { repoName: repo.name, languages: [] };
                        });
                });
                Promise.all(repoLanguagesPromises)
                    .then(repoLanguagesData => {
                        const repoLanguagesMap: any = {};
                        repoLanguagesData.forEach(repoData => {
                            repoLanguagesMap[repoData.repoName] = repoData.languages;
                        });
                        setRepoLanguages(repoLanguagesMap);
                    });
            })
            .catch((error: Error) => console.error('Error fetching repositories:', error));
    }, []);

    return (
        <section className='flex flex-col items-center justify-center font-arsenal px-4 md:px-8 lg:px-16 xl:px-24'>
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono mb-4'>
                My GitHub Repositories
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'>
                {repos.map(repo => (
                    <ProjectCard
                        key={repo.id}
                        name={repo.name}
                        languages={repoLanguages[repo.name]}
                        url={repo.html_url}
                        image={repoImages[repo.name.toLowerCase()]} />
                ))}
            </div>
        </section>
    );
};

export default GitHubRepos;