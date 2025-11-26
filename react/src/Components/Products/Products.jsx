import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';
import ProductList from '../ProductList/ProductList';
import { Link } from 'react-router-dom';

const Products = () => {
    const categories = ['All', 'Cakes', 'Pastries', 'Cookies', 'Breads'];
    const [activeTab, setActiveTab] = useState('All');
    const [wishlistIds, setWishlistIds] = useState([]);

    // Load wishlist IDs from localStorage
    const loadWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistIds(wishlist.map(item => item.id));
    };

    useEffect(() => {
        loadWishlist();
    }, []);

    // Filter products based on category
    const filteredItems = activeTab === 'All'
        ? ProductList
        : ProductList.filter(item => item.category === activeTab);

    const renderCards = filteredItems.slice(0, 8).map(product => (
        <Cards
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            wishlistIds={wishlistIds}
            onWishlistChange={() => {
                loadWishlist();
                // Trigger navbar update
                window.dispatchEvent(new Event("wishlistUpdated"));
            }}
        />
    ));

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className='flex flex-wrap gap-3 justify-center mt-10'>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-5 py-2 cursor-pointer text-lg rounded-lg ${activeTab === category ? 'bg-gradient-to-b from-rose-400 to-rose-500 text-white' : 'bg-zinc-100'}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Listing */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                    {renderCards}
                </div>

                {/* View All Button */}
                <div className='mt-15 mx-auto w-fit'>
                    <Link
                        to="/AllProducts"
                        className='bg-gradient-to-b from-rose-400 to-rose-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-rose-600 transition-all duration-300 cursor-pointer'
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
