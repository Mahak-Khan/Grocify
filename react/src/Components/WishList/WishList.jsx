import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';

const WishList = () => {
  const [items, setItems] = useState([]);

  // Load wishlist from localStorage
  const loadWishlist = () => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setItems(stored);
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  return (
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
      <Heading highlight="Your" heading="Wishlist" />

      {items.length === 0 ? (
        <p className="text-xl text-zinc-500 mt-10">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          {items.map(item => (
            <Cards
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              onWishlistChange={loadWishlist} // reload wishlist on toggle
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
