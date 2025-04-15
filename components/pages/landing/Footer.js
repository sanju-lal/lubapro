import React from "react";

import Link from "next/link";

export default function Footer() {
  const about = [
    {
      label: "ERP Solutions",
      linkTo: "",
    },
    {
      label: "Career Launch for Fresh Talents",
      linkTo: "/solutions/custom-software-solutions", //Example of linking
    },
    {
      label: "International Remote Talent Solution",
      linkTo: "",
    },
    {
      label: "Direct Placement Solutions",
      linkTo: "",
    },
  ];

  const getInTouch = [
    {
      label: "info@anjamerica.com",
      linkTo: "mailto:info@anjamerica.com",
    },
    {
      label: "+1 901 310 0451 (USA)",
      linkTo: "tel:+1 901 310 0451",
    },
    {
      label: "+91 98954 45280 (IND)",
      linkTo: "tel:+91 98954 45280",
    },
  ];

  const addresses = [
    {
      address: "119 South Main Street, Suite #500 Memphis, TN 38103, USA",
    },
    // {
    //   address: "8425 Pulsar Place, Suite #280, Columbus, OH 43240, USA",
    // },
    {
      address:
        "6B - Tower 2, Trans Asia Corporate Park,  Seaport-Airport RD, Kakkanad, Cochin, India, 682037",
    },
  ];

  const socialLinks = [
    {
      linkTo: "https://x.com/AnjAmerica?t=PWTlzQLST3AQKpJgvd3bOw&s=09",
      image: "/assets/x.svg",
    },
    {
      linkTo: "https://www.facebook.com/profile.php?id=61570826336653",
      image: "/assets/facebook.svg",
    },
    {
      linkTo: "https://www.linkedin.com/company/anj-america",
      image: "/assets/insta.svg",
    },
    {
      linkTo: "https://www.instagram.com/anj.america/?igshwid=YmMyMTA2M2Y%3D",
      image: "assets/git-hub.svg",
    },
  ];

  const tailLinks = [
    {
      label: "Terms and Conditions",
      linkTo: "/terms-and-condition",
    },
    {
      label: "Privacy Notice",
      linkTo: "/privacy-policy",
    },
    {
      label: "Accessibility",
      linkTo: "/accessibility",
    },
    {
      label: "Disclaimer",
      linkTo: "/disclaimer",
    },
    {
      label: "Sitemap",
      linkTo: "/sitemap",
    },
  ];

  return (
    <section id="contact-us">
      <div
        className="w-full mb-5 md:mt-3 bg-[#F2F2F2] rounded-[20px] p-5 "
        style={{ color: "#FF5900" }}
      >
        <div className="flex justify-center">
          <div className="w-full flex flex-col md:flex-row justify-center md:border-b md:border-b-[#E4E4E742]"></div>
        </div>

        <div className="md:px-5 pt-6 md:pt-14 ">
          <div className="w-full flex justify-center ">
            <div className="relative w-full pb-6 md:pb-14  flex flex-wrap border-b border-b-[#E4E4E742]">
              <div className="flex flex-col gap-4 w-full md:w-[35%] pb-6 md:pb-0">
                <Link href="/" passHref>
                  <img
                    alt="logo image"
                    src="/assets/logo2.svg"
                    className="w-fit h-[100px] md:w-[154px] object-contain cursor-pointer"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                  />
                </Link>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-justify font-normal md:max-w-[350px] text-md leading-[30px] text-black opacity-80"
                >
                  Lubapro is a customizable ERP solution with a strong track
                  record and trusted clients. We simplify operations across
                  industries, offering flexible tools for buying, selling,
                  accounting, stock, and more.
                </p>

                <div className="w-full justify-center mt-4 sm:justify-start flex items-center flex-wrap gap-3">
                  {socialLinks?.map((item, i) => (
                    <SocialLinkCard item={item} key={i} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-[25%] pb-6 md:pb-0">
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-orange-primary uppercase font-bold text-md"
                >
                  Who we are?
                </p>
                {about?.map((item, i) => (
                  <NavItem item={item} key={i} />
                ))}
              </div>
              <div className="flex flex-col gap-4 w-full md:w-[20%] pb-6 md:pb-0">
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-orange-primary uppercase font-bold text-md"
                >
                  Get in touch
                </p>
                {getInTouch?.map((item, i) => (
                  <GetInTouch item={item} key={i} />
                ))}
              </div>{" "}
              <div className="flex flex-col gap-4 w-full md:w-[20%] pb-6 md:pb-0">
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-orange-primary uppercase font-bold text-md"
                >
                  Our footprints
                </p>
                {addresses?.map((item, i) => (
                  <AddressView item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex pt-5 justify-center">
            <div className="w-full flex max-w-[1300px] flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-4 items-center">
                {tailLinks?.map((item, i) => (
                  <NavItem item={item} key={i} />
                ))}
              </div>
              <div>
                <p className="text-black mt-8 md:mt-0 opacity-80">
                  ©2025 LubaPro - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavItem({ item }) {
  return (
    <Link href={item?.linkTo}>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-black opacity-80 text-md font-normal cursor-pointer"
      >
        {item?.label}
      </p>
    </Link>
  );
}

function GetInTouch({ item }) {
  return (
    <Link href={item?.linkTo}>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-black opacity-80 text-md font-normal cursor-pointer poppins-regular"
      >
        {item?.label}
      </p>
    </Link>
  );
}

function AddressView({ item }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="flex items-start gap-2"
    >
      <img
        className="w-4 h-4 object-contain mt-1"
        src="https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/footer/location.svg"
      />

      <p className="text-black opacity-80 text-md font-normal cursor-pointer poppins-regular">
        {item?.address}
      </p>
    </div>
  );
}

function SocialLinkCard({ item }) {
  return (
    <a target="_blank" rel="noreferrer" href={item?.linkTo}>
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="w-5 h-5 object-contain"
        src={item?.image}
        alt="social-icon"
        onError={(e) => {
          console.error(`Image failed to load: ${item?.image}`);
          e.target.style.display = "none";
        }}
      />
    </a>
  );
}
