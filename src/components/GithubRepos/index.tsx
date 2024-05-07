"use client"
import { useEffect, useState } from 'react';

interface Repo {
    id: number;
    html_url: string;
    name: string;
}

const GitHubRepos = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/amandalimon/repos')
          .then(response => response.json())
          .then((data: Repo[]) => setRepos(data))
          .catch(error => console.error('Error fetching repositories:', error));
      }, []);
      console.log(repos)

    return (
        <div>
            <h2>My GitHub Repositories</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepos;
