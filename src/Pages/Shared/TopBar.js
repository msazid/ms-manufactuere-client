import React from 'react';
import { FiPhoneIncoming } from 'react-icons/fi'
import { TiSocialFacebook, TiSocialYoutube, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'
const TopBar = () => {
    return (
        <div>
            <nav style={{ backgroundColor: '#072227' }} className="navbar text-white">
                <div className="container-fluid">
                    <div className='container d-flex flex-wrap justify-content-md-between'>
                        <span style={{ fontSize: '16px' , color:'#FF7700',fontFamily:'lato' }} className='d-flex align-items-center mx-auto mx-md-0'>
                            <FiPhoneIncoming /> +666 - 880 - 33388 (24/7 Helpline)
                        </span>
                        <span style={{ fontSize: '30px' }} className=' mx-auto mx-md-0'>
                            <TiSocialFacebook style={{color:"FF7700"}} className='mx-1' />
                            <TiSocialYoutube  style={{color:"FF7700"}}className='mx-1' />
                            <TiSocialLinkedin style={{color:"FF7700"}} className='mx-1' />
                            <TiSocialTwitter  style={{color:"FF7700"}}className='mx-1' />
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopBar;