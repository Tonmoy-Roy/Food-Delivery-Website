'use client'
import React from 'react';
import Image from 'next/image';
import delivery from '../../../../public/images/Tracking.png'
import contact from '../../../../public/images/ID Verified.png'
import clock from '../../../../public/images/Clock1.png'
const DaliveryInformation = () => {
    const deliveryHours = [
        { day: 'Monday', hours: '12:00 AM-3:00 AM, 8:00 AM-3:00 AM' },
        { day: 'Tuesday', hours: '8:00 AM-3:00 AM' },
        { day: 'Wednesday', hours: '8:00 AM-3:00 AM' },
        { day: 'Thursday', hours: '8:00 AM-3:00 AM' },
        { day: 'Friday', hours: '8:00 AM-3:00 AM' },
        { day: 'Saturday', hours: '8:00 AM-3:00 AM' },
        { day: 'Sunday', hours: '8:00 AM-12:00 AM' },
    ];

    const operationalHours = [
        { day: 'Monday', hours: '8:00 AM-3:00 AM' },
        { day: 'Tuesday', hours: '8:00 AM-3:00 AM' },
        { day: 'Wednesday', hours: '8:00 AM-3:00 AM' },
        { day: 'Thursday', hours: '8:00 AM-3:00 AM' },
        { day: 'Friday', hours: '8:00 AM-3:00 AM' },
        { day: 'Saturday', hours: '8:00 AM-3:00 AM' },
        { day: 'Sunday', hours: '8:00 AM-3:00 AM' },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-0 shadow-lg rounded-3xl overflow-hidden">
                <div className="bg-white p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Image src={delivery} alt="" className=""/>
                        <h2 className="text-xl font-bold">Delivery information</h2>
                    </div>

                    <div className="space-y-2 text-sm mb-2">
                        {deliveryHours.map((item) => (
                            <div key={item.day} className="flex">
                                <span className="font-semibold min-w-24">{item.day}:</span>
                                <span className="text-gray-600">{item.hours}</span>
                            </div>
                        ))}
                    </div>
                    <span className="font-semibold">Estimated time until delivery:</span>
                    <span className="text-gray-600"> 20 min</span>


                </div>

                <div className="bg-white p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Image src={contact} alt='' className=''/>
                        <h2 className="text-xl font-bold">Contact information</h2>
                    </div>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-semibold mb-1">Phone number</p>
                            <p className="text-sm text-gray-600">+934443-43</p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold mb-1">Website</p>
                            <a href="http://mcdonalds.uk/" className="text-sm text-gray-600 hover:text-orange-500 underline">
                                http://mcdonalds.uk/
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-8 min-w-[280px]">
                    <div className="flex items-center gap-3 mb-6">
                        <Image src={clock} alt='' className=''/>
                        <h2 className="text-xl font-bold">Operational Times</h2>
                    </div>

                    <div className="space-y-2 text-sm">
                        {operationalHours.map((item) => (
                            <div key={item.day} className="flex">
                                <span className="font-semibold min-w-24">{item.day}:</span>
                                <span className="text-gray-300">{item.hours}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaliveryInformation;