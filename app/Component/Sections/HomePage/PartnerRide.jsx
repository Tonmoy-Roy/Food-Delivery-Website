import React from 'react';
import Image from 'next/image'
import cards from '../../Constants/CARDS'
const PartnerRide = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className="grid md:grid-cols-2 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`${card.bgColor} rounded-3xl overflow-hidden relative h-80 group cursor-pointer`}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                        </div>

                        <div className="relative h-full flex flex-col">
                            <div className="inline-flex self-start">
                                <span className=" bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-b-lg shadow-lg ml-20">
                                    {card.badge}
                                </span>
                            </div>

                            <div className="mt-auto p-8">
                                <p className="text-orange-400  mb-2 text-sm">
                                    {card.signupText}
                                </p>
                                <h3 className="text-white text-xl md:text-3xl font-bold mb-6">
                                    {card.title}
                                </h3>
                                <button className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerRide;