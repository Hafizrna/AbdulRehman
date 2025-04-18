import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen  bg-cover bg-center bg-no-repeat flex items-center w-full overflow-hidden'
    style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar />
        <motion.div 

        initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px inline-block max-w-3xl font-semibold pt-20'>Hi, I'm AbdulRehman</h2>
            <p className='text-gray-300 text-3xl mt-4 max-w-2xl mx-auto'>Front-End Developer</p>
            <p className="text-gray-300 text-xl mt-4 max-w-2xl mx-auto">
  I build modern, high-impact websites with <span className="text-blue-400 font-semibold">React.js</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span> — blending creativity and code to bring your digital vision to life.
</p>

            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded hover:text-black hover:bg-white'>Project</a>
                <a href="#Contact" className='hover:bg-blue-400 bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header