import React from "react";

const Card6 = ({ item }) => {
  return (
    <div className="w-full min-h-[70vh] px-4 py-12 sm:py-16 rounded-[20px] bg-gradient-to-b from-[#d9d9d9] via-[#ffffff00] to-[#ff5900ab] relative overflow-hidden">
      {/* Content Container - Now with proper mobile spacing */}
      <div className="mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 h-full">
        {/* Text Content - Takes full width on mobile */}
        <div className="w-full lg:flex-1 flex flex-col">
          <div className="flex-1" data-aos="fade-up" data-aos-duration="500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              <span>{item?.titleBefore}&nbsp;</span>
              <span className="text-[#FF5900]">{item?.highlight}</span>
              <span>&nbsp;{item?.titleAfter}</span>
            </h1>

            <div className="space-y-4 max-w-2xl">
              {item?.para?.map((line, index) => (
                <p
                  key={index}
                  className="text-lg sm:text-xl leading-relaxed font-light text-black"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Mobile Image - Now with constrained height and proper spacing */}
          <div className="mt-8 lg:hidden flex justify-center h-[200px] sm:h-[300px]">
            <img
              src={item?.img}
              alt="Team Member"
              className="w-full max-w-md h-full object-contain object-bottom"
            />
          </div>
        </div>

        {/* Testimonial - Fixed width and proper mobile spacing */}
        <div className="w-full max-w-md sm:w-3/4 md:w-2/3 lg:w-64 xl:w-72 flex-shrink-0 mx-auto lg:mx-20 mt-6 sm:mt-8 lg:mt-0">
          <div
            className="bg-[f2f2f2] shadow-lg rounded-xl p-4 sm:p-5 lg:p-6 h-full"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h3 className="font-semibold text-lg sm:text-xl text-[#1C2A53]">
              Nahid Hasan
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-2">
              UX/UI Designer
            </p>
            <div className="flex mb-3">
              <span className="text-yellow-400 text-base sm:text-lg">
                ★★★★☆
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              "Smart ERP solutions turn complexity into clarity, helping
              businesses run better every day."
            </p>
          </div>
        </div>

        {/* Desktop Image - Positioned absolutely */}
        <div
          className="hidden lg:block absolute bottom-0 left-[60%] -translate-x-1/2"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <img
            src={item?.img}
            alt="Team Member"
            className="w-[500px] max-w-[80vw] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Card6;
