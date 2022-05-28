import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';
import Swal from 'sweetalert2';


const ProductDetail = () => {
    const [user, loading] = useAuthState(auth);
    const [item, setItem] = useState({})
    //const { register, handleSubmit } = useForm();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://ms-management124.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)
            })
    }, [id])
    if (loading) {
        return <Loading />
    }

    const onSubmit = data => {
        data.preventDefault()
        const email = data.target.email.value;
        const productName = data.target.productName.value;
        const price = data.target.price.value;
        const quantity = data.target.quantity.value;
        const name = data.target.name.value;
        const phone = data.target.phone.value;
        const address = data.target.address.value;
        const totalPrice = parseInt(price * quantity);

        let Quantity = item.quantity - data.target.quantity.value;
        let newQuantity = {
            _id: item._id,
            name: item.name,
            photo: item.photo,
            price: item.price,
            quantity: Quantity,
            minOrder: item.minOrder,
            description: item.description
        }
        const ordered = { email, productName, price, quantity, name, address, phone, totalPrice };
        console.log(ordered);
        if (data.target.quantity.value <= item.quantity || data.target.quantity.value >= item.minOrder) {

            fetch('https://ms-management124.herokuapp.com/orders', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(ordered)
            })
                .then(res => res.json())
                .then(posted => {
                    console.log(posted);
                })
            fetch(`https://ms-management124.herokuapp.com/item/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(newQuantity)
            }).then(res => res.json())
                .then(result => {
                    setItem(newQuantity)
                    Swal.fire({
                        icon: 'success',
                        text: 'Your Order successfully added please Check in to dashboard'
                    })
                    data.reset();
                })
        }
    };
    return (
        <div>
            <div className="container ">
                <div className="row my-5 py-3">
                    <h1 className='mb-4' style={{ fontFamily: 'lato', textAlign: 'center', fontSize: '30px', color: 'orange', textTransform: 'uppercase' }}>Product Detail</h1>
                    <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center ">
                        <img src={item.photo} className="w-50" alt="" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 py-3">
                        <h1 style={{ textAlign: 'start', fontFamily: 'lato', fontSize: '22px', textTransform: 'uppercase' }}><strong>Product Name:</strong>  {item.name}</h1>
                        <h1 style={{ textAlign: 'start', fontFamily: 'lato', fontSize: '25px', textTransform: 'uppercase' }}><strong>Price:</strong>  ${item.price} </h1>
                        <p className='card-text  text-start'><strong className='text-uppercase'>Available Quantity:</strong> {item.quantity}</p>
                        <p className='card-text  text-start'><strong className='text-uppercase'>Product Description:</strong> <br /> {item.description}</p>
                        <p className='card-text  text-start text-uppercase'><strong style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Minimum Order:</strong>  {item.minOrder}</p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12 col-md-8 mx-auto my-5">
                        <h1 className='mb-4' style={{ fontFamily: 'lato', textAlign: 'center', fontSize: '30px', color: 'orange', textTransform: 'uppercase' }}>Order This product</h1>
                        <form onSubmit={onSubmit}>
                            <input className="form-control  mb-3 p-2 " type="email" name='email' readOnly value={user?.email} />
                            <input className="form-control  mb-3 p-2 " type="text" name='productName' readOnly value={item.name} />
                            <input className="form-control  mb-3 p-2 " type="number" name='price' readOnly value={item.price} />
                            <input className="form-control  mb-3 p-2 " type="number" name='quantity' placeholder="enter your product quantity" />
                            <input className="form-control  mb-3 p-2 " type="text" name='name' placeholder="enter your name" />
                            <textarea className="form-control  mb-3 p-2 " type="text" name='address' placeholder="address" />
                            <input className="form-control mb-3 p-2 " type="number" name='phone' placeholder="phone number" />
                            <input type="submit" className='btn btn-success' value='Order Now' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;