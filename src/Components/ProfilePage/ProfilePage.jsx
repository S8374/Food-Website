import './ProfilePage.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProfilePage.css';
import { Autoplay } from 'swiper/modules';
import LoginSignUp from '../LoginSignUp/LoginSignUp';

const ProfilePage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Swiper in the background */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Center the LoginSignUp component */}
      <div className="absolute log inset-0 w-full mx-auto flex items-center justify-center z-10" >
          <LoginSignUp></LoginSignUp>
      </div>
    </div>
  );
};

export default ProfilePage;
