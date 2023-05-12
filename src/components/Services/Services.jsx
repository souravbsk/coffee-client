import React from 'react';
import serviceOne from "../../assets/images/icons/1.png"
import serviceTwo from "../../assets/images/icons/2.png"
import serviceThree from "../../assets/images/icons/3.png"
import serviceFour from "../../assets/images/icons/4.png"

const Services = () => {
    return (
        <div className='bg-yellow-50 py-14'>
           <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='space-y-2'>
                <img className='max-w-full object-cover w-[70px] h-[70px]' src={serviceOne} alt="" />
                <h4 className='text-2xl'>Awesome Aroma</h4>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-2'>
                <img className='max-w-full object-cover w-[70px] h-[70px]' src={serviceTwo} alt="" />
                <h4 className='text-2xl'>High Quality</h4>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-2'>
                <img className='max-w-full object-cover w-[70px] h-[70px]' src={serviceThree} alt="" />
                <h4 className='text-2xl'>Pure Grades</h4>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-2'>
                <img className='max-w-full object-cover w-[70px] h-[70px]' src={serviceFour} alt="" />
                <h4 className='text-2xl'>Proper Roasting</h4>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
           </div>
        </div>
    );
};

export default Services;