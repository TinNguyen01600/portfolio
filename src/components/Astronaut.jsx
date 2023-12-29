import { motion } from 'framer-motion'
import astronaut from '../img/astronaut.png'
import { useState, useEffect } from "react";

const Astronaut = () => {
    const [isVisibleInitAs, setIsVisibleInitAs] = useState(true)
    const [isVisible, setIsVisible] = useState(false);

    const handleDragEnd = (event, info) => {
        if (info.point.x > 1200) {
            setIsVisible(false);
            setIsVisibleInitAs(false)
        }
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!isVisible && !isVisibleInitAs) setIsVisible(true);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [isVisible, isVisibleInitAs]);

    return (
        <>
            {isVisibleInitAs && <motion.img src={astronaut} alt=""
                drag
                dragConstraints={{ left: -1100, right: 5, top: -250, bottom: 250 }}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ cursor: 'grab', scale: 0.9 }}
                
                initial={{x: -100}}
                animate={{
                    y: [-200, -50, -200],
                    rotate: [0, 180, 0, -90, 90, 0, -180, 0],
                    transition: { duration: 12, repeat: Infinity, ease: 'linear' }
                }}
            />}

            {isVisible && <motion.img src={astronaut} alt=''
                drag
                dragConstraints={{ left: 0, right: 1100, top: -250, bottom: 250 }}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ cursor: 'grab', scale: 0.9 }}

                animate={isVisible && {
                    x: [-20, 150],
                    y: [-220, -220],
                    transition: { duration: 1 }
                }}
                style={{
                    position: "absolute",
                }}
            />}
        </>
    )
}

export default Astronaut