import React from "react";

const LubraCard = ({ item }) => {
  return (
    <div className="w-full p-5 rounded-[20px] mt-2 md:mt-5 bg-[#FF5900]">
      <div className="w-full mx-auto">
        {/* 🧠 Heading on top-left */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {item?.title || "Our Brand"}
        </h2>

        <div className="flex flex-col xl:flex-row justify-between items-center">
          {/* Logo section */}
          <div className="w-full xl:w-[45%] flex justify-center xl:justify-start mb-8 xl:mb-0 xl:ml-10 mt-2">
            <img
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-anchor-placement="center-bottom"
              src={item?.img}
              alt="Logo"
              className="w-[188px] h-[188px] object-contain rounded-xl"
            />
          </div>

          {/* Paragraphs */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            className="w-full xl:w-[45%]"
          >
            {item?.para?.map((text, i) => (
              <p
                key={i}
                className="text-base mt-5 md:mt-7 leading-[32px] text-left font-normal text-gray-dark"
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

export default LubraCard;
