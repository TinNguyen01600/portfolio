import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import astronaut from '../img/astronaut.png'

const Parallax = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '160%'])
    const yEarth = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const yStars = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

    return (
        <div className="parallax" ref={ref}>
            <motion.div className="stars" style={{ x: yStars }}></motion.div>
            <motion.div className="earth" style={{ y: yEarth }}></motion.div>
            <motion.div className="parallax-text" style={{ y: yText }}>
                <h1>Nothing Special Here</h1>
                <h1>Just some cool animations</h1>
            </motion.div>
            <motion.img src={astronaut} alt="" className="astronaut"
                animate={{ y: ['-100vh', '-90vh', '-100vh'] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    )
}

export default Parallax