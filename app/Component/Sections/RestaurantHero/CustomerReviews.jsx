'use client'
import React, { useEffect, useState } from 'react';
import reviews from '../../Constants/REVIEWS';
import Image from 'next/image'
import time from '../../../../public/images/Time Span.png'
import ReviewCard from '../../Reusable/ReviewCard';
const CustomerReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else {
                setItemsPerView(3);
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);

        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, reviews.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <div className="relative left-1/2 right-1/2 max-w-screen w-screen -mx-[50.5vw]
                customer-bg border-b border-gray-200 mb-20 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl font-bold">Customer Reviews</h2>

                    <div className="flex gap-3">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full p-4 transition-colors shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === maxIndex}
                            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full p-4 transition-colors shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden mb-12">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-6"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0"
                                style={{
                                    width: `calc(${100 / itemsPerView}% - 16px)`,
                                }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Image src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                        <div>
                                            <h3 className="font-bold text-gray-900">{review.name}</h3>
                                            <p className="text-orange-500 text-sm">{review.location}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex gap-0.5 justify-end">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Image src={time} alt="" className="" />
                                            <span>{review.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                    {review.review}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='absolute -bottom-15 left-1/2 bg-white rounded-lg px-6 py-3 shadow-md transform -translate-x-2 translate-y-2 md:h-[20vh] md:w-[10vw] h-30 w-20'>
                    <ReviewCard></ReviewCard>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;