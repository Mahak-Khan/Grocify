import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../Assets/fruits-and-veggies.png'
import SeaFoodCat from '../../Assets/meat-and-seafood.png'
import DairyCat from '../../Assets/dairy-and-eggs.png'
import Button from '../Button/Button'

const Category = () => {

    const renderCards = category.map(card => {
        return(

            // Card

            <div className='flex-1 basis-[300px]' key={card.id}>

                {/* Card Image */}

                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} className='absolute bottom-0'/>
                </div>

                {/* Card Content */}

                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Button content="See All"/>
                </div>
            </div>
        )
    })

  return (
    <section>
        <div className='max-w-[1400px] mx-autp px-10 py-20'>
           <Heading highlight="Shop" heading= "by Category"/>

           {/* Category Card */}
           <div className='flex flex-wrap gap-10 md:mt-15'>
                {renderCards}
           </div>
        </div>
    </section>
  )
}

export default Category

const category = [
    {
        id: 1,
        title: 'Cakes & Pastries',
        description: 'Soft, sweet, and freshly baked delights. Explore a variety of cakes, cupcakes, and pastries to satisfy every craving.',
        image: FruitsCat
    },
    {
        id: 2,
        title: 'Cookies & Biscuits',
        description: 'Handcrafted cookies and buttery biscuits baked daily. Perfect for snacking or gifting to your loved ones.',
        image: DairyCat
    },
    {
        id: 3,
        title: 'Breads & Buns',
        description: 'Artisan breads, soft buns, and freshly baked rolls. Enjoy the comforting aroma of bakery-fresh goodness.',
        image: SeaFoodCat
    }
]
