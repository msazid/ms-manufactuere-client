import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './CSS/reviews.css'
import useReviews from "../../Hooks/useReviews";
const Reviews = () => {
    const [reviews] = useReviews()
    return (
     <div className="container">
         <h1>Our Customers Reviews</h1>
            <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
          {
              reviews.map(review=>
            <div>
                <img src={review.photo} alt='userPic'/>
                <div className="myCarousel">
                  <h3>{review.name}</h3>
                  <h4>Customer</h4>
                  <p>
                    {review.description}
                  </p>
                </div>
              </div>
                
                )
          }

      </Carousel>
     </div>
                    )
    }

export default Reviews;