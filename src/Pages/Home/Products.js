import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../Hooks/useTools';
import './CSS/Products.css'

const Products = () => {
    const [tools] = useTools()
    const navigate = useNavigate();
    const navigateToPage = (id) => {
        navigate(`/productDetail/${id}`)
    }
    return (
        <section className='product-section py-5'>
            <div className='container'>
                <h1 className='section-title py-4 text-center text-uppercase'>Available Products</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        tools.slice(0,8).map(tool =>
                            <div className="col">
                                <div className="card border-0 tools h-100">
                                    <img src={tool.photo} className="tools-img card-img-top w-50 h-50 mx-auto" alt=".." />
                                    <div className="card-body">
                                        <h5 onClick={() => navigateToPage(tool._id)} className="title-1 text-start" style={{ fontSize: '18px', fontFamily: 'Lato', color: '#FF7700', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'inherit' }}>{tool.name}</h5>
                                        <p className='text-start'>
                                            <span className='text-1'>Quantity: {tool.quantity}</span> <br />
                                            <span className='text-1'>Minimum Order: {tool.minOrder}</span> <br />
                                            <p style={{color:'GrayText'}} className=' mt-2'>{tool.description.substring(0, 50)}.....</p>
                                            <span style={{ fontSize: '25px', fontFamily: 'lato', color: '#FF7700' }}> {tool.price}$</span> <br />
                                        </p>
                                    </div>
                                    <button className='btn btn-dark' onClick={() => navigateToPage(tool._id)}>Product Detail</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;