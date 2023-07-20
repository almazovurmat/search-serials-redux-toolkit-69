import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../app/store";
import emptyImage from '../../assets/imgaes/Image_Empty.webp';

const MovieDetails = () => {
    const movie = useSelector((state: RootState) => (state.movies.movie));
    const navigate = useNavigate();

    useEffect(() => {
        if (!movie) {
            navigate('/');
        }
    });
    return (
        <>
            {movie && <div>
                <h3 className="my-3">{movie.name}</h3>
                <div className="d-flex">
                    {<img className="me-5" src={ movie.image ? movie.image.medium : emptyImage} alt={movie.name}/> }
                    <div className="info">
                        <p><b>Language: </b> {movie.language}</p>
                        <p><b>Status: </b> {movie.status}</p>
                        <p><b>Genre: </b> {movie.genres.join(', ')}</p>
                        <p><b>Url: </b> <a target="_blank" rel="noopener noreferrer" href={movie.url}>More info</a></p>
                        <p><b>Type: </b> {movie.type}</p>
                        <p><b>Runtime: </b> {movie.runtime} min</p>

                    </div>
                </div>
                <div className="mt-5" dangerouslySetInnerHTML={{__html: movie.summary}}/>
            </div>}
        </>
    );
};

export default MovieDetails;