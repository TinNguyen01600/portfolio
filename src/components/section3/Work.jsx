import CloseButton from './CloseButton'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import laptop from '../../img/section3/laptop.png'
import { motion } from 'framer-motion';
import '../../CSS/section3/Work.css'
import wapice from '../../img/section3/wapice.png'
import tma from '../../img/section3/tma.png'

const variants = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};

const Work = () => {
    return (
        <motion.div className="work" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <img src={laptop} alt="" />
                    <div className='tree'>
                        <div className='item'>
                            <svg width='2vw' height='12vh'>
                                <circle cx='0' cy='6vh' r={10} fill="red" />
                            </svg>
                            <Popup
                                trigger={
                                    <motion.div
                                        className='text'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h1>Embedded Software Intern</h1>
                                        <mark>TMA Software Solutions Limited</mark>
                                        <img src={tma} alt="" style={{ width: '12vw', height: '10vh'}}/>
                                    </motion.div>
                                }
                                position="right center"
                                contentStyle={popupStyles}
                            >
                                <div>
                                    <i>07.2022 - 10.2022 &ensp; Ho Chi Minh city, Vietnam.</i>
                                    <h4>Main tasks:</h4>
                                    <ul>
                                        <li>Reading up on the ESP32 micro-controller</li>
                                        <li>Learnt LoRaWAN protocol and Altium design</li>
                                        <li>Develop logic algorithms for MCU programming</li>
                                        <li>Design schematic and PCB for device</li>
                                    </ul>
                                    <h4>Technologies used:</h4>
                                    <p>
                                        Embedded C/C++; ESP32, Arduino; LoRa WAN, RTOS; Altium designer
                                    </p>
                                </div>
                            </Popup>
                        </div>
                        <div className='item'>
                            <svg width='2vw' height='12vh'>
                                <circle cx='0' cy='6vh' r={10} fill="red" />
                            </svg>
                            <Popup
                                trigger={
                                    <motion.div
                                        className='text'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h1>Software Designer Talent</h1>
                                        <mark>Wapice Ltd.</mark>
                                        <img src={wapice} alt="" style={{ width: '13vw', height: '7vh'}}/>
                                    </motion.div>
                                }
                                position="right center"
                                contentStyle={popupStyles}
                            >
                                <div>
                                    <i>01.2023 - 05.2023 &ensp; Vaasa, Finland.</i>
                                    <h4>Main tasks:</h4>
                                    <ul>
                                        <li>Learn Agile methodology & Scrum</li>
                                        <li>Review project's code base</li>
                                        <li>Maintain and improve users' experience</li>
                                        <li>Identifying and fixing performance issues</li>
                                    </ul>
                                    <h4>Technologies used:</h4>
                                    <p>
                                        Python, Linux, Docker; Agile methodology (Confluence);
                                        VCS (Gitlab, BitBucket); Raster Image
                                    </p>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

const popupStyles = {
    borderRadius: '15px',
    width: '34vw',
    fontSize: '3vh',
    padding: '1vw 2vw',
    lineHeight: '4.5vh'
}

export default Work