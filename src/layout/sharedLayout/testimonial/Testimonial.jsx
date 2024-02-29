// import React from 'react'
import {Content} from './content'
// import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonial = () => {
  // console.log(Content);
  const { slide1, slide2 } = Content

  console.log(slide1, slide2);
  const {Image, name, text, job} = slide1

  return (
    <div>
      Testimonial
      <div>
        {/* <img src={} alt="" /> */}
      </div>
    </div>
    // <Swiper
    //       spaceBetween={50}
    //       slidesPerView={1}
    //       onSlideChange={() => console.log('slide change')}
    //       onSwiper={(swiper) => console.log(swiper)}
    //     >
    //       <SwiperSlide>Slide 1</SwiperSlide>
    //       <SwiperSlide>Slide 2</SwiperSlide>
    //       <SwiperSlide>Slide 3</SwiperSlide>
    //       <SwiperSlide>Slide 4</SwiperSlide>
    //       ...
    //     </Swiper>
  )
}

export default Testimonial
