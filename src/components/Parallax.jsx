import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Parallax = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const yText = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '500%']
    )
    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '100%']
    )

    return (
        <div className="parallax" ref={ref}>
            <div className="stars" style={{ x: background }}></div>
            <div className="earth" style={{ y: background }}></div>
            <div className="astronaut"></div>
            <motion.div className="text" style={{ y: yText }}>
                <h1>Nothing Special Here</h1>
                <h1>Just some cool animations</h1>
            </motion.div>
        </div>
    )
}

export default Parallax