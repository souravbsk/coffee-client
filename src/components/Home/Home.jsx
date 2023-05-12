/* eslint-disable no-unused-vars */
import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Services from '../Services/Services';
import FollowUsInsta from '../FollowUsInsta/FollowUsInsta';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffeeDataLoad = useLoaderData();
    console.log(coffeeDataLoad);
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <Products coffeeDataLoad={coffeeDataLoad}></Products>
            <FollowUsInsta></FollowUsInsta>
        </div>
    );
};

export default Home;