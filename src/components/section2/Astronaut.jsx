import { motion } from 'framer-motion'
import astronaut from '../../img/section3/astronaut.png'
import { useState, useEffect } from "react";

const Astronaut = () => {
    const [isVisibleInitAs, setIsVisibleInitAs] = useState(true)
    const [isVisible, setIsVisible] = useState(false);

    const handleDragEnd = (event, info) => {
        console.log(info.point.y)
        if (info.point.x < 100 && (info.point.y < 1050)) {
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
                dragConstraints={{ left: 0, right: 1150, top: -500, bottom: 200 }}
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
                dragConstraints={{ left: 0, right: 1150, top: -500, bottom: 200 }}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ cursor: 'grab', scale: 0.9 }}

                initial={{x: '85vw', y: '-52vh'}}
                animate={isVisible && {
                    x: 1000,
                    y: -350,
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