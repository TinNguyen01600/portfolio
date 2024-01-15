import { motion } from 'framer-motion'
import CloseButton from './CloseButton';
import '../../CSS/ContactMe.css'

const variants1 = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};

const variants2 = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}

const ContactMe = () => {
    return (
        <motion.div className="contact-me" animate="open">
            <motion.div className="bg" variants={variants1}>
                <motion.div
                    className='main'
                    variants={variants2}
                    initial='initial'
                    whileInView='animate'
                >
                    <motion.div className="text-ctn" variants={variants2}>
                        <h1>Let's work together</h1>
                        <div>
                            <h2>Email</h2>
                            <span>tinnguyen@gmail.com</span>
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <span>+358 40 252 0637</span>
                        </div>
                        <div>
                            <h2>LinkedIn</h2>
                            <span>tinnguyen01600</span>
                        </div>
                    </motion.div>
                    <motion.div className="form-ctn" variants={variants2}>
                        <form action="">
                            <input type="text" required placeholder='Name' />
                            <input type="email" required placeholder='Email' />
                            <textarea rows={10} placeholder='Message'></textarea>
                            <button>Submit</button>
                        </form>
                    </motion.div>
                </motion.div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default ContactMe