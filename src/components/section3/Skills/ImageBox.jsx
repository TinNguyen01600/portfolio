import '../../../CSS/section3/skills/ImageBox.css'
import { motion } from "framer-motion";

const ImageBox = ({i, len, img, setCenterSkill}) => {
    return (
        <motion.div
            className="imgBx"
            style={{ "--i": i, "--len": len }}
            whileHover={{ boxShadow: "0 0 0 4px red" }}
            onMouseOver={() => {setCenterSkill(i)}}
        >
            <img
                src={img}
                alt=""
            />
        </motion.div>
    )
}

export default ImageBox