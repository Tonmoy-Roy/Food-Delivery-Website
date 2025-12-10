'use client'
import React from 'react';
import Image from 'next/image';
import offers from '../../Constants/OFFERS'
const Cards = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="relative h-72">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute top-0 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-lg">
                                {offer.discount}
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-orange-400 text-sm font-medium mb-2">
                                    {offer.restaurant}
                                </p>
                                <h3 className="text-white text-2xl font-bold mb-4">
                                    {offer.title}
                                </h3>
                            </div>
                        </div>

                        <div className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group-hover:scale-110">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;