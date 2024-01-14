import React, { Component } from "react";
import movie from '../../../img/section3/aboutme/movie.jpg'
import '../../../CSS/section3/AboutMe/Introduction.css'

const Cinephile = (props) => {
    return (
        <div {...props}>
            <div className='introduction'>
                <img src={movie} alt="" />
                <div className="text">
                    <h1>Cinephile.</h1>
                    <p>
                        I have a lot of favorite occupation.
                        I love watching television series in my free time.
                        One of my most ideal series is the famous <mark>Breaking Bad</mark> and
                        its spin-off <mark>Better Call Saul</mark>. 
                        For me, Breaking Bad is just a must-watch series for everyone.
                        Especially, <b>Gus Fring</b> and <b>Lalo Salamanca</b>'s performance always give me chill every time they
                        appear on screen, as they're my 2 most favourite characters of all time
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cinephile