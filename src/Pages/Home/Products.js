import React from 'react';
import useTools from '../../Hooks/useTools';
import './CSS/Products.css'

const Products = () => {
    const [tools] = useTools()
    return (
        <section className='product-section py-5'>
            <div className='container'>
                <h1 className='section-title py-4 text-center'>Our Products</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        tools.slice(0,6).map(tool =>
                            <div class="col">
                                <div class="card border-0 tools h-100">
                                        <img src={tool.photo} class="tools-img card-img-top w-50 h-50 mx-auto" alt=".." />
                                    <div class="card-body">
                                        <h5 class="card-title title-1 text-start" style={{ fontFamily: 'Lato', color: '#FF7700', textTransform: 'uppercase' }}>{tool.name}</h5>
                                        <p className='text-start'>
                                            <span className='text-1'> Price: {tool.price}$</span> <br />
                                            <span className='text-1'>Quantity: {tool.quantity}</span> <br />
                                            <span className='text-1'>Minimum Order: {tool.minOrder}</span> <br />
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;