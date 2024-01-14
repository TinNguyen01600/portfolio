import { motion } from 'framer-motion'
import CloseButton from './CloseButton';
import '../../CSS/ContactMe.css'

const variants = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
};

const ContactMe = () => {
    return (
        <motion.div className="contact-me" animate="open">
            <motion.div className="bg" variants={variants}>
                <div className='main'>
                    <div className="text-ctn">
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
                    </div>
                    <div className="form-ctn">
                        <form action="">
                            <input type="text" required placeholder='Name' />
                            <input type="email" required placeholder='Email' />
                            <textarea rows={10} placeholder='Message'></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default ContactMe