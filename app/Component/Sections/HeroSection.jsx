'use client'
import React from 'react';
import Image from 'next/image'
import { Search, Check, MapPin, Clock } from 'lucide-react';
import mainimg from '../../../public/images/Untitled-2 1.png'
import mainimg1 from '../../../public/images/Untitled-1 1.png'
const HeroSection = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className="relative w-full bg-[#050E29] overflow-hidden flex items-center justify-center font-sans rounded-2xl">

                <div className="absolute top-5 right-0 w-full lg:w-[34%] h-full bg-[#FF9209] rounded-l-[100px] lg:rounded-l-[200px] z-0"></div>

                <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="text-white space-y-8 pt-10 lg:pt-0">
                        <p className="text-gray-300 text-sm tracking-wide">
                            Order Restaurant food, takeaway and groceries.
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                            Feast Your Senses, <br />
                            <span className="text-[#FF9209]">Fast and Fresh</span>
                        </h1>

                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm pl-2">Enter a postcode to see what we deliver</p>

                            <div className="flex gap-2 relative md:w-[24vw]">
                                <input
                                    type="text"
                                    placeholder="e.g. EC4R 3TE"
                                    className="bg-white flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <button className="absolute right-0 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2">
                                    <Search className="w-5 h-5" />
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] flex items-center justify-center lg:justify-end">

                        <div className="absolute left-0 bottom-[-110] lg:-left-25 w-[350px] md:w-[450px] h-[500px] md:h-[600px]">
                            <div className="w-full h-full rounded-3xl text-white text-center p-4">
                                <Image src={mainimg} alt='' className='' />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 z-30 translate-x-4 lg:translate-x-0 mt-20 ml-4 lg:ml-20">
                            <div className="relative">
                                <span className=" absolute -top-12 right-10 text-6xl font-bold text-white/20 z-0">1</span>
                                <NotificationCard
                                    status="We've Received your order!"
                                    subtext="Awaiting Restaurant acceptance"
                                    time="now"
                                    icon={<Clock size={16} className="text-[#FF9209]" />}
                                />
                            </div>

                            <div className="relative ml-8">
                                <span className="absolute -top-12 right-1 text-6xl font-bold text-white/20 z-0">2</span>
                                <NotificationCard
                                    status="Order Accepted!"
                                    subtext="Your order will be delivered shortly"
                                    time="now"
                                    isSuccess={true}
                                    icon={<Check size={16} className="text-white" />}
                                    className=""
                                />
                            </div>

                            <div className="relative">
                                <span className="absolute -top-8 -right-4 text-6xl font-bold text-white/20 z-0">3</span>
                                <NotificationCard
                                    status="Your rider's nearby"
                                    subtext="They're almost there - get ready!"
                                    time="now"
                                    emoji="🚴"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const NotificationCard = ({ status, subtext, time, isSuccess, emoji, icon }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-xl border-l-4 relative z-10 w-full transform transition hover:scale-105 duration-300 cursor-default md:w-[15vw] border-orange-400">
            <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-1 font-bold text-gray-800">
                    <span className="text-lg">Order</span>
                    <span className="bg-[#050E29] text-white text-[10px] px-1 rounded">uk</span>
                </div>
                <span className="text-xs text-gray-400">{time}</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <h3 className="font-bold text-sm text-gray-800">{status}</h3>
                {isSuccess && <div className="bg-green-500 rounded p-0.5">{icon}</div>}
                {emoji && <span>{emoji}</span>}
            </div>

            <p className="text-xs text-gray-500 mt-1 leading-snug">
                {subtext}
            </p>
        </div>
    );
};

export default HeroSection;