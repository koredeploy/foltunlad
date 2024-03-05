import {Content} from './content'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import quote from '../../../assets/icons/Group.svg'
import "./style/Testimonial.scss"
const Testimonial = () => {
  const { slideContent } = Content

  return (
<div className='bg-[#EEF8FD]'>
<div className='w-11/12 mx-auto responsive'>

<Swiper
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}

          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {slideContent.map((slide, index) => (
        <SwiperSlide key={index} className='flex flex-col justify-center items-center py-10 '>
          <img src={quote} alt="" />
          <p className='text-center w-full lg:w-4/12 mx-auto py-4'>{slide.text}</p>
            <img src={slide.profileImg} alt="" className='object-cover ' />
            
          <h4 className='text-center pt-4'>{slide.name}</h4>
          <p className='text-center'>{slide.job}</p>
        </SwiperSlide>
      ))}
        </Swiper>
</div>
</div>
  )
}

export default Testimonial
