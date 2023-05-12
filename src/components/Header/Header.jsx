/* eslint-disable no-unused-vars */
import React from 'react';
import brandLogo from "../../assets/images/more/logo1.png"

const Header = () => {
    return (
        <header className='bg-header bg-cover bg-center'>
           <div className='flex py-6 justify-center items-center gap-2'>
            <img className='w-16 h-20' src={brandLogo} alt="" />
            <h2 className='text-white text-xl  md:text-4xl font-semibold'>Espresso Emporium</h2>
           </div>
        </header>
    );
};

export default Header;