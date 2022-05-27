import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllItemShow = ({item}) => {
    const navigate = useNavigate()
    const navigateToPage = (id) => {
        navigate(`/productDetail/${id}`)
    }
    return (
        <>
            <div className="col">
                <div className="card h-100 p-2">
                    <img src={item.photo} className="card-img-top w-50 h-50 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>{item.name}</h5>
                        <p className="card-text">
                            <span>Brand: {item.company}</span> <br />
                            <span>Quantity: {item.quantity}</span>
                        </p>
                        <button className='btn btn-dark' onClick={() => navigateToPage(item._id)}>Product Detail</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllItemShow;