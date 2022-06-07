import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/effect-fade/effect-fade.scss";
import "swiper/modules/thumbs/thumbs.min.css";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import data_nav from "./topnavData";
export default function Topnav() {
  return (
    <div className="gallery_parent">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        navigation={true}
        // loop={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {data_nav.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="gallery">
                <div className="gall_container">
                  <img src={item.image} alt="" />
                  <div className="desc">
                    <h1>{item.main}</h1>
                    <h2>{item.sub}</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
