import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const AddProduct = (event) => {
    const pName = useRef('')
    const pPhoto = useRef('')
    const pPrice = useRef('')
    const pQuantity = useRef('')
    const pMinOrder = useRef('')
    const pDescription = useRef('')
    const handleAddProduct = (e) => {
        e.preventDefault()
        const name = pName.current.value;
        const photo = pPhoto.current.value;
        const price = pPrice.current.value;
        const quantity = pQuantity.current.value;
        const minOrder = pMinOrder.current.value;
        const description = pDescription.current.value;
        const item = { name, photo, price, quantity, minOrder, description }
        console.log(item);

        const url = 'https://ms-management124.herokuapp.com/item'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    text: "A new product successfully added"
                })
                console.log(result);
                event.target.reset();
            })

    }
    return (
        <div>
            <h2 className=''>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                <input type="text" ref={pName} required placeholder='enter product name' className="form-control  mb-3" />
                <input type="text" ref={pPhoto} required placeholder='give the photo url' className="form-control mb-3" />
                <input type="number" ref={pPrice} required placeholder='enter the product price' className="form-control mb-3" />
                <input type="number" ref={pQuantity} required placeholder='enter the product quantity' className="form-control mb-3" />
                <input type="number" ref={pMinOrder} required placeholder='enter the minimum order' className="form-control mb-3" />
                <textarea type='text' ref={pDescription} required placeholder='describe the product' className="form-control mb-3" />
                <input type="submit" value='Add Item' style={{ background: 'orange', border: 'none', color: 'white', padding: '10px ' }} />
            </form>
        </div>
    );
};

export default AddProduct; <h2 className=''>Add New Product</h2>