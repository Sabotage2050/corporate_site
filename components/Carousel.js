import "swiper/css/bundle";

import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);
const images = [
  "/forklift_main.jpg",
  "/forklift_main_2.jpg",
  "/forklift_main_3.jpg",
  "/forklift_main_4.jpg",
  "/forklift_main_5.jpg",
];

const TestCarousel = () => {
  return (
    <div className=" ml-80 mt-8">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickkable: true,
        }}
        navigation
        loop={true}
      >
        {images.map((src, index) => {
          return (
            <SwiperSlide key={`${index}`}>
              <Image src={src} alt="testimage" width={500} height={500} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestCarousel;
