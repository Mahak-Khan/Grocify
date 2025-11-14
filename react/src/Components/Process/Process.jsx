import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'

const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`} key={item.id}>
                <span className='flex justify-center items-center rounded-full w-18 h-18 mx-auto text-8xl bg-zinc-800 text-white outline-[3px] outline-zinc-800 outline-dashed'>{item.number}</span>

                <div className='flex items-center mt-10 gap-x-5'>
                    <span className='flex justify-center items-center bg-linear-to-b from-rose-400 to-rose-500 text-white text-3xl w-15 h-15 rounded-full'>{item.icon}</span>

                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-600 mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className='w-fit mr-auto'>
            <Heading highlight='Our' heading='Process'/>
        </div>
        <div className='flex flex-wrap gap-y-17 md:mt-20 mt-10 items-center justify-center md:pt-50'>
            {renderSteps}
        </div>
      </div>
    </section>
  )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Ingredient Sourcing',
        para: 'We handpick only the finest flours, chocolates, fruits, and dairy to ensure every treat is top quality.',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Baking & Preparation',
        para: 'Our skilled bakers craft each cake, pastry, and bread with precision and love for perfection.',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Check',
        para: 'Every baked item is carefully inspected for taste, texture, and freshness before it leaves the bakery.',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Delivery',
        para: 'Freshly baked delights are delivered safely and swiftly to your doorstep for ultimate enjoyment.',
        icon: <BsTruck />
    }
]
