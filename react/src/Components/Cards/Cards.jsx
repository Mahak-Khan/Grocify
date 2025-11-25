import React, { useEffect, useState } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';
import Button from '../Button/Button';

const Cards = ({ id, image, name, price, onWishlistChange }) => {
  const [added, setAdded] = useState(false);

  const getWishlist = () => JSON.parse(localStorage.getItem("wishlist")) || [];

  // Check if this item is in wishlist
  useEffect(() => {
    if (!id) return;
    const wishlist = getWishlist();
    setAdded(wishlist.some(item => item.id === id));
  }, [id]);

  const toggleWishlist = () => {
    let wishlist = getWishlist();
    let updated;

    if (added) {
      // Remove from wishlist
      updated = wishlist.filter(item => item.id !== id);
      setAdded(false);
    } else {
      // Add only if not already in wishlist
      if (!wishlist.some(item => item.id === id)) {
        updated = [...wishlist, { id, image, name, price }];
        setAdded(true);
      } else {
        updated = wishlist;
      }
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));

    // Notify parent to update
    if (onWishlistChange) onWishlistChange();
  };

  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
      <div className='flex justify-between'>
        <span
          className={`text-3xl cursor-pointer ${added ? "text-rose-500" : "text-zinc-300"}`}
          onClick={toggleWishlist}
        >
          <FaHeart />
        </span>
        <button className='bg-linear-to-b from-rose-400 to-rose-500 text-white text-xl px-4 py-3 rounded-lg'>
          <FaPlus />
        </button>
      </div>

      <div className='w-full h-50'>
        <img src={image} alt={name} className='w-full h-full mx-auto object-contain' />
      </div>

      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>₹{price}</p>
        <Button content='Shop Now' />
      </div>
    </div>
  );
};

export default Cards;
