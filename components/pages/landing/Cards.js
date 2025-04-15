import React from "react";

const highlightWords = [
  "ANYTIME",
  "PRODUCTION",
  "MANUFACTURING",
  "AUTOMATED",
  "VISIBILITY",
];

const Cards = ({ items = [] }) => {
  const highlightText = (text) => {
    return text
      .toUpperCase()
      .split(/(\s+)/)
      .map((word, index) => {
        const cleanWord = word.replace(/[^A-Z]/gi, ""); // strip non-letters
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

  // Split the items into 3 rows manually: [2, 2, 1]
  const rows = [items.slice(0, 2), items.slice(2, 4), items.slice(4, 5)];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="px-4 py-10 md:py-20 bg-[#f2f2f2] flex flex-col items-center gap-8"
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-6 ${
            row.length === 1
              ? "justify-center"
              : "justify-center md:justify-start"
          } flex-wrap`}
        >
          {row.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow"
              style={{
                width: "643px",

                height: "280px",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <h3
                className="text-2xl font-semibold text-[#161619] mb-2 uppercase"
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                }}
              >
                {highlightText(card.title)}
              </h3>
              <p
                style={{
                  color: "#838383",
                  fontSize: "24px",
                  fontFamily: "Raleway, sans-serif",
                }}
                className="text-base"
              >
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
