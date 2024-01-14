import React, { Component } from "react";
import fishing from '../../../img/section3/aboutme/fishing.jpg'
import '../../../CSS/section3/AboutMe/Finland.css'

class Finland extends Component {
    render() {
        const { skillSet, text, ...props } = this.props;
        return (
            <div {...props}>
                <div className='finland'>
                    <div className="image">
                        <img src={fishing} alt="" />
                        <p><i>My first summer - Local beach - Vaasa</i></p>
                    </div>
                    <div className="text">
                        <h1>New life <mark>New me</mark></h1>
                        <p>
                            I come to Finland seeking for an international, professional environment
                            where I can improve myself better, and Vaasa is my destionation.
                            I have lived here for over 4 years, and I already fell in love with this place from the very first months.
                            I met new friends, gained new knowledge and experience. In my opinion, Vaasa is such a wonderful, charming city.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Finland