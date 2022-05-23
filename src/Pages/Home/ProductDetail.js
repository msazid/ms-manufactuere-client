import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [item,setItem]=useState({})

    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/item/${id}`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return (
        <div>
           <div className="container ">
               <div className="row my-5">
                   <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center ">
                       <img src={item.photo} className="w-50" alt="" />
                   </div>
                   <div className="col-12 col-md-12 col-lg-6">
                       <h1 style={{fontFamily:'lato',textAlign:'center',fontSize:'20px',color:'orange',textTransform:'uppercase'}}>Product Detail</h1>
                        <h1 style={{fontFamily:'lato',fontSize:'15px',textTransform:'uppercase'}}><strong>Product Name:</strong>  {item.name}</h1>
                        <h1 style={{fontFamily:'lato',fontSize:'15px',textTransform:'uppercase'}}><strong>Price:</strong>  {item.price}</h1>
                        <p className='card-text'><strong className='text-uppercase'>Available Quantity:</strong> {item.quantity}</p>
                        <p className='card-text'><strong className='text-uppercase'>Product:</strong> <br /> {item.description}</p>
                        <p className='card-text text-uppercase'><strong style={{fontFamily:'Poppins',fontWeight:'bold'}}>Minimum Order:</strong>  {item.minOrder}</p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default ProductDetail;