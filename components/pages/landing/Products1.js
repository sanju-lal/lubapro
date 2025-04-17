import React from "react";
import Button from "../../common/Button";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
});

const Products1 = ({ item, buttonText = "Learn More" }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="px-4 py-5 md:py-10 bg-[#f2f2f2]"
    >
      {/* Title and Paragraph Centered */}
      <div className="w-full text-center mb-6">
        <h2 className={`${bebas.className}  text-[clamp(1.8rem,5vw,3.5rem)] text-4xl md:text-8xl font-bold leading-tight  text-black `}>
          {item.titleBefore}
          <span className="text-[#FF5900]"> {item.highlight}</span>
          <span> {item.titleAfter}</span>
        </h2>

        <p className="text-[clamp(1rem,2vw,1.2rem)] text-gray-500 leading-relaxed">
          {item.para}
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={item.image} // Make sure `item.image` contains the image URL
          alt="Product Visual"
          className="w-[100%] h-[611px] rounded-[27px] object-cover"
        />
      </div>
    </div>
  );
};

export default Products1;
