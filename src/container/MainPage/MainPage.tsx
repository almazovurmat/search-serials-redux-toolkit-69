import React from 'react';
import image from '../../assets/imgaes/videosrach.png';

const MainPage = () => {

    return (
        <>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <h1 className="mt-5">Welcome to the TV shows and programs search page!</h1>
            <p>
                Here, you can easily find your favorite TV shows and programs. Simply enter the name of the show or
                program you're interested in into the search field below, and we'll help you find all the related
                results.
            </p>
            <p>
                Our database includes a vast amount of information about various TV shows, such as descriptions,
                ratings, seasons, and episodes. You'll be able to discover the latest news about your favorite show and
                keep track of new episodes as they are released.
            </p>
            <p>
                Additionally, we have a section dedicated to providing information about various TV shows,
                documentaries, and television programs, so you can stay updated on the latest shows airing on
                television.
            </p>
            <p>
                We hope that our service will help you enjoy your viewing experience and discover exciting new shows and
                programs for yourself and your family.
            </p>
            <p>Happy viewing!</p>
        </>
    );
};

export default MainPage;