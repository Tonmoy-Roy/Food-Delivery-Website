'use client';
import React, { useState } from 'react';
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
            <div className='max-w-7xl mx-auto p-5'>
                <div className='md:flex justify-between p-10'>
                    <div>
                        <p className='text-xl font-semibold'>All Offers from McDonald’s East London</p>
                    </div>
                    <div>
                        <input type="text" className='border rounded-full p-3' placeholder='Search from menu' />
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-100 border-b border-gray-200 left-0 right-0 mb-5 z-50">
                <div className="p-5 rounded">
                    <nav className="flex space-x-8 overflow-x-auto scrollbar-hide" aria-label="Menu categories">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={(
                                    "relative py-4 px-1 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-4",
                                    activeTab === tab
                                        ? "text-black border-mcdonalds-red font-semibold"
                                        : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
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