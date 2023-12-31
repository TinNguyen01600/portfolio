import { motion } from "framer-motion";

const Luck = () => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                transition: { delay: 2, duration: 1 }
            }}
        >
            <h1>Test your luck !?</h1>
            <div className="box-ctn">
                {[1, 2, 3, 4].map(box => (
                    <motion.div
                        key={box}
                        className="mystery-box"
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Luck