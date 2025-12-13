import React from 'react';
import Image from 'next/image';
import orderimg from '../../public/images/Order Completed.png'
import motorcross from '../../public/images/Motocross.png'
import burger1 from '../../public/images/Rectangle 43.png'
import clock from '../../public/images/Clock.png'
import burger from '../../public/images/Rectangle 44.png'
import ReviewCard from '../Component/Reusable/ReviewCard';
import banner from '../../public/images/ordering banner.png'

const page = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <div className="relaive bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-lg mb-10">
                <div className="grid md:grid-cols-[1fr_auto] gap-4 p-6 md:h-[60vh] h-140">
                    <div className="flex flex-col justify-end">
                        <div className="mb-3">
                            <span className="text-sm text-gray-600">Desi Flavours with a blend of Italian aesthetics!</span>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Tandoori Pizza London
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm md:h-[8vh]">
                                    <Image src={orderimg} alt="" className="" />
                                    <span className="font-medium">Minimum Order: 12 GBP</span>
                                </div>

                                <div className="flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm mb-10 bg-black">
                                    <Image src={motorcross} alt="" className="" />
                                    <span className="font-medium">Delivery in 20-25 Minutes</span>
                                </div>
                            </div>
                        </div>
                        <div className='absolute opacity-10 bottom-8'>
                            <Image src={burger1} alt='' className='md:w-[79.3vw] md:h-[60vh] h-92 w-78' />
                        </div>

                        <div className="absolute md:bottom-3 md:left-35 bottom-18 inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-full md:rounded-r-lg md:rounded-l-none w-fit">
                            <Image src={clock} alt='' className='' />
                            <span className="font-semibold text-sm">Open until 3:00 AM</span>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center justify-center gap-4 mt-5 md:mt-0">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image src={banner} alt="" className="md:h-[40vh] md:w-[25vw] h-40 w-50" />
                        </div>

                        <div className="absolute md:bottom-10 md:-left-20 -left-1 -bottom-10 bg-white rounded-lg px-6 py-3 shadow-md transform -translate-x-2 translate-y-2 md:h-[20vh] md:w-[10vw] h-30 w-20">
                            <ReviewCard></ReviewCard>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-screen'></div>
        </div>
    );
};

export default page;