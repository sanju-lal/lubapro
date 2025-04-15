import React from "react";

import Products1 from "../../../components/pages/landing/Products1";
import Cards from "../../../components/pages/landing/Cards";

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

const IndexPage = () => {
  return (
    <div>
      <Products1 item={card} />
      <Cards items={cardData} />
    </div>
  );
};

export default IndexPage;
