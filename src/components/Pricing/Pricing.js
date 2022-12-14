import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free' , price: 0, features: [
            'Awasome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use Features',
            'Hudai Features',
            'Ajaira Features',
        ] },
        {id: 1, name: 'Medium' , price: 9.99, features: [
            'Everything on free',
            'Extra Features',
            'Unnecessary Features',
            'Will never use Features',
            'Hudai Features',
            'Ajaira Features',
        ] },
        {id: 1, name: 'Premium' , price: 19.99, features: [
            'Everything on premium',
            'Extra Features',
            'Unnecessary Features',
            'Will never use Features',
            'Hudai Features',
            'Ajaira Features',
        ] },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold, bg-indigo-300 p-12 text-white'>Best deal of the town</h2>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mt-5'>
           {
                pricingOptions.map(option => <PriceOption
                key={option.id}
                option={option}
                ></PriceOption> )
            }
           </div>
        </div>
    );
};

export default Pricing;