import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageAllOrder = () => {
    const { isLoading, error, data: orders, refetch } = useQuery('allOrder', () =>
        fetch('http://localhost:5000/orders', {
            method: 'GET',
        }).then(res => res.json()
        ))
    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message


    return (
            <div className="container ">
                <table className="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">Email</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Shipping</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <ManageOrder key={order._id} order={order} index={index} refetch={refetch}></ManageOrder>)
                    }
                </tbody>
            </table>
            </div>
    );
};

export default ManageAllOrder;