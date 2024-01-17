import Slider from "react-slick";
import { motion } from "framer-motion";
import dht22 from '../../../img/section3/proj/dht22.jpg'
import handwash from '../../../img/section3/proj/handwash.png'
import tma from '../../../img/section3/proj/tma.png'
import raster from '../../../img/section3/proj/raster.png'
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
                    <img src={dht22} alt="" />
                    <div className="description">
                        <h1>OUTDOOR TEMPERATURE, HUMIDITY - DHT22 Sensor</h1>
                        <p>
                            Creation of a system that uses DHT22 sensor and STM32 board to
                            read the outdoor temperature and humidity and display the values on Realterm interface. Modbus RTU is used as data transfer method
                            between Master (MCU) and Slave (sensor)
                        </p>
                        <a href="https://drive.google.com/file/d/1tYeVPUpcbL-IE91_ps-QgXW8vZrQBCsA/view" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Report
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={handwash} alt="" />
                    <div className="description">
                        <h1>AUTOMATIC HAND-WASH / SANITIZER U.S. SENSOR AND SERVO MOTOR</h1>
                        <p>
                            The objective is to design and form a system that uses HC-SR04
                            sensor and Arduino UNO board to detect the obstacle in front of
                            the soap bottle (your hand) and control the servo to pull the dispenser .
                        </p>
                        <a href="https://drive.google.com/file/d/1lhh8_KdKRvNsINuj0h_uH_47vKe0tecR/view" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Report
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={tma} alt="" />
                    <div className="description">
                        <h1>TMA Pronest-Hardware SOUND SIGNAL ANALYZER</h1>
                        <p>
                            Develop a sound box device for passengers to control and manipulate swiftlets’ sound to supervise their behavior and
                            timetable. The sound signal information is transferred to a web
                            server via ESP32 LoRaWAN protocol, which can later be observed and stipulated by customers.
                        </p>
                        <a href="https://drive.google.com/file/d/1mZsKJW2u5ulWUzviNuPPBs_8tWvCBvM4/view" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Report
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='embedded-item'>
                    <img src={raster} alt="" />
                    <div className="description">
                        <h1>RASTER-IMAGE PROCESSOR: FIX AND OPTIMIZATION</h1>
                        <p>
                            This application is capable of merging 2 GeoTIFF picture together.
                            The thesis related to visualizing differences of the actual and
                            desired terrain, focused on identifying and fixing performance
                            issues in raster image processor to improve the user experience
                            and making the software more efficient.
                        </p>
                        <a href="https://www.theseus.fi/handle/10024/799234" target="_blank">
                            <motion.button
                                className="source-code"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                Report
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default EmbeddedCarousel