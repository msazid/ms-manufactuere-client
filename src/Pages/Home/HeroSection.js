import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/HeroSection.css'
const HeroSection = () => {

    return (
        <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active slider-1">
                    <div className='d-flex align-items-center w-100 h-100 container'>
                        <div>
                            <span className='banner-title-1 d-block text-center text-md-start'>SPECIAL OFFER</span>
                            <h1 className='banner-title-2 text-center text-md-start'>HIGH PERFORMANCE <br />
                                INDUSTRIAL TOOLS
                            </h1>
                            <p className='banner-title-3 text-center text-md-start'>SAVE UP TO $500</p>
                            <p></p>
                            <div className=' text-center text-md-start'>
                                <Link style={{textDecoration:'none'}} to='/showAllItems' className="banner-button">Show All Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item slider-2">
                    <div className='d-flex align-items-center justify-content-end w-100 h-100 container'>
                        <div>
                            <span className='banner-title-1 text-center  text-md-end d-block'>SPECIAL OFFER</span>
                            <h1 className='banner-title-2  text-center text-md-end'>HIGH PERFORMANCE <br />
                                INDUSTRIAL TOOLS
                            </h1>
                            <p className='banner-title-3 text-center text-md-end '>SAVE UP TO $500</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item slider-3">
                    <div className='d-flex align-items-center w-100 h-100 container'>
                        <div>
                            <span className='banner-title-1 d-block text-center text-md-start'>SPECIAL OFFER</span>
                            <h1 className='banner-title-2 text-center text-md-start'>HIGH PERFORMANCE <br />
                                INDUSTRIAL TOOLS
                            </h1>
                            <p className='banner-title-3 text-center text-md-start'>SAVE UP TO $500</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroSection;