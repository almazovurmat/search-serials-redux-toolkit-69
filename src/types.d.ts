export interface IMovies {
    score: float;
    show: IMovie;
}

export interface IMovie {
    id: number;
    image: IImage;
    name: string;
    status: string;
    genres: array;
    language: string;
    summary: string;
    url: string;
    runtime: number;
    type: string;
}

export interface IImage {
    medium: string;
}