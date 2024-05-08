import { Repo } from "../../types";

interface RepoLanguages {
    [repoName: string]: string[];
}

export async function fetchGitHubRepos(username: string): Promise<Repo[]> {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
    }
    const data: Repo[] = await response.json();
    return data;
}

export async function fetchRepoLanguages(languagesUrl: string): Promise<string[]> {
    const response = await fetch(languagesUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch repository languages');
    }
    const data: RepoLanguages = await response.json();
    return Object.keys(data);
}