import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image'
import mainimg from '../../../public/images/Untitled-2 1.png'
import mainimg1 from '../../../public/images/Untitled-1 1.png'
const HeroSection = () => {
    return (
        <div className='mb-5'>
            {/* Hero Section */}
            <section className="p-5 max-w-7xl mx-auto relative hero-bg overflow-hidden  border-red-600 rounded-lg">
                <div className="">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="text-white space-y-6 z-10">
                            <div className="space-y-2">
                                <p className="text-sm opacity-90">Order Restaurant food, takeaway and groceries.</p>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    Feast Your Senses,<br />
                                    <span className="text-orange-400">Fast and Fresh</span>
                                </h1>
                            </div>

                            {/* Search Box */}
                            <div className="max-w-md">
                                <p className="text-sm mb-3 opacity-90">Enter a postcode to see what we deliver</p>
                                <div className="flex gap-2 relative ">
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

                        {/* Right Content - Image Placeholder */}
                        <div className="relative w-full overflow-hidden bg-gray-900">

                            {/* 1. Orange Background Curve (Right Side) */}
                            <div className="absolute top-0 right-0 w-[45%] h-full bg-[#FF9900] rounded-l-[150px] "></div>

                            <div className="container mx-auto relative h-full">
                                <div className="flex justify-center lg:justify-end items-center h-full relative">

                                    {/* --- IMAGES SECTION --- */}
                                    {/* Image Wrapper */}
                                    <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center lg:mr-32">

                                        {/* 1st Image: Background Girl (Pichone - Faded) */}
                                        <div className="absolute top-0 left-[-50px] w-full h-full z-0 opacity-20 grayscale mix-blend-screen transform scale-110">
                                            <Image
                                                src={mainimg1} // অথবা ব্যাকগ্রাউন্ডের জন্য আলাদা ইমেজ থাকলে সেটি দিন
                                                alt="Background effect"
                                                layout="fill"
                                                objectFit="contain"
                                                
                                            />
                                        </div>

                                        {/* 2nd Image: Main Girl (Samne - Clear) */}
                                        <div className="relative z-10 w-full h-auto drop-shadow-2xl">
                                            <Image
                                                src={mainimg}
                                                alt="Main Character"
                                                width={500}
                                                height={600}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* --- RIGHT SIDE CARDS & NUMBERS --- */}

                                    {/* Step 1 */}
                                    <div className="absolute top-[10%] right-5 lg:right-[10%] z-20 w-64">
                                        <span className="absolute -top-10 -right-2 text-8xl font-bold text-white opacity-20 select-none">1</span>
                                        <div className="relative bg-white rounded-2xl shadow-xl p-3 transform hover:scale-105 transition duration-300">
                                            <div className="flex items-center gap-3">
                                                <div className="font-bold text-gray-800 text-lg">Order</div>
                                                <span className="text-xs text-gray-400 ml-auto">now</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1 font-semibold">We've Received your order!</p>
                                            <p className="text-[10px] text-gray-400">Awaiting Restaurant acceptance</p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="absolute top-[40%] right-0 lg:right-5 z-20 w-64">
                                        <span className="absolute -top-10 -right-2 text-8xl font-bold text-white opacity-20 select-none">2</span>
                                        <div className="relative bg-white rounded-2xl shadow-xl p-3 transform hover:scale-105 transition duration-300">
                                            <div className="flex items-center gap-3">
                                                <div className="font-bold text-gray-800 text-lg">Order</div>
                                                <span className="text-xs text-gray-400 ml-auto">now</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1 font-semibold">Order Accepted! ✅</p>
                                            <p className="text-[10px] text-gray-400">Your order will be delivered shortly</p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="absolute bottom-[10%] right-5 lg:right-[10%] z-20 w-64">
                                        <span className="absolute -top-10 -right-2 text-8xl font-bold text-white opacity-20 select-none">3</span>
                                        <div className="relative bg-white rounded-2xl shadow-xl p-3 transform hover:scale-105 transition duration-300">
                                            <div className="flex items-center gap-3">
                                                <div className="font-bold text-gray-800 text-lg">Order</div>
                                                <span className="text-xs text-gray-400 ml-auto">now</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1 font-semibold">Your rider's nearby 🎉</p>
                                            <p className="text-[10px] text-gray-400">They’re almost there - get ready!</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Mobile Menu Button */}
            <button className="lg:hidden fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg z-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
};

export default HeroSection;