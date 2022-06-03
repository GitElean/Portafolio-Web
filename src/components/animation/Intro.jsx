import { motion } from 'framer-motion'
import React from 'react'
import Kanji from './Kanji'
import Title from './Title'

const Intro = () => {
    return (
        <motion.div
            className="fixed z-50 w-screen h-screen overflow-hidden bg-[#ffb7c5] flex items-center justify-center flex-col"
            animate={{ y: '-94%' }}
            initial={{ x: 0 }}
            transition={{ duration: 0.6, delay: 4.2, ease: 'easeInOut' }}
        >
            <motion.div className="w-3/4 desktop:w-1/2 overflow-hidden flex items-center justify-center">
                <motion.div
                    className="w-3/4 desktop:w-1/2"
                    animate={{ y: '100%' }}
                    initial={{ x: 0 }}
                    transition={{ duration: 0.6, delay: 3.4, ease: 'easeIn' }}
                >
                    <div className="mb-4">
                        <Kanji />
                    </div>
                </motion.div>


            </motion.div>
            <motion.div className="w-3/4 desktop:w-1/2 overflow-hidden flex items-center justify-center">
                <motion.div
                    className="w-3/4 desktop:w-1/2"
                    animate={{ y: '150%' }}
                    initial={{ x: 0 }}
                    transition={{ duration: 0.4, delay: 3.9, ease: 'easeIn' }}
                >
                    <div>
                        <Title />
                    </div>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Intro
