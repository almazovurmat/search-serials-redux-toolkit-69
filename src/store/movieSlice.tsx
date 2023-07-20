import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMovies} from "./movieThunk";
import {IMovie, IMovies} from "../types";

interface IMovieState {
    movies: IMovies[];
    loader: boolean;
    movie: IMovie|null;
    inputValue: string;
}

const initialState:IMovieState = {
    movies: [],
    loader: false,
    movie: null,
    inputValue: '',
}

export const MovieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.inputValue = action.payload;
        },
        getMovieInfo: (state, action: PayloadAction<IMovie>) => {
            state.movie = action.payload;
        },
        clearForm: (state) => {
            state.movies = [];
            state.inputValue = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loader = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loader = false;
            console.log(action.payload);
            state.movies = action.payload;
        });
        builder.addCase(fetchMovies.rejected, (state) => {
            state.loader = false;
        });
    }
});

export const moviesReducer = MovieSlice.reducer;
export const { getMovieInfo, clearForm, setInputValue } = MovieSlice.actions;