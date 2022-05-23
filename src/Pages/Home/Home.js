import React from 'react';
import Brands from './Brands';
import Featured from './Featured';
import HeroSection from './HeroSection';
import Products from './Products';
import Reviews from './Reviews';
import Services from './Services';
import SpecialOffers from './SpecialOffers';
import Summary from './Summary';
const Home = () => {
    return (
        <div className='position-relative'>
            <HeroSection />
            <Featured />
            <Products />
            <Services/>
            <SpecialOffers/>
            <Summary/>
            <Reviews/>
            <Brands/>
        </div>
    );
};

export default Home;