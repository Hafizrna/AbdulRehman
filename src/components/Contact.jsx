import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'    
import { assets } from '../assets/assets'

const Contact = () => {
 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba193208-6136-4bbf-9f20-7467b34c15bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.success(data.message)
      setResult("");
    }
  };

  return (
    <motion.div 

    initial={{opacity: 0, x: -200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}

    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-100'
    id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>me</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Let’s connect and create something amazing together!</p>
   <form action="" onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left font-semibold'>Your Name
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 bg-white' type="text" placeholder='Enter you name' name='Name' required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4 font-semibold'>Your Email
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 bg-white' type="email" placeholder='Enter you Email' name='Email' required/>
        </div>
    </div>
    <div className='my-6 text-left font-semibold'>
        Message 
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none bg-white' name="Message" placeholder='Write your message' required></textarea>
    </div>
    <button className='bg-blue-500 text-white  hover:bg-blue-600 transition-colors duration-200 py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
   </form>
   
    </motion.div>
  )
}

export default Contact