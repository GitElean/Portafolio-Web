import React from 'react'
import { motion } from 'framer-motion'
import Kanji from './Kanji'

const Header = () => {
    return (
        <motion.div
            className="h-screen w-screen fixed z-[99]"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5, ease: 'easeInOut' }}
        >
            <div
                className="w-screen h-[6%] bg-[#ffb7c5] font-bold text-2xl px-8 flex justify-between items-center font-zen"
            >
                <div>
                    <div className="w-20">
                        <Kanji />
                    </div>
                </div>
                <div className="flex justify-between w-1/4 px-16">
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Contact
                    </div>
                    <div>
                        Blog
                    </div>
                </div>
                <div>
                    <div>
                        Otros
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Header
