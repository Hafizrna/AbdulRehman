import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenue, setMobileMenue] = useState(false);
    useEffect(() => {
        if (showMobileMenue) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [setMobileMenue])
    return (
        <div className='absolute top-0 left-0 w-full z-10 m-auto'>
            <div className='container flex justify-between items-center py-4 px-6 max-auto md:px-20 lg:px-32 bg-transparent m-auto'>
               <div className='flex gap-1.5 text-white text-[24px] items-center'><img src={assets.logo} alt="" className='w-15'/>AbdulRehman</div> 
                <ul className='hidden md:flex gap-8 text-white font-medium text-[18px]'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Project</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonial</a>
                </ul>
                <a href="tel: +923237067800" ><button className='hidden text-white md:block hover:bg-blue-400 bg-blue-500 px-8 py-2 rounded font-bold'>Call me</button></a>
                <img onClick={() => setMobileMenue(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>
            {/* ------------Mobile menue--------------- */}
            <div className={`${showMobileMenue ? 'fixed w-full' : 'h-0 w-0'} md:hidden  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end px-6 mt-8 cursor-pointer'>
                    <img onClick={() => setMobileMenue(false)} src={assets.cross_icon} className='w-6 ease-in-out' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-3 mt-8 px-5 text-lg font-medium'>
                    <a onClick={() => setMobileMenue(false)} href="#Header" className='px-4 py-2 rounded inline-block w-full font-bold text-center bg-gray-200'>Home</a>
                    <a onClick={() => setMobileMenue(false)} href="#About" className='px-4 py-2 rounded inline-block w-full font-bold text-center bg-gray-200'>About</a>
                    <a onClick={() => setMobileMenue(false)} href="#Projects" className='px-4 py-2 rounded inline-block w-full font-bold text-center bg-gray-200'>Projects</a>
                    <a onClick={() => setMobileMenue(false)} href="#Testimonials" className='px-4 py-2 rounded inline-block w-full font-bold text-center bg-gray-200'>Testimonials</a>
                    <img src={assets.brand_img}  className='opacity-5 mt-4' alt="" />
                    <a href="tel: +923237067800" ><button className='md:hidden text-white sm:block hover:bg-blue-400 bg-blue-500 px-20 py-2 rounded font-bold mt-5'>Call me</button></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar