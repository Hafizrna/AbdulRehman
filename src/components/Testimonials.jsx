import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div

    initial={{opacity: 0, x: 200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}

    className='container mx-auto pt-20 px-6 md:px-20 la:px-32 py-20 w-full overflow-hidden bg-gray-100'
    id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Here’s what amazing people say after working with me!</p>
      
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] shadow-lg rounded px-8 py-12 text-center bg-white'>
              <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
          <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
          <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
          <div className='flex justify-center gap-1 text-red-500 mb-4'>
            {
              Array.from({ length: testimonial.rating}, (item, index)=>(
                <img key={index} className='w-5 h-5 inline' src={assets.star_icon} alt='star' />
              ))
            }
          </div>
          <p className='text-gray-600' >{testimonial.text}</p>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default Testimonials