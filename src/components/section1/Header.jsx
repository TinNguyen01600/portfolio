import ConnectButton from "./ConnectButton"
import bird from '../../img/section1/bird.png'
import linkedin from '../../img/section1/linkedin.svg'
import github from '../../img/section1/github.svg'
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
            <motion.img src={bird} alt=""
                className="bird"
                animate={{ y: ['-2vh', '3vh', '-2vh'] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div className="header-btn-ctn" >
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
                <ConnectButton />
            </div>
        </div>
    )
}

export default Header