export interface IMovies {
    score: float;
    show: IMovie;
}

export interface IMovie {
    id: number;
    image: string;
    name: string;
    status: string;
}