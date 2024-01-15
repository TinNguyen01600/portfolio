import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const PhoneSvg = () => {
    const ref = useRef()
    const isInView = useInView(ref)
    return (
        <motion.div className="phone-svg" ref={ref}>
            <svg width="35vw" height="35vw" viewBox="0 0 32 32" fill="none" >
                <motion.path
                    d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.path
                    d="M30.637 23.152c-0.109-0.676-0.334-1.282-0.654-1.825l0.013 0.024c-0.114-0.186-0.301-0.317-0.521-0.353l-0.004-0.001-8.969-1.424c-0.035-0.006-0.076-0.009-0.117-0.009-0.207 
                    0-0.395 0.083-0.531 0.218l0-0c-0.675 0.68-1.194 1.516-1.496 2.45l-0.012 0.044c-4.015-1.64-7.139-4.765-8.742-8.674l-0.038-0.105c0.977-0.315 1.814-0.833 
                    2.493-1.509l-0 0c0.136-0.136 0.22-0.324 0.22-0.531 0-0.041-0.003-0.081-0.010-0.121l0.001 0.004-1.423-8.97c-0.037-0.225-0.169-0.413-0.353-0.524l-0.003-0.002c-0.505-0.3-1.094-0.52-1.723-0.626l-0.030-0.004c-0.283-0.072-0.608-0.113-0.943-0.113-0.063 0-0.126 
                    0.001-0.189 0.004l0.009-0c-3.498 0.025-6.326 2.855-6.348 6.351v0.002c0.015 12.761 10.355 23.102 23.115 23.116h0.001c3.5-0.021 6.332-2.852 6.354-6.349v-0.002c0-0.025 0.001-0.054 0.001-0.084 0-0.35-0.037-0.691-0.106-1.021l0.006 0.032z"
                    stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ delay: 1, duration: 3 }}
                />
            </svg>
        </motion.div>
    )
}

export default PhoneSvg