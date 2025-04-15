import Link from "next/link";
import Image from "next/image"; // If you're using next/image

export default function LandingBanner() {
  return (
    <div
      className="relative rounded-[20px] -mt-[19px] flex justify-center items-center w-full bg-[f2f2f2]"
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
      <div className="logo-section w-full h-full relative">
        {/* MOBILE & TABLET: grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 md:hidden">
          <img
            src="/assets/lansco.png"
            className="w-20 mx-auto animate-float"
          />
          <img
            src="/assets/high plast.png"
            className="w-20 mx-auto animate-float"
          />
          <img
            src="/assets/subway.png"
            className="w-24 mx-auto animate-float"
          />
          <img
            src="/assets/logiTrans.png"
            className="w-20 mx-auto animate-float"
          />
          <img
            src="/assets/mraqiya.png"
            className="w-20 mx-auto animate-float"
          />
          <img src="/assets/semah.png" className="w-20 mx-auto animate-float" />
          <img
            src="/assets/alrowad.png"
            className="w-20 mx-auto animate-float"
          />
          <img src="/assets/bci.png" className="w-20 mx-auto animate-float" />
          <img
            src="/assets/permeshwar.png"
            className="w-20 mx-auto animate-float"
          />
          <img
            src="/assets/jameel.png"
            className="w-20 mx-auto animate-float"
          />
          <img src="/assets/ghim.png" className="w-20 mx-auto animate-float" />
          <img src="/assets/rsn.png" className="w-20 mx-auto animate-float" />
          <img
            src="/assets/formula arabia.png"
            className="w-20 mx-auto animate-float"
          />
          <img
            src="/assets/aquamaris.png"
            className="w-20 mx-auto animate-float"
          />
          <img src="/assets/AIBG.png" className="w-20 mx-auto animate-float" />
        </div>

        {/* DESKTOP: positioned absolutely */}
        <div className="hidden md:block">
          <img
            src="/assets/lansco.png"
            className="absolute top-[25%] left-[2%] w-24 animate-float"
          />
          <img
            src="/assets/high plast.png"
            className="absolute top-[5%] left-[18%] w-24 animate-float"
          />
          <img
            src="/assets/subway.png"
            className="absolute top-[5%] left-[33%] w-34 animate-float"
          />
          <img
            src="/assets/logiTrans.png"
            className="absolute top-[5%] left-[51%] w-24 animate-float"
          />
          <img
            src="/assets/mraqiya.png"
            className="absolute top-[5%] left-[66%] w-24 animate-float"
          />
          <img
            src="/assets/semah.png"
            className="absolute top-[8%] left-[85%] w-24 animate-float"
          />
          <img
            src="/assets/alrowad.png"
            className="absolute top-[25%] left-[92%] w-24 animate-float"
          />

          <img
            src="/assets/bci.png"
            className="absolute top-[45%] left-[5%] w-24 animate-float"
          />
          <img
            src="/assets/permeshwar.png"
            className="absolute top-[65%] left-[5%] w-24 animate-float"
          />
          <img
            src="/assets/jameel.png"
            className="absolute top-[75%] left-[20%] w-24 animate-float"
          />
          <img
            src="/assets/ghim.png"
            className="absolute top-[75%] left-[35%] w-24 animate-float"
          />
          <img
            src="/assets/rsn.png"
            className="absolute top-[75%] left-[50%] w-24 animate-float"
          />
          <img
            src="/assets/formula arabia.png"
            className="absolute top-[75%] left-[65%] w-24 animate-float"
          />
          <img
            src="/assets/aquamaris.png"
            className="absolute top-[75%] left-[80%] w-24 animate-float"
          />
          <img
            src="/assets/AIBG.png"
            className="absolute top-[50%] left-[90%] w-24 animate-float"
          />
        </div>
      </div>

      <div className="absolute flex flex-col items-center gap-6 z-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="px-5 md:px-0 text-center font-bold max-w-[900px]"
          style={{
            fontSize: "140px",
            fontWeight: "400",
            lineHeight: "0.5",
            fontFamily: "'Bebas Neue', sans-serif",
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
