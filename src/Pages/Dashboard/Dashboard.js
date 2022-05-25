import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
           <div className='border d-flex justify-content-center justify-content-md-end me-5'>
           <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
           </div>
           <div className="container">
               <h2>Dashboard</h2>
               <Outlet></Outlet>
           </div>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
                    <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body text-start">
                   <p> <Link className='nav-link text-dark'  to='/dashboard'>My Orders</Link></p>
                   <p> <Link className='nav-link text-dark' to='/dashboard/addreview'>Add A review</Link></p>
                   <p>
                   <Link className='nav-link text-dark' to='/dashboard/profile'>Profile</Link>
                   </p>
                </div>
            </div>
        
        </div>
    );
};

export default Dashboard;