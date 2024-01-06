import { motion } from "framer-motion";
import CloseButton from "./CloseButton";
import degree from '../../img/section3/degree.svg'
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
                    </div>
                    {/***************************************************** */}
                    <div className="middle">
                        <img src={degree} alt="" />
                        <svg height='50' width='100'>
                            <line x1="0" y1="30" x2="100" y2="30" stroke="black" strokeWidth='4' />
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