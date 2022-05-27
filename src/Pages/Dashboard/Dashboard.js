import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className='border d-flex justify-content-end me-2'>
                <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Options</button>
            </div>
            <div className="container">
                <h2 style={{fontSize:'30px',textTransform:'uppercase',fontFamily:'lato',color:"orange"}}>Welcome To Dashboard</h2>
                <Outlet></Outlet>
            </div>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">More Options</h5>
                    <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-start">
                    <p>
                        <Link className='nav-link text-primary fw-bold text-uppercase' to='/dashboard'>Profile</Link>
                    </p>
                   {!admin && <p> <Link className='nav-link text-primary fw-bold text-uppercase' to='/dashboard/myorders'>My Orders</Link></p>}
                   {!admin  && <p> <Link className='nav-link text-primary fw-bold text-uppercase' to='/dashboard/addreview'>Add A review</Link></p>}
                    {admin &&
                        <>
                         <p> <Link className='nav-link text-primary fw-bold text-uppercase' to='/dashboard/allUsers'>All Users</Link></p>
                         <p> <Link className='nav-link text-primary fw-bold text-uppercase' to='/dashboard/addProduct'>Add A Products</Link></p>
                         <p> <Link className='nav-link text-primary fw-bold text-uppercase' to='/dashboard/manageAllOrders'>Manage All Orders</Link></p>
                        </>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default Dashboard;