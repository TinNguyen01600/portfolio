import { motion } from "framer-motion"

const boxVariant = {
    initial: { x: '300vw' },
    visible: {
        x: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3,   // each child will animate 0.2s after one another
        }
    }
}
const boxItemVariant = {
    initial: { x: '300vw' },
    visible: {
        x: 0,
        transition: { type: 'spring',stiffness: 40 }
    }
}

const Banner = () => {
    return (
        <motion.div
            className="banner"
            variants={boxVariant}
            initial='initial'
            animate='visible'
        >
            <motion.h1 variants={boxItemVariant}>Hi! I'm Tin Nguyen</motion.h1>
            <motion.p variants={boxItemVariant}>Software engineer student with strong research and communication abilities. I'm looking for junior engineer position to devote my ability and broaden my knowledge of technology.</motion.p>
        </motion.div>
    )
}

export default Banner