import React from 'react';
import menuItems from '../../Constants/MENUITEMS';
import Image from 'next/image';
const Burgers = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
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

                            <div className="relative flex flex-col items-center justify-between">
                                <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full p-2.5 shadow-lg transition-all duration-300 group-hover:scale-110">
                                    <svg
                                        className="w-5 h-5"
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