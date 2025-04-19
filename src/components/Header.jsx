import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen  bg-cover bg-center bg-no-repeat flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
      <Navbar />
      <motion.div

        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-5xl md:text-[82px inline-block max-w-3xl font-semibold pt-20'>Hi, I'm AbdulRehman</h2>
        <p className='text-gray-300 text-3xl mt-4 max-w-2xl mx-auto'>Front-End Developer</p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-4 max-w-2xl mx-auto pt-5">
          With a passion for design and development, I specialize in building sleek, high-impact websites using
          <span className="text-blue-400 font-semibold"> React.js</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
          Whether it's a personal brand or a growing business, I turn your vision into reality with code
          that’s not only beautiful — but built to perform.</p>

        <div className='space-x-6 md:mt-16 mt-23'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded hover:text-black hover:bg-white transition-colors duration-300'>Project</a>
          <a href="#Contact" className='hover:bg-blue-600 bg-blue-500 px-8 py-3 rounded transition-colors duration-200'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header