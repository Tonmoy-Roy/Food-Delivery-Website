'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import deals from '../Constants/DEALS'
const ExclusiveDeals = () => {
    const [activeCategory, setActiveCategory] = useState('Pizza & Fast food');
    const categories = ['Vegan', 'Sushi', 'Pizza & Fast food', 'others'];
    return (
        <div className='max-w-7xl mx-auto mb-5'>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <h1 className="text-xl md:text-2xl font-bold">
                    Up to -40% 🎊 Order.uk exclusive deals
                </h1>

                <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deals.map((deal) => (
                    <div
                        key={deal.id}
                        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="relative h-72 overflow-hidden">
                            <Image
                                src={deal.image}
                                alt={deal.restaurant}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            <div className="absolute top-0 right-4 bg-slate-900 text-white px-4 py-2 rounded-b-lg font-bold text-lg">
                                {deal.discount}
                            </div>

                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-orange-400 text-sm font-medium mb-1">Restaurant</p>
                                <h3 className="text-lg font-bold">{deal.restaurant}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveDeals;