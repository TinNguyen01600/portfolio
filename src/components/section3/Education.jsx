import { motion } from "framer-motion";

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
                Education
            </motion.div>
        </motion.div>
    )
}

export default Education