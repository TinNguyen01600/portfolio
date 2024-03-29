import CloseButton from '../CloseButton'
import Introduction from './Introduction'
import { motion } from 'framer-motion'
import '../../../CSS/section3/AboutMe/AboutMe.css'

import Slider from "react-slick";
import Finland from './Finland';
import Cinephile from './Cinephile';
import Music from './Music';
import Travel from './Travel';
import Football from './Football';
import Introductory from './Introductory';

const SampleArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

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
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
};

const AboutMe = () => {
    return (
        <motion.div className="about-me" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <Slider {...settings} style={{ width: '92vw', marginLeft: '2vw' }}>
                        <Introduction />
                        <Finland />
                        <Introductory />
                        <Cinephile />
                        <Travel />
                        <Music />
                        <Football />
                    </Slider>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default AboutMe