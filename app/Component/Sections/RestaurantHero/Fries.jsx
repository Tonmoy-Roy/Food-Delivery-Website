'use client'
import React from 'react';
import Image from 'next/image'
import meals from '../../Constants/MEALS'
import plus from '../../../../public/images/Plus.png'
import Link from 'next/link';

const Fries = () => {
    const MealCard = ({ title, items, price, imageUrl }) => (
        <div className="bg-white rounded-xl shadow-md p-4 md:w-[25vw] md:flex justify-between border border-gray-100 hover:shadow-lg transition-shadow">
            <div className='md:w-[13vw]'>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-2 mb-3">{items}</p>
                <span className="text-lg font-bold text-gray-900">GBP {price}</span>
            </div>
            <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                <Link href={`/Ordering`} className="absolute -bottom-3 -right-3 bg-white shadow-lg rounded-l-2xl p-2 hover:bg-green-600" aria-label={`add-${title || 'meal'}`}>
                    <Image src={plus} alt='' className='' />
                </Link>
            </div>
        </div>
    );
    return (
        <div className="mb-10">
            <p className='text-2xl font-bold mb-5 fries-color'>Fries</p>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meals.map((meal, index) => (
                        <MealCard key={index} {...meal} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fries;