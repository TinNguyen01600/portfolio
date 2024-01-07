import { motion } from "framer-motion";
import CloseButton from "./CloseButton";
import degree from '../../img/section3/degree.svg'
import award from '../../img/section3/award.svg'
import certi from '../../img/section3/certi.svg'
import { useState } from "react";

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
    const [isOpenBachelor, setIsOpenBachelor] = useState(true)
    const [isOpenNetSec, setIsOpenNetSec] = useState(false)
    const [isOpenFullstack, setIsOpenFullstack] = useState(true)
    const [isOpenPython, setIsOpenPython] = useState(true)
    const [isOpenAI, setIsOpenAI] = useState(true)

    return (
        <motion.div className="education" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className="main">
                    <div className="upper-detail">
                        {isOpenBachelor && <div className="item">
                            <h4>Vaasa University of Applied Sciences</h4>
                            <h4>Vaasan Ammattikorkeakoulu (VAMK)</h4>
                            <p><i>09.2019 - 06.2023</i></p>
                            <p>I worked hard in my studies and finished the degree with considerably good grades
                                My major is Embedded System Engineer, concentrated on Object Oriented Programming (C/C++), RTOS,
                                Microcontrollers & FPGA, Digital & Embedded System Design and Electronics
                            </p>
                        </div>}
                        <motion.div
                            className="item"
                            initial={{ opacity: 0 }}
                            animate={isOpenNetSec && {
                                opacity: 1
                            }}
                        >
                            <h4>Cisco Network Academy</h4>
                        </motion.div>
                        {isOpenFullstack && <div className="item">
                            <h4>Integrify Oy</h4>
                        </div>}
                    </div>
                    {/***************************************************** */}
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
                        <img src={award} alt="" onClick={() => {setIsOpenNetSec(!isOpenNetSec)}}/>
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
                    {/***************************************************** */}
                    <div className="lower-detail">
                        {isOpenPython && <div className="item">
                            <p><b>Udemy Course</b>&ensp;<i>03.2023 - 05.2023</i></p>
                            <p>This course provided well-structured knowledge and useful Python concept during my internship at Wapice Ltd.
                                I was recommended the course by both my mentor and project manager.</p>
                        </div>}
                        {isOpenAI && <div className="item">
                            <p><b>University of Helsinki</b>&ensp;<i>06.2023 - 08.2023</i></p>
                            <p>Introduction to AI is a online course for everyone interested in learning what AI is,
                                what is possible (and not possible) with AI, and how it affects our lives</p>
                        </div>}
                    </div>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default Education