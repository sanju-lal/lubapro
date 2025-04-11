import React from "react";
import Banner from "../components/pages/landing/Banner";
import Card1 from "../components/pages/landing/Card1";
import LubraCard from "../components/pages/landing/LubraCard";
import VideoCard from "../components/pages/landing/VideoCard";
import Card2 from "../components/pages/landing/Card2";
import Card6 from "../components/pages/landing/Card6";
import Card5 from "../components/pages/landing/Card5";
import Header from "../components/common/Header";

const card = {
  titleBefore: "EXPLORE THE KEY FEATURES OF OUR",
  highlight: "CUSTOM",
  titleAfter: "ERP SOLUTIONS",
  para: [
    "Our ERP solutions feature an intuitive user interface, making it easy for your team to adopt and use the system effectively. Streamline your workflows and improve productivity with our user-friendly design.",
    "We prioritize your data security with robust measures that protect against unauthorized access and cyber threats. Trust Lubapro for secure, reliable data management..",
    "Our ERP solutions offer seamless integration between different modules, allowing you to streamline your business processes and improve overall efficiency. Connect your departments and data for a unified and cohesive operation.",
  ],
};
const lubraDecs = {
  title: "DISCOVER LUBAPRO'S JOURNEY",
  img: "/assets/logo-white.svg",
  para: [
    "Founded in 2020, Lubapro has been dedicated to providing affordable and customizable ERP solutions tailored for SMEs in Saudi Arabia. Our mission is to empower businesses by enhancing operational efficiency and driving growth through innovative technology. We value customer-centricity, innovation, integrity, and collaboration, ensuring we meet our clients’ unique needs. Our team, led by experienced professionals like Ali Al-Farsi (CEO), Sara Al-Mansoori (CTO), and Omar Al-Sayed (Head of Sales), is committed to delivering exceptional service and support.",
  ],
};

const card2 = {
  title: "CUSTOM ERP SOLUTIONS FOR YOUR INDUSTRY",
  para: [
    "LubaPro offers customizable ERP solutions tailored for restaurant chains, manufacturing, services, and healthcare. Experience a clean, intuitive design with enterprise-grade features, offering a flexible alternative to SAP. Get a solution designed for your unique needs.",
  ],
};

const card5 = [
  {
    title: "Real Estate",
    para: "Optimize property, assets, and finances with our real estate ERP. Simplify leasing and boost tenant satisfaction.",
    img: "/assets/slider_img1.jpg",
  },
  {
    title: "Manufacturing",
    para: "Enhance production, inventory, and supply chain management with our manufacturing ERP.",
    img: "/assets/slider_img2.png",
  },
  {
    title: "Retail Gas Stations",
    para: "Optimize fuel management, sales, and inventory with our retail gas station ERP.",
    img: "/assets/slider_img3.jpg",
  },
  {
    title: "Transport",
    para: "Improve fleet management, logistics, and operations with our transport ERP.",
    img: "/assets/slider_img4.png",
  },
  {
    title: "Real Estate",
    para: "Optimize property, assets, and finances with our real estate ERP. Simplify leasing and boost tenant satisfaction.",
    img: "/assets/slider_img1.jpg",
  },
];

const card6 = {
  titleBefore: "THE",
  highlight: "MINDS",
  titleAfter: "BEHIND LUBAPRO",
  img: "/assets/person_1.png",
  para: [
    "Lubapro is powered by a dedicated team of ERP experts, developers, and industry professionals. With experience across key sectors, we build flexible, effective solutions that simplify operations and drive business growth.",
  ],
};

const IndexPage = () => {
  return (
    <div>
      <Banner />
      <Card2 item={card2} />
      <Card1 item={card} />
      <LubraCard item={lubraDecs} />
      <VideoCard />
      <Card5 item={card5} />
      <Card6 item={card6} />
    </div>
  );
};

export default IndexPage;
