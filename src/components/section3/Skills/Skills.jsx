import CloseButton from '../CloseButton'
import { motion } from 'framer-motion'
import '../../../CSS/section3/skills/Skills.css'
import MyCarousel from './MyCarousel.jsx'

const variants = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};

const Skills = () => {
    return (
        <motion.div className="skills" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <MyCarousel />
                </div>
                <CloseButton color='white' />
            </motion.div>
        </motion.div>
    )
}

export default Skills