import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import Basket from '../../Assets/basket-full-vegetables.png'

const value = [
    { id: 1, title: 'Trust', para: 'It is a long established fact that a reader will be distracted by the readable.', icon: <FaHeart/> },
    { id: 2, title: 'Always Fresh', para: 'It is a long established fact that a reader will be distracted by the readable.', icon: <FaLeaf/> },
    { id: 3, title: 'Food Safety', para: 'Quality you can trust, delivered. Your health, our mission. Safety in every bite.', icon: <FaShieldAlt/> },
    { id: 4, title: '100% Organic', para: 'Fresh from farm to fork, naturally. Eat clean, live green. Pure food, pure joy.', icon: <FaSeedling/> }
]

const Values = () => {

    const renderValueItem = (item, align='left') => (
        <div key={item.id} className={`flex ${align === 'left' ? 'flex-row-reverse text-right' : 'flex-row text-left'} gap-2`}>
            <div>
                <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full md:text-4xl text-2xl'>
                    {item.icon}
                </span>
            </div>
            <div>
                <h3 className='font-bold text-2xl'>{item.title}</h3>
                <p className='text-md'>{item.para}</p>
            </div>
        </div>
    )

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Value"/>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center gap-10">
                    {/* Left Values */}
                    <div className='flex flex-col gap-50 mt-15'>
                        {value.slice(0,2).map(item => renderValueItem(item, 'left'))}
                    </div>

                    {/* Image */}
                    <div className='flex-shrink-0'>
                        <img src={Basket} alt="Basket" className='h-full max-h-[400px] object-contain'/>
                    </div>

                    {/* Right Values */}
                    <div className='flex flex-col gap-50 mt-15'>
                        {value.slice(2,4).map(item => renderValueItem(item, 'right'))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex flex-col md:hidden items-center gap-6">
                    {/* Image first */}
                    <div className='w-full'>
                        <img src={Basket} alt="Basket" className='w-full object-contain mb-6'/>
                    </div>

                    {/* All Values stacked */}
                    <div className='flex flex-col gap-6 w-full'>
                        {value.map(item => renderValueItem(item, 'left'))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Values
