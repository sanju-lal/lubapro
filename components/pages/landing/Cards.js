import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
});

const highlightWords = [
  "ANYTIME",
  "PRODUCTION",
  "MANUFACTURING",
  "AUTOMATED",
  "VISIBILITY",
  "OMNICHANNEL",
  "TIME",
  "CLASS",
  "FASTER",
  "RETURNS",
  "INTEGRATION",
  "UNIFIED",
  "VIOLATION",
  "BILLING",
  "INTEGRATION",
  "MAINTENANCE",
  "VISIBILITY"
];

const Cards = ({ items = [] }) => {
  const highlightText = (text) => {
    return text
      .toUpperCase()
      .split(/(\s+)/)
      .map((word, index) => {
        const cleanWord = word.replace(/[^A-Z]/gi, "");
        const isHighlighted = highlightWords.includes(cleanWord);
        return isHighlighted ? (
          <span key={index} style={{ color: "#FF5900" }}>
            {word}
          </span>
        ) : (
          <span key={index}>{word}</span>
        );
      });
  };

  // Split the items manually: [0–1], [2–3], [4]
  const rows = [items.slice(0, 2), items.slice(2, 4), items.slice(4, 5)];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className={`${bebas.className} px-4 py-10 md:py-20 bg-[#f2f2f2] flex flex-col items-center gap-10`}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex flex-wrap gap-6 ${
            row.length === 1
              ? "justify-center"
              : "justify-center md:justify-start"
          } w-full max-w-[1350px]`}
        >
          {row.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-[20px] p-6 md:p-8 w-full max-w-[643px] flex flex-col justify-between"
            >
              <h3 className="text-2xl md:text-6xl text-[#161619] uppercase mb-2">
                {highlightText(card.title)}
              </h3>
              <p className="text-base md:text-xl text-[#838383] font-[Raleway]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cards;
