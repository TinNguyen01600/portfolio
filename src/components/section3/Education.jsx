import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";
import degree from '../../img/section3/degree.svg'
import award from '../../img/section3/award.svg'
import certi from '../../img/section3/certi.svg'
import { useState } from "react";
import '../../CSS/section3/Education.css'

const variants = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};

const lowVariant = {
    'open': {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'linear' }
    },
    'close': {
        opacity: 0,
        y: -50,
        transition: { duration: 0.5, ease: 'linear' }
    }
}

const upVariant = {
    'open': {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'linear' }
    },
    'close': {
        opacity: 0,
        y: 50,
        transition: { duration: 0.5, ease: 'linear' }
    }
}

const Education = () => {
    const [isOpenBachelor, setIsOpenBachelor] = useState(false)
    const [isOpenNetSec, setIsOpenNetSec] = useState(false)
    const [isOpenFullstack, setIsOpenFullstack] = useState(false)
    const [isOpenPython, setIsOpenPython] = useState(false)
    const [isOpenAI, setIsOpenAI] = useState(false)

    return (
        <motion.div className="education" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className="main">
                    <div className="upper-detail">
                        <motion.div
                            className="item"
                            initial='close'
                            animate={isOpenBachelor ? 'open' : 'close'}
                            variants={upVariant}
                        >
                            <h4>Vaasa University of Applied Sciences</h4>
                            <h4>Vaasan Ammattikorkeakoulu (VAMK)</h4>
                            <p><i>09.2019 - 06.2023</i></p>
                            <p>I worked hard in my studies and finished the degree with considerably good grades
                                My major is Embedded System Engineer, concentrated on Object Oriented Programming (C/C++), RTOS,
                                Microcontrollers & FPGA, Digital & Embedded System Design and Electronics.
                            </p>
                        </motion.div>
                        <motion.div
                            className="item"
                            initial='close'
                            animate={isOpenPython ? 'open' : 'close'}
                            variants={upVariant}
                            style={{ height: '20vh' }}
                        >
                            <p><b>Udemy Course</b>&ensp;<i>03.2023 - 05.2023</i></p>
                            <p>This course provided well-structured knowledge and useful Python concept during my internship at Wapice Ltd.
                                I was recommended the course by both my mentor and project manager.</p>
                        </motion.div>
                        <motion.div
                            className="item"
                            initial='close'
                            animate={isOpenFullstack ? 'open' : 'close'}
                            variants={upVariant}
                            style={{ height: '20vh' }}
                        >
                            <p><b>Integrify Oy</b>&ensp;<i>01.2024 - Current</i></p>
                            <p>Software development company that provides recruitment,
                                IT consulting services and Web developing training.
                            </p>
                        </motion.div>
                    </div>
                    {/***************************************************** */}
                    <div className="upper">
                        <div className="item">
                            Bachelor Degree in Information Technology
                        </div>
                        <div className="item">
                            Python Bootcamp
                        </div>
                        <div className="item">
                            Full Stack Web Developer
                        </div>
                    </div>
                    {/***************************************************** */}
                    <div className="middle">
                        <motion.img
                            src={degree}
                            alt=""
                            onClick={() => { setIsOpenBachelor(!isOpenBachelor) }}
                            whileHover={{ scale: 1.2, cursor: 'pointer' }}
                        />
                        <svg height='100' width='250'>
                            <line x1="0" y1="50" x2="250" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <motion.img
                            src={award}
                            alt=""
                            onClick={() => { setIsOpenNetSec(!isOpenNetSec) }}
                            whileHover={{ scale: 1.2, cursor: 'pointer' }}
                        />
                        <svg height='100' width='220'>
                            <line x1="0" y1="50" x2="220" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <motion.img
                            src={award}
                            alt=""
                            onClick={() => { setIsOpenPython(!isOpenPython) }}
                            whileHover={{ scale: 1.2, cursor: 'pointer' }}
                        />
                        <svg height='100' width='180'>
                            <line x1="0" y1="50" x2="180" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <motion.img
                            src={award}
                            alt=""
                            onClick={() => { setIsOpenAI(!isOpenAI) }}
                            whileHover={{ scale: 1.2, cursor: 'pointer' }}
                        />
                        <svg height='100' width='200'>
                            <line x1="0" y1="50" x2="200" y2="50" stroke="black" strokeWidth='4' />
                        </svg>
                        <motion.img
                            src={certi}
                            alt=""
                            onClick={() => { setIsOpenFullstack(!isOpenFullstack) }}
                            whileHover={{ scale: 1.2, cursor: 'pointer' }}
                        />
                    </div>
                    {/***************************************************** */}
                    <div className="lower">
                        <div className="item">
                            Network Security
                        </div>
                        <div className="item">
                            AI - Machine Learning
                        </div>
                    </div>
                    {/***************************************************** */}
                    <div className="lower-detail">
                        <motion.div
                            className="item"
                            initial='close'
                            animate={isOpenNetSec ? 'open' : 'close'}
                            variants={lowVariant}
                        >
                            <p><b>Cisco Network Academy</b>&ensp;<i>01.2022 - 03.2022</i></p>
                            <p>Mandatory course from VAMK curriculum.</p>
                            <p>The CyberOps Associate certificate program tests tactical knowledge and skills
                                needed to detect and respond to cybersecurity threats.
                            </p>
                        </motion.div>
                        <motion.div
                            className="item"
                            initial='close'
                            animate={isOpenAI ? 'open' : 'close'}
                            variants={lowVariant}
                        >
                            <p><b>University of Helsinki</b>&ensp;<i>06.2023 - 08.2023</i></p>
                            <p>Introduction to AI is a online course for everyone interested in learning what AI is,
                                what is possible (and not possible) with AI, and how it affects our lives.</p>
                        </motion.div>
                    </div>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div >
    )
}

export default Education