import gal_data from "./galleryData";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.min.css";
import SwiperCore, {
  EffectFade,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper";
export default function GalleryShow() {
  return (
    <div className="gallery_show">
      <h1>Our Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {gal_data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="image_wrap">
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
