import React from 'react'
import Footer from './footer'

const About = () => {
  return (
        <div className="h-screen w-screen">

            <div className="top-1/3 relative">
                <div className="text-[#e7879b] font-extrabold translate-x-1/2 translate-y-4">
                    Python
                </div>
                <div className="text-[#e7879b] font-extrabold translate-x-[45%] translate-y-2">
                    React
                </div>
                <div className="text-[#e7879b] font-extrabold translate-x-[62%]">
                    CSS
                </div>

                <div className="text-[#e7879b] font-extrabold translate-x-[30%] -translate-y-[10%]">
                    SQL
                </div>
                <div className="text-[#e7879b] font-extrabold translate-x-[185px] -translate-y-5">
                    UI
                </div>
                <div className="text-[#e7879b] font-extrabold -translate-y-[70px] translate-x-[40%]">
                    UX
                </div>
                <div className="text-[#e7879b] font-extrabold translate-x-1/2 -translate-y-20">
                    Github
                </div>
                <div className="text-[#e7879b] font-extrabold -translate-y-[150px] translate-x-[40%]">
                    Gitflow
                </div>
                <div className="text-amber-900 font-bold translate-x-4 translate-y-10">
                    Tailwind
                </div>
                <div className="text-amber-900 font-bold translate-x-4 translate-y-24">
                    C#
                </div>
                <div className="text-amber-900 font-bold ">
                    JavaScript
                </div>
            </div>
            <div className="justify-start text-sm font-semibold p-3 bottom-1/4 absolute">
            My name is Elean, Im a Computer Science student at
                Universidad del Valle de Guatemala
                and Junior Developer.
                Im trying to improve constantly, so Im a self-taugh person.
                Im someone who is always striving to learn something new.
                Creative and a perfectionist.
            </div>
            <Footer/>
        </div>
  )
}

export default About
