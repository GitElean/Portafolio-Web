import React from 'react';
import Footer from './footer';
import Reactlogo from './svg/reactLogo';
import Tailwindlogo from './svg/tailwindLogo';

const Home = () => {
    return (
        <div className="w-screen h-screen place-items-center bg-white">
            <div className="top-1/3 relative">
                <div className="text-center">
                    <div className="text-3xl">Sakurafubuki 吹雪</div>
                    <div className="text-2xl">Hi! Im Elean</div>
                    <div className="text-xl">Junior Developer</div>
                </div>
            </div>
            <Footer/>   
        </div>
    );
}

export default Home;
