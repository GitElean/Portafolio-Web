import React, {useState} from 'react';
import Footer from './footer';  
import Email from './svg/email';
import Githublogo from './svg/githubLogo';
import Linkedlinlogo from './svg/linkedlinLogo';
import Twitterlogo from './svg/twitterLogo';

const Contac = () => {
    return (
        <div>
            <div className="fixed top-1/4 text-center">
                <div className="text-2xl">Are you interested in my work?</div>
                <div className="text-2xl">Contact me!</div>
            </div>
            <div className="top-1/2 fixed">
                <div className="grid grid-rows-2">  
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Githublogo/>
                        </div>
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Linkedlinlogo/>
                        </div>
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Email/>
                        </div>
                        <div className="fill-black w-10 h-10 hover:fill-[#e7879b]">
                            <Twitterlogo/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contac;
