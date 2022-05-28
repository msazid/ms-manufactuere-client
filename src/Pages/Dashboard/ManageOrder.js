import React from 'react';
import Swal from 'sweetalert2';

const ManageOrder = ({ order, index, refetch, setCancelModal }) => {
    const { name, email, productName, quantity, paid, _id } = order;

    const updateProduct = (id) => {

        fetch(`https://ms-management124.herokuapp.com/orders/${id}`, {
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
        <div class="card text-center mb-3">
            <div class="card-header bg-light border-none">
                <span className="fw-bold">Product Id:</span> {_id}
            </div>
            <div class="card-body">
                <h5 class="card-title"><span className='text-uppercase me-2'>User Email:</span> {email}</h5>
                <h5 class="card-title"><span className='text-uppercase me-2'>Product Name:</span> {productName}</h5>
                <p class="card-text"><span className='text-uppercase me-2'>Ordered Quantity:</span>{quantity}</p>
                <p class="card-text">
                    {
                        paid ? <>
                            {
                                order.status ? <p className='text-success text-uppercase fw-bold'><span className='text-uppercase me-2 text-dark'>Product Status:</span> Shipped</p> :
                                <>
                                <p>This Order is payed the charges</p>
                                <button className="btn btn-xs btn-primary" onClick={() => updateProduct(_id)}>Deliver</button>
                                </>
                            }
                        </> : <p className='text-warning  fw-bold'>Pending.....</p>
                    }
                </p>
                <button disabled={paid} onClick={(id) => {
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
                            fetch(`https://ms-management124.herokuapp.com/orders/${_id}`, {
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
                </button>
            </div>
        </div>
    );
};

export default ManageOrder;
