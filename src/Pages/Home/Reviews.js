import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import './CSS/reviews.css'
const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className='my-5'>
            <h1 className='mt-3' style={{ fontFamily: 'lato', textTransform: 'uppercase', textAlign: 'center' }}>Some Of Our Top Customer's Reviews</h1>
            <div className='py-3 container d-flex flex-wrap justify-content-center'>
                {
                    reviews.slice(0, 3).map(review =>

                        <figure class="reviewCard">
                            <blockquote>{review.description}</blockquote>
                            <div class="author">
                                <img src={review.photo} alt="sq-sample1" />
                                <h5 className='text-dark'>{review.name} <span> Customer</span></h5>
                            </div>
                        </figure>
                    )
                }
            </div>
            <Link to='/allreviews' style={{textDecoration:'none',textAlign:'center',display:'block',fontFamily:'lato',textTransform:'uppercase',color:'orange'}}>Show More Reviews</Link>
        </div>
    );
};

export default Reviews;