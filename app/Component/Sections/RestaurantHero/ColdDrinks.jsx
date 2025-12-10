'use client'
import React from 'react';
import Image from 'next/image'
import plus from '../../../../public/images/Plus.png'
import data from '../../Constants/DRINKS'

const ColdDrinks = () => {
    const MenuCard = ({ title, desc, price, img }) => {
        return (
            <div className="bg-white rounded-2xl shadow-md p-5 flex gap-5 relative">
                <div className="flex-1">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>

                    <p className="text-base font-bold text-gray-900 mt-4">{price}</p>
                </div>

                <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                    <Image
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    <button className="absolute -bottom-3 -right-3 bg-white shadow-lg rounded-l-2xl p-2">
                        <Image src={plus} alt='' className='' />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <p className='text-3xl font-bold mb-5'>Cold Drinks</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                {data.map((item, i) => (
                    <MenuCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ColdDrinks;