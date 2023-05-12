/* eslint-disable no-unused-vars */
import React from 'react';

const HeroBanner = () => {
    return (
        <div className='bg-banner'>
          <div className='max-w-full px-5 md:w-10/12 mx-auto py-12 md:py-56  md:flex justify-between items-center'>
          <div className='flex-1 space-y-4'>
            <h1 className='text-white text-xl md:text-3xl'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-gray-400'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-yellow-300 px-5 py-3 rounded-sm text-xl'>Learn More</button>
           </div>
           <div className='flex-1'>

           </div>
          </div>
        </div>
    );
};

export default HeroBanner;