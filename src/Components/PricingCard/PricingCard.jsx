import React from 'react';
import PricingFeature from './PricingFeature';
const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing;
    return (
        <div className='flex flex-col bg-amber-800 border m-5 p-4 rounded-2xl'>
        <div className=''>
            <h1 className='text-7xl '>{name}</h1>
            <h4 className='text-3xl'>{price}</h4>
        </div>
        <div className='bg-amber-400 my-5 p-4 rounded-xl flex-1'>
            <p>{description}</p>
            {
                features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
            }
        </div>
        <button className='btn w-full rounded-lg'>Subscribe</button>
        </div>
    );
};

export default PricingCard;

