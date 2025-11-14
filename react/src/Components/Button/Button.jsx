import React from 'react'

const Button = (props) => {
  return (
      <button className='bg-gradient-to-b from-rose-400 to-rose-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-rose-600 transition-all duration-300 cursor-pointer'>
        {props.content}
      </button>
  )
}

export default Button
