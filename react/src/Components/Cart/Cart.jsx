import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';

const Cart = () => {
  const [addCart, setAddCart] = useState([]);

  const loadCartList = () => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setAddCart(stored);
  };

  useEffect(() => {
    loadCartList();
    const sync = () => loadCartList();
    window.addEventListener("cartUpdated", sync); // ✅ live update
    return () => window.removeEventListener("cartUpdated", sync);
  }, []);

  return (
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
      <Heading highlight="Your" heading="Cart" />

      {addCart.length === 0 ? (
        <p className="text-xl text-zinc-500 mt-10">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {addCart.map(item => (
            <Cards
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              onCartChange={loadCartList}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
