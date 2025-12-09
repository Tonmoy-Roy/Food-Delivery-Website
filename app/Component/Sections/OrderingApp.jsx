import React from 'react';
import Image from 'next/image'
import img1 from '../../../public/images/friends-laughing-using-mobiles 2.png'
import logo from '../../../public/images/LOGO 1.png'
const OrderingApp = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className="bg-gray-200 rounded-3xl overflow-hidden p-2">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="relative h-96 md:h-full bg-gray-200 flex items-center justify-center">
                        <Image
                            src={img1}
                            alt=''
                            className=''
                        />

                    </div>

                    <div className="">
                        <div className="max-w-lg">
                            <div className="mb-5 md:flex md:w-[40vw]">
                                <Image
                                    src={logo}
                                    alt=''
                                    className='md:h-[7.5vh]'
                                />
                                <div className='md:h-[10vh]'>
                                    <p className="text-3xl md:text-6xl  font-bold">ing is more</p>

                                </div>
                            </div>

                            <div className="inline-flex items-center bg-black rounded-r-4xl pl-2 pr-6 py-2 mb-6">
                                <span className="text-orange-400 underline font-bold px-4 py-1 rounded-full text-2xl">
                                    Personalised
                                </span>
                                <span className="text-white font-semibold text-2xl">& Instant</span>
                            </div>

                            <p className="mb-8 text-lg">
                                Download the Order.uk app for faster ordering
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="bg-black hover:bg-gray-800 transition-colors rounded-lg p-1 flex items-center gap-3 group"
                                >
                                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs text-white">Download on the</div>
                                        <div className="text-xl font-semibold text-white">App Store</div>
                                    </div>
                                </a>

                                <a
                                    href="#"
                                    className="bg-black hover:bg-gray-800 transition-colors rounded-lg p-1 flex items-center gap-3 group"
                                >
                                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs text-white">GET IT ON</div>
                                        <div className="text-xl font-semibold text-white">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderingApp;