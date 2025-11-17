import React from 'react'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'
import Chef from '../../Assets/Chef.jpg'

const About = () => {
  return (
    <div className='max-w-[1400px] min-h-screen mx-auto px-10 md:flex-row flex-col flex items-center md:pt-25 pt-35 mb-5'>
      <div className='w-1/2 items-center justify-center flex md:flex-col'>
        <div className='w-fit '>
          <Heading highlight="About" heading="Us" />
        </div>
        <div className='items-center justify-center flex transform -scale-x-100'>
          <img src={Chef} alt="About Image" />
        </div>
      </div>
      <div className='w-1/2'>
        <div className='mt-8 bg-zinc-200 rounded-2xl p-5'>
          <p className='text-medium md:text-xl font-medium '>Welcome to <Link to='/' className='text-3xl font-bold'>
            Cr<span className='text-rose-500'>乇</span>me
          </Link>, where every bite tells a story. Born from a love for baking and a passion for sharing joy through delicious treats, we’ve been crafting fresh, handcrafted baked goods for 21 years.
            At our bakery, we believe in the magic of quality ingredients, traditional techniques, and a sprinkle of creativity. From crusty breads and buttery pastries to decadent cakes and cookies, every item is made with care and attention to detail, ensuring a taste that delights every time.
            But we’re more than just a bakery—we’re a part of the community. Whether it’s a special celebration, a comforting morning treat, or simply a moment to savor, we’re here to bring warmth and sweetness to your everyday life.
            Join us in celebrating the simple joys of fresh-baked goodness. At <Link to='/' className='text-3xl font-bold'>
              Cr<span className='text-rose-500'>乇</span>me
            </Link>, it’s not just baking—it’s love, tradition, and a little bit of magic in every bite.</p>
        </div>
      </div>

    </div>
  )
}

export default About
