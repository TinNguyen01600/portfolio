import Slider from "react-slick";
import { motion } from "framer-motion";
import ghibli from '../../../img/section3/proj/ghibli.png'
import hero from '../../../img/section3/proj/hero.png'
import hangman from '../../../img/section3/proj/hangman.png'
import portfolio from '../../../img/section3/proj/portfolio.png'
import '../../../CSS/section3/Projects/EmbeddedCarousel.css'

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

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
};

const EmbeddedCarousel = (props) => {
    return (
        <Slider {...settings} style={{ width: '92vw', marginLeft: '2vw' }}>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={hero} alt="" />
                    <div className="description">
                        <h1>OUTDOOR TEMPERATURE, HUMIDITY - DHT22 Sensor</h1>
                        <p>
                            Creation of a system that uses DHT22 sensor and STM32 board to
                            read the outdoor temperature and humidity and display the values on Realterm interface. Modbus RTU is used as data transfer method
                            between Master (MCU) and Slave (sensor)
                        </p>
                        <a href="https://github.com/TinNguyen01600/WikiHero" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Source Code
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={ghibli} alt="" />
                    <div className="description">
                        <h1>AUTOMATIC HAND-WASH / SANITIZER U.S. SENSOR AND SERVO MOTOR</h1>
                        <p>
                            The objective is to design and form a system that uses HC-SR04
                            sensor and Arduino UNO board to detect the obstacle in front of
                            the soap bottle (your hand) and control the servo to pull the dispenser .
                        </p>
                        <a href="https://github.com/TinNguyen01600/Ghibli_Studio_App" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Source Code
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={hangman} alt="" />
                    <div className="description">
                        <h1>TMA Pronest-Hardware SOUND SIGNAL ANALYZER</h1>
                        <p>
                            Develop a sound box device for passengers to control and manipulate swiftlets’ sound to supervise their behavior and
                            timetable. The sound signal information is transferred to a web
                            server via ESP32 LoRaWAN protocol, which can later be observed and stipulated by customers.
                        </p>
                        <a href="https://github.com/TinNguyen01600/Hangman_web" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Source Code
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={portfolio} alt="" />
                    <div className="description">
                        <h1>RASTER-IMAGE PROCESSOR: FIX AND OPTIMIZATION</h1>
                        <p>
                            This application is capable of merging 2 GeoTIFF picture together.
                            The thesis related to visualizing differences of the actual and
                            desired terrain, focused on identifying and fixing performance
                            issues in raster image processor to improve the user experience
                            and making the software more efficient.
                        </p>
                        <a href="https://github.com/TinNguyen01600/portfolio" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Source Code
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default EmbeddedCarousel