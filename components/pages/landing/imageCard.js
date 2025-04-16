import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CardCarousel = ({ cardItems }) => {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {cardItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full mt-2 md:mt-5 bg-white rounded-2xl"
              style={{
                width: "100%", // Full width of the screen
                // Removed fixed height so it adjusts with content
                overflow: "hidden", // Ensures image fits within the border radius
              }}
            >
              <div className="flex flex-col xl:flex-row items-stretch gap-0 h-full">
                {/* Image on the left with no padding and flush to the border */}
                <div className="w-full xl:w-1/3 h-full">
                  <img
                    src={item?.image}
                    alt="Visual"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text on the right with padding */}
                <div className="w-full xl:w-2/3 p-6 xl:p-10 flex flex-col justify-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
                    {item?.titleBefore}{" "}
                    <span className="text-[#FF5900]">{item?.highlight}</span>{" "}
                    {item?.titleAfter}
                  </h1>

                  {item?.para?.map((text, i) => (
                    <p
                      key={i}
                      className="text-base mt-5 leading-[30px] text-justify font-normal text-[#838383] text-sm md:text-base lg:text-lg"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
