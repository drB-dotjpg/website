export type Projects = {
    [key: string]: Project;
}

export type Project = {
    name: string;
    involvement: string;
    with?: string;
    preview: string;
    tags: string[];
    body: string;
    img?: string[];
}