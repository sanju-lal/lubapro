import React from "react";

import Products1 from "../../../components/pages/landing/Products1";
import WhyChooseLubapro from "../../../components/pages/landing/WhyChooseLubapro";
import Cards from "../../../components/pages/landing/Cards";
import ManufacturingSuite from "../../../components/pages/landing/ManufacturingSuite";
import CardCarousel from "../../../components/pages/landing/imageCard";

const cardData = [
  {
    title: "Anytime, Anywhere Access",
    description:
      "Access critical business data anytime, anywhere, on any device.",
  },
  {
    title: "End-to-End Production Control",
    description:
      "Gain full control over your production process from planning to delivery.",
  },
  {
    title: "Multi-Mode Manufacturing Support",
    description:
      "Support both discrete and process manufacturing within a single system.",
  },
  {
    title: "Automated Orders & Procurement",
    description:
      "Automate order management and streamline your procurement operations.",
  },
  {
    title: "Real-Time Visibility",
    description:
      "Get real-time insights across every department to make faster, smarter decisions.",
  },
];

const card = {
  titleBefore: "STREAMLINE YOUR",
  highlight: "MANUFACTURING",
  titleAfter: "",
  para: [
    "Manage production, planning, and costs — for any manufacturing mode — with Lubapro.",
  ],
  image: "/assets/product-page1.jpeg",
};

const cardDatas = [
  {
    image: "/assets/sliderimg01.jpeg",
    titleBefore: "Comprehensive ERP for Discrete and ",
    highlight: "process",
    titleAfter: " Manufacturing",
    para: [
      "Lubapro offers a powerful, all-in-one ERP platform built for manufacturers that need both depth and flexibility. It delivers a full suite of integrated tools for production, estimating, engineering, material planning, scheduling, and product configuration — whether you operate in discrete or batch process environments.",
      "Beyond manufacturing, Lubapro’s unique breadth includes built-in modules for document management, CRM, project accounting, expense tracking, payroll, commerce, and field service — giving you a complete business solution without the need for third-party integrations.",
    ],
  },
  {
    image: "/assets/working-car.jpeg",
    titleBefore: "Scale Smarter with Lubapro’s Secure,",
    highlight: " Cloud-Native ",
    titleAfter: "ERP",
    para: [
      "Grow and adapt with Lubapro’s scalable, future-ready cloud platform, designed to support your business today and tomorrow. Embrace modern technologies like cloud computing, advanced analytics, IoT, robotics, AR/VR, and additive manufacturing to streamline operations and gain deep insights into your manufacturing performance.",
      "Integrate with ease using enterprise-grade security and flexible REST or SOAP APIs, connecting Lubapro with systems like MES, EDI, CAD/PLM, POS, rental platforms, and more — ensuring your entire ecosystem works together seamlessly.",
    ],
  },
  {
    image: "/assets/working-man.jpeg",
    titleBefore: "Streamline",
    highlight: " Manufacturing ",
    titleAfter: "for a Competitive Edge",
    para: [
      "Grow and adapt with Lubapro’s scalable, future-ready cloud platform, designed to support your business today and tomorrow. Embrace modern technologies like cloud computing, advanced analytics, IoT, robotics, AR/VR, and additive manufacturing to streamline operations and gain deep insights into your manufacturing performance.",
      "Integrate with ease using enterprise-grade security and flexible REST or SOAP APIs, connecting Lubapro with systems like MES, EDI, CAD/PLM, POS, rental platforms, and more — ensuring your entire ecosystem works together seamlessly.",
    ],
  },
];
const IndexPage = () => {
  return (
    <div>
      <Products1 item={card} />
      <Cards items={cardData} />
      <CardCarousel cardItems={cardDatas} />
      <ManufacturingSuite />
      <WhyChooseLubapro />
    </div>
  );
};

export default IndexPage;
