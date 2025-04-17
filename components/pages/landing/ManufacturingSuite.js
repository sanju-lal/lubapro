import React from 'react';

const ManufacturingSuite = ({
  title = "Lubapro",
  highlight = "Smart",
  subtitle = "Manufacturing Suite",
  features = [] ,
  img = "/assets/manufacturingSuite.jpg"
}) => {

  
  return (
    <div 
      data-aos="fade-up" data-aos-duration="500"
      className="flex bg-white rounded-xl shadow-lg justify-between mx-auto my-10 
      max-[1224px]:flex-col"
    >
      {/* Right Image - Goes on top below 1224px */}
      <div className="overflow-hidden order-2 max-[1224px]:order-1">
        <img
          src={img}
          alt="Pipes Industrial"
          className="
              w-[400px] 
              h-full 
              object-cover 
              object-[25%_35%] 
              rounded-br-xl rounded-tr-xl
              max-[1224px]:w-full 
              max-[1224px]:h-[500px]
              max-[1224px]:rounded-tl-xl 
              max-[1224px]:rounded-tr-xl
              max-[1224px]:rounded-br-none
            "
        />
      </div>

      {/* Left Content */}
      <div data-aos="fade-up" data-aos-duration="500" className="flex flex-col justify-center mx-15 p-10 order-1 max-[1224px]:order-2">
        <h2 className="text-3xl font-bold text-[40px] text-black mb-10">
          {title} <span className="text-orange-500">{highlight}</span> {subtitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 mt-6 text-gray-600 text-lg text-[24px]">
          {features.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManufacturingSuite;
