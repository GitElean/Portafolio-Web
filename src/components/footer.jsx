import React, { useEffect, useState } from 'react'
import Framermotionlogo from './svg/framerMotionLogo'
import Nodejsicon from './svg/nodejsIcon'
import Reactlogo from './svg/reactLogo'
import Tailwindlogo from './svg/tailwindLogo'

const Footer = () => {
  const stateColor = {
    default: {
      text: 'text-slate-500'
    },
    pink: {
      text: 'text-[#e7879b]'
    }
  }

  const logosColor = {
    default: {
      text: 'fill-slate-500'
    },
    pink: {
      text: 'fill-[#e7879b]'
    }
  }

  const [colorChange, setColorChange] = useState('default')
  const [colorLogos, setColorLogos] = useState('default')

  useEffect(() => {
    initColors()
  }, [])

  const initColors = async () => {
    while (true) {
      await sleep(2000)
      setColorChange(prevCount => prevCount === 'default' ? 'pink' : 'default')
      await sleep(500)
      setColorLogos(prevCount => prevCount === 'default' ? 'pink' : 'default')
    }
  }

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
    <div>
      <div className="w-full h-[12%] bg-black bottom-0 absolute flex flex-col items-center justify-center">
        <div className={stateColor[colorChange].text + ' text-center p-2 transition-all duration-500'}>
          This site is build with...
        </div>
        <div className={logosColor[colorLogos].text + ' w-full text-center flex items-center justify-center transition-all duration-500'}>
          <div className="mx-2 h-8 w-8 flex items-center">
            <Reactlogo />
          </div>
          <div className="mx-2 h-8 w-8 flex items-center">
            <Tailwindlogo />
          </div>
          <div className="mx-2 h-8 w-8 flex items-center">
            <Nodejsicon />
          </div>
          <div className="mx-2 h-8 w-8 flex items-center">
            <Framermotionlogo />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
