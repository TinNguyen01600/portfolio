import { motion } from "framer-motion"

const ConnectButton = () => {
    return (
        <>
            <motion.button 
            className="connect-btn"
            whileHover={{
                color: '#000',
                backgroundColor: '#fff',
                border: '1px solid #000'
            }}
            >
                <span>Let's Connect</span>
            </motion.button>
        </>
    )
}

export default ConnectButton