import { motion } from "framer-motion"
import '../../CSS/section1/Banner.css'

const boxVariant = {
    initial: { x: '300vw' },
    visible: {
        x: 0,
        transition: { staggerChildren: 0.3 }
    }
}
const boxItemVariant = {
    initial: { x: '300vw' },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 40 }
    }
}

const Banner = () => {
    return (
        <div className="banner">
            <motion.div
                className="banner-text"
                variants={boxVariant}
                initial='initial'
                animate='visible'
            >
                <motion.h1 variants={boxItemVariant}>Hi! I'm Tin Nguyen</motion.h1>
                <motion.p variants={boxItemVariant}>Software engineer student with strong research and communication abilities. I'm looking for junior engineer position to devote my ability and broaden my knowledge of technology.</motion.p>
            </motion.div>
        </div>
    )
}

export default Banner