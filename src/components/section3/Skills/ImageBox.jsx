import '../../../CSS/section3/skills/ImageBox.css'
import { motion } from "framer-motion";

const ImageBox = ({i}) => {
    return (
        <motion.div
            className="imgBx"
            style={{ "--i": i }}
            whileHover={{ boxShadow: "0 0 0 4px red" }}
        >
            <img
                src="https://th.bing.com/th/id/OIP._Mq1T1IJe6cw14lre2cBzgHaE8?rs=1&pid=ImgDetMain"
                alt=""
            />
        </motion.div>
    )
}

export default ImageBox