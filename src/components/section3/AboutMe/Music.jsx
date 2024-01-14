import React, { Component } from "react";
import movie from '../../../img/section3/aboutme/movie.jpg'
import '../../../CSS/section3/AboutMe/Cinephile.css'

const Music = (props) => {
    return (
        <div {...props}>
            <div className='cinephile'>
                <div className="video">
                    <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/Ui5UxquV-Ds">
                    </iframe>
                </div>
                <div className="text">
                    <h1>Music <mark>Lover</mark>.</h1>
                    <p>
                        Besides, I'm also keen on arts, especially music and drawing.
                        I can play guitar passably, and enjoy it. I usually practice guitar in my spare time,
                        mostly on Youtube and this commandably website Songsterr.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Music