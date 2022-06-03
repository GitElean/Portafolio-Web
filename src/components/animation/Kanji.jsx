import React from 'react'
import { motion } from 'framer-motion'

// Duración del trazo
const transition = {
  duration: 0.5,
  ease: 'easeInOut'
}

const animateStroke = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  draw: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: transition,
      opacity: {
        duration: 0.1,
        ease: 'linear'
      }
    }
  }
}

// Delay entre cada trazo
const container = {
  draw: {
    transition: {
      staggerChildren: 0.20,
      delayChildren: 0.20
    }
  }
}

const Kanji = () => {
  return (
        <div

            className="flex"
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 132.15 123.49"
                fill="none"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#000"
                initial="hidden"
                animate="draw"
                variants={container}
            >
                <motion.path
                    variants={animateStroke}
                    d="M41.13,55.33q11.5-27,23-54"
                />
                <motion.path
                    variants={animateStroke}
                    d="M4.63,34.83s31.2-9.08,31.6-6.54S33,57.61,33,57.61L14.63,60.83Z"
                />
                <motion.polyline
                    variants={animateStroke}
                    points="65.59 37.43 107.63 29.83 90.62 57.61"
                />
                <motion.path
                    variants={animateStroke}
                    d="M24.63,110.83s47.79-7.16,45.7-65"
                />
                <motion.path
                    variants={animateStroke}
                    d="M68.3,72.85s34.33,37,50.33,37"
                />
            </motion.svg>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 132.15 123.49"
                fill="none"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#000"
                initial="hidden"
                animate="draw"
                variants={container}
            >
                <motion.polyline
                    variants={animateStroke}
                    points="20.72 31.77 114.25 22.97 97.9 50.07"
                />
                <motion.line
                    variants={animateStroke}
                    x1="34.81"
                    y1="8.61"
                    x2="81"
                    y2="3.48"
                />
                <motion.line
                    variants={animateStroke}
                    x1="58.32"
                    y1="12.98"
                    x2="58.32"
                    y2="59.61"
                />
                <motion.line
                    variants={animateStroke}
                    x1="71.15"
                    y1="53.27"
                    x2="89.07"
                    y2="57.75"
                />
                <motion.line
                    variants={animateStroke}
                    x1="71.15"
                    y1="38.42"
                    x2="89.07"
                    y2="42.9"
                />
                <motion.line
                    variants={animateStroke}
                    x1="27.88"
                    y1="40.85"
                    x2="45.8"
                    y2="45.33"
                />
                <motion.line
                    variants={animateStroke}
                    x1="27.88"
                    y1="55.7"
                    x2="45.8"
                    y2="60.18"
                />
                <motion.polyline
                    variants={animateStroke}
                    points="24.81 75.29 90.81 69.61 83.81 105.61 23.79 109.21"
                />
                <motion.line
                    variants={animateStroke}
                    x1="32.62"
                    y1="91.03"
                    x2="73.45"
                    y2="87.19"
                />
                <motion.path
                    variants={animateStroke}
                    d="M2.54,49.17S14.73,36.3,17.77,18.45"
                />
            </motion.svg>

        </div>
  )
}

export default Kanji
