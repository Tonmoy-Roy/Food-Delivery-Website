'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import search from '../../../../public/images/Search More.png'
const Offers = () => {
    const [activeTab, setActiveTab] = useState('Offers');

    const tabs = [
        'Offers',
        'Burgers',
        'Fries',
        'Snacks',
        'Salads',
        'Cold drinks',
        'Happy Meal®',
        'Desserts',
        'Hot drinks',
        'Sauces',
        'Orbit®',
    ];

    return (
        <div>
            <div>
                <div className='md:flex justify-between p-10'>
                    <div className='mb-5'>
                        <p className='text-xl font-semibold'>All Offers from McDonald’s East London</p>
                    </div>
                    <div className='relative'>
                        <input
                            type="text"
                            className='border rounded-full p-3 pl-10 pr-12 w-full'
                            placeholder='Search from menu'
                        />
                        <Image
                            src={search}
                            alt="Search icon"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
                        />
                    </div>
                </div>
            </div>
            <div className="relative left-1/2 right-1/2 max-w-screen w-screen -mx-[51vw]
                bg-gray-100 border-b border-gray-200 mb-5">

                <div className="p-5 rounded md:ml-35 ml-5">
                    <nav className="md:flex md:space-x-11 space-x-6 overflow-x-auto scrollbar-hide" aria-label="Menu categories">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={(
                                    "relative py-4 px-1 text-sm font-bold whitespace-nowrap transition-all duration-200 border-b-4 ",
                                    activeTab === tab
                                        ? "border-mcdonalds-red font-semibold bg-black text-white p-1 rounded-full md:w-[5vw]"
                                        : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300 font-bold"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Offers;