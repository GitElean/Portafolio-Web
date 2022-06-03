import React, { useState } from 'react'
import Footer from './footer'
import Email from './svg/email'
import Githublogo from './svg/githubLogo'
import Linkedlinlogo from './svg/linkedlinLogo'
import Twitterlogo from './svg/twitterLogo'

const Contac = () => {
  return (
        <div className="w-screen h-screen place-items-center">
            <div className="fixed top-1/4 text-center right-1/3">
                <div className="text-2xl">Are you interested in my work?</div>
                <div className="text-2xl">Contact me!</div>
            </div>
            <div className="top-1/2 fixed right-[45%]">
                <div className="grid grid-cols-2 gap-6">
                        <a href="https://github.com/GitElean">
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Githublogo/>
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/in/elean-julian-andr%C3%A9s-rivas-galicia-52a755219/">
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Linkedlinlogo/>
                        </div>
                        </a>
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Email/>
                        </div>
                        <a href="https://twitter.com/DxOElean">
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Twitterlogo/>
                        </div>
                        </a>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Contac
