import Link from "next/link";
import Image from "next/image"; // If you're using next/image

export default function LandingBanner() {
  return (
    <div
      className="relative rounded-[20px] -mt-[19px] flex justify-center items-center w-full bg-white"
      style={{
        height: "calc(97vh - 16px)",
      }}
    >
      <div className="absolute top-6 left-6 z-20">
        {/* <Image
          src="assets/logo2.svg"
          alt="Logo"
          width={100}
          height={40}
          className="object-contain"
        /> */}
      </div>

      <div className="absolute flex flex-col items-center gap-6 z-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="px-5 md:px-0 text-center font-bold max-w-[900px]"
          style={{
            fontSize: "72px",
            fontWeight: "600",
            lineHeight: "1",
            fontFamily: "'Bebas Neue', sans-serif",
            transform: "scaleY(1.2)",
            transformOrigin: "center",
          }}
        >
          <span style={{ color: "#FF5900" }}>OPTIMIZE</span>
          <span style={{ color: "#000000" }}>, AUTOMATE</span>
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className="text-lg px-5 md:px-0 text-center leading-[30px] md:text-[22px] font-medium max-w-[810px] text-[#838383] opacity-80"
        >
          Next-Level ERP for Growing Enterprises
        </p>
      </div>
    </div>
  );
}
