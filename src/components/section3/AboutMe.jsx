import me from '../../img/section3/me.jpg'
import CloseButton from './CloseButton'
import { motion } from 'framer-motion'
import '../../CSS/section3/about.css'

import React, { Component } from "react";
import Slider from "react-slick";

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

class Introduction extends Component {
    render() {
        const { skillSet, text, ...props } = this.props;
        return (
            <div {...props}>
                <div className='introduction'>
                    <img src={me} alt="" />
                    <div className="text">
                        <h1>Hello! My name is <mark>Tin Nguyen</mark>.</h1>
                        <h3>Your friendly neighborhood software engineer</h3>
                        <ul>
                            <li>
                                Born and raised in Ho Chi Minh city, Vietnam,
                                I discovered my interest in maths at a very young age. That,
                                though many years, grew up into the enthusiasm for technical
                                and information technology. My passion brought me to Vaasa, Finland,
                                where I completed my IT bachelor's degree program.
                            </li>
                            <li>
                                In my college, I'm usually considered a flexible and a
                                quick learner. I also have high ability to work within groups
                                and corporate effectively with other people.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const AboutMe = () => {
    return (
        <motion.div className="about-me" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <Slider {...settings} style={{ width: '92vw', paddingBottom: '3vh', marginLeft: '2vw' }}>
                        <Introduction />
                        <Introduction />
                    </Slider>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default AboutMe