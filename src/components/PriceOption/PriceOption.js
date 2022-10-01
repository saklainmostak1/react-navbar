import React from 'react';

const PriceOption = ({option}) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div>
                <h3 ><span>{option.price}</span></h3>
                <p>{option.name}</p>
            </div>
        </div>
    );
};

export default PriceOption;