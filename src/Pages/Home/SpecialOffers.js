import React from 'react';
import './CSS/SpecialOffer.css'
const SpecialOffers = () => {
    return (
        <div className='specialOfferBg py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 py-5">
                        <h1 className='text-uppercase text-center' style={{color:'#B33030'}}>Our Hot deals</h1>
                        <h4 className='text-uppercase text-center' style={{color:'#EAFBEA'}}>
                            Times Left
                        </h4>
                        <div>
                            <div className="d-flex justify-content-center gap-2 ">
                                <div  className="card px-2 py-1"style={{backgroundColor:'#461111'}}>
                                    <h1 style={{color:'#EAFBEA', fontFamily:'lato',textTransform:"uppercase",fontSize:'20px'}} className=' text-center px-2'>25 <br /> Days</h1>
                                    <p className="card-text text-center"></p>
                                </div>
                                <div  className="card px-2 py-1"style={{backgroundColor:'#461111'}}>
                                    <h1 style={{color:'#EAFBEA', fontFamily:'lato',textTransform:"uppercase",fontSize:'20px'}} className=' text-center px-2'>25 <br /> Days</h1>
                                    <p className="card-text text-center"></p>
                                </div>
                                <div  className="card px-2 py-1"style={{backgroundColor:'#461111'}}>
                                    <h1 style={{color:'#EAFBEA', fontFamily:'lato',textTransform:"uppercase",fontSize:'20px'}} className=' text-center px-2'>25 <br /> Days</h1>
                                    <p className="card-text text-center"></p>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                            <ul>
                                <li style={{color:'#EAFBEA',fontFamily:'lato',fontSize:'25px',fontWeight:'700',textTransform:'uppercase'}}>Free Shipping</li>
                                <li style={{color:'#EAFBEA',fontFamily:'lato',fontSize:'25px',fontWeight:'700',textTransform:'uppercase'}}>About 35% Discounts</li>
                                <li style={{color:'#EAFBEA',fontFamily:'lato',fontSize:'25px',fontWeight:'700',textTransform:'uppercase'}}>Lifetime membership</li>
                                <li style={{color:'#EAFBEA',fontFamily:'lato',fontSize:'25px',fontWeight:'700',textTransform:'uppercase'}}>Unlimited Support</li>
                            </ul>
                            <button className='py-2 px-3' style={{border:'2px solid #EAFBEA',backgroundColor:'transparent',textTransform:'uppercase', color:'#EAFBEA'}}>
                                Grab The Offer Fast
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;