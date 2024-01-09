import { motion } from "framer-motion"
import '../../../CSS/section3/skills/CenterRotateWheel.css'

const CenterRotateWheel = ({ borderLeftColor, borderRightColor, inset, rotateDirection = 'right', duration }) => {
    return (
        <motion.div
            className="content"
            style={{
                '--borderLeftColor': borderLeftColor,
                '--borderRightColor': borderRightColor,
                '--inset': inset
            }}
            animate={{ rotate: rotateDirection === 'left' ? [0, -360] : [0, 360] }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
            }}
        />
    )
}

export default CenterRotateWheel