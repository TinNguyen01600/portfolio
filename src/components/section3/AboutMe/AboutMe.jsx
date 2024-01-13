import CloseButton from '../CloseButton'
import Introduction from './Introduction'
import { motion } from 'framer-motion'
import '../../../CSS/section3/AboutMe.css'

import React, { Component } from "react";
import Slider from "react-slick";
import Finland from './Finland';

const variants = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const AboutMe = () => {
    return (
        <motion.div className="about-me" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <Slider {...settings} style={{ width: '92vw', paddingBottom: '3vh', marginLeft: '2vw' }}>
                        <Introduction />
                        <Finland />
                    </Slider>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default AboutMe