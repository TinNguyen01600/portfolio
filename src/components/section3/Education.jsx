import { motion } from "framer-motion";
import CloseButton from "./CloseButton";
import degree from '../../img/section3/degree.svg'
import award from '../../img/section3/award.svg'
import certi from '../../img/section3/certi.svg'

const variants = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};

const Education = () => {
    return (
        <motion.div className="education" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className="main">
                    <div className="upper">
                        <div className="item">
                            Bachelor Degree in Information Technology
                        </div>
                        <div className="item">
                            Network Security
                        </div>
                        <div className="item">
                            Full Stack Web Developer
                        </div>
                    </div>
                    {/***************************************************** */}
                    <div className="middle">
                        <img src={degree} alt="" />
                        <svg height='100' width='250'>
                            <line x1="0" y1="50" x2="250" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <img src={award} alt="" />
                        <svg height='100' width='220'>
                            <line x1="0" y1="50" x2="220" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <img src={award} alt="" />
                        <svg height='100' width='180'>
                            <line x1="0" y1="50" x2="180" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <img src={award} alt="" />
                        <svg height='100' width='200'>
                            <line x1="0" y1="50" x2="200" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <img src={certi} alt="" />
                    </div>
                    {/***************************************************** */}
                    <div className="lower">
                        <div className="item">
                            Python Bootcamp
                        </div>
                        <div className="item">
                            AI - Machine Learning
                        </div>
                    </div>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default Education