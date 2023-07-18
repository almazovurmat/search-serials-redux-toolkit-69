import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./container/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./container/MovieDetails/MovieDetails";

function App() {
    return (
        <>
            <div className="container-fluid">
                <NavBar/>
            </div>
            <div className="container">
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/show/:id'} element={<MovieDetails/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
