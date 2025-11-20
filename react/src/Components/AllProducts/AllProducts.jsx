import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAllProd from '../../Assets/all-banner.jpg'
import { useOutletContext } from 'react-router-dom'

const AllProducts = () => {
  const { query } = useOutletContext() // get live search query from Navbar

  return (
    <div>
      <CategoryPage title='All Products' bgImage={BgAllProd} categories={['All']} searchQuery={query} />
    </div>
  )
}

export default AllProducts
