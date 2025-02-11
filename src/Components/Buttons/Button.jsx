import React from 'react';

const Button = ({btntext}) => {
    return (
        <button className='p-2 bg-secondary rounded-md font-semibold text-black'>
            {btntext}
        </button>
    )
};

export default Button;