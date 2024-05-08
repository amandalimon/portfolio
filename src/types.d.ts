export interface Repo {
    id: number;
    html_url: string;
    name: string;
    languages: string[];
    languages_url: string | ''
}

export interface RepoImages {
    [key: string]: string;
}
