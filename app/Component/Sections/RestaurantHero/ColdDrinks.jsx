'use client'
import React from 'react';
import Image from 'next/image'
import plus from '../../../../public/images/Plus.png'
import data from '../../Constants/DRINKS'
import Link from 'next/link';

const ColdDrinks = () => {
    const MenuCard = ({ title, desc, price, img }) => {
        return (
            <div className="bg-white rounded-2xl p-5 flex gap-5 relative shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
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

                    <Link href={`/Ordering`} className="absolute -bottom-3 -right-3 bg-white shadow-lg rounded-l-2xl p-2 hover:bg-green-600">
                        <Image src={plus} alt='' className='' />
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className='mb-10'>
            <p className='text-2xl font-bold mb-5 fries-color'>Cold Drinks</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {data.map((item, i) => (
                    <MenuCard key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ColdDrinks;