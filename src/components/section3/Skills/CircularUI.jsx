import '../../../CSS/section3/skills/CircularUI.css'
import { motion } from "framer-motion";
import CenterRotateWheel from './CenterRotateWheel';
import ImageBox from './ImageBox';

const CircularUI = ({ skillSet }) => {
    return (
        <div className="container">
            <div className="icons">
                {skillSet.map(skill => (
                    <ImageBox i={skill.id} len={skillSet.length} img={skill.img} />
                ))}
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