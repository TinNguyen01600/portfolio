import { motion } from 'framer-motion'
import astronaut from '../img/astronaut.png'

const Astronaut = () => {
    return (
        <>
            <motion.img src={astronaut} alt=""
                drag
                dragConstraints={{ left: -1100, right: 200, top: -250, bottom: 250 }}
                animate={{
                    y: [-200, -100, -200],
                    rotate: [0, 180, 0, -90, 90, 0, -180, 0],
                    transition: { duration: 12, repeat: Infinity, ease: 'linear' }
                }}
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ cursor: 'grab', scale: 1.2 }}
            />
        </>
    )
}

export default Astronaut