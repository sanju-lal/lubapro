import React from "react";
import Button from "../../common/Button";

const Card2 = ({ item, buttonText = "Learn More" }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="px-4 py-10 md:py-20 bg-white"
    >
      {/* Title and Paragraph */}
      <div className="w-full text-left mb-6">
        <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold text-black leading-tight mb-4">
          {item.titleBefore}
          <span className="text-[#FF5900]"> {item.highlight}</span>
          <span> {item.titleAfter}</span>
        </h2>

        <p className="text-[clamp(1rem,2vw,1.2rem)] text-gray-500 leading-relaxed">
          {item.para}
        </p>
      </div>

      {/* Button */}
      <div data-aos="fade-up" data-aos-duration="500" className="w-fit">
        <Button title={buttonText} />
      </div>
    </div>
  );
};

export default Card2;
