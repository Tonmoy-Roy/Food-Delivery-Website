'use client'
import React, { useState } from 'react';
import steps from  '../../Constants/STEPS';
import Image from 'next/image'
import img1 from '../../../../public/images/order-food 1.png'
import img2 from '../../../../public/images/food 2.png'
import img3 from '../../../../public/images/order 3.png'
const KnowMore = () => {
    const [activeTab, setActiveTab] = useState('Frequent Questions');
    const [activeQuestion, setActiveQuestion] = useState('How does Order.UK work?');

    const tabs = ['Frequent Questions', 'Who we are?', 'Partner Program', 'Help & Support'];

    const questions = [
        'How does Order.UK work?',
        'What payment methods are accepted?',
        'Can I track my order in real-time?',
        'Are there any special discounts or promotions available?',
        'Is Order.UK available in my area?',
    ];
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className=" rounded-3xl p-8 md:p-12 bg-gray-100">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
                    <h2 className="text-xl md:text-2xl font-bold">Know more about us!</h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeTab === tab
                                    ? ' border border-orange-500 text-black shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-slate-900 rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-[400px_1fr] gap-0">
                        {/* Left Side - Questions */}
                        <div className="bg-slate-900 p-8 border-r border-slate-800">
                            <div className="space-y-3">
                                {questions.map((question) => (
                                    <button
                                        key={question}
                                        onClick={() => setActiveQuestion(question)}
                                        className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all ${activeQuestion === question
                                            ? 'bg-orange-500 text-slate-900'
                                            : 'text-white hover:bg-slate-800'
                                            }`}
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Answer */}
                        <div className="bg-slate-900 p-8">
                            {/* Steps Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {steps.map((step) => (
                                    <div
                                        key={step.id}
                                        className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
                                    >
                                        <div className="text-6xl mb-4">
                                            {step.id === 1 && (
                                                <div className="flex justify-center">
                                                    <div className="relative">
                                                         <Image src={img1} alt="" className=""/>
                                                    </div>
                                                </div>
                                            )}
                                            {step.id === 2 && (
                                                <div className="flex justify-center">
                                                    <div className="relative">
                                                        <Image src={img2} alt="" className=""/>
                                                    </div>
                                                </div>
                                            )}
                                            {step.id === 3 && (
                                                <div className="flex justify-center">
                                                    <div className="relative">
                                                         <Image src={img3} alt="" className=""/>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-white text-center leading-relaxed px-4">
                                Order.UK simplifies the food ordering process. Browse through our diverse menu,
                                select your favorite dishes, and proceed to checkout. Your delicious meal will be
                                on its way to your doorstep in no time!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowMore;