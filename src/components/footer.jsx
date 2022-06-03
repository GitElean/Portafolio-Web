import React, { useEffect, useState } from 'react';
import Framermotionlogo from './svg/framerMotionLogo';
import Nodejsicon from './svg/nodejsIcon';
import Reactlogo from './svg/reactLogo';
import Tailwindlogo from './svg/tailwindLogo';

const Footer = () => {

    const stateColor = {
        default:{
            text: 'text-slate-500'
        },
        pink:{
            text: 'text-[#e7879b]'
        }
    }

    const logosColor = {
        default:{
            text: 'fill-slate-500'
        },
        pink:{
            text: 'fill-[#e7879b]'
        }
    }

    const [colorChange, setColorChange] = useState('default')
    const [colorLogos, setColorLogos] = useState('default')


    useEffect(() => {
        initColors()
      }, [])

    const initColors = async() => {
        while(true){
           await sleep(2000)
           setColorChange (prevCount => prevCount === 'default' ? 'pink' : 'default')
           await sleep(500)
           setColorLogos (prevCount => prevCount === 'default' ? 'pink' : 'default') 
        }
    }

    function sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    return (
        <div>
            <div className="w-full h-1/6 bg-black bottom-0 absolute">
                <div className={stateColor[colorChange].text+" text-center p-2 transition-all duration-150"}>
                    This site is build with...
                </div> 
                <div className="mx-auto w-3/4 text-center">
                <div className="inline-flex grid-rows-7">
                    <div className={logosColor[colorLogos].text +" h-8 w-8"}>
                        <Reactlogo/>
                    </div>
                    <div className="w-4"></div>
                    <div className={logosColor[colorLogos].text +" h-8 w-8 "}>
                        <Tailwindlogo/>
                    </div>
                    <div className="w-4"></div>
                    <div className={logosColor[colorLogos].text +" h-8 w-8 "}>
                        <Nodejsicon/>
                    </div>
                    <div className="w-4"></div>
                    <div className={logosColor[colorLogos].text +" h-8 w-8 "}>
                        <Framermotionlogo/>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
