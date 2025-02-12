import React from 'react';

const Button = ({btntext}) => {
    return (
        <button className='p-2 bg-secondary rounded-md font-semibold mt-3 hover:bg-accent hover:scale-110 hover:text-white duration-200 ease-in-out'>
            {btntext}
        </button>
    )
};

export default Button;