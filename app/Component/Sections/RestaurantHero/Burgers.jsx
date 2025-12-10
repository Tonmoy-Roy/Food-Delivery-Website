import React from 'react';
import menuItems from '../../Constants/MENUITEMS';
import plus from '../../../../public/images/Plus.png'
import Image from 'next/image';
const Burgers = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <p className='text-3xl font-bold mb-5'>Burgers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                    >
                        <div className="grid grid-cols-[1fr_160px] gap-4 p-6">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 ">
                                        {item.description}
                                    </p>
                                </div>
                                <p className="text-xl font-bold text-gray-900">
                                    {item.price}
                                </p>
                            </div>

                            <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                <button className="absolute -bottom-3 -right-3 bg-white shadow-lg rounded-l-2xl p-2">
                                    <Image src={plus} alt='' className=''/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Burgers;