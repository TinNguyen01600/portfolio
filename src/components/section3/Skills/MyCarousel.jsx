import React, { Component } from "react";
import Slider from "react-slick";

import { embeddedSys, webDev } from './skillSets.js'
import CircularUI from './CircularUI.jsx'

class CustomSlide extends Component {
    render() {
        const { skillSet, ...props } = this.props;
        return (
            <div {...props} style={{ border: '2px solid red',  }}>
                <CircularUI skillSet={skillSet}/>
            </div>
        );
    }
}

const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings} style={{width: '90vw'}}>
                <CustomSlide skillSet={embeddedSys} />
                <CustomSlide skillSet={webDev} />
                <CustomSlide skillSet={embeddedSys} />
                <CustomSlide skillSet={embeddedSys} />
            </Slider>
        </div>
    );
}

export default MyCarousel