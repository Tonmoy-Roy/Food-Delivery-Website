'use client'
import React from 'react';
import Image from 'next/image'
import logo from '../../../public/images/LOGO 1.png'
import user from '../../../public/images/Male User.png'
import busket from '../../../public/images/Full Shopping Basket.png'
import download from '../../../public/images/Forward Button.png'
import star from '../../../public/images/star.png'
import location from '../../../public/images/Location.png'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <div className="">
            <div className="bg-gray-50 border-gray-100 border-2 pl-3 text-center text-sm max-w-7xl mx-auto rounded-b-xl mb-5">
                <div className='md:flex justify-between'>
                    <span className="inline-flex items-center gap-2">
                        <Image
                            src={star}
                            alt=""
                            className=""
                        />
                        <span>Get 5% Off your first order, <span className="text-orange-500 font-semibold underline">Promo: ORDER5</span></span>
                    </span>
                    <div className="flex items-center justify-between">
                        {/* Location */}
                        <div className="hidden md:flex items-center gap-2 text-sm mr-20 py-3">
                            <Image
                                src={location}
                                alt=""
                                className=""
                            />
                            <span className="font-medium">Regent Street, A4, A420, London</span>
                            <button className="text-orange-500 underline ml-1">Change Location</button>
                        </div>

                        {/* Cart and Login */}
                        <div className="flex items-center gap-4 ml-auto mt-[-2]">
                            <button className="relative bg-green-700 text-white px-4 py-2 rounded-b-lg flex items-center">
                                <div className="flex items-center gap-2">

                                    <div className="pr-2 border-r">
                                        <Image src={busket} alt="" />
                                    </div>
                                    <div className='border-r'>
                                        <span className="hidden sm:inline pr-2">23 Items</span>
                                    </div>

                                    <div className="flex items-center gap-2 pl-2 pr-2 border-r">
                                        <span className="font-semibold">GBP 79.89</span>
                                    </div>

                                    <div className="flex items-center gap-2 pl-2">
                                        <Image src={download} alt="" />
                                    </div>

                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <header>
                <div className="max-w-7xl mx-auto mb-5 p-5">
                    {/* Navigation */}
                    <nav className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-8">
                            <div className="text-3xl font-bold mr-20">
                                <Image
                                    src={logo}
                                    alt=""
                                    className=""
                                />
                            </div>
                            {/* Nav Links */}
                            <div className="hidden lg:flex items-center gap-1">
                                <Link
                                    href="/"
                                    className={`px-6 py-2 rounded-full transition 
          ${isActive("/") ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                                >
                                    Home
                                </Link>

                                <Link
                                    href=""
                                    className={`px-6 py-2 rounded-full transition 
          ${isActive("/browse-menu") ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                                >
                                    Browse Menu
                                </Link>

                                <Link
                                    href=""
                                    className={`px-6 py-2 rounded-full transition 
          ${isActive("/special-offers") ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                                >
                                    Special Offers
                                </Link>

                                <Link
                                    href="/Restaurant"
                                    className={`px-6 py-2 rounded-full transition 
          ${isActive("/Restaurant") ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                                >
                                    Restaurants
                                </Link>

                                <Link
                                    href=""
                                    className={`px-6 py-2 rounded-full transition 
          ${isActive("/track-order") ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}
                                >
                                    Track Order
                                </Link>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
                            <Image
                                src={user}
                                alt=""
                                className=""
                            />
                            <span className="hidden sm:inline">Login/Signup</span>
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;