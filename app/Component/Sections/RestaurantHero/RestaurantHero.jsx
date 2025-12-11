import React from 'react';
import Image from 'next/image';
import orderimg from '../../../../public/images/Order Completed.png'
import motorcross from '../../../../public/images/Motocross.png'
import burger from '../../../../public/images/Rectangle 44.png'
import Offers from './Offers';
import Cards from './Cards';
import Burgers from './Burgers';
import Fries from './Fries';
import ColdDrinks from './ColdDrinks';
import DaliveryInformation from './DaliveryInformation';
import clock from '../../../../public/images/Clock.png'
const RestaurantHero = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className="relaive bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-[1fr_auto] gap-4 p-6 md:h-[60vh] h-140">
                    <div className="flex flex-col justify-center">
                        <div className="mb-3">
                            <span className="text-sm text-gray-600">I'm lovin' it!</span>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                McDonald's <span className="font-bold text-gray-900">East London</span>
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm md:h-[8vh]">
                                    <Image src={orderimg} alt="" className="" />
                                    <span className="font-medium">Minimum Order: 12 GBP</span>
                                </div>

                                <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm mb-10">
                                    <Image src={motorcross} alt="" className="" />
                                    <span className="font-medium">Delivery in 20-25 Minutes</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute md:-bottom-5 md:left-35 bottom-18 inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-full md:rounded-r-lg md:rounded-l-none w-fit">
                            <Image src={clock} alt='' className='' />
                            <span className="font-semibold text-sm">Open until 3:00 AM</span>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center justify-center gap-4 mt-5 md:mt-0">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image src={burger} alt="" className="md:h-[40vh] md:w-[25vw] h-40 w-50" />
                        </div>

                        <div className="absolute md:bottom-10 md:-left-20 -left-1 -bottom-10 bg-white rounded-lg px-6 py-3 shadow-md transform -translate-x-2 translate-y-2 md:h-[20vh] md:w-[10vw] h-30 w-20">
                            <div className="items-center justify-center gap-2">
                                <span className="md:text-6xl text-2xl font-semibold text-gray-700">3.4</span>
                                <div className="flex flex-col">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3].map((star) => (
                                            <svg
                                                key={star}
                                                className="w-4 h-4 text-orange-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        {[1, 2].map((star) => (
                                            <svg
                                                key={`empty-${star}`}
                                                className="w-4 h-4 text-gray-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">1,360 reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offers></Offers>
            <Cards></Cards>
            <Burgers></Burgers>
            <Fries></Fries>
            <ColdDrinks></ColdDrinks>
            <DaliveryInformation></DaliveryInformation>
        </div>
    );
};

export default RestaurantHero;