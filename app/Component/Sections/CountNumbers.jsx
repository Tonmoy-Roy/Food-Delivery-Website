'use client'
import React, { useState, useEffect, useRef } from 'react';

const CountNumbers = () => {
    const [counts, setCounts] = useState({
        riders: 0,
        orders: 0,
        restaurants: 0,
        items: 0,
    });

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { id: 'riders', target: 546, label: 'Registered Riders', suffix: '+' },
        { id: 'orders', target: 789900, label: 'Orders Delivered', suffix: '+' },
        { id: 'restaurants', target: 690, label: 'Restaurants Partnered', suffix: '+' },
        { id: 'items', target: 17457, label: 'Food items', suffix: '+' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; 
        const frameRate = 1000 / 60; 
        const totalFrames = duration / frameRate;

        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;

            setCounts({
                riders: Math.floor(stats[0].target * easeOutQuad(progress)),
                orders: Math.floor(stats[1].target * easeOutQuad(progress)),
                restaurants: Math.floor(stats[2].target * easeOutQuad(progress)),
                items: Math.floor(stats[3].target * easeOutQuad(progress)),
            });

            if (frame >= totalFrames) {
                clearInterval(counter);
                setCounts({
                    riders: stats[0].target,
                    orders: stats[1].target,
                    restaurants: stats[2].target,
                    items: stats[3].target,
                });
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [isVisible]);

    const easeOutQuad = (t) => t * (2 - t);

    const formatNumber = (num) => {
        return num.toLocaleString();
    };
    return (
        <div ref={sectionRef} className='max-w-7xl mx-auto p-5 mb-5'>
            <div className="bg-orange-500 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-orange-400">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="p-8 text-center hover:bg-orange-600 transition-colors duration-300"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                                {formatNumber(counts[stat.id])}{stat.suffix}
                            </div>
                            <div className="text-white text-sm md:text-base font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountNumbers;