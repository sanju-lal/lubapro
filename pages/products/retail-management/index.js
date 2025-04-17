import React from "react";

import Products1 from "../../../components/pages/landing/Products1";
import WhyChooseLubapro from "../../../components/pages/landing/WhyChooseLubapro";
import Cards from "../../../components/pages/landing/Cards";
import ManufacturingSuite from "../../../components/pages/landing/ManufacturingSuite";
import CardCarousel from "../../../components/pages/landing/imageCard";

const cardData = [
  {
    title: "Omnichannel Experience",
    description:
      "Deliver consistent service across all sales channels.",
  },
  {
    title: "REAL - TIME Updates",
    description:
      "Access accurate, real -time data from one platform.",
  },
  {
    title: "World - Class eCommerce",
    description:
      "Powerful tools to enhance your online retail presence.",
  },
  {
    title: "Faster Order Fulfillment",
    description:
      "Process, manage, and ship customer orders quickly, accurately, and efficiently.",
  },
  {
    title: "Easy Returns & Exchanges",
    description:
      "Simplify returns and exchanges through fast, automated post-sale workflows.",
  },
  {
    title: "POS & Web Store Integration",
    description:
        "Connect POS, inventory, and web stores for seamless retail operations.",
  },
];

const card = {
  titleBefore: "SMART ERP FOR  ",
  highlight: "MODERN",
  titleAfter: "RETAIL",
  para: [
    "Deliver a seamless customer experience with Lubapro—integrating online, mobile, kiosk, and in-store channels.",
  ],
  image: "/assets/product-page1.jpeg",
};

const cardDatas = [
  {
    image: "/assets/sliderimg01.jpeg",
    titleBefore: "Drive Business Growth with",
    highlight: "Omnichannel",
    titleAfter: " Agility",
    para: [
      "Gain a competitive edge with real-time insights on orders, financials, and cash flow through Lubapro's tailored ERP solutions.",
      "Drive revenue by managing the entire customer journey with a unified platform that provides complete customer data.",
      "Increase sales with comprehensive inventory management, robust accounting, embedded compliance, warehouse management, and seamless omnichannel integrations—all powered by Lubapro.",
    ],
  },
  {
    image: "/assets/working-car.jpeg",
    titleBefore: "Seamless  ",
    highlight: " Integration",
    titleAfter: "and Market Expansion with Lubapro",
    para: [
      "Lubapro’s omnichannel retail platform is designed for flexibility, enabling seamless integration across various sales channels, ensuring smooth operations and enhanced customer experiences.",
      "Expand into new markets with B2C, B2B, and DTC sales, while leveraging POS solutions to give customers flexible buying options.",
    ],
  },
  {
    image: "/assets/working-man.jpeg",
    titleBefore: "Enhance ",
    highlight: " Experience ",
    titleAfter: " & Automate Operations",
    para: [
      "Delight your customers with personalized cross-sell and upsell strategies, seamlessly implemented across online, phone, and in-store channels.",
      "Simplify operations with AI and machine learning, automating accounts payable, platform reconciliation, and returns management.",
    ],
  },
];
const features = [
  "Accounting Integration",
  "Automated VAT Integration",
  "Credit Sales Management",
  "Inventory",
  "Automated Sales Logging",
  "Operator Management",
  "Product-wise Pricing",
];
const testimonials = [
  {
    name: "Anjali Verma",
    title: "Marketing Executive",
    stars: 3,
    text: "Good effort, but there's room for improvement in performance speed.",
    img: "/assets/anjali.jpg", // Replace with actual image paths
  },
  {
    name: "Deepak Raj",
    title: "Operations Manager",
    stars: 4,
    text: "A strong product with minor glitches, but support is responsive.",
    img: "/assets/deepak.jpg", // Replace with actual image paths
  },
];
const IndexPage = () => {
  return (
    <div>
      <Products1 item={card} />
      <Cards items={cardData} />
      <CardCarousel cardItems={cardDatas} />
      <ManufacturingSuite features={features}
                          title = "Lubapro"
                          highlight = "Smart"
                          subtitle = "Retail Suite "/>
      <WhyChooseLubapro testimonials={testimonials}/>
    </div>
  );
};

export default IndexPage;
