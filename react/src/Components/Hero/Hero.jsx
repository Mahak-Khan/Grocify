import React from 'react'
import Bakery from '../../Assets/Bakery.png' 
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='max-w-[1400px] min-h-screen mx-auto px-10 md:flex-row flex-col flex items-center md:pt-25 pt-35 '>

            {/* Hero Content */}

            <div className='flex-1'>
                <span className='bg-rose-100 text-rose-500 rounded-full text-lg px-5 py-2'>
                  Freshly Baked Everyday...
                </span>

                <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold'>
                    Delicious<br/><span className='text-rose-500'>Cakes</span> & <span className='text-rose-500'>Pastries</span><br/> Made With Love
                </h1>

                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                    Soft, sweet, and handcrafted — our bakery treats are freshly made to bring joy in every bite.
                </p>

                <Button content="Order Now"/>
            </div>

            {/* Hero Image */}

            <div className='flex-1'>
                <img src={Bakery} alt="Hero Image" />
            </div>

        </div>
    </section>
  )
}

export default Hero
