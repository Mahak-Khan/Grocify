import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Customer1 from '../../Assets/customer1.jpg'
import Customer2 from '../../Assets/customer2.jpg'
import Customer3 from '../../Assets/customer3.jpg'
import Customer4 from '../../Assets/customer4.jpg'
import Customer5 from '../../Assets/customer5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";



const Testimonials = () => {




  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight='Customer' heading='Sayings' />


        <div className='py-5 mt-5 flex justify-end gap-x-3'>
          <button className='custom-prev text-2xl text-zinc-800 hover:bg-linear-to-b hover:from-rose-400 hover:to-rose-500 hover:text-white cursor-pointer rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center'>
            <IoIosArrowBack />
          </button>
          <button className='custom-next text-2xl text-zinc-800 hover:bg-linear-to-b hover:from-rose-400 hover:to-rose-500 hover:text-white cursor-pointer rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center'>
            <IoIosArrowForward />
          </button>
        </div>
        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}

        loop= {true}
        breakpoints={{
          640: {slidesPerView: 1,spaceBetween: 20},
          768: {slidesPerView: 2, spaceBetween: 20},
          1024: {slidesPerView: 3, spaceBetween: 20},
        }}
         modules={[Navigation]} className="mySwiper">
          {
            review.map(item => {
              return (
                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                  <div className='flex gap-5 items-center'>

                    <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-rose-500 outline-offset-4 overflow-hidden'>
                      <img src={item.image}  className='w-full h-full object-cover'/>
                    </div>
                    <div>
                      <h5 className='text-xl font-bold'>{item.name}</h5>
                      <p className='text-zinc-600'>{item.profession}</p>
                      <span className='flex text-yellow-400 mt-2 text-xl gap-1'>
                        {Array.from({ length: item.rating }, (_, index) => (
                          <FaStar />
                        ))}
                      </span>
                    </div>
                  </div>

                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'>{item.para}</p>
                    </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>


      </div>
    </section>
  )
}

export default Testimonials


const review = [
  {
    id: 1,
    name: 'Dhruv Khanger',
    profession: 'API Wale Bhaiya',
    rating: 5,
    para: 'This bakery has completely elevated my dessert experience! Every pastry is freshly baked, flavorful, and crafted with so much love. Easily my new favorite spot!',
    image: Customer1
  },
  {
    id: 2,
    name: 'Rinkun',
    profession: 'JAVA Developer',
    rating: 3,
    para: 'The bread and pastries here are always fresh and perfectly baked. Their croissants are a must-try—flaky, buttery, and absolutely delicious.',
    image: Customer2
  },
  {
    id: 3,
    name: 'Ojha Bhaiya',
    profession: 'Frontend Developer',
    rating: 3,
    para: 'The cakes and desserts from this bakery are irresistible! Beautifully designed and incredibly tasty. It’s my go-to place for sweet treats.',
    image: Customer3
  },
  {
    id: 4,
    name: 'Vikas',
    profession: 'Sr. Frontend Developer',
    rating: 4,
    para: 'I love their selection of whole-grain and healthy baked items! Fresh, nutritious, and perfect for my meal plan without compromising on taste.',
    image: Customer4
  },
  {
    id: 5,
    name: 'Meeee😎',
    profession: 'Intern',
    rating: 2,
    para: 'Their baked goods are always fresh and prepared with quality ingredients. I appreciate their commitment to offering healthier options alongside classic treats.',
    image: Customer5
  },
]

