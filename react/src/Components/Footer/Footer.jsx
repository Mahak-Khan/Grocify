import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
        <div className='max-w-[1400px] mx-auto px-10 gap-y-10 flex flex-wrap'>
            <div className='flex-1 basis-[300px]'>
                <a href='#' className='text-3xl font-bold'>
                Cr<span className='text-rose-500'>乇</span>me
                </a>
                <p className='text-zinc-600 mt-6 max-w-[350px]'>
                    Freshly baked cakes, pastries, and treats made with love. Delight in every bite from our bakery to your home.
                </p>
                <p className='text-zinc-800 mt-6'>
                  2025 &copy; All Rights Reserved.
                </p>
            </div>
            <ul className='flex-1'>
                <li>
                  <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                </li>
                <li className='mt-6'>
                  <a href='#' className='text-zinc-800 hover:text-rose-500'>About</a>
                </li>
                <li className='mt-6'>
                  <a href='#' className='text-zinc-800 hover:text-rose-500'>FAQ's</a>
                </li>         
            </ul>
             <ul className='flex-1'>
                <li>
                  <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                </li>
                <li className='mt-6'>
                  <a href='#' className='text-zinc-800 hover:text-rose-500'>Support Center</a>
                </li>
                <li className='mt-6'>
                  <a href='#' className='text-zinc-800 hover:text-rose-500'>Feedback</a>
                </li>  
                <li className='mt-6'>
                  <a href='#' className='text-zinc-800 hover:text-rose-500'>Contact Us</a>
                </li>        
            </ul>
            <div className='flex-1'>
              <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
              <p className='mt-6 trxt-zinc-600'>Questions or Feedback?<br/>
                 We'd love to hear from you!<br/>
              </p>
              <div className='flex bg-white p-1 rounded-lg mt-6'>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Email Address' className='h-[5vh] focus:outline-none pl-4 flex-1' />
                <button className='bg-linear-to-b from-rose-400 to-rose-500 p-2 rounded-lg text-white text-2xl cursor-pointer hover:to-rose-600'><IoIosArrowForward /></button>
              </div>

            </div>
        </div>      
    </footer>
  )
}

export default Footer
