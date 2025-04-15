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
      <div className="logo-section w-full h-full relative ">
        {/* MOBILE & TABLET: grid layout */}
        <div className="block sm:hidden">
          <img
            src="/assets/lansco.png"
            className="absolute top-[30%] left-[2%]  animate-float float-fast delay-0  responsive-logo"
          />
          <img
            src="/assets/subway.png"
            className="absolute top-[29%] left-[33%] mx-auto animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/mraqiya.png"
            className="absolute top-[29%] left-[66%]  animate-float float-fast delay-0 responsive-logo"
          />
          <img
            src="/assets/jameel.png"
            className="absolute top-[65%] left-[20%] animate-float float-fast delay-4 responsive-logo"
          />
          <img
            src="/assets/formula arabia.png"
            className="absolute top-[65%] left-[65%] animate-float float-fast delay-0 responsive-logo"
          />
          <img
            src="/assets/high plast.png"
            className="absolute top-[15%] left-[18%]  animate-float float-fast delay-1 responsive-logo"
          />
          <img
            src="/assets/logiTrans.png"
            className="absolute top-[15%] left-[51%]  animate-float float-fast delay-4 responsive-logo"
          />
          <img
            src="/assets/semah.png"
            className="absolute top-[15%] left-[85%]  animate-float float-fast delay-4 responsive-logo"
          />
          <img
            src="/assets/alrowad.png"
            className="absolute top-[35%] left-[92%]  animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/bci.png"
            className="absolute top-[45%] left-[0%]  animate-float float-fast delay-1 responsive-logo"
          />
          <img
            src="/assets/permeshwar.png"
            className="absolute top-[65%] left-[5%]  animate-float float-fast delay-0 responsive-logo"
          />
          <img
            src="/assets/ghim.png"
            className="absolute top-[75%] left-[35%]  animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/rsn.png"
            className="absolute top-[75%] left-[50%]  animate-float float-fast delay-1 responsive-logo"
          />
          <img
            src="/assets/aquamaris.png"
            className="absolute top-[65%] left-[85%] animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/AIBG.png"
            className="absolute top-[50%] left-[90%]  animate-float float-fast delay-4 responsive-logo"
          />
        </div>

        {/* DESKTOP: positioned absolutely */}
        <div className="hidden sm:block">
          <img
            src="/assets/lansco.png"
            className="absolute top-[25%] left-[2%]  animate-float float-fast delay-0  responsive-logo"
          />
          <img
            src="/assets/high plast.png"
            className="absolute top-[5%] left-[18%]  animate-float float-fast delay-1 responsive-logo"
          />
          <img
            src="/assets/subway.png"
            className="absolute top-[5%] left-[33%] animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/logiTrans.png"
            className="absolute top-[5%] left-[51%]  animate-float float-fast delay-4 responsive-logo"
          />
          <img
            src="/assets/mraqiya.png"
            className="absolute top-[5%] left-[66%]  animate-float float-fast delay-0 responsive-logo"
          />
          <img
            src="/assets/semah.png"
            className="absolute top-[8%] left-[85%]  animate-float float-fast delay-4 responsive-logo"
          />
          <img
            src="/assets/alrowad.png"
            className="absolute top-[25%] left-[92%]  animate-float float-fast delay-2 responsive-logo"
          />

          <img
            src="/assets/bci.png"
            className="absolute top-[45%] left-[2%]  animate-float float-fast delay-1 responsive-logo"
          />
          <img
            src="/assets/permeshwar.png"
            className="absolute top-[65%] left-[5%]  animate-float float-fast delay-0 responsive-logo"
          />
          <img
            src="/assets/jameel.png"
            className="absolute top-[75%] left-[20%] animate-float float-fast delay-4 responsive-logo"
          />
          <img
            src="/assets/ghim.png"
            className="absolute top-[75%] left-[35%]  animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/rsn.png"
            className="absolute top-[75%] left-[50%]  animate-float float-fast delay-1 responsive-logo"
          />
          <img
            src="/assets/formula arabia.png"
            className="absolute top-[75%] left-[65%] animate-float float-fast delay-0 responsive-logo"
          />
          <img
            src="/assets/aquamaris.png"
            className="absolute top-[75%] left-[80%] animate-float float-fast delay-2 responsive-logo"
          />
          <img
            src="/assets/AIBG.png"
            className="absolute top-[50%] left-[90%]  animate-float float-fast delay-4 responsive-logo"
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
            fontSize: "clamp(40px, 10vw, 140px)",
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
