import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Slider() {
  return (
   <div>
      <div className='card auth-img-card relative'>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper sm:text-2xl xl:text-3xl font-nunitoSans font-bold h-full"
        >
          <SwiperSlide>
            <div className="main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do.{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do.
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
   </div>
  )
}

export default Slider