import React, { useEffect, useState } from 'react'
import Heading from '../Heading/Heading'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Cart = () => {
  const [addCart, setAddCart] = useState([]);

  const loadCartList = () => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setAddCart(stored);
  };

  useEffect(() => {
    loadCartList();
    const sync = () => loadCartList();
    window.addEventListener("cartListUpdated", sync); // use same event name as Navbar
    return () => window.removeEventListener("cartListUpdated", sync);
  }, []);

  return (
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
      <Heading highlight="Your" heading="Cart"/>
      {addCart.length === 0 ? (
        <p className="text-xl text-zinc-500 mt-10">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          {addCart.map(item => (
            <div key={item.id} className="flex flex-col items-center">
              <Cards
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                onCartChange={loadCartList}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
