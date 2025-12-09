import React from 'react';
import Image from 'next/image'
import restaurants from '../Constants/RESTAURANTS'
const PopularRestaurants = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="text-xl md:text-2xl font-bold mb-8 ml-5">
                Popular Restaurants
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {restaurants.map((category) => (
                    <div
                        key={category.id}
                        className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                        <div className={`${category.bgColor} rounded-t-lg overflow-hidden aspect-square flex items-center justify-center p-4`}>
                            <Image
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <div className="bg-black rounded-b-lg px-4 py-3 text-center">
                            <h3 className="text-orange-400 font-semibold text-sm mb-1">
                                {category.name}
                            </h3>
                            <p className="text-white text-xs">
                                {category.restaurants} Restaurants
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularRestaurants;