import React from "react";

const Card6 = ({ item }) => {
  return (
    <div className="w-full min-h-screen px-4 pt-[100px] rounded-[20px] bg-gradient-to-b from-[#d9d9d9] via-[#ffffff00] to-[#ff5900ab] relative overflow-hidden">
      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row max-w-full items-center lg:items-start justify-between gap-10 mx-[19px] relative z-10">
        {/* Left Content */}
        <div
          className="w-full lg:w-1/3 text-center lg:text-left"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-snug whitespace-nowrap text-[clamp(1.5rem,4vw,3.75rem)]">
            <span>{item?.titleBefore}&nbsp;</span>
            <span className="text-[#FF5900]">{item?.highlight}</span>
            <span>&nbsp;{item?.titleAfter}</span>
          </h1>

          <div className="mt-6 w-[90%] lg:w-[600px] mx-auto lg:mx-0 text-left">
            {item?.para?.map((line, index) => (
              <p
                key={index}
                className="mb-4 text-[24px] leading-[2.5rem] font-light text-black"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Image (Positioned between text and testimonial on small screens, absolute on large screens) */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="relative w-full flex justify-center z-0 my-10 lg:absolute lg:top-[90%] lg:left-[63%] lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <img
            src={item?.img}
            alt="Team Member"
            className="w-[250px] sm:w-[450px] md:w-[600px] lg:w-[700px] object-cover"
          />
        </div>

        {/* Testimonial */}
        <div
          className=" flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="bg-white shadow-lg rounded-xl p-8 text-center lg:text-left max-w-sm w-full mx-auto">
            <h3 className="font-semibold text-xl text-[#1C2A53]">
              Nahid Hasan
            </h3>
            <p className="text-base text-gray-500 mb-2">UX/UI Designer</p>
            <div className="flex justify-center lg:justify-start mb-3">
              <span className="text-yellow-400 text-lg">★★★★☆</span>
            </div>
            <p className="text-gray-600 text-base">
              "Smart ERP solutions turn complexity into clarity, helping
              businesses run better every day."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card6;
