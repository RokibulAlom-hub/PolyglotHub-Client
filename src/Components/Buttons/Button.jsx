import React from 'react';

const Button = ({btntext}) => {
    return (
        <div className='p-2 text-center bg-secondary text-black rounded-md font-semibold mt-3 hover:bg-accent hover:scale-110 hover:text-white duration-200 ease-in-out'>
            {btntext}
        </div>
    )
};

export default Button;