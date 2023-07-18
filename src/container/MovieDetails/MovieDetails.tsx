import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

const MovieDetails = () => {
    const movie = useSelector((state: RootState) => (state.movies.movie));
    return (
        <div>
            <h3>{movie.name}</h3>
            {movie.image && <img src={movie.image.medium} alt={movie.name}/>}
        </div>
    );
};

export default MovieDetails;