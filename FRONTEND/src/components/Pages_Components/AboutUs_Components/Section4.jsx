import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Rotate } from '../../../assets/assets';


import "swiper/css";

const Section4 = () => {
  return (
    <>
        <div className='container my-5'>
            <div className='row'>
               <Swiper
               slidesPerView={3}
               spaceBetween={10}
               modules={[Autoplay]}
               autoplay={{ delay : 3000}}
               speed = {1000}
               loop = {true}
               breakpoints={{
                0 : {slidesPerView : 1},
                768 : { slidesPerView : 2},
                1024 : { slidesPerView : 3},
               }}
               >
                {Rotate.map(( Rotate , index) => (
                    <SwiperSlide key={index}>
                        <div className='col'>
                            <img src={Rotate.img} className='img-fluid' />
                        </div>
                    </SwiperSlide>
                ))}
               </Swiper>
            </div>
        </div>

    </>
  )
}

export default Section4