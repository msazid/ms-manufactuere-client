import React from 'react';

const Summary = () => {
    return (
        <div className='py-3' style={{ backgroundColor: '#EFEFEF' }}>
            <div className="container py-3">
                <h1 className='text-center' style={{ textTransform: 'uppercase', fontFamily: 'lato', color: '#FF8C32' }}>Millions Business Traders Trust US</h1>
                <p className='text-center' style={{ fontSize: '20px', textTransform: 'uppercase' }}>We are always look for our users expectations</p>
            </div>
            <div className="container">
                <div className="">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 ">
                            <div class="card mx-auto my-1 my-lg-0 mx-md-0" style={{ width: '18rem', border: 'none' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '64px', color: '#FF8C32' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                        </svg>
                                    </h5>
                                    <h3 className='text-center'>
                                        50,000
                                    </h3>
                                    <h6 className='text-center' style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }}>Worldwide Delivery System</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div class="card mx-auto my-1 my-lg-0 mx-md-0" style={{ width: '18rem', border: 'none' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '64px', color: '#FF8C32' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </h5>
                                    <h3 className='text-center'>
                                        700,000
                                    </h3>
                                    <h6 className='text-center' style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }}>Client Satisfactions</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div class="card mx-auto my-1 my-lg-0 mx-md-0" style={{ width: '18rem', border: 'none' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center"><svg xmlns="http://www.w3.org/2000/svg" style={{ width: '64px', color: '#FF8C32' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg></h5>
                                    <h3 className='text-center'>
                                        1.5M
                                    </h3>
                                    <h6 className='text-center' style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }}>Huge Community</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div class="card mx-auto my-1 my-lg-0 mx-md-0" style={{ width: '18rem', border: 'none' }}>
                                <div class="card-body">
                                    <h5 class="card-title text-center"><svg xmlns="http://www.w3.org/2000/svg" style={{ width: '64px', color: '#FF8C32' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg></h5>
                                    <h3 className='text-center'>
                                        20.50M
                                    </h3>
                                    <h6 className='text-center' style={{ fontFamily: 'Poppins', textTransform: 'uppercase' }}>Monthly Revenue</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;