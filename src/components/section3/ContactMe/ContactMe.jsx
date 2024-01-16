import { motion } from 'framer-motion'
import CloseButton from '../CloseButton';
import '../../../CSS/ContactMe.css'
import { useEffect, useRef, useState } from 'react';
import PhoneSvg from './PhoneSvg';
import emailjs from '@emailjs/browser';

const variants1 = {
    open: {
        clipPath: 'circle(1000px)',
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
}

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
    const ref = useRef()
    const [showSvg, setShowSvg] = useState(true)

    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mxslkxb', 'template_m7xbakn', formRef.current, 'Ty83mEat4nH5225Eg')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
            });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSvg(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <motion.div className="contact-me" animate="open">
            <motion.div className="bg" variants={variants1}>
                <motion.div
                    className='main'
                    variants={variants2}
                    initial='initial'
                    whileInView='animate'
                    ref={ref}
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

                    {/* ------------------------------------------------------------------ */}
                    <motion.div className="form-ctn" variants={variants2}>
                        {showSvg ?
                            <motion.div
                                animate={{ opacity: [1, 0] }}
                                transition={{ delay: 4.5, duration: 1, ease: 'linear' }}
                            >
                                <PhoneSvg />
                            </motion.div>
                            :
                            <motion.form
                                animate={{ opacity: [0, 1], transition: { delay: 0.5, duration: 1 } }}
                                ref={formRef}
                                onSubmit={sendEmail}
                            >
                                <input type="text" required placeholder='Name' name='name'/>
                                <input type="email" required placeholder='Email' name='email'/>
                                <textarea rows={10} placeholder='Message' name='message'></textarea>
                                <button>Submit</button>
                                {error && 'Error'}
                                {success && 'Success'}
                            </motion.form>
                        }
                    </motion.div>
                </motion.div>
                <CloseButton />
            </motion.div>
        </motion.div>
    )
}

export default ContactMe