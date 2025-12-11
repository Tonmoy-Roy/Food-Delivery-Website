import React from 'react';
import Restaurants from '../../Reusable/Restaurants';

const SimilarRestaurant = () => {
    return (
        <div className='mb-10'>
            <h2 className="text-xl md:text-2xl font-bold mb-8 ml-5">
                Similar Restaurants
            </h2>
            <Restaurants></Restaurants>
        </div>
    );
};

export default SimilarRestaurant;