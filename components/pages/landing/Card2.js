import React from "react";
import Button from "../../common/Button";

const Card2 = ({ item, buttonText = "Learn More" }) => {
  const highlightWord = "Solutions";
  const parts = item?.title?.split(new RegExp(`(${highlightWord})`, "i"));

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-[#fff] my-2 md:my-5 rounded-[20px] p-6 md:p-10 w-full max-w-[880px]">
        <div className="flex flex-col gap-6 text-black">
          {/* Title */}
          {item?.title && (
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
              className="text-[90px] font-bold leading-[110px] text-center w-full"
            >
              {parts.map((part, index) =>
                part.toLowerCase() === highlightWord.toLowerCase() ? (
                  <span key={index} className="text-[#FF5900]">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </h2>
          )}

          {/* Paragraph */}
          {item?.para?.[0] && (
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              className="text-lg leading-[28px] font-medium text-[#5A5A5A]"
            >
              {item.para[0]}
            </p>
          )}

          {/* Custom Button - Left aligned */}
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            className="mt-2 w-fit"
          >
            <Button title={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
