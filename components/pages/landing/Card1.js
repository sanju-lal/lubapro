import React from "react";

const Card1 = ({ item }) => {
  return (
    <div className="w-full p-5 rounded-[20px] mt-2 md:mt-5 bg-[#f2f2f2]">
      <div className="w-full flex justify-center pt-8 xl:pb-20">
        <div className="w-full flex flex-col xl:flex-row justify-between items-center">
          {/* Title section without image */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            className="w-full xl:w-[40%]"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-snug">
              {item?.titleBefore}{" "}
              <span className="text-[#FF5900]">{item?.highlight}</span>{" "}
              {item?.titleAfter}
            </h1>
          </div>

          {/* Paragraph section */}
          {/* Paragraph section */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            className="w-full xl:w-[45%]"
          >
            {item?.para?.map((text, i) => (
              <p
                key={i}
                className="text-base mt-5 md:mt-7 leading-[32px] text-justify font-normal text-[#838383]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
