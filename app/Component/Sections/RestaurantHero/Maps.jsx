import React from 'react';
import Image from 'next/image'
import map from '../../../../public/images/Rectangle 52.png'
import location from '../../../../public/images/Previous Location.png'
const Maps = () => {
    return (
        <div className='relative mb-10'>
            <Image src={map} alt='' className='md:h-[80vh] md:w-screen h-110' />
            <div className="absolute inset-0 md:h-[55vh] md:w-[20vw] w-70 h-75 bg-slate-900 text-white rounded-2xl p-8 shadow-xl top-20 md:ml-20 ml-2">
                <h2 className="md:text-3xl text-xl font-bold mb-1">McDonald's</h2>
                <p className="text-orange-400 md:text-xl text-base font-semibold md:mb-6 mb-2">South London</p>
                <p className="text-gray-300 text-sm leading-relaxed md:mb-6 mb-2">
                    Tooley St, London Bridge, London SE1 2TF,<br />
                    United Kingdom
                </p>

                <div className="md:mb-6 mb-2">
                    <p className="text-white text-sm font-semibold mb-1">Phone number</p>
                    <a
                        href="tel:+934443-43"
                        className="text-orange-400 text-lg font-semibold hover:text-orange-400 transition-colors"
                    >
                        +934443-43
                    </a>
                </div>

                <div>
                    <p className="text-white text-sm font-semibold mb-1">Website</p>
                    <a
                        href="http://mcdonalds.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 text-lg font-semibold hover:text-orange-400 transition-colors hover:underline"
                    >
                        http://mcdonalds.uk/
                    </a>
                </div>
            </div>
            <div className='bg-white md:w-[9vw] md:h-[9vh] absolute right-40 top-45 p-3 rounded hidden md:block '>
                <p className=''><span className='font-bold'>McDonald’s </span>South London</p>
                <Image src={location} alt='' className='absolute -top-2 -right-2 h-8 w-8 rounded-full border-2  bg-black shadow-md p-1'/>
            </div>
        </div>
    );
};

export default Maps;