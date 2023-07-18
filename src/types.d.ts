export interface IMovies {
    score: float;
    show: IMovie;
}

export interface IMovie {
    id: number;
    image: IImage;
    name: string;
    status: string;
}

export interface IImage {
    medium: string;
}