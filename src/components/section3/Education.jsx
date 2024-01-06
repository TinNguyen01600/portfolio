import { motion } from "framer-motion";
import CloseButton from "./CloseButton";

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
    return (
        <motion.div className="education" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className="main">
                    Education
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default Education