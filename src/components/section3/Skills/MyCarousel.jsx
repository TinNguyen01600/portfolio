import React, { Component } from "react";
import Slider from "react-slick";

import { embeddedSys, webDev } from './skillSets.js'
import CircularUI from './CircularUI.jsx'

class CustomSlide extends Component {
    render() {
        const { skillSet, text, ...props } = this.props;
        return (
            <div {...props}>
                <h1 style={{
                    textAlign: 'center',
                    color: 'white',
                }}
                >
                    {text}
                </h1>
                <div style={{
                    padding: '4vw 0 3vw 8vw',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '7vh'
                }}>
                    <CircularUI skillSet={skillSet} />
                </div>
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
            <Slider {...settings} style={{ width: '90vw' }}>
                <CustomSlide skillSet={embeddedSys} text='Embedded System' />
                <CustomSlide skillSet={webDev} text='Web Development' />
                <CustomSlide skillSet={embeddedSys} text='Automation - IoT' />
                <CustomSlide skillSet={embeddedSys} text='Other Tech & Tools' />
            </Slider>
        </div>
    );
}

export default MyCarousel