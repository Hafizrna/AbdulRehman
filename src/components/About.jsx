import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}

            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-100'
            id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Myself</span></h1>
            <p className='text-grey-500 max-w-80 text-center mb-8'>Dreaming big, working smart, and staying humble.</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-5'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-center mt-10 text-gray-600'>
                    <div className="grid grid-cols-3 gap-6 md:gap-10 w-full 2xl:pr-28 md:pl-20">
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>
                                2+</p>
                            <p className='font-bold'>Year Of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>5+</p>
                            <p className='font-bold'>Projects Completed</p>
                        </div> 
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>97%</p>
                            <p className='font-bold'>Client Satisfaction</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg text-sm sm:text-base md:text-lg font-normal leading-relaxed'>I'm a front-end developer skilled in React JS, Tailwind CSS, and WordPress, with a strong eye for design using tools like Figma. I build responsive, user-friendly websites that not only look great but also perform smoothly across all devices. Whether you need a sleek landing page or a full-featured web application, I deliver custom solutions tailored to your goals transforming your digital presence with clean code and creative design.

                    </p>
                    <button className='bg-blue-500 hover:bg-blue-400 text-white py-2 px-12 mb-10 rounded'><a href="https://www.linkedin.com/in/abdulrehman-nadeem-049a4a253/" target="_blank" rel="noopener noreferrer">Learn more</a></button>
                </div>
            </div>
        </motion.div>
    )
}

export default About