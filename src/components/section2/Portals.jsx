import in_portal from '../../img/section2/in_portal.png'
import out_portal from '../../img/section2/out_portal.png'
import { motion } from 'framer-motion'
import '../../CSS/section2/Portals.css'

const Portal = () => {
    return (
        <div className='portals'>
            <motion.img src={out_portal} alt="" style={{ width: '12vw' }}
                initial={{ rotate: "0", scale: 0 }}
                whileInView={{
                    rotate: "360deg",
                    scale: 1,
                    transition: { delay: 3.5, duration: 1 }
                }}
            />

            <motion.img src={in_portal} alt="" style={{ width: '8.5vw' }}
                initial={{ rotate: "0", scale: 0 }}
                whileInView={{
                    rotate: "-360deg",
                    scale: 1,
                    transition: { delay: 2.5, duration: 1 }
                }}
            />
        </div>
    )
}

export default Portal