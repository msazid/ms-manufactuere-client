import React from 'react';
import Featured from './Featured';
import HeroSection from './HeroSection';
import Products from './Products';
import Services from './Services';
import Summary from './Summary';
const Home = () => {
    return (
        <div className='position-relative'>
            <HeroSection />
            <Featured />
            <Products />
            <Services/>
            <Summary/>
        </div>
    );
};

export default Home;