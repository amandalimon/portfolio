import { Repo } from "../../types";

export async function fetchGitHubRepos(username: string): Promise<Repo[]> {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
    }
    const data: Repo[] = await response.json();
    return data;
}