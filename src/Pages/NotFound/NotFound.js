import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='my-5'>
            <h1 style={{fontSize:"160px"}}>404 !</h1>
            <h4 className='my-4' style={{fontSize:'50px'}}> Ooops, page not found</h4>
      
            <p className='my-2'>Sorry , but requested page is not found </p>
            <Link style={{textDecoration:'none'}} to='/'>Click Here to go home</Link>
        </div>
    );
};

export default NotFound;