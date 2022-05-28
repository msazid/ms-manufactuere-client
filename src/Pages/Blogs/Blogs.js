import React from 'react';
import Swal from 'sweetalert2';

const Blogs = () => {
    return (
        <div className='container p-5 my-5' style={{boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}>
            <button className='btn btn-danger d-block my-3 mx-auto' onClick={()=>{
                Swal.fire({
                    icon: 'success',
                    text: 'Local state refers to the data that we handle in one or more components. In React, the useState hook is the most frequent way to manage local state.',
                    imageAlt: 'Custom image',
                  })
            }}>How will you improve the performance of React Application ?</button>

            <button className='btn btn-danger  d-block mb-3 mx-auto' onClick={()=>{
                Swal.fire({
                    icon: 'success',
                    text: ("Local state refers to the information that we handle in one or more components. We require global state when we want to accept and alter data from everywhere in our app, or at the very least across several components. Server state is a simple concept, but managing it alongside all of our other UI data, both local and global, may be tough. Data found on our URLs, such as pathnames and query arguments, are stored in the URL state."),
                    imageAlt: 'Custom image',
                  })
            }}>What are the different ways to manage a state in a React Application ?</button>
           
           
            <button className='btn btn-danger  d-block mb-3 mx-auto' onClick={()=>{
                Swal.fire({
                    icon: 'success',
                    text: ("Unit testing is a software development approach that examines the smallest testable pieces of a program, known as units, separately and independently to ensure correct execution. Software developers and, on occasion, QA professionals apply this testing strategy throughout the development process."),
                    imageAlt: 'Custom image',
                  })
            }}>What is a unit text? Why Should write unit test ?</button>
           
           
            <button className='btn btn-danger  d-block mb-3 mx-auto' onClick={()=>{
                Swal.fire({
                    icon: 'success',
                    text: ("const food =[ { name :'apple', price:100 },{ name :'orange', price:233 } ] const Find=food.find(FindName) function FindName(person){ return person.name=='apple' } console.log(Find);"),
                    imageAlt: 'Custom image',
                  })
            }}>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</button>

            <button className='btn btn-danger  d-block mb-3 mx-auto' onClick={()=>{
                Swal.fire({
                    icon: 'success',
                    text: 'Local state refers to the data that we handle in one or more components. In React, the useState hook is the most frequent way to manage local state.',
                    imageAlt: 'Custom image',
                  })
            }}>Why you do not set the state directly in React? Why you do not set products = [...] instead, you use the setProducts</button>
        </div>
    );
};

export default Blogs;