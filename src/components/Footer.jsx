import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'
            id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <div className='flex gap-1.5 text-white text-[24px] items-center'>
                <img src={assets.logo} alt="" className='w-14'/>
                <h1 className='text-2xl text-white font-bold'>AbdulRehman</h1>
                </div>
                    <p className='text-gray-400 mt-4'>Your Vision. My Code. A Perfect Website.Professional Website Solutions for Your Brand</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0 pb-2 md:mt-15'>
                    <h3 className='text-white text-lg font-bold mb-4'>Quick Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About</a>
                        <a href="#Projects" className='hover:text-white'>Projects</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscibe to our YouTube Channel</h3>
                    <p className='text-gray-400'>Hit that button — I’ve got something cool waiting for you!</p>
                    <div className='flex gap-2'>
                       <a href="https://www.youtube.com/@AbdulRehman_dev" target='blank'><button className='py-2 px-20 rounded bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white mt-2'>Subscribe</button></a> 
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright &copy; 2025 All rights reserved. <br />
            </div>
        </div>
    )
}

export default Footer
