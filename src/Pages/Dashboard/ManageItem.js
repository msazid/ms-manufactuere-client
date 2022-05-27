import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTools from '../../Hooks/useTools';

const ManageItem = () => {
    const [items, setItems] = useTools();
    const handleDelete = id => {
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
                const url = (`https://ms-management124.herokuapp.com/item/${id}`)
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = items.filter(data => data._id !== id);
                        setItems(remaining)
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <div><h1 className='my-5'>Manage The Items</h1></div>
            {
                items.map(item =>
                    <div class="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
                        <div class="row g-0 p-3 ">
                            <div class="col-md-4">
                                <img src={item.photo} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">Available Quantity: {item.quantity}</p>
                                    <p class="card-text"><button className='btn btn-danger' onClick={() => { handleDelete(item._id) }}>Delete Product</button></p>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ManageItem;