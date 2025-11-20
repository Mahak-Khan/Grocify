import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdFax } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:pt-25 pt-20 bg-zinc-800'>

      {/* Left Side */}
      <div className='w-full md:w-1/2 mt-5 ml-0 md:ml-15 flex flex-col max-md:space-y-5'>

        {/* Row 1 */}
        <div className='flex max-md:flex-col'>
          
          {/* Office Card */}
          <div className='bg-white w-full md:w-1/2 h-60 rounded-xl md:ml-13'>
            <h1 className='text-rose-200 mt-5 flex justify-center'><IoLocationSharp size={75} /></h1>
            <h1 className='font-bold text-xl flex justify-center'>Our Main Office</h1>
            <p className='text-zinc-900 flex justify-center mt-3'>SoHo 94 Broadway St</p>
            <p className='text-zinc-900 flex justify-center'>New York, NY 1001</p>
          </div>

          {/* Phone Card */}
          <div className='bg-white md:ml-85 w-full md:w-65 h-60 rounded-xl 
                          max-md:mt-5 
                          md:absolute'>
            <h1 className='text-rose-200 mt-5 flex justify-center'><IoCallSharp size={75}/></h1>
            <h1 className='font-bold text-xl flex justify-center'>Phone Number</h1>
            <p className='text-zinc-900 flex justify-center mt-3'>234-9876-5400</p>
            <p className='text-zinc-900 flex justify-center'>888-0123-4567</p>
            <p className='text-zinc-900 flex justify-center'>(Toll Free)</p>
          </div>

        </div>

        {/* Row 2 */}
        <div className='flex max-md:flex-col mt-5 max-md:mt-0'>
          
          {/* Fax Card */}
          <div className='bg-white w-full md:w-1/2 h-50 rounded-xl md:ml-13'>
            <h1 className='text-rose-200 mt-5 flex justify-center'><MdFax size={75}/></h1>
            <h1 className='font-bold text-xl flex justify-center'>Fax</h1>
            <p className='text-zinc-900 flex justify-center mt-3'>1-234-567-8900</p>
          </div>

          {/* Email Card */}
          <div className='bg-white md:ml-85 w-full md:w-65 h-50 rounded-xl 
                          max-md:mt-5 
                          md:absolute'>
            <h1 className='text-rose-200 mt-5 flex justify-center'><IoIosMail size={75}/></h1>
            <h1 className='font-bold text-xl flex justify-center'>Email</h1>
            <p className='text-zinc-900 flex justify-center mt-3'>help@me.out</p>
          </div>

        </div>
      </div>

      {/* Right Side (Form below on mobile) */}
      <div className='w-full md:w-1/2 bg-rose-200 p-20 mt-10 md:mt-14 md:mr-30 rounded-xl mb-10'>
        <form className='md:pl-20'>
          <Heading highlight="Contact" heading="Us" className="mt-4" />

          <input type="text" placeholder='Enter Your Name'
            className='w-full p-2 mt-4 bg-white text-zinc-900' />

          <input type="email" placeholder='Enter a valid email address'
            className='w-full p-2 mt-4 bg-white text-zinc-900' />

          <textarea className='w-full p-2 mt-4 mb-4 h-25 bg-white text-zinc-900' />

          {/* Center button on mobile only, desktop unchanged */}
          <div className="flex justify-center md:block md:ml-25">
            <Button content="Submit" />
          </div>

        </form>
      </div>

    </div>
  )
}

export default Contact
