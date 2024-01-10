import CloseButton from '../CloseButton'
import { motion } from 'framer-motion'
import '../../../CSS/section3/skills/Skills.css'
import { embeddedSys, webDev } from './skillSets.js'

import CircularUI from '../Skills/CircularUI.jsx'

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
                    <CircularUI skillSet={embeddedSys}/>
                    <CircularUI skillSet={webDev}/>
                </div>
                <CloseButton color='white'/>
            </motion.div>
        </motion.div>
    )
}

export default Skills