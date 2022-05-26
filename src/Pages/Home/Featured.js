import React from 'react';
import featured3 from '../../Assets/background/background-3.jpg'
import featured5 from '../../Assets/featured/featured-3.jpg'
import './CSS/Featured.css'
const Featured = () => {
    return (
        <section className="section advert my-5">
            <div className="advert-layout container">
                <div className="item ">
                    <img src={featured3} alt="" />
                    <div className="content left">
                        <span className='featured-text-1 text-end'>Tools & accessories</span>
                        <h3 className='featured-text-2 text-end'>Save Time And Money</h3>
                        <h4 className='featured-text-3 text-end'>Up To 50%</h4>
                        <div className='text-end'>
                            <a href="">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={featured5} alt="" />
                    <div className="content  right">
                        <span className='featured-text-1'>New Trending</span>
                        <h3 style={{ color: '#EE5007' }}>Power Hand tools</h3>
                        <h4 style={{ color: '#FF7700' }}>OUTDOOR ACCESSORIES</h4>
                        <a href="">Shop Now </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;