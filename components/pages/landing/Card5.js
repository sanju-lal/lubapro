import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Card5 = ({ item }) => {
  return (
    <div className="bg-[#f2f2f2] py-16 px-4 md:px-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-black">
        TAILORED FOR YOUR <span className="text-[#FF5900]">SECTOR</span>
      </h2>

      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto !pb-10"
      >
        {item?.map((sector, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-[#f2f2f2] p-4 ">
              <img
                src={sector.img}
                alt={sector.title}
                className="rounded-2xl w-full h-[400px] object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">
                {sector.title}
              </h3>
              <p className="text-gray-600 text-sm">{sector.para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card5;
