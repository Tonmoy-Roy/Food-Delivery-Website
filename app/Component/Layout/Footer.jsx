'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../../../public/images/LOGO 2.png'
import fb from '../../../public/images/Facebook.png'
import insta from '../../../public/images/Instagram.png'
import tiktok from '../../../public/images/TikTok.png'
import snapchat from '../../../public/images//Snapchat.png'
const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        console.log('Subscribed:', email);
    };
    return (
        <div className='bg-gray-200'>
            <div className=' md:pl-35 pl-10 py-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    <div>
                        <div className="mb-6">
                            <h2 className="text-4xl font-bold">
                                <Image src={img1} alt="" className='md:h-[8vh]' />
                            </h2>
                        </div>

                        <div className="md:flex  gap-3 mb-6">
                            <a
                                href="#"
                                className="bg-black hover:bg-gray-800 transition-colors rounded-lg p-1 flex items-center gap-3 w-fit"
                            >
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">Download on the</div>
                                    <div className="text-sm font-semibold text-white">App Store</div>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="bg-black hover:bg-gray-800 transition-colors rounded-lg p-1 flex items-center gap-3 w-fit"
                            >
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-xs text-gray-300">GET IT ON</div>
                                    <div className="text-sm font-semibold text-white">Google Play</div>
                                </div>
                            </a>
                        </div>

                        <p className="text-sm text-gray-600">
                            Company # 490039-445, Registered with House of companies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Get Exclusive Deals in your Inbox</h3>

                        <div className="mb-4">
                            <div className="flex gap-2 relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="youremail@gmail.com"
                                    className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-orange-500 text-sm"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors absolute right-0"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <p className="text-xs text-gray-600 mb-6">
                            we wont spam, read our <a href="#" className="underline">email policy</a>
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <Image src={fb} alt="" className='md:h-[5vh] md:w-[5vw]' />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <Image src={insta} alt="" className='md:h-[5vh] md:w-[5vw]' />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <Image src={tiktok} alt="" className='md:h-[5vh] md:w-[5vw]' />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <Image src={snapchat} alt="" className='md:h-[5vh] md:w-[5vw]' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Legal Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Terms and conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Modern Slavery Statement
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Important Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Get help
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Add your restaurant
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Sign up to deliver
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors underline">
                                    Create a business account
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' bg-slate-900 text-white md:pl-35 pl-10'>
                <div className='justify-between md:flex'>
                    <div className='mb-5 mt-3'>
                        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                    </div>
                    <div className='md:flex gap-4 mr-20 mt-3'>
                        <p>Privacy Policy</p>
                        <p>Terms</p>
                        <p>Pricing</p>
                        <p>Do not sell or share my personal information</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;