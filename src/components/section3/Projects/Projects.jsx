import CloseButton from '../CloseButton'
import { motion } from 'framer-motion'
import '../../../CSS/section3/Projects/Projects.css'
import MyTabs from './MyTabs';

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
        <motion.div className="projects" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <MyTabs />
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default Skills