import '../../../CSS/section3/skills/CircularUI.css'
import { motion } from "framer-motion";
import CenterRotateWheel from './CenterRotateWheel';

const CircularUI = () => {
    return (
        <div className="container">
            <div className="icons">
                <motion.div
                    className="imgBx"
                    style={{ "--i": 0 }}
                    data
                    whileHover={{
                        boxShadow: "0 0 0 4px red",
                        filter: "grayscale(0)",
                    }}
                >
                    <img
                        src="https://th.bing.com/th/id/OIP._Mq1T1IJe6cw14lre2cBzgHaE8?rs=1&pid=ImgDetMain"
                        alt=""
                    />
                </motion.div>
                <motion.div
                    className="imgBx"
                    style={{ "--i": 1 }}
                    whileHover={{
                        boxShadow: "0 0 0 4px red",
                        filter: "grayscale(0)",
                    }}
                >
                    <img
                        src="https://m1cr0lab-esp32.github.io/remote-control-with-websocket/logo/thumbnail.png"
                        alt=""
                    />
                </motion.div>
                <motion.div
                    className="imgBx"
                    style={{ "--i": 2 }}
                    whileHover={{
                        boxShadow: "0 0 0 4px red",
                        filter: "grayscale(0)",
                    }}
                >
                    <img
                        src="https://image.winudf.com/v2/image1/Y29tLm1hcnRpbmxvcmVuLnN0bTMydXRpbHNfaWNvbl8xNTU0ODc2MTg2XzA1Nw/icon.png?w=170&fakeurl=1"
                        alt=""
                    />
                </motion.div>
                <motion.div
                    className="imgBx"
                    style={{ "--i": 3 }}
                    whileHover={{
                        boxShadow: "0 0 0 4px red",
                        filter: "grayscale(0)",
                    }}
                >
                    <img
                        src="https://1.bp.blogspot.com/-X5OBU37Ims4/XQexxebsV0I/AAAAAAAAD80/PlMIGUQBY3YwRugZNLvdRaI2Pw_g0jIlgCLcBGAs/s1600/Python%2BProgramming%2BLogo.png"
                        alt=""
                    />
                </motion.div>
            </div>

            <CenterRotateWheel
                borderLeftColor='blue'
                borderRightColor='white'
                inset='3vw'
                duration={4}
            />
            <CenterRotateWheel
                borderLeftColor='white'
                borderRightColor='red'
                inset='6vw'
                rotateDirection='left'
                duration={3}
            />

            <div className="center" >
                <img
                    src="https://th.bing.com/th/id/OIP._Mq1T1IJe6cw14lre2cBzgHaE8?rs=1&pid=ImgDetMain"
                    alt=""
                />
            </div>
        </div>
    );
}

export default CircularUI