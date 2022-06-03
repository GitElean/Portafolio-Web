import React from 'react'
import { motion } from 'framer-motion'

const KANJI_DELAY = 2.3

// Duración del trazo
const transition = {
    duration: 1,
    ease: 'easeInOut',
    delay: KANJI_DELAY
}

const animateStroke = {
    hidden: {
        pathLength: 0,
        opacity: 0,
    },
    draw: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: transition,
            opacity: {
                duration: 0.1,
                ease: 'linear',
                delay: KANJI_DELAY
            }
        }
    }
}

// Delay entre cada trazo
const container = {
    draw: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.13
        }
    }
}

const Title = () => {
    return (
        <motion.div
            initial="hidden"
            animate="draw"
            className="flex"
            variants={container}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 646.91 97.45"
                fill="none"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#000"
            >
                <motion.path
                    variants={animateStroke}
                    d="M59.73,16.64s-28-21.71-44-5.71,0,33.24,0,33.24,6.22,4,13.11,3.89,24.89,6.87,26.89,10.87,11.38,20-4.31,30.52S13.3,90.28,2.52,79.1"
                />
                <motion.path
                    variants={animateStroke}
                    d="M81,52.61s18.76-12.68,25.76-8.68,11.93-5.11,10.47,51.94"
                />
                <motion.path
                    variants={animateStroke}
                    d="M116.74,63.93s-31,.26-34,8.63-5,12.4,0,16.89,11,7,34-1.28"
                />
                <motion.polyline
                    variants={animateStroke}
                    points="140.25 0.38 140.25 68.16 140.25 95.74"
                />
                <motion.line
                    variants={animateStroke}
                    x1="141.11"
                    y1="69.51"
                    x2="176.6"
                    y2="41.47"
                />
                <motion.line
                    variants={animateStroke}
                    x1="152.74"
                    y1="61.93"
                    x2="177.49"
                    y2="95.1"
                />
                <motion.path
                    variants={animateStroke}
                    d="M193.24,40.45V75.78S190.68,94,210.71,92.94s17.88-14.62,17.88-14.62l-.41-38.13V95.74"
                />
                <motion.path
                    variants={animateStroke}
                    d="M248.79,40.32V95.74l1-44.81s22.76-22.4,34.38,6.8"
                />
                <motion.path
                    variants={animateStroke}
                    d="M297.94,52.61s27.51-19.2,33.15-4.44,3.07,47.7,3.07,47.7"
                />
                <motion.path
                    variants={animateStroke}
                    d="M332.74,64.93,306,69.23s-11.27,1.7-9.27,12.7,9,11,9,11l29-3.48"
                />
                <motion.path
                    variants={animateStroke}
                    d="M362.45,95.87V20.94s-1.71-18,25.29-13"
                />
                <motion.line
                    variants={animateStroke}
                    x1="347.09"
                    y1="45.18"
                    x2="389.2"
                    y2="45.18"
                />
                <motion.path
                    variants={animateStroke}
                    d="M402,40.45v39s3.21,14.53,17.47,13.53,17.27-13,17.27-13L437,40.19V95.74"
                />
                <motion.polyline
                    variants={animateStroke}
                    points="459.86 0 459.86 54.88 459.86 95.87"
                />
                <motion.path
                    variants={animateStroke}
                    d="M460.85,67.2s3.58-29.08,19.23-23.68S497.93,47.14,500.33,68s-19.74,24.9-19.74,24.9S459,93.47,460.85,67.2Z"
                />
                <motion.path
                    variants={animateStroke}
                    d="M519.51,40.45V77.72S521.22,93.93,537,92.93s17.76-16,17.76-16l-.29-36.74V95.74"
                />
                <motion.line
                    variants={animateStroke}
                    x1="577.36"
                    y1="0.38"
                    x2="577.36"
                    y2="95.74"
                />
                <motion.line
                    variants={animateStroke}
                    x1="578.14"
                    y1="68.99"
                    x2="613.71"
                    y2="41.47"
                />
                <motion.line
                    variants={animateStroke}
                    x1="589.74"
                    y1="61.93"
                    x2="614.61"
                    y2="95.1"
                />
                <motion.polyline
                    variants={animateStroke}
                    points="622.74 45.73 643.17 45.73 643.41 95.87"
                />
                <motion.line
                    variants={animateStroke}
                    x1="641.87"
                    y1="4.22"
                    x2="641.87"
                    y2="18.94"
                />
            </svg>

        </motion.div>
    )
}

export default Title

