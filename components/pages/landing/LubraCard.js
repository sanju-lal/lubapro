import React from "react";

const LubraCard = ({ item }) => {
  return (
    <div className="w-full p-5 rounded-[20px] mt-2 md:mt-5 bg-[#FF5900] min-h-[400px] md:min-h-[450px] xl:min-h-[500px]">
      <div className="w-full mx-auto h-full flex flex-col">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8">
          {item?.title || "Our Brand"}
        </h2>

        <div className="flex flex-col xl:flex-row justify-between items-center flex-grow xl:gap-0">
          <div className="flex justify-center xl:justify-start mb-8 xl:mb-0 xl:ml-10 xl:mr-20 mt-2 xl:mt-20">
            <img
              data-aos="fade-up"
              data-aos-duration="500"
              src={item?.img}
              alt="Logo"
              className="w-[188px] h-[188px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] xl:ml-[100px] object-contain rounded-xl"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="w-full xl:w-[55%] flex flex-col justify-center xl:pr-30"
          >
            {item?.para?.map((text, i) => (
              <p
                key={i}
                className="text-base md:text-lg mt-5 md:mt-7 xl:mt-8 leading-[32px] md:leading-[36px] text-left font-normal text-gray-dark"
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
