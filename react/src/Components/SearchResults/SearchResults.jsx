import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards';
import Heading from '../Heading/Heading';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const filteredProducts = ProductList.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Search" heading={`Results for "${query}"`} />

        {filteredProducts.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-10'>
            {filteredProducts.map(product => (
              <Cards
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <p className='text-center mt-10 text-xl'>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
