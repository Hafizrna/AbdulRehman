import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { a } from "framer-motion/m";

const chatbox = () => {
    const [isVisible, setIsVisible] = useState(false);
    const listenToScroll = () => {
        let heighToHiden = 500;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heighToHiden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, [])
    return (
        <>
            {isVisible && (
                <a href="https://abdulrehman-nadeem-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button
                        className="fixed bottom-18 right-4 bg-amber-300 text-white px-2 py-2 rounded-full z-10 cursor-pointer shadow-lg hover:bg-blue-600 transition-colors duration-300"
                        
                    >
                        <img src={assets.msg} alt="" />
                    </button>
                </a>
            )}
        </>
    );
}

export default chatbox