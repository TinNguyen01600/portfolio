import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Astronaut from "./Astronaut"
import Portals from './Portals.jsx'
import '../../CSS/section2/Parallax.css'

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
            <Portals />
            <div className="center-block">
                <motion.div className="parallax-text" style={{ y: yText }}>
                    <h1>Nothing Special Here</h1>
                    <h1>Just some cool animations</h1>
                </motion.div>
                <Astronaut />
            </div>
            <motion.div
                className="slide-text"
                initial={{ x: '100%' }}
                animate={{ x: '-100%' }}
                transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
            >
                TIN NGUYEN IS AWESOME !!!
            </motion.div>
        </div>
    )
}

export default Parallax