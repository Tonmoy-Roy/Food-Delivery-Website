"use client";
import React from 'react';
import Image from 'next/image';
import { useOrder } from './Context/OrderContext';
import orderimg from '../../public/images/Order Completed.png';
import motorcross from '../../public/images/Motocross.png';
import burger1 from '../../public/images/Rectangle 43.png';
import clock from '../../public/images/Clock.png';
import ReviewCard from '../Component/Reusable/ReviewCard';
import DaliveryInformation from '../Component/Reusable/DaliveryInformation';
import banner from '../../public/images/ordering banner.png';
import Maps from '../Component/Reusable/Maps';
import CustomerReviews from '../Component/Reusable/CustomerReviews';
import SimilarRestaurant from '../Component/Reusable/SimilarRestaurant';
import busket from '../../public/images/Full Shopping Basket.png';
import pizzas from '../Component/Constants/PIZZAS';
import chilli from '../../public/images/icons8-chilli-96 2.png'
import chilli1 from '../../public/images/icons8-chilli-96 5.png'

const CATEGORIES_LIST = ["Burger", "Fries", "Cold Drinks", "Pizza", "Pasta"];

const Page = () => {
  const {
    basket,
    selectedCategory,
    setSelectedCategory,
  } = useOrder();

  const calculateTotal = () => {
    return basket.reduce((total, item) => 23.10 + (23.10 * item.qty), 0).toFixed(2);
  };

  return (
    <div className='max-w-7xl mx-auto mb-20 px-4'>
      <div className="relative bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl overflow-hidden shadow-lg mb-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-4 p-6 md:h-[60vh]">
          <div className="flex flex-col justify-end z-10">
            <span className="text-sm text-gray-600 mb-3">
              Desi Flavours with a blend of Italian aesthetics!
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tandoori Pizza London
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm">
                <Image src={orderimg} alt="" />
                <span>Minimum Order: 12 GBP</span>
              </div>
              <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm">
                <Image src={motorcross} alt="" />
                <span>Delivery in 20-25 Minutes</span>
              </div>
            </div>
            <div className="absolute opacity-10 bottom-8 -z-10">
              <Image src={burger1} alt="" className="w-full" />
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full w-fit">
              <Image src={clock} alt="" />
              <span className="font-semibold text-sm">Open until 3:00 AM</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center hidden md:flex">
            <Image src={banner} alt="" className="md:h-[40vh] md:w-[25vw] object-contain" />
            <div className="absolute bottom-0 -left-10 bg-white rounded-lg p-4 shadow-md">
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <div className="lg:col-span-2 space-y-3">
          {CATEGORIES_LIST.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory?.(cat)}
              className={`w-full py-3 px-4 rounded-lg font-medium text-left transition ${selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="lg:col-span-7 bg-gray-50 rounded-xl min-h-[300px] flex items-center justify-center mb-10">
          <div className="space-y-6">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    {/* Title and Rating */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pizza.name}
                    </h3>
                    <div className='flex mb-5'>
                      <Image
                        src={chilli}
                        alt=''
                        className=''
                      />
                      <Image
                        src={chilli}
                        alt=''
                        className=''
                      />
                      <Image
                        src={chilli}
                        alt=''
                        className=''
                      />
                      <Image
                        src={chilli1}
                        alt=''
                        className=''
                      />
                      <Image
                        src={chilli1}
                        alt=''
                        className=''
                      />
                    </div>

                    <p className="text-gray-600 text-sm mb-15 md:w-[16vw]">
                      {pizza.description}
                    </p>

                    <div className="space-y-3 md:w-[31.5vw]">
                      <div className="flex gap-3 ">
                        <button className="px-6 py-2 bg-gray-900 text-white rounded font-semibold hover:bg-gray-800 transition">
                          Small
                        </button>
                        <button className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">
                          £{pizza.prices.small.toFixed(2)}
                        </button>

                        <button className="px-6 py-2 border hover:text-white rounded font-semibold hover:bg-gray-800 transition">
                          Medium
                        </button>
                        <button className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">
                          £{pizza.prices.medium.toFixed(2)}
                        </button>

                        <button className="px-6 py-2 border hover:text-white rounded font-semibold hover:bg-gray-800 transition">
                          Large
                        </button>
                        <button className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">
                          £{pizza.prices.large.toFixed(2)}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button className="px-6 py-2 border hover:text-white rounded font-semibold hover:bg-gray-800 transition">
                          XL Large with Sauces
                        </button>
                        <button className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">
                          £{pizza.prices.xlarge.toFixed(2)}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={pizza.image}
                        alt={pizza.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-5 sticky top-5 border border-gray-100 mb-10">
            <div className='flex bg-green-600 rounded p-2 text-white items-center justify-center'>
              <Image
                src={busket}
                alt=''
                className='mr-5'
              />
              <h3 className="font-bold text-xl mb-4 pb-2">My Basket</h3>
            </div>

            {basket.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                <p>No items added</p>
              </div>
            ) : (
              <div className="space-y-4">
                {basket.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <div className="flex-1">
                      <p className="font-semibold text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="font-medium text-sm">£23.10</p>
                  </div>
                ))}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span>£{calculateTotal()}</span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-md">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <DaliveryInformation></DaliveryInformation>
      <Maps></Maps>
      <CustomerReviews></CustomerReviews>
      <SimilarRestaurant></SimilarRestaurant>
    </div>
  );
};

export default Page;