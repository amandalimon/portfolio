import { useEffect, useState } from "react";
import { fetchGitHubRepos, fetchRepoLanguages } from 'app/services/github/repos';
import { Repo } from "app/types";

export const useGitHubRepos = (username: string) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [repoLanguages, setRepoLanguages] = useState<Record<string, string[]>>({});

    useEffect(() => {
        fetchGitHubRepos(username)
            .then((data: Repo[]) => setRepos(data))
            .catch((error: Error) => console.error('Error fetching repositories:', error));
    }, [username]);

    useEffect(() => {
        const fetchLanguages = async () => {
            const promises = repos.map(repo =>
                fetchRepoLanguages(repo.languages_url)
                    .then(languages => ({ repoName: repo.name, languages }))
                    .catch(error => {
                        console.error(`Error fetching languages for ${repo.name}:`, error);
                        return { repoName: repo.name, languages: [] };
                    })
            );
            Promise.all(promises)
                .then(repoLanguagesData => {
                    const repoLanguagesMap: Record<string, string[]> = {};
                    repoLanguagesData.forEach(repoData => {
                        repoLanguagesMap[repoData.repoName] = repoData.languages;
                    });
                    setRepoLanguages(repoLanguagesMap);
                });
        };

        if (repos.length > 0) {
            fetchLanguages();
        }
    }, [repos]);

    return { repos, repoLanguages };
};