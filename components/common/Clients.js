import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../common/Container";

export default function OurClients() {
  const clients = [
    "/assets/AIBG.png",
    "/assets/alrowad.png",
    "/assets/aquamaris.png",
    "/assets/bci.png",
    "/assets/GHIM.png",
    "/assets/lansco.png",
    "/assets/mraqiya.png",
    "/assets/rsn.png",
  ];

  return (
    <div className="w-full bg-white rounded-[20px] py-5 mb-2 md:mb-5">
      <Container>
        {/* Static Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center text-[#161619] mb-4">
          Join the <span className="text-[#FF5900]">Manufacturers</span>{" "}
          Thriving with Lubapro
        </h2>

        {/* Marquee Section */}
        <Marquee speed={50} gradient={false} direction="left" loop={0}>
          {clients.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`Client ${i}`}
              className="mx-4 md:mx-10 h-[30px] md:h-[40px] max-w-[100px] object-contain"
            />
          ))}
        </Marquee>
      </Container>
    </div>
  );
}
