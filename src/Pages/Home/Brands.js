import React from 'react';
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CSS/swiper.css"
import { Autoplay, Pagination, Navigation } from "swiper";
import brand1 from "../../Assets/brands/brand1.png"
import brand2 from "../../Assets/brands/brand2.png"
import brand3 from "../../Assets/brands/brand3.png"
import brand4 from "../../Assets/brands/brand4.png"
import brand5 from "../../Assets/brands/brand5.png"
import brand6 from "../../Assets/brands/brand6.png"
const Brands = () => {
    return (
        <div className='my-3 py-3' style={{backgroundColor:'#F8F8F8'}}>
            <h1 className='text-center text-uppercase'style={{color:'orange'}}>Our Supported Brands</h1>
             <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="card border-0"><img src={brand1} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand2} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand3} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand4} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand5} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand6} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand1} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand6} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand4} className="img-fluid w-100" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="card border-0"><img src={brand2} className="img-fluid w-100" alt="" /></div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Brands;