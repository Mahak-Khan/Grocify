import React from 'react'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Banner from '../Banner/Banner'
import { useOutletContext } from 'react-router-dom'

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  const { searchQuery } = useOutletContext() || {} // get searchQuery from Layout

  // Filter by categories first
  const filteredByCategory = categories.includes('All') 
    ? ProductList 
    : ProductList.filter(item => categories.includes(item.category))

  // Then filter by search query
  const finalFiltered = searchQuery 
    ? filteredByCategory.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredByCategory

  const renderProduct = finalFiltered.map(product => (
    <Cards 
      key={product.id} 
      image={product.image} 
      name={product.name} 
      price={product.price} 
    />
  ))

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
        {renderProduct.length > 0 ? renderProduct : <p className='col-span-full text-center text-zinc-500'>No products found.</p>}
      </div>
    </div>
  )
}

export default CategoryPage
