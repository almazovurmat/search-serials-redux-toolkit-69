import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../AxiosApi";
import {IMovies} from "../types";

export const fetchMovies = createAsyncThunk<IMovies[], string>(
    'movie/fetch',
    async (searchWord: string) => {
        const moviesResponse = await AxiosApi.get<IMovies[]>(`/search/shows?q=${searchWord}`);
        return moviesResponse.data;
    }
);