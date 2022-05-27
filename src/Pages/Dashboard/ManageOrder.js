import React from 'react';
import Swal from 'sweetalert2';

const ManageOrder = ({ order, index, refetch, setCancelModal }) => {
    const { name, email, productName, quantity, paid, _id } = order;

    const updateProduct = (id) => {

        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }
    return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{email}</td>
                <td>{productName}</td>
                <td>{quantity}</td>
                <td>{!paid && <p className='text-warning text-uppercase fw-bold'>unpaid</p>}
                {paid && <>
                    <p className='text-success text-uppercase fw-bold'>Paid</p>
                </>}
            </td>
            <td> {
                paid ? <>
                    {
                        order.status ? <p className='text-success text-uppercase fw-bold'>Shipped</p> : <button className="btn btn-xs btn-primary" onClick={() => updateProduct(_id)}>Change status</button>
                    }
                </> : <p className='text-warning  fw-bold'>Pending.....</p>
            }
            </td>
                <td> <button disabled={paid} onClick={(id) => {
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
                                                fetch(`http://localhost:5000/orders/${_id}`, {
                                                    method: 'DELETE',
                                                    headers: {
                                                        "content-type": 'application/json'
                                                    },
                                                }).then(res => res.json())
                                                    .then(data => {
                                                        refetch();
                                                        order.filter(data => data?._id !== id)
                                                        
                                                    })
                                            }
                                        })
                                    }} type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                                        Cancel
                                    </button></td>
            </tr>
    );
};

export default ManageOrder;