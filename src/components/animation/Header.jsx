import React from 'react'
import { motion } from 'framer-motion'
import Kanji from './Kanji'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <motion.div
            className="h-screen w-screen fixed z-[99] pointer-events-none"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5, ease: 'easeInOut' }}
        >
            <div
                className="pointer-events-auto w-screen h-[6%] bg-[#ffb7c5] font-bold text-2xl px-8 flex justify-between items-center font-zen"
            >
                <div>
                    <div className="w-20">
                        <Kanji />
                    </div>
                </div>
                <div className="flex justify-between w-1/4 px-16">
                    <Link to="/" className="hover:border-black border-b-4 border-[#ffb7c5] transition-all">
                        Home
                    </Link>
                    <Link to="/about" className="hover:border-black border-b-4 border-[#ffb7c5] transition-all">
                        About
                    </Link>
                    <Link to="/contact" className="hover:border-black border-b-4 border-[#ffb7c5] transition-all">
                        Contact
                    </Link>
                    <Link to="/projects" className="hover:border-black border-b-4 border-[#ffb7c5] transition-all">
                        Projects
                    </Link>
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
