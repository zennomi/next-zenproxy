export type QueryResult<T> = {
    results: T[];
    totalPages: number;
}

export type Title = {
    _id: string;
    id: string;
    titles: string[];
    name: string;
    altTitle: string;
    type: string;
    description: string;
    score: number;
    genres: string[];
    tags: string[];
    coverArt: string[];
    status: string;
    staff: string[];
    links: TitleLink[];
}

export type TitleLink = {
    link: string; site: string; language: string
}