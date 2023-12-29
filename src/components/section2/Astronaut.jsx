import { motion } from 'framer-motion'
import astronaut from '../../img/astronaut.png'
import { useState, useEffect } from "react";

const Astronaut = () => {
    const [isVisibleInitAs, setIsVisibleInitAs] = useState(true)
    const [isVisible, setIsVisible] = useState(false);

    const handleDragEnd = (event, info) => {
        console.log(info.point.y)
        if (info.point.x > 1250 && (820 > info.point.y)) {
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
                dragConstraints={{ left: 0, right: 1150, top: -400, bottom: 100 }}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ cursor: 'grab', scale: 0.9 }}
                
                initial={{x: 1050}}
                animate={{
                    y: [-300, -120, -300],
                    rotate: [0, 180, 0, -90, 90, 0, -180, 0],
                    transition: { duration: 12, repeat: Infinity, ease: 'linear' }
                }}
            />}

            {isVisible && <motion.img src={astronaut} alt=''
                drag
                dragConstraints={{ left: 0, right: 1150, top: -400, bottom: 100 }}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ cursor: 'grab', scale: 0.9 }}

                animate={isVisible && {
                    x: [-20, 150],
                    y: [-350, -350],
                    opacity: [0, 1],
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