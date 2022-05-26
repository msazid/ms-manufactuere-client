import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
       if(email){
        fetch(`http://localhost:5000/ordered?email=${email}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => { setOrders(data)})
       }
    }
        , [email])
    console.log(orders);
    return (
        <>
            <div>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Sl</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Ordered Quantity</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-warning btn-sm'>Pay</button></Link>}
                                    {(order.totalPrice && order.paid) && <div>
                                        <p><span className='text-success border border-success p-1'>Paid</span></p>
                                    </div> }</td>
                                <td>
                                {(order.totalPrice && !order.paid) &&
                                <button onClick={(id) => {
                                        console.log(order.productName);
                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: "You won't be able to revert this!",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, delete it!'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire(
                                                    'Deleted!',
                                                    'Your file has been deleted.',
                                                    'success'
                                                )
                                                fetch(`http://localhost:5000/ordered/${order._id}`, {
                                                    method: 'DELETE',
                                                    headers: {
                                                        "content-type": 'application/json'
                                                    },
                                                }).then(res => res.json())
                                                    .then(data => {
                                                        orders.filter(data => data?._id !== id)
                                                    })
                                            }
                                        })
                                    }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                        Cancel
                                    </button>}
                                    {(order.totalPrice && order.paid) && <button disabled className='btn btn-primary'>Cancel</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default MyOrders;