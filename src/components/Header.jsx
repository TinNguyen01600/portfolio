import ConnectButton from "./ConnectButton"
import bird from '../img/bird.png'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import { motion } from "framer-motion"

const Header = () => {
    const iconVariants = {
        initial: { borderRadius: '50%' },
        hover: {
            scale: 1.15,
            backgroundColor: '#fff',
        }
    }
    return (
        <div className="header">
            <div className="header-btn-ctn" >
                <ConnectButton />
                <a href="https://www.linkedin.com/in/tin-nguyen-01600/" target="_blank" rel="noopener noreferrer">
                    <motion.img
                        src={linkedin} alt="LinkedIn" 
                        variants={iconVariants} initial='initial' whileHover='hover'
                    />
                </a>
                <a href="https://github.com/TinNguyen01600" target="_blank" rel="noopener noreferrer">
                    <motion.img
                        src={github} alt="Github" 
                        variants={iconVariants} initial='initial' whileHover='hover'
                    />
                </a>
            </div>
            <motion.img src={bird} alt=""
                className="bird"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    )
}

export default Header