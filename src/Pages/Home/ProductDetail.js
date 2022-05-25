import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';


const ProductDetail = () => { 
    const [user, loading] = useAuthState(auth);
    const [item, setItem] = useState({})
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)})
    }, [id])
    if (loading) {
        return <Loading />
    }

    const onSubmit = data => {
        const email = data.email;
        const productName = data.productName;
        const price = data.price;
        const quantity = data.quantity;
        const name = data.name;
        const phone = data.phone;
        const address = data.address;

        let Quantity = item.quantity - data.quantity;
        let newQuantity = {
            _id: item._id,
            name: item.name,
            photo: item.photo,
            price:item.price,
            quantity: Quantity,
            minOrder: item.minOrder,
            description: item.description
        }
        const ordered = { email, productName, price, quantity, name, address, phone, }; 
        console.log(ordered); 
        if (data.quantity <= item.quantity || data.quantity >= item.minOrder) {
            fetch('http://localhost:5000/ordered', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(ordered)
            })
                .then(res => res.json())
                .then(posted => {
                    console.log(posted);
                    if (posted.acknowledged) {
                        alert('Booked successfully');
                    }
                })

            fetch(`http://localhost:5000/item/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(newQuantity)
            }).then(res => res.json())
                .then(data => {
                    setItem(newQuantity) 
                })
                    
        };}
        return (
            <div>
                <div className="container ">
                    <div className="row my-5 py-3">
                        <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center ">
                            <img src={item.photo} className="w-50" alt="" />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 py-3">
                            <h1 style={{ fontFamily: 'lato', textAlign: 'center', fontSize: '20px', color: 'orange', textTransform: 'uppercase' }}>Product Detail</h1>
                            <h1 style={{ fontFamily: 'lato', fontSize: '15px', textTransform: 'uppercase' }}><strong>Product Name:</strong>  {item.name}</h1>
                            <h1 style={{ textAlign: 'start', fontFamily: 'lato', fontSize: '25px', textTransform: 'uppercase' }}><strong>Price:</strong>  ${item.price} </h1>
                            <p className='card-text  text-start'><strong className='text-uppercase'>Available Quantity:</strong> {item.quantity}</p>
                            <p className='card-text  text-start'><strong className='text-uppercase'>Product:</strong> <br /> {item.description}</p>
                            <p className='card-text  text-start text-uppercase'><strong style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Minimum Order:</strong>  {item.minOrder}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input className='form-control' readOnly type='email' value={user?.email} {...register("email")} />
                                </div>
                                <div className="mb-3">
                                <input className='form-control' readOnly type='text' value={item?.name} {...register("productName")} />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className='form-control' readOnly value={item?.price} {...register("price")} />
                                </div>
                                <div className='mb-3'>
                                    <input type="number"
                                        className='form-control' {...register("quantity")} />
                                </div>
                                <div className="mb-3">
                                    <input className='form-control' type='text'  {...register("name")} />
                                </div>
                                <div className="mb-3">
                                    <textarea className='form-control' {...register("address", { required: true })} />
                                </div>
                                <div>
                                    <input type="number" className='form-control' {...register("phone")} />
                                </div>
                                <input type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
}
export default ProductDetail;