import React, { Component } from "react";
import '../../../CSS/section3/AboutMe/Music.css'
import music from '../../../img/section3/aboutme/music.svg'

const Music = (props) => {
    return (
        <div {...props}>
            <div className='music'>
                <div className="text">
                    <h1>
                        <p>Music <mark>Lover</mark></p>
                        <img src={music} alt="" />
                    </h1>
                    <p>
                        Besides, I'm also keen on arts, especially music and drawing.
                        I can play guitar passably, and enjoy it. I usually practice guitar in my spare time,
                        mostly on Youtube and this commandably website Songsterr.
                    </p>
                </div>
                <div className="video">
                    <iframe width="650vw" height='400vh'
                        src="https://www.youtube.com/embed/Ui5UxquV-Ds">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Music