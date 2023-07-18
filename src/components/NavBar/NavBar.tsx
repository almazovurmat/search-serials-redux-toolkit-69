import React from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../app/hook";
import {fetchMovies} from "../../store/movieThunk";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {IMovie} from "../../types";
import {clearForm, getMovieInfo, setInputValue} from "../../store/movieSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();
    const getDataFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        dispatch(setInputValue(value));
        dispatch(fetchMovies(value));
    };

    const movies = useSelector((state: RootState) => (state.movies.movies));
    const inputValue = useSelector((state: RootState) => (state.movies.inputValue));

    const onButtonClick = (movie: IMovie) => {
        dispatch(getMovieInfo(movie));
        dispatch(clearForm());
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Get Serial Info</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#search" aria-controls="search"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mt-md-3 mt-lg-0" id="search">
                        <form className="form-inline my-2 my-lg-0 w-100">
                            <div className="w-100" id="input-parent">
                                <input className="form-control mr-sm-2"
                                       type="search"
                                       value={inputValue}
                                       aria-label="Search"
                                       onChange={getDataFromInput}
                                />
                                <div className="list-group" id="result">
                                    <ul>
                                        {
                                            movies.map((movie) => (
                                                <Link key={movie.show.id}
                                                      className="list-group-item list-group-item-action"
                                                      type="button"
                                                      to={`/show/${movie.show.id}`}
                                                      onClick={() => onButtonClick(movie.show)}
                                                >
                                                    {movie.show.name}
                                                </Link>))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;