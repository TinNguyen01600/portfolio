import ConnectButton from "./ConnectButton"
import bird from '../img/bird.png'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className="header">
            <ConnectButton />
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